"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brain, Target, Users, BookOpen } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Nossa Missão
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Democratizar o acesso à correção de redações de qualidade,
                utilizando inteligência artificial para ajudar estudantes a
                alcançarem seu potencial máximo no ENEM.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Nossos Valores
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Brain,
                  title: "Inovação",
                  description:
                    "Utilizamos tecnologia de ponta em IA para fornecer feedback preciso e personalizado",
                },
                {
                  icon: Target,
                  title: "Qualidade",
                  description:
                    "Comprometimento com a excelência em cada aspecto da nossa plataforma",
                },
                {
                  icon: Users,
                  title: "Acessibilidade",
                  description:
                    "Tornando a preparação para o ENEM acessível a todos os estudantes",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-emerald-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
                <p className="text-gray-600 leading-relaxed">
                  Nascemos da necessidade de democratizar o acesso à correção de
                  redações de qualidade. Combinando tecnologia avançada com os
                  critérios do ENEM, desenvolvemos uma plataforma que oferece
                  feedback instantâneo e preciso para ajudar estudantes a
                  aperfeiçoarem suas habilidades de escrita.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Nossa Tecnologia
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-center mb-8">
                  <BookOpen className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-6">
                  Inteligência Artificial Avançada
                </h3>
                <p className="text-center leading-relaxed">
                  Nossa IA foi treinada com milhares de redações do ENEM,
                  aprendendo a identificar os elementos que fazem uma redação
                  nota 1000. Utilizamos algoritmos avançados de processamento de
                  linguagem natural para fornecer feedback preciso e
                  personalizado para cada estudante.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
