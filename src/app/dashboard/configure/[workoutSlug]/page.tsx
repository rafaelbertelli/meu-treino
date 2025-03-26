"use client";

import { ConfigureWorkoutForm } from "@/components/ConfigureWorkout/ConfigureWorkoutForm";
import { useParams } from "next/navigation";

export default function ConfigureWorkout() {
  const { workoutSlug } = useParams();
  return <ConfigureWorkoutForm workoutSlug={workoutSlug as string} />;
}
