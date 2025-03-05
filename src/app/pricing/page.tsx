"use client"
import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function PricingPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Planos e Preços
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Escolha o plano ideal para melhorar suas redações com nossa IA
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-2">Plano Gratuito</h3>
              <p className="text-gray-600 mb-6">
                Comece a melhorar suas redações
              </p>
              <div className="text-4xl font-bold mb-8">
                R$ 0
                <span className="text-lg text-gray-500 font-normal">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>1 correção por semana</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>Análise baseada em IA</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>Temas atualizados</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <X className="h-5 w-5" />
                  <span>Ranking de alunos</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <X className="h-5 w-5" />
                  <span>Correções ilimitadas</span>
                </li>
              </ul>
              <Link href="/register">
                <button className="w-full py-3 px-6 rounded-lg border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-all font-medium">
                  Começar Grátis
                </button>
              </Link>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-sm font-medium px-3 py-1 rounded-full">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Plano Premium</h3>
              <p className="text-emerald-100 mb-6">
                Acesso completo a todos os recursos
              </p>
              <div className="text-4xl font-bold mb-8">
                R$ 19,90
                <span className="text-lg text-emerald-200 font-normal">
                  /mês
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-300" />
                  <span>Correções ilimitadas</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-300" />
                  <span>Análise baseada em IA</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-300" />
                  <span>Temas atualizados</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-300" />
                  <span>Ranking de alunos</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-300" />
                  <span>Análise comparativa</span>
                </li>
              </ul>
              <Link href="/register">
                <button className="w-full py-3 px-6 rounded-lg bg-white text-emerald-600 hover:bg-gray-100 transition-all font-medium shadow-lg">
                  Assinar Premium
                </button>
              </Link>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Perguntas Frequentes
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  Como funciona o período gratuito?
                </h3>
                <p className="text-gray-600">
                  Você pode usar o plano gratuito por tempo ilimitado, com
                  acesso a uma correção por semana.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  Posso cancelar a qualquer momento?
                </h3>
                <p className="text-gray-600">
                  Sim, você pode cancelar sua assinatura premium a qualquer
                  momento, sem multas ou taxas adicionais.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  Como funciona o ranking?
                </h3>
                <p className="text-gray-600">
                  O ranking é atualizado semanalmente e mostra os alunos com as
                  melhores notas nas redações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
