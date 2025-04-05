import { createServerSupabaseClient } from "@/lib/supabase/server";
import { PUBLIC_ROUTES, ROUTE } from "@/routes";
import { NextResponse, type NextRequest } from "next/server";

// Página inicial após login bem-sucedido
const DEFAULT_LOGGED_IN_REDIRECT = ROUTE.HOME;

export async function middleware(request: NextRequest) {
  try {
    // Verifica cookies de autenticação
    const hasCookies =
      request.cookies.has("sb-access-token") ||
      request.cookies.has("sb-refresh-token");

    if (!hasCookies) {
      // Se não tiver cookies, não está autenticado
      const isPublicRoute = PUBLIC_ROUTES.includes(
        new URL(request.url).pathname
      );
      if (!isPublicRoute) {
        return NextResponse.redirect(new URL(ROUTE.LOGIN, request.url));
      }
      return NextResponse.next();
    }

    // Cria cliente Supabase e verifica autenticação
    const supabase = createServerSupabaseClient();

    // IMPORTANTE: Usa getUser() em vez de getSession() para maior segurança
    // getUser() sempre valida o token com o servidor Auth do Supabase
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    // URL atual
    const currentPath = new URL(request.url).pathname;
    const isPublicRoute = PUBLIC_ROUTES.includes(currentPath);

    // Usuário autenticado deve ter user válido
    const isAuthenticated = !!user && !error;

    // Se o usuário não estiver autenticado e estiver tentando acessar uma rota protegida,
    // redireciona para a página de login
    if (!isAuthenticated && !isPublicRoute) {
      console.error("Middleware: Acesso negado - Autenticação inválida", {
        error,
      });
      return NextResponse.redirect(new URL(ROUTE.LOGIN, request.url));
    }

    // Se o usuário estiver autenticado e tentando acessar a página de login ou raiz,
    // redireciona para a página home (treino do dia)
    if (isAuthenticated && isPublicRoute) {
      return NextResponse.redirect(
        new URL(DEFAULT_LOGGED_IN_REDIRECT, request.url)
      );
    }

    // Continua com a requisição
    return NextResponse.next();
  } catch (error) {
    console.error("Middleware erro crítico:", error);
    // Em caso de erro, redireciona para login por segurança
    return NextResponse.redirect(new URL(ROUTE.LOGIN, request.url));
  }
}

// Configuração para aplicar o middleware em todas as rotas
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public directory
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
};
