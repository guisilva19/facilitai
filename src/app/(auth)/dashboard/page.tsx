"use client";
import React from "react";
import {
  PenTool,
  History,
  Crown,
  BookOpen as Book,
  Trophy,
  Users,
  Brain,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header/Header";

export default function Dashboard() {
  const isPremium = false; // TODO: Get from actual user state

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Serviços Disponíveis
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/new-essay"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <PenTool className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Nova Redação
                </h3>
                <p className="text-gray-600">
                  Pratique com temas gerados por IA
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/history"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <History className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Histórico
                </h3>
                <p className="text-gray-600">Acompanhe sua evolução</p>
              </div>
            </div>
          </Link>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Ranking ENEM
                </h3>
                <p className="text-gray-600">Compare seu desempenho</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Book className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Materiais
                </h3>
                <p className="text-gray-600">
                  Dicas e exemplos de redação nota 1000
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="bg-red-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Mentoria
                </h3>
                <p className="text-gray-600">Acompanhamento personalizado</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Simulados
                </h3>
                <p className="text-gray-600">
                  Prepare-se com questões anteriores
                </p>
              </div>
            </div>
          </div>
        </div>

        {!isPremium && (
          <Link
            href="/premium"
            className="mt-8 block bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 rounded-xl text-white hover:from-yellow-600 hover:to-yellow-700 transition-colors"
          >
            <div className="flex items-center">
              <Crown className="h-8 w-8 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Upgrade para Premium</h3>
                <p className="mt-1">
                  Desbloqueie recursos exclusivos e correções ilimitadas!
                </p>
              </div>
            </div>
          </Link>
        )}
      </main>
    </div>
  );
}
