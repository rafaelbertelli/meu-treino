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
  sessions: number;
  startDate: string;
  notes: string;
}

export interface Workout {
  id: string;
  name: string;
  creationDate: string;
  workout: WorkoutGroup[];
  workoutConfig: WorkoutConfig;
}

export interface WorkoutStoreItem {
  id: string;
  workoutId: string;
  workoutConfig: WorkoutConfig;
  isActive: boolean;
  isCompleted: boolean;
  currentSession: number;
}
