import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse, type NextRequest } from "next/server";
import { PUBLIC_ROUTES } from "./src/routes/app-routes";

export async function middleware(request: NextRequest) {
  try {
    // Log simples para depuração
    console.log(`Middleware executando: ${request.url}`);

    // Verifica cookies de autenticação
    const hasCookies =
      request.cookies.has("sb-access-token") ||
      request.cookies.has("sb-refresh-token");

    const supabase = createServerSupabaseClient();

    // Verifica se o usuário está autenticado
    const { data } = await supabase.auth.getSession();
    const session = data.session;

    // URL atual
    const currentPath = new URL(request.url).pathname;

    // Log das informações principais
    console.log(
      `Middleware: Path=${currentPath}, Autenticado=${
        !!session && hasCookies
      }, Rota pública=${PUBLIC_ROUTES.includes(currentPath)}`
    );

    // Verifica se o usuário está tentando acessar uma rota pública
    const isPublicRoute = PUBLIC_ROUTES.includes(currentPath);

    // Considera usuário autenticado apenas se tiver sessão válida E cookies
    const isAuthenticated = !!session && hasCookies;

    // Se o usuário não estiver autenticado e estiver tentando acessar uma rota protegida,
    // redireciona para a página de login
    if (!isAuthenticated && !isPublicRoute) {
      console.log(
        `Middleware: Redirecionando para login - Não autenticado (${currentPath})`
      );
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Se o usuário estiver autenticado e tentando acessar a página de login,
    // redireciona para a página inicial
    if (isAuthenticated && isPublicRoute) {
      console.log(
        `Middleware: Redirecionando para dashboard - Já autenticado (${currentPath})`
      );
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Continua com a requisição
    return NextResponse.next();
  } catch (error) {
    console.error("Middleware erro:", error);
    // Em caso de erro, redireciona para login por segurança
    return NextResponse.redirect(new URL("/login", request.url));
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
