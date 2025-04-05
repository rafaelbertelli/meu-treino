"use client";

import { useAuth } from "@/components/SupabaseProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("AuthGuard - Effect running", {
      hasSession: !!session,
      loading,
    });

    // Se não estiver carregando e não tiver sessão, redirecionar para o login
    if (!loading && !session) {
      console.log("AuthGuard - Redirecionando para login (sem sessão)");
      router.push("/login");
      router.refresh();
    } else if (!loading && session) {
      console.log("AuthGuard - Sessão encontrada", {
        user: session.user.email,
        expires: session.expires_at,
      });
    }
  }, [session, loading, router]);

  // Se estiver carregando ou não tiver sessão, não renderizar as crianças
  if (loading) {
    console.log("AuthGuard - Estado de carregamento");
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse">Carregando...</div>
      </div>
    );
  }

  if (!session) {
    console.log("AuthGuard - Sem sessão, não renderizando conteúdo");
    return null; // Não renderiza nada enquanto redireciona
  }

  // Se tiver sessão, renderiza as crianças
  console.log("AuthGuard - Renderizando conteúdo protegido");
  return <>{children}</>;
}
