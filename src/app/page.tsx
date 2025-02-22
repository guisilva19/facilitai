"use client";
import React from "react";
import {
  ArrowRight,
  Brain,
  Star,
  Trophy,
  Camera,
  Upload,
  Notebook as Robot,
  ChartBar,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                className="inline-block mb-4 px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium"
                {...fadeInUp}
              >
                🎯 Feedback Inteligente para sua Redação
              </motion.div>
              <motion.h1
                className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight"
                {...fadeInUp}
              >
                Avalie sua Redação com Inteligência Artificial
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                {...fadeInUp}
              >
                Receba feedback instantâneo baseado nos critérios do ENEM.
                Fotografe sua redação e obtenha uma análise detalhada em
                segundos.
              </motion.p>
              <motion.div
                className="flex justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/register">
                  <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 transition-all transform hover:scale-105 text-white rounded-lg shadow-lg flex items-center text-lg font-medium">
                    Experimente Grátis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="px-8 py-4 bg-white hover:bg-gray-50 transition-all transform hover:scale-105 text-emerald-600 rounded-lg shadow-lg text-lg font-medium">
                    Como Funciona
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Como Funciona
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Camera,
                  title: "Fotografe",
                  description: "Tire uma foto clara da sua redação manuscrita",
                },
                {
                  icon: Upload,
                  title: "Envie",
                  description: "Faça o upload da imagem em nossa plataforma",
                },
                {
                  icon: Robot,
                  title: "Receba o Feedback",
                  description:
                    "Nossa IA analisa e fornece feedback detalhado baseado nos critérios do ENEM",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="bg-emerald-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Recursos da Plataforma
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Free Features */}
              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6">Versão Gratuita</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Brain className="h-6 w-6 text-emerald-600" />
                    <span>Análise baseada em IA dos critérios do ENEM</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="h-6 w-6 text-emerald-600" />
                    <span>Temas de redação atualizados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChartBar className="h-6 w-6 text-emerald-600" />
                    <span>Feedback detalhado por competência</span>
                  </li>
                </ul>
              </motion.div>

              {/* Premium Features */}
              <motion.div
                className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl p-8 shadow-lg text-white"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6">Versão Premium</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Trophy className="h-6 w-6 text-white" />
                    <span>Ranking dos melhores alunos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="h-6 w-6 text-white" />
                    <span>Correções ilimitadas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChartBar className="h-6 w-6 text-white" />
                    <span>Análise comparativa de desempenho</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Exemplo de Análise"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
              <div>
                <h2 className="text-4xl font-bold mb-8 text-gray-800">
                  Análise Inteligente
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <Brain className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Critérios do ENEM
                      </h3>
                      <p className="text-gray-600">
                        Feedback detalhado baseado nas 5 competências avaliadas
                        no ENEM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <ChartBar className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Análise Completa
                      </h3>
                      <p className="text-gray-600">
                        Receba sugestões de melhoria para cada aspecto do seu
                        texto
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Comece Agora Mesmo</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Melhore suas redações com feedback instantâneo da nossa IA.
                Experimente gratuitamente!
              </p>
              <Link href="/register">
                <button className="px-8 py-4 bg-white text-emerald-600 hover:bg-gray-100 transition-all transform hover:scale-105 rounded-lg shadow-lg text-lg font-medium">
                  Criar Conta Gratuita
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
