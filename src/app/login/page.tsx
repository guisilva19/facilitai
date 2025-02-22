"use client";
import React, { useState } from "react";
import { BookOpen, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    navigate.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="flex items-center justify-center mb-8">
          <BookOpen className="h-12 w-12 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800 ml-2">FACILITAI</h1>
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8">
          Bem-vindo de volta!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <LogIn className="h-5 w-5" />
            Entrar
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Não tem uma conta?{" "}
          <Link
            href="/register"
            className="text-blue-600 hover:underline font-semibold"
          >
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
