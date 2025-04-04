import { supabase } from "./client";

async function testConnection() {
  try {
    // Fazer uma consulta simples para testar a conexão
    const { error } = await supabase.from("_dummy_query").select("*").limit(1);

    if (error) {
      console.error("Erro de conexão:", error.message);
      return false;
    }

    console.log("Conexão com Supabase estabelecida com sucesso!");
    console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
    return true;
  } catch (err) {
    console.error("Erro ao testar conexão:", err);
    return false;
  }
}

export { testConnection };
