"use client";

import { supabase } from "@/lib/supabase/client";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Função para verificar e atualizar a sessão
    async function getSession() {
      try {
        setLoading(true);
        console.log("Provider - Obtendo sessão");
        const { data } = await supabase.auth.getSession();
        console.log("Provider - Resultado da sessão", {
          hasSession: !!data.session,
        });
        setSession(data.session);
      } catch (error) {
        console.error("Provider - Erro ao obter sessão", error);
      } finally {
        setLoading(false);
      }
    }

    // Verificar a sessão ao montar o componente
    getSession();

    // Configurar um listener para mudanças na autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Provider - Estado de autenticação alterado", {
        event: _event,
        hasSession: !!session,
      });
      setSession(session);
      router.refresh();
    });

    // Limpar o listener ao desmontar
    return () => {
      console.log(
        "Provider - Cancelando inscrição de mudanças de autenticação"
      );
      subscription.unsubscribe();
    };
  }, [router]);

  // Função para deslogar
  const signOut = async () => {
    try {
      console.log("Provider - Fazendo logout");
      await supabase.auth.signOut();
      setSession(null);
      router.push("/login");
      router.refresh();
      console.log("Provider - Logout concluído");
    } catch (error) {
      console.error("Provider - Erro ao fazer logout", error);
    }
  };

  return (
    <AuthContext.Provider value={{ session, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a SupabaseProvider");
  }
  return context;
}
