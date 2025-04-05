export const ROUTE = {
  LANDING: "/",
  LOGIN: "/login",
  HOME: "/home", // Página do treino do dia (protegida)
  DASHBOARD: "/dashboard",
  CONFIGURE: "/dashboard/configure",
} as const;

// Rotas públicas (que não requerem autenticação)
export const PUBLIC_ROUTES = [
  ROUTE.LANDING,
  ROUTE.LOGIN,
  "/favicon.ico",
  "/_next",
];
