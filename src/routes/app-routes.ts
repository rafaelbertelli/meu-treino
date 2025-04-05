export const APP_ROUTES = {
  LANDING: "/",
  LOGIN: "/login",
  HOME: "/home", // Página do treino do dia (protegida)
  DASHBOARD: "/dashboard",
  CONFIGURE: "/dashboard/configure",
};

// Rotas públicas (que não requerem autenticação)
export const PUBLIC_ROUTES = [
  APP_ROUTES.LANDING,
  APP_ROUTES.LOGIN,
  "/favicon.ico",
  "/_next",
  "/api/log",
];
