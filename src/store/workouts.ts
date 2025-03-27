import { WorkoutStoreItem } from "@/types/workout.types";
import { STORAGE_KEYS } from "./constants";
import { storage } from "./storage";

export const workoutsStore = {
  /**
   * Get all stored workouts
   */
  getAll: (): WorkoutStoreItem[] => {
    return storage.get<WorkoutStoreItem[]>(STORAGE_KEYS.WORKOUTS) || [];
  },

  /**
   * Get a specific workout by id
   */
  getById: (id: number): WorkoutStoreItem | null => {
    const workouts = workoutsStore.getAll();
    return workouts.find((workout) => workout.id === id) || null;
  },

  /**
   * Save or update a workout
   */
  save: (workout: WorkoutStoreItem): void => {
    const workouts = workoutsStore.getAll();
    const existingIndex = workouts.findIndex((w) => w.id === workout.id);

    if (existingIndex >= 0) {
      // Update existing workout
      workouts[existingIndex] = workout;
    } else {
      // Add new workout
      workouts.push(workout);
    }

    storage.set(STORAGE_KEYS.WORKOUTS, workouts);
  },

  /**
   * Remove a workout by id
   */
  remove: (id: number): void => {
    const workouts = workoutsStore.getAll();
    const filteredWorkouts = workouts.filter((workout) => workout.id !== id);
    storage.set(STORAGE_KEYS.WORKOUTS, filteredWorkouts);
  },

  /**
   * Clear all workouts
   */
  clear: (): void => {
    storage.remove(STORAGE_KEYS.WORKOUTS);
  },
};
