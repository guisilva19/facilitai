"use client";
import React, { useState } from "react";
import { UserPlus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import "dotenv/config";
import Image from "next/image";
import Facilitai from "@/assets/logo.svg";
import toast from "react-hot-toast";
import { useAuth } from "@/hook/useAuth";
import { SyncLoader } from "react-spinners";

export default function Register() {
  const { login, loading } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate.push("/dashboard");
  };

  const handleAuthGoogle = async (token: string | undefined) => {
    if (!token) {
      toast.error("Não foi possivel fazer login via Google");
    }

    await login("", "", true, token);
  };

  return (
    <>
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_CLIENT_ID as string}
      >
        <div className="min-h-screen bg-gradient-to-br from-emerald-600 to-teal-600  flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
            <div className="flex items-center justify-center mb-8">
              <Link href="/" className="flex items-center group">
                <Image
                  src={Facilitai}
                  alt="logo"
                  className="h-10 w-10 text-emerald-600 transition-transform group-hover:scale-110"
                  width={10}
                  height={10}
                />
                <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  FACILITAI
                </span>
              </Link>
            </div>

            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8">
              Crie sua conta
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <SyncLoader size={8} color="#fff" loading={loading} />
                  </>
                ) : (
                  <>
                    <UserPlus className="h-5 w-5" />
                    Cadastrar
                  </>
                )}
              </button>
            </form>

            <div className="relative flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">ou</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <GoogleLogin
              size="large"
              onSuccess={(response) => handleAuthGoogle(response.credential)}
              onError={() => {
                toast.error("Ops! Login não autorizado!");
              }}
            />

            <p className="text-center mt-6 text-gray-600">
              Já tem uma conta?{" "}
              <Link
                href="/"
                className="text-emerald-600 hover:underline font-semibold"
              >
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </GoogleOAuthProvider>
    </>
  );
}
