"use client";
import React from "react";
import { ArrowLeft, FileText, Star } from "lucide-react";
import Link from "next/link";

const mockEssays = [
  {
    id: 1,
    title: "O papel da tecnologia na educação moderna",
    date: "2024-03-15",
    score: 920,
    status: "Corrigido",
  },
  {
    id: 2,
    title: "Desafios da mobilidade urbana no Brasil",
    date: "2024-03-10",
    score: 880,
    status: "Corrigido",
  },
  {
    id: 3,
    title: "Sustentabilidade e consumo consciente",
    date: "2024-03-05",
    score: 900,
    status: "Corrigido",
  },
];

export default function History() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar ao Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Histórico de Redações
        </h1>

        <div className="space-y-4">
          {mockEssays.map((essay) => (
            <div
              key={essay.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {essay.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Enviada em{" "}
                      {new Date(essay.date).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span className="font-semibold text-lg">{essay.score}</span>
                  </div>
                  <span className="text-sm text-green-600">{essay.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
