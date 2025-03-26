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
  estimated_duration: string;
}

export interface Workout {
  name: string;
  creation_date: string;
  workout: WorkoutGroup[];
}

export const workouts: Workout[] = [
  {
    name: "Treino UP-SET",
    creation_date: "2024-03-26",
    workout: [
      {
        name: "Série A",
        description: "Treino de Peito, Tríceps e Abdômen",
        estimated_duration: "45:00",
        exercises: [
          {
            name: "Supino Reto - Barra",
            sets: 3,
            reps: 12,
            interval: "60",
            group: "peito",
          },
          {
            name: "Supino Inclinado - Halteres",
            sets: 3,
            reps: 12,
            interval: "60",
            group: "peito",
          },
          {
            name: "Peck Deck ou Crucifixo Máquina",
            sets: 3,
            reps: 12,
            interval: "60",
            group: "peito",
            observations: "8-5-3-1 UP-SET",
          },
          {
            name: "Tríceps Coice",
            sets: 3,
            reps: 12,
            interval: "60",
            group: "triceps",
          },
          {
            name: "Tríceps Francês Unilateral",
            sets: 3,
            reps: 12,
            interval: "60",
            group: "triceps",
          },
          {
            name: "Tríceps Pulley",
            sets: 3,
            reps: 12,
            interval: "60",
            group: "triceps",
            observations: "8-5-3-1 UP-SET",
          },
          {
            name: "Abdominal Canivete",
            sets: 4,
            reps: 15,
            interval: "30",
            group: "abd",
          },
          {
            name: "Abdominal Pé-a-Pé",
            sets: 4,
            reps: 15,
            interval: "30",
            group: "abd",
            observations: "CADA L",
          },
        ],
      },
      {
        name: "Série B",
        description: "Treino de Costas, Bíceps e Panturrilha",
        estimated_duration: "42:00",
        exercises: [
          {
            name: "Puxador Frente - Peg. Prona",
            sets: 3,
            reps: 12,
            interval: "60",
            group: "costas",
          },
          {
            name: "Remada Curva - Aberta/Pron",
            sets: 3,
            reps: 12,
            interval: "60",
            group: "costas",
          },
          {
            name: "Remada Máquina",
            sets: 3,
            reps: 12,
            interval: "60",
            group: "costas",
            observations: "8-5-3-1 UP-SET",
          },
          {
            name: "Rosca Direta - Barra",
            sets: 3,
            reps: 10,
            interval: "60",
            group: "biceps",
          },
          {
            name: "Rosca Martelo - Halteres",
            sets: 3,
            reps: 10,
            interval: "60",
            group: "biceps",
          },
          {
            name: "Rosca Scott Máquina",
            sets: 3,
            reps: 12,
            interval: "60",
            group: "biceps",
            observations: "8-5-3-1 UP-SET",
          },
          {
            name: "Panturrilha Sentada",
            sets: 4,
            reps: 15,
            interval: "30",
            group: "panturrilha",
            observations: '2"PC',
          },
          {
            name: "Panturrilha em Pé (Máq.)",
            sets: 4,
            reps: 15,
            interval: "30",
            group: "panturrilha",
            observations: '2"PC',
          },
        ],
      },
      {
        name: "Série C",
        description: "Treino de Pernas, Ombro e Trapézio",
        estimated_duration: "48:00",
        exercises: [
          {
            name: "Agachamento Barra Livre",
            sets: 2,
            reps: 20,
            interval: "60",
            group: "mmii",
          },
          {
            name: "Leg Press Horizontal",
            sets: 3,
            reps: 12,
            interval: "60",
            group: "mmii",
            observations: "8-5-3-1 UP-SET",
          },
          {
            name: "Cadeira Extensora",
            sets: 3,
            reps: 12,
            interval: "60",
            group: "mmii",
          },
          {
            name: "Cadeira Flexora",
            sets: 3,
            reps: 12,
            interval: "60",
            group: "mmii",
          },
          {
            name: "Stiff Barra",
            sets: 3,
            reps: 15,
            interval: "60",
            group: "mmii",
          },
          {
            name: "Cadeira Abdutora",
            sets: 3,
            reps: 15,
            interval: "30",
            group: "gl",
          },
          {
            name: "Elevação Lateral",
            sets: 3,
            reps: 12,
            interval: "60",
            group: "ombro",
          },
          {
            name: "Desenvolvimento Máquina",
            sets: 3,
            reps: 12,
            interval: "60",
            group: "ombro",
            observations: "8-5-3-1 UP-SET",
          },
          {
            name: "Encolhimento Halteres",
            sets: 3,
            reps: 15,
            interval: "30",
            group: "trap",
          },
        ],
      },
    ],
  },
];
