import { WorkoutConfig } from "./workout.types";

interface UserWorkoutConfig {
  workoutId: string;
  workoutConfig: WorkoutConfig;
  isActive: boolean;
  isCompleted: boolean;
  currentSession: number;
}

export interface UserWorkout {
  id: string;
  userId: string;
  workoutId: string;
  createdAt: string;
  updatedAt: string;
  currentWorkout: UserWorkoutConfig;
  historyWorkout: UserWorkoutConfig[];
}
