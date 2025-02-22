"use client";
import React from "react";
import {
  ArrowLeft,
  Crown,
  CheckCircle,
  Star,
  Zap,
  BookOpen,
  Brain,
} from "lucide-react";
import Link from "next/link";

export default function Premium() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-white hover:text-gray-200 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar ao Dashboard
        </Link>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Crown className="h-12 w-12 text-yellow-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Desbloqueie todo o potencial do FACILITAI
          </h1>
          <p className="text-xl text-white/80">
            Maximize suas chances de sucesso no ENEM com nossos recursos premium
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Redações Ilimitadas
                  </h3>
                  <p className="text-gray-600">
                    Envie quantas redações quiser para receber feedback
                    detalhado da nossa IA
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Brain className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Feedback Inteligente
                  </h3>
                  <p className="text-gray-600">
                    Análise detalhada com sugestões personalizadas para melhorar
                    sua escrita
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Star className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Temas Exclusivos
                  </h3>
                  <p className="text-gray-600">
                    Acesso a uma biblioteca de temas selecionados e atualizados
                    regularmente
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Material de Estudo
                  </h3>
                  <p className="text-gray-600">
                    Guias, dicas e exemplos de redações nota 1000
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Premium</h2>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">
                    R$29,90
                  </span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Zap className="h-5 w-5" />
                Começar Agora
              </button>

              <p className="text-sm text-gray-600 text-center mt-4">
                Cancele a qualquer momento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
