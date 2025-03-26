import Link from "next/link";
import { Button } from "../ui/button/Button/Button";
import { ButtonGroup } from "../ui/button/ButtonGroup/ButtonGroup";
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

      <ButtonGroup fixed>
        <Button variant="lightGray">Pular Hoje</Button>
        <Button variant="green">Começar</Button>
      </ButtonGroup>
    </Container>
  );
}
