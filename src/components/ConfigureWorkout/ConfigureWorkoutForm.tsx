"use client";

import { workouts } from "@/data/workouts";
import Link from "next/link";
import { Container } from "../ui/Container/Container";
import { Header } from "../ui/Header/Header";
import styles from "./ConfigureWorkoutForm.module.css";

interface ConfigureWorkoutFormProps {
  workoutSlug: string;
}

export function ConfigureWorkoutForm({
  workoutSlug,
}: ConfigureWorkoutFormProps) {
  // Find workout based on slug
  const workout = workouts.find(
    (w) =>
      w.name
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-") === workoutSlug
  );

  if (!workout) {
    return (
      <Container>
        <Header title="Treino não encontrado" />
        <Link href="/dashboard" className={styles.backLink}>
          Voltar para Dashboard
        </Link>
      </Container>
    );
  }

  return (
    <Container>
      <Header title="Configurar Treino" subtitle={workout.name} />

      <div className={styles.card}>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="sessions" className={styles.label}>
              Número de Sessões
            </label>
            <input
              type="number"
              id="sessions"
              min="1"
              className={styles.input}
              placeholder="Ex: 12"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="startDate" className={styles.label}>
              Data de Início
            </label>
            <input type="date" id="startDate" className={styles.input} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="notes" className={styles.label}>
              Observações
            </label>
            <textarea
              id="notes"
              className={styles.textarea}
              placeholder="Adicione observações sobre o treino..."
              rows={4}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Salvar Configuração
          </button>
        </form>
      </div>

      <div className={styles.backButton}>
        <Link href="/dashboard" className={styles.backLink}>
          Voltar para Dashboard
        </Link>
      </div>
    </Container>
  );
}
