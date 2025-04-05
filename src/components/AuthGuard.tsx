"use client";

import { useAuth } from "@/components/SupabaseProvider";
import { ROUTE } from "@/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Se não estiver carregando e não tiver sessão, redirecionar para o login
    if (!loading && !session) {
      router.replace(ROUTE.LOGIN);
    }
  }, [session, loading, router]);

  // Se estiver carregando, mostra indicador
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse">Carregando...</div>
      </div>
    );
  }

  // Se não tiver sessão, não renderiza nada enquanto redireciona
  if (!session) {
    return null;
  }

  // Se tiver sessão, renderiza as crianças
  return <>{children}</>;
}
