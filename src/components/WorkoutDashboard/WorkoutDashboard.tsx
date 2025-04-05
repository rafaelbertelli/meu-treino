"use client";

import { workouts } from "@/data/workouts";
import Link from "next/link";

import { formatDateToLocaleBrazil } from "@/lib/date";
import { APP_ROUTES } from "@/routes/app-routes";
import { STORAGE_KEYS } from "@/store/constants";
import { storage } from "@/store/storage";
import { WorkoutStoreItem } from "@/types/workout.types";
import { useEffect, useState } from "react";
import { Button } from "../ui/button/Button/Button";
import { ButtonGroup } from "../ui/button/ButtonGroup/ButtonGroup";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card/card";
import styles from "./WorkoutDashboard.module.css";

export function WorkoutDashboard() {
  const [activeWorkoutId, setActiveWorkoutId] = useState<string>();

  useEffect(() => {
    const storedWorkouts = storage.get<WorkoutStoreItem[]>(
      STORAGE_KEYS.WORKOUTS
    );

    if (storedWorkouts) {
      const activeWorkout = storedWorkouts.find((w) => w.isActive);
      setActiveWorkoutId(activeWorkout?.id);
    }
  }, []);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Treinos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className={styles.workoutList}>
            {workouts.map((workout) => {
              const isActive = activeWorkoutId === workout.id;

              return (
                <div
                  key={workout.name}
                  className={`${styles.workoutItem} ${
                    isActive ? styles.activeWorkout : ""
                  }`}
                >
                  <div className={styles.workoutHeader}>
                    <h3 className={styles.workoutName}>
                      {workout.name}
                      {isActive && (
                        <span className={styles.activeTag}>Ativo</span>
                      )}
                    </h3>
                    <span className={styles.workoutDate}>
                      Criado em:{" "}
                      {formatDateToLocaleBrazil(workout.creationDate)}
                    </span>
                  </div>
                  <div className={styles.workoutGroups}>
                    {workout.workoutGroup.map((group) => (
                      <div key={group.name} className={styles.workoutGroup}>
                        <strong>{group.name}</strong>
                        <span className={styles.workoutDescription}>
                          {group.description}
                        </span>
                        <span className={styles.workoutDuration}>
                          Duração: {group.estimatedDuration}
                        </span>
                      </div>
                    ))}
                  </div>
                  <ButtonGroup>
                    <Button asChild variant={isActive ? "default" : "outline"}>
                      <Link href={`${APP_ROUTES.CONFIGURE}/${workout.id}`}>
                        {isActive
                          ? "Editar treino em uso"
                          : "Configurar este treino"}
                      </Link>
                    </Button>
                  </ButtonGroup>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <ButtonGroup>
        <Button asChild variant="outline">
          <Link href={APP_ROUTES.HOME}>Voltar para Home</Link>
        </Button>
      </ButtonGroup>
    </>
  );
}
