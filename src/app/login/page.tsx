"use client";

import { Button } from "@/components/ui/button/Button/Button";
import { supabase } from "@/lib/supabase/client";
import { APP_ROUTES } from "@/routes/app-routes";
import { AuthError } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true); // Começa como true para verificar autenticação
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function checkAuth() {
      try {
        // Usa getUser para verificar a autenticação com o servidor Supabase
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (user) {
          // Se o usuário estiver autenticado, redireciona para a home (treino do dia)
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

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Tenta fazer login
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      if (!data.session) {
        throw new Error("Falha ao criar sessão");
      }

      // Redireciona para a home (treino do dia)
      router.push(APP_ROUTES.HOME);
      router.refresh();
    } catch (error: unknown) {
      console.error("Erro de login:", error);
      const authError = error as AuthError;
      setError(authError.message || "Falha ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  // Se estiver verificando a autenticação, mostra indicador de carregamento
  if (loading && !error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse">Verificando autenticação...</div>
      </div>
    );
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginContent}>
          <h1 className={styles.loginTitle}>Meu Treino</h1>
          <h2 className={styles.loginSubtitle}>Faça login para continuar</h2>

          {error && <div className={styles.errorMessage}>{error}</div>}

          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
                disabled={loading}
                placeholder="seu-email@exemplo.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
                disabled={loading}
                placeholder="Sua senha"
              />
            </div>

            <Button
              type="submit"
              variant="default"
              className={styles.loginButton}
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
