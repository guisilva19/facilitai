"use client";

import { useEffect, useState } from "react";
import { BookOpen, Eye, EyeClosed, LogIn } from "lucide-react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchema } from "@/utils/schema";
import { useAuth } from "@/hook/useAuth";
import { SyncLoader } from "react-spinners";
import { useRouter } from "next/navigation";

import Link from "next/link";

interface Auth {
  email: string;
  senha: string;
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Auth>({
    resolver: yupResolver(authSchema),
  });

  const router = useRouter();

  const { login, loading, token } = useAuth();

  const handleAuth = async ({ email, senha }: Auth) => {
    await login(email, senha);
  };

  const handleAuthGoogle = async (token: string) => {
    await login("", "", true, token);
  };

  useEffect(() => {
    if (token) {
      router.replace("/dashboard");
    }
  }, [token]);

  return (
    <>
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_CLIENT_ID as string}
      >
        <div className="min-h-screen bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
            <div className="flex items-center justify-center mb-8">
              <Link href="/" className="flex items-center group">
                <BookOpen className="h-8 w-8 text-emerald-600 transition-transform group-hover:scale-110" />
                <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  FACILITAI
                </span>
              </Link>
            </div>

            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8">
              Bem-vindo de volta!
            </h2>

            <form onSubmit={handleSubmit(handleAuth)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="seu@email.com"
                  disabled={loading}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Senha
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("senha")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="••••••••"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <Eye /> : <EyeClosed />}
                  </button>
                </div>
                {errors.senha && (
                  <p className="text-red-500 text-sm">{errors.senha.message}</p>
                )}
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full h-12 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all shadow-md py-3 font-semibold flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <SyncLoader size={8} color="#fff" loading={loading} />
                  </>
                ) : (
                  <>
                    <LogIn className="h-5 w-5" /> Entrar
                  </>
                )}
              </button>
            </form>

            <div className="relative flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">ou</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div>
              <GoogleLogin
                width={"100%"}
                onSuccess={(response) => handleAuthGoogle(response.credential)}
                onError={() => {
                  console.error("Erro no login com Google");
                }}
              />
            </div>

            <p className="text-center mt-6 text-gray-600">
              Não tem uma conta?{" "}
              <Link
                href="/register"
                className="text-emerald-600 hover:underline font-semibold"
              >
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </GoogleOAuthProvider>
    </>
  );
}
