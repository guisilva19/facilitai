import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  // Se não houver token e a rota for a raiz, redireciona para /login
  if (!token && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Caso contrário, se o token existir ou não for a raiz, permite a navegação
  return NextResponse.next();
}

// Defina os caminhos que esse middleware deve aplicar
export const config = {
  matcher: ["/"], // Defina as páginas protegidas aqui
};
