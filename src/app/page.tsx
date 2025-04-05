"use client";

import { Button } from "@/components/ui/button/Button/Button";
import { supabase } from "@/lib/supabase/client";
import { APP_ROUTES } from "@/routes/app-routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Verificar se o usuário já está autenticado ao carregar a página
  useEffect(() => {
    async function checkAuth() {
      try {
        // Usa getUser para verificar a autenticação com o servidor Supabase
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (user) {
          // Redireciona usuários logados para página de treino do dia
          router.push(APP_ROUTES.HOME);
          return;
        }
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
      } finally {
        // Quando terminar a verificação, remove o estado de carregamento
        setLoading(false);
      }
    }

    checkAuth();
  }, [router]);

  // Se estiver verificando a autenticação, mostra indicador de carregamento
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse">Verificando autenticação...</div>
      </div>
    );
  }

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
