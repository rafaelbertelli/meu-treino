"use client";

import { workouts } from "@/data/workouts";
import Link from "next/link";
import { FormEvent } from "react";

import { formatDateToInputValue, formatDateToISOString } from "@/lib/date";
import { generateId } from "@/lib/id/id";
import { workoutsStore } from "@/store/workouts";
import { Button } from "../ui/button/Button/Button";
import { ButtonGroup } from "../ui/button/ButtonGroup/ButtonGroup";
import { Container } from "../ui/Container/Container";
import { Header } from "../ui/Header/Header";
import styles from "./ConfigureWorkoutForm.module.css";
interface ConfigureWorkoutFormProps {
  workoutId: string;
}

export function ConfigureWorkoutForm({ workoutId }: ConfigureWorkoutFormProps) {
  // Find workout based on id
  const workout = workouts.find((w) => w.id === workoutId);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const formValues = {
      sessions: formData.get("sessions") as string,
      startDate: formatDateToISOString(formData.get("startDate") as string),
      notes: formData.get("notes") as string,
    };

    if (!workout) return;

    // Save workout to localStorage
    workoutsStore.save({
      id: generateId(),
      workoutId: workoutId,
      workoutConfig: formValues,
      isActive: true,
      isCompleted: false,
    });

    // Redirect to dashboard or show success message
    window.location.href = `/dashboard?success=true&message=Treino configurado com sucesso!`;
  };

  if (!workout) {
    return (
      <Container>
        <Header title="Treino não encontrado" />
        <ButtonGroup>
          <Button variant="primary">
            <Link
              href={{
                pathname: "/dashboard",
                query: { error: "Treino não encontrado" },
              }}
            >
              Voltar para Dashboard
            </Link>
          </Button>
        </ButtonGroup>
      </Container>
    );
  }

  return (
    <Container>
      <Header title="Configurar Treino" subtitle={workout.name} />

      <div className={styles.card}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="sessions" className={styles.label}>
              Número de Sessões
            </label>
            <input
              type="number"
              id="sessions"
              name="sessions"
              min="1"
              className={styles.input}
              placeholder="Ex: 30"
              defaultValue={workout.workoutConfig.sessions}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="startDate" className={styles.label}>
              Data de Início
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className={styles.input}
              defaultValue={formatDateToInputValue(
                workout.workoutConfig.startDate
              )}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="notes" className={styles.label}>
              Observações
            </label>
            <textarea
              id="notes"
              name="notes"
              className={styles.textarea}
              placeholder="Adicione observações sobre o treino..."
              rows={4}
              defaultValue={workout.workoutConfig.notes}
            />
          </div>

          <ButtonGroup>
            <Button type="submit" variant="primary">
              Salvar Configuração
            </Button>
          </ButtonGroup>
        </form>
      </div>

      <ButtonGroup>
        <Button variant="lightGray">
          <Link
            href="/dashboard"
            prefetch={false}
            replace={true}
            scroll={false}
            className={styles.link}
          >
            Voltar para Dashboard
          </Link>
        </Button>
      </ButtonGroup>
    </Container>
  );
}
