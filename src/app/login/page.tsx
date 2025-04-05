"use client";

import { Button } from "@/components/ui/button/Button/Button";
import { supabase } from "@/lib/supabase/client";
import { AuthError } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./login.module.css";

// Função de log para o cliente
function clientLog(message: string, data?: unknown) {
  console.log(`[CLIENT] ${message}`, data);
  // Enviar log para o servidor via fetch para registrar em arquivo
  try {
    fetch("/api/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, data }),
    });
  } catch (error) {
    console.error("Failed to send log to server", error);
  }
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Verificar estado inicial da sessão
  useEffect(() => {
    async function checkSession() {
      const { data } = await supabase.auth.getSession();
      clientLog("Initial session check", { hasSession: !!data.session });
    }

    checkSession();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    clientLog("Login attempt", { email });

    try {
      // Tenta fazer login
      debugger;
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        clientLog("Login error", { error: error.message });
        throw error;
      }

      if (!data.session) {
        clientLog("No session after login");
        throw new Error("Falha ao criar sessão");
      }

      clientLog("Login successful", {
        session: !!data.session,
        user: data.user?.email,
        sessionExpires: data.session?.expires_at,
      });

      // Forçar refresh da sessão para garantir cookies
      const refreshResult = await supabase.auth.refreshSession();
      clientLog("Session refresh result", {
        success: !!refreshResult.data.session,
      });

      // Redireciona para o dashboard
      clientLog("Redirecting to dashboard");
      router.push("/dashboard");
      router.refresh();
    } catch (error: unknown) {
      console.error("Login error:", error);
      const authError = error as AuthError;
      setError(authError.message || "Falha ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
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
  );
}
