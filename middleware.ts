import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse, type NextRequest } from "next/server";
import { PUBLIC_ROUTES } from "./src/routes/app-routes";

export async function middleware(request: NextRequest) {
  // Cria um cliente Supabase para o servidor
  const supabase = createServerSupabaseClient();

  console.log(">>>>middleware<<<<");

  // Verifica se o usuário está autenticado
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // URL atual
  const currentPath = new URL(request.url).pathname;

  // Verifica se o usuário está tentando acessar uma rota pública
  const isPublicRoute = PUBLIC_ROUTES.includes(currentPath);

  // Se o usuário não estiver autenticado e estiver tentando acessar uma rota protegida,
  // redireciona para a página de login
  if (!session && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Se o usuário estiver autenticado e tentando acessar a página de login,
  // redireciona para a página inicial
  if (session && isPublicRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Continua com a requisição
  return NextResponse.next();
}

// Configuração para aplicar o middleware em todas as rotas
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
