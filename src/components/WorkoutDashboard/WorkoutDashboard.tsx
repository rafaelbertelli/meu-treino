"use client";

import { workouts } from "@/data/workouts";
import Link from "next/link";

import { Button } from "../ui/button/Button/Button";
import { ButtonGroup } from "../ui/button/ButtonGroup/ButtonGroup";
import { Container } from "../ui/Container/Container";
import { Header } from "../ui/Header/Header";
import styles from "./WorkoutDashboard.module.css";

export function WorkoutDashboard() {
  return (
    <Container>
      <Header title="Gerenciar Treinos" />

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>Seus Treinos</h2>
        <div className={styles.workoutList}>
          {workouts.map((workout) => {
            const slugWorkout = workout.name
              .toLowerCase()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-");

            return (
              <div key={workout.name} className={styles.workoutItem}>
                <div className={styles.workoutHeader}>
                  <h3 className={styles.workoutName}>{workout.name}</h3>
                  <span className={styles.workoutDate}>
                    Criado em:{" "}
                    {new Date(workout.creation_date).toLocaleDateString(
                      "pt-BR"
                    )}
                  </span>
                </div>
                <div className={styles.workoutGroups}>
                  {workout.workout.map((group) => (
                    <div key={group.name} className={styles.workoutGroup}>
                      <strong>{group.name}</strong>
                      <span className={styles.workoutDescription}>
                        {group.description}
                      </span>
                      <span className={styles.workoutDuration}>
                        Duração: {group.estimated_duration}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/dashboard/configure/${slugWorkout}`}
                  className={`${styles.button} ${styles.selectButton}`}
                >
                  <span className={styles.buttonText}>
                    Configurar este treino
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <ButtonGroup>
        <Button variant="lightGray">
          <Link href="/">Home</Link>
        </Button>
      </ButtonGroup>
    </Container>
  );
}
