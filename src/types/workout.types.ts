export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  interval?: string;
  group?: string;
  observations?: string;
}

export interface WorkoutGroup {
  name: string;
  description: string;
  exercises: Exercise[];
  estimatedDuration: string;
}

export interface WorkoutConfig {
  sessions: string;
  startDate: string;
  notes: string;
}

export interface Workout {
  id: number;
  name: string;
  creationDate: string;
  workout: WorkoutGroup[];
  workoutConfig: WorkoutConfig;
}
