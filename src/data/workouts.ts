import { Workout } from "@/types/workout.types";

export const workouts: Workout[] = [
  {
    id: "1",
    name: "Treino UP-SET",
    creationDate: "2025-03-26T00:00:00.000Z",
    workoutGroup: [
      {
        name: "Série A",
        description: "Treino de Peito, Tríceps e Abdômen",
        estimatedDuration: "50:00",
        exercises: [
          {
            name: "Supino Reto - Barra",
            sets: "3",
            reps: "12",
            interval: "60",
            group: "peito",
          },
          {
            name: "Supino Inclinado - Halteres",
            sets: "3",
            reps: "12",
            interval: "60",
            group: "peito",
          },
          {
            name: "Peck Deck ou Crucifixo Máquina",
            sets: "3",
            reps: "12",
            interval: "60",
            group: "peito",
            observations: `8-5-3-1 UP-SET
            Execução:
            - Use uma carga para fazer 8 reps e descanse 10 segundos.
            - Use uma carga para fazer 5 reps e descanse 10 segundos.
            - Use uma carga para fazer 3 reps e descanse 10 segundos.
            - Use uma carga para fazer 1 rep.`,
          },
          {
            name: "Tríceps Coice",
            sets: "3",
            reps: "12",
            interval: "60",
            group: "triceps",
          },
          {
            name: "Tríceps Francês Unilateral",
            sets: "3",
            reps: "12",
            interval: "60",
            group: "triceps",
          },
          {
            name: "Tríceps Pulley",
            sets: "3",
            reps: "12",
            interval: "60",
            group: "triceps",
            observations: `8-5-3-1 UP-SET
            Execução:
            - Use uma carga para fazer 8 reps e descanse 10 segundos.
            - Use uma carga para fazer 5 reps e descanse 10 segundos.
            - Use uma carga para fazer 3 reps e descanse 10 segundos.
            - Use uma carga para fazer 1 rep.`,
          },
          {
            name: "Abdominal Canivete",
            sets: "4",
            reps: "15",
            interval: "30",
            group: "abd",
          },
          {
            name: "Abdominal Pé-a-Pé",
            sets: "4",
            reps: "15",
            interval: "30",
            group: "abd",
            observations: "Cada lada",
          },
        ],
      },
      {
        name: "Série B",
        description: "Treino de Costas, Bíceps e Panturrilha",
        estimatedDuration: "50:00",
        exercises: [
          {
            name: "Puxador Frente - Peg. Prona",
            sets: "3",
            reps: "12",
            interval: "60",
            group: "costas",
          },
          {
            name: "Remada Curva - Aberta/Pron",
            sets: "3",
            reps: "12",
            interval: "60",
            group: "costas",
          },
          {
            name: "Remada Máquina",
            sets: "3",
            reps: "12",
            interval: "60",
            group: "costas",
            observations: `8-5-3-1 UP-SET
            Execução:
            - Use uma carga para fazer 8 reps e descanse 10 segundos.
            - Use uma carga para fazer 5 reps e descanse 10 segundos.
            - Use uma carga para fazer 3 reps e descanse 10 segundos.
            - Use uma carga para fazer 1 rep.`,
          },
          {
            name: "Rosca Direta - Barra",
            sets: "3",
            reps: "10",
            interval: "60",
            group: "biceps",
          },
          {
            name: "Rosca Martelo - Halteres",
            sets: "3",
            reps: "10",
            interval: "60",
            group: "biceps",
          },
          {
            name: "Rosca Scott Máquina",
            sets: "3",
            reps: "12",
            interval: "60",
            group: "biceps",
            observations: `8-5-3-1 UP-SET
            Execução:
            - Use uma carga para fazer 8 reps e descanse 10 segundos.
            - Use uma carga para fazer 5 reps e descanse 10 segundos.
            - Use uma carga para fazer 3 reps e descanse 10 segundos.
            - Use uma carga para fazer 1 rep.`,
          },
          {
            name: "Panturrilha Sentada",
            sets: "4",
            reps: "15",
            interval: "30",
            group: "panturrilha",
            observations: '2" Pico de Concentração',
          },
          {
            name: "Panturrilha em Pé (Máq.)",
            sets: "4",
            reps: "15",
            interval: "30",
            group: "panturrilha",
            observations: '2" Pico de Concentração',
          },
        ],
      },
      {
        name: "Série C",
        description: "Treino de Pernas, Ombro e Trapézio",
        estimatedDuration: "55:00",
        exercises: [
          {
            name: "Agachamento Barra Livre",
            sets: "2",
            reps: "20",
            interval: "60",
            group: "mmii",
          },
          {
            name: "Leg Press Horizontal",
            sets: "3",
            reps: "12",
            interval: "60",
            group: "mmii",
            observations: `8-5-3-1 UP-SET
            Execução:
            - Use uma carga para fazer 8 reps e descanse 10 segundos.
            - Use uma carga para fazer 5 reps e descanse 10 segundos.
            - Use uma carga para fazer 3 reps e descanse 10 segundos.
            - Use uma carga para fazer 1 rep.`,
          },
          {
            name: "Cadeira Extensora",
            sets: "3",
            reps: "12",
            interval: "60",
            group: "mmii",
          },
          {
            name: "Cadeira Flexora",
            sets: "3",
            reps: "12",
            interval: "60",
            group: "mmii",
          },
          {
            name: "Stiff Barra",
            sets: "3",
            reps: "15",
            interval: "60",
            group: "mmii",
          },
          {
            name: "Cadeira Abdutora",
            sets: "3",
            reps: "15",
            interval: "30",
            group: "gl",
          },
          {
            name: "Elevação Lateral",
            sets: "3",
            reps: "12",
            interval: "60",
            group: "ombro",
          },
          {
            name: "Desenvolvimento Máquina",
            sets: "3",
            reps: "12",
            interval: "60",
            group: "ombro",
            observations: `8-5-3-1 UP-SET
            Execução:
            - Use uma carga para fazer 8 reps e descanse 10 segundos.
            - Use uma carga para fazer 5 reps e descanse 10 segundos.
            - Use uma carga para fazer 3 reps e descanse 10 segundos.
            - Use uma carga para fazer 1 rep.`,
          },
          {
            name: "Encolhimento Halteres",
            sets: "3",
            reps: "15",
            interval: "30",
            group: "trap",
          },
        ],
      },
    ],
    workoutConfig: {
      sessions: 30,
      startDate: "",
      notes: "",
    },
  },
  {
    id: "2",
    name: "Treino 3/7",
    creationDate: "2025-03-29T00:00:00.000Z",
    workoutGroup: [
      {
        name: "Treino A",
        description: "Treino de Peito, Tríceps e Abdômen",
        estimatedDuration: "55:00",
        exercises: [
          {
            name: "Supino Reto - Barra",
            sets: "3",
            reps: "10",
            interval: "60",
            group: "peito",
          },
          {
            name: "Fly Inclinado - Halteres",
            sets: "3",
            reps: "10",
            interval: "60",
            group: "peito",
          },
          {
            name: "Supino Vertical - Halteres",
            sets: "3",
            reps: "3/7",
            interval: "60",
            group: "peito",
            observations: `Use uma carga que você consiga fazer 7 reps.
              Faça apenas 3, descanse 10 segundos; 
              então faça 4 reps. Descanse 10 segundos; 
              então faça 5 reps. Descanse 10 segundos; 
              então faça 6 reps. Descanse 10 segundos; 
              então faça 7 reps.`,
          },
          {
            name: "Tríceps Supino Fechado",
            sets: "3",
            reps: "10",
            interval: "60",
            group: "tríceps",
          },
          {
            name: "Tríceps Francês Unilateral",
            sets: "3",
            reps: "10",
            interval: "60",
            group: "triceps",
          },
          {
            name: "Tríceps Pulley",
            sets: "3",
            reps: "3/7",
            interval: "60",
            group: "tríceps",
            observations: `Use uma carga que você consiga fazer 7 reps.
              Faça apenas 3, descanse 10 segundos; 
              então faça 4 reps. Descanse 10 segundos; 
              então faça 5 reps. Descanse 10 segundos; 
              então faça 6 reps. Descanse 10 segundos; 
              então faça 7 reps.`,
          },
          {
            name: "Abdominal Solo Completo",
            sets: "4",
            reps: "15",
            interval: "30",
            group: "abd",
          },
          {
            name: "Abdominal Bicicleta",
            sets: "3",
            reps: "15",
            interval: "30",
            group: "abd",
          },
        ],
      },
      {
        name: "Treino B",
        description: "Treino de Costas e Bíceps",
        estimatedDuration: "40:00",
        exercises: [
          {
            name: "Puxador Romano",
            sets: "3",
            reps: "10",
            interval: "60",
            group: "costas",
          },
          {
            name: "Pulldown Corda",
            sets: "3",
            reps: "10",
            interval: "60",
            group: "costas",
          },
          {
            name: "Remada Baixa Neutra",
            sets: "3",
            reps: "3/7",
            interval: "60",
            group: "costas",
            observations: `Use uma carga que você consiga fazer 7 reps.
              Faça apenas 3, descanse 10 segundos; 
              então faça 4 reps. Descanse 10 segundos; 
              então faça 5 reps. Descanse 10 segundos; 
              então faça 6 reps. Descanse 10 segundos; 
              então faça 7 reps.`,
          },
          {
            name: "Rosca Alternada",
            sets: "3",
            reps: "10",
            interval: "60",
            group: "biceps",
          },
          {
            name: "Rosca Scott Máquina",
            sets: "3",
            reps: "10",
            interval: "60",
            group: "biceps",
          },
          {
            name: "Rosca Direta",
            sets: "3",
            reps: "3/7",
            interval: "60",
            group: "biceps",
            observations: `Use uma carga que você consiga fazer 7 reps.
              Faça apenas 3, descanse 10 segundos; 
              então faça 4 reps. Descanse 10 segundos; 
              então faça 5 reps. Descanse 10 segundos; 
              então faça 6 reps. Descanse 10 segundos; 
              então faça 7 reps.`,
          },
        ],
      },
      {
        name: "Treino C",
        description: "Treino de Pernas e Ombros",
        estimatedDuration: "35:00",
        exercises: [
          {
            name: "Agachamento Barra",
            sets: "3",
            reps: "10",
            interval: "60",
            group: "pernas",
          },
          {
            name: "Stiff Barra",
            sets: "3",
            reps: "10",
            interval: "60",
            group: "pernas",
          },
          {
            name: "Leg Press 45",
            sets: "3",
            reps: "3/7",
            interval: "60",
            group: "pernas",
            observations: `Use uma carga que você consiga fazer 7 reps.
              Faça apenas 3, descanse 10 segundos; 
              então faça 4 reps. Descanse 10 segundos; 
              então faça 5 reps. Descanse 10 segundos; 
              então faça 6 reps. Descanse 10 segundos; 
              então faça 7 reps.`,
          },
          {
            name: "Panturrilha em Pé",
            sets: "4",
            reps: "12-15",
            interval: "30",
            group: "panturrilha",
          },
          {
            name: "Elevação Lateral",
            sets: "3",
            reps: "3/7",
            interval: "60",
            group: "ombro",
            observations: `Use uma carga que você consiga fazer 7 reps.
              Faça apenas 3, descanse 10 segundos; 
              então faça 4 reps. Descanse 10 segundos; 
              então faça 5 reps. Descanse 10 segundos; 
              então faça 6 reps. Descanse 10 segundos; 
              então faça 7 reps.`,
          },
        ],
      },
    ],
    workoutConfig: {
      sessions: 30,
      startDate: "",
      notes: "",
    },
  },
];
