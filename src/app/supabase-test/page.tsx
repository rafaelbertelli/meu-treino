"use client";

import { supabase } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export default function SupabaseTestPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    async function checkConnection() {
      try {
        // Testar conexão com Supabase usando o Auth que sempre existe
        const { error } = await supabase.auth.getSession();

        if (error) {
          setStatus("error");
          setErrorMessage(error.message);
          return;
        }

        // Se chegou aqui, a conexão foi estabelecida com sucesso
        setStatus("success");
      } catch (err) {
        setStatus("error");
        setErrorMessage(
          err instanceof Error ? err.message : "Erro desconhecido"
        );
      }
    }

    checkConnection();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Teste de Conexão com Supabase</h1>

      {status === "loading" && (
        <div className="text-blue-500">Testando conexão...</div>
      )}

      {status === "success" && (
        <div className="text-green-500">
          ✅ Conexão com Supabase estabelecida com sucesso!
          <p className="mt-2 text-sm">
            URL: {process.env.NEXT_PUBLIC_SUPABASE_URL}
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="text-red-500">
          ❌ Erro ao conectar com Supabase:
          <p className="mt-2 text-sm">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
