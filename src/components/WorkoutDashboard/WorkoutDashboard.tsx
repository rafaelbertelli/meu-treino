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
          {/* Aqui será implementada a lista de treinos cadastrados */}
          <p className={styles.placeholderText}>
            Lista de treinos será implementada em breve...
          </p>
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
