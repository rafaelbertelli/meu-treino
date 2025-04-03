"use client";

import { workouts } from "@/data/workouts";
import Link from "next/link";
import { FormEvent } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion/accordion";
import { formatDateToInputValue, formatDateToISOString } from "@/lib/date";
import { workoutsStore } from "@/store/workouts";
import { Button } from "../ui/button/Button/Button";
import { ButtonGroup } from "../ui/button/ButtonGroup/ButtonGroup";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card/card";
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
      sessions: Number(formData.get("sessions")),
      startDate: formatDateToISOString(formData.get("startDate") as string),
      notes: formData.get("notes") as string,
    };

    if (!workout) return;

    // verificar se o treino está ativos no localStorage
    const activeWorkout = workoutsStore
      .getAll()
      .find((w) => w.workoutId === workoutId && w.isActive);
    if (activeWorkout) {
      console.log("treino ativo");
      // se tiver treino ativo, subir uma modal de confirmação
      // se confirmar, atualizar o treino
      // se não confirmar, cancelar a operação
    }

    // Save workout to localStorage
    workoutsStore.save({
      id: workoutId, // TODO: Add current workout id
      workoutId: workoutId,
      workoutConfig: formValues,
      isActive: true,
      isCompleted: false,
      currentSession: 0, // TODO: Add current session
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
    <Card>
      <CardHeader>
        <CardTitle>Configurar Treino</CardTitle>
        <CardDescription>{workout.name}</CardDescription>
      </CardHeader>

      <CardContent>
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

          <div className={styles.workoutPreview}>
            <h3 className={styles.workoutPreviewTitle}>Treino</h3>

            <Accordion
              type="single"
              collapsible
              className={styles.workoutAccordion}
            >
              {workout.workoutGroup.map((group, groupIndex) => (
                <AccordionItem
                  key={groupIndex}
                  value={`group-${groupIndex}`}
                  className={styles.workoutAccordionItem}
                >
                  <AccordionTrigger className={styles.workoutAccordionTrigger}>
                    {group.name}
                  </AccordionTrigger>
                  <AccordionContent className={styles.workoutAccordionContent}>
                    <div className={styles.exerciseList}>
                      {group.exercises.map((exercise, exerciseIndex) => (
                        <div key={exerciseIndex}>
                          <div className={styles.exercise}>
                            <div className={styles.exerciseContent}>
                              <div className={styles.exerciseNameWrapper}>
                                <span className={styles.exerciseName}>
                                  {exercise.name}
                                </span>
                                <span className={styles.exerciseGroup}>
                                  {exercise.group || group.name}
                                </span>
                              </div>

                              <div className={styles.exerciseMetrics}>
                                <div className={styles.metricItem}>
                                  <span className={styles.metricLabel}>
                                    SÉRIES
                                  </span>
                                  <span className={styles.metricValue}>
                                    {exercise.sets}
                                  </span>
                                </div>
                                <div className={styles.metricItem}>
                                  <span className={styles.metricLabel}>
                                    REPS
                                  </span>
                                  <span className={styles.metricValue}>
                                    {exercise.reps}
                                  </span>
                                </div>
                                {exercise.interval && (
                                  <div className={styles.metricItem}>
                                    <span className={styles.metricLabel}>
                                      DESCANSO
                                    </span>
                                    <span className={styles.metricValue}>
                                      {exercise.interval}s
                                    </span>
                                  </div>
                                )}
                              </div>

                              {exercise.observations && (
                                <div className={styles.exerciseObservations}>
                                  <svg
                                    className={styles.infoIcon}
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4" />
                                    <path d="M12 8h.01" />
                                  </svg>
                                  <span className={styles.observationText}>
                                    {exercise.observations}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          {exerciseIndex < group.exercises.length - 1 && (
                            <div className={styles.exerciseDivider} />
                          )}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <ButtonGroup>
            <Button type="submit" variant="primary">
              Usar este treino
            </Button>
          </ButtonGroup>
        </form>
      </CardContent>

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
    </Card>
  );
}
