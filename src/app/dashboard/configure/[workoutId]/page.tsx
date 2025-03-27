"use client";

import { ConfigureWorkoutForm } from "@/components/ConfigureWorkout/ConfigureWorkoutForm";
import { useParams } from "next/navigation";

export default function ConfigureWorkout() {
  const { workoutId } = useParams();
  return <ConfigureWorkoutForm workoutId={workoutId as string} />;
}
