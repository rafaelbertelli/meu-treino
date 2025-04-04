import { supabase } from "./client";
import { createServerSupabaseClient } from "./server";

// Interface para o tipo de exercício
export interface Exercise {
  id?: string;
  name: string;
  description?: string;
  user_id: string;
  sets?: number;
  reps?: number;
  weight?: number;
  created_at?: string;
}

// Exemplo de consulta no cliente
export async function fetchUserExercises(userId: string) {
  const { data, error } = await supabase
    .from("exercises")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.error("Error fetching exercises:", error);
    return null;
  }

  return data;
}

// Exemplo de uso no servidor
export async function createExerciseOnServer(exerciseData: Exercise) {
  const supabaseServer = createServerSupabaseClient();

  const { data, error } = await supabaseServer
    .from("exercises")
    .insert(exerciseData)
    .select()
    .single();

  if (error) {
    console.error("Error creating exercise:", error);
    throw new Error("Failed to create exercise");
  }

  return data;
}
