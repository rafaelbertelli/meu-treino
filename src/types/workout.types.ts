export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  interval: string;
  group: string;
  observations?: string;
}

export interface WorkoutGroup {
  name: string;
  description: string;
  exercises: Exercise[];
  estimatedDuration: string;
}

export interface WorkoutConfig {
  sessions: number | null;
  startDate: string;
  endDate?: string;
  notes: string;
}

export interface Workout {
  id: string;
  name: string;
  creationDate: string;
  workoutGroup: WorkoutGroup[];
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
