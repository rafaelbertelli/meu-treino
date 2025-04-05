"use client";

import { Button } from "@/components/ui/button/Button/Button";
import { APP_ROUTES } from "@/routes/app-routes";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <h1 className={styles.title}>Meu Treino</h1>
        <p className={styles.subtitle}>
          Acompanhe seus treinos e evoluções físicas
        </p>

        <div className={styles.buttonContainer}>
          <Button asChild variant="default">
            <Link href={APP_ROUTES.LOGIN}>Entrar</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
