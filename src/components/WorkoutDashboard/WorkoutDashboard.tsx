import { workouts } from "@/data/workouts";
import Link from "next/link";
import styles from "./WorkoutDashboard.module.css";

export function WorkoutDashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Gerenciar Treinos</h1>
      </div>

      <div className={styles.card}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Criar Novo Treino</h2>
          <button className={`${styles.button} ${styles.buttonGreen}`}>
            <span className={styles.buttonText}>Adicionar Treino</span>
          </button>
        </div>

        <div>
          <h2 className={styles.sectionTitle}>Seus Treinos</h2>
          <div className={styles.workoutList}>
            {workouts.map((workout) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.backButton}>
        <Link href="/" className={styles.backButtonLink}>
          <span>Voltar ao Treino</span>
        </Link>
      </div>
    </div>
  );
}
