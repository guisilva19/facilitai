import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Verifique se o token existe nos cookies
  const token = request.cookies.get("auth_token");

  // Caso não haja token, redireciona para a página de login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Caso tenha o token, permite a navegação normal
  return NextResponse.next();
}

// Defina os caminhos que esse middleware deve aplicar
export const config = {
  matcher: ["/dashboard", "/profile", "/settings"], // Rotas protegidas
};
