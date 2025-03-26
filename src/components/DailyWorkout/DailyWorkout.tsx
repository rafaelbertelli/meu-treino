import Link from "next/link";
import { Container } from "../ui/Container/Container";
import { Header } from "../ui/Header/Header";
import styles from "./DailyWorkout.module.css";

export function DailyWorkout() {
  return (
    <Container>
      <Header title="Treino de Hoje" />

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
    </Container>
  );
}
