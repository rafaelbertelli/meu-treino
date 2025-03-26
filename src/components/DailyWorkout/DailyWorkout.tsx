import Link from "next/link";
import styles from "./DailyWorkout.module.css";

export function DailyWorkout() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Treino de Hoje</h1>

      <Link href="/dashboard" className={styles.manageButton}>
        Gerenciar Treinos
      </Link>

      <div className={styles.workoutCard}>
        <h2 className={styles.subtitle}>Seu treino para hoje</h2>
        <div className={styles.content}>
          <p className={styles.placeholder}>
            Conteúdo será implementado em breve...
          </p>
        </div>
      </div>

      <div className={styles.actionButtons}>
        <button className={styles.skipButton}>Pular Hoje</button>
        <button className={styles.startButton}>Começar Treino</button>
      </div>
    </div>
  );
}
