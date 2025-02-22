"use client";
import React, { useState } from "react";
import { Upload, Camera, Type, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function NewEssay() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [theme, setTheme] = useState({
    title:
      "O impacto das redes sociais na formação da identidade dos jovens brasileiros",
    introduction:
      "Em um cenário onde as redes sociais se tornaram parte integral do cotidiano, especialmente entre os jovens, é fundamental refletir sobre como essas plataformas influenciam a construção da identidade e das relações sociais na contemporaneidade. A crescente dependência digital e seus efeitos na autoestima, comportamento e visão de mundo dos adolescentes brasileiros levantam importantes questões sobre o papel da tecnologia na formação do indivíduo.",
  });

  const generateNewTheme = () => {
    // TODO: Implement AI theme generation
    console.log("Generating new theme...");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar ao Dashboard
        </Link>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Tema da Redação
            </h2>
            <button
              onClick={generateNewTheme}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Gerar Novo Tema
            </button>
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            {theme.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {theme.introduction}
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Envie sua Redação
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => setSelectedOption("upload")}
            className={`p-6 rounded-xl text-center transition-all ${
              selectedOption === "upload"
                ? "bg-blue-600 text-white"
                : "bg-white shadow-sm hover:shadow-md"
            }`}
          >
            <Upload className="h-8 w-8 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Enviar Arquivo</h3>
            <p className="text-sm">
              Upload de arquivo PDF ou imagem da sua redação manuscrita
            </p>
          </button>

          <button
            onClick={() => setSelectedOption("camera")}
            className={`p-6 rounded-xl text-center transition-all ${
              selectedOption === "camera"
                ? "bg-blue-600 text-white"
                : "bg-white shadow-sm hover:shadow-md"
            }`}
          >
            <Camera className="h-8 w-8 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Tirar Foto</h3>
            <p className="text-sm">
              Use a câmera para fotografar sua redação manuscrita
            </p>
          </button>

          <button
            onClick={() => setSelectedOption("type")}
            className={`p-6 rounded-xl text-center transition-all ${
              selectedOption === "type"
                ? "bg-blue-600 text-white"
                : "bg-white shadow-sm hover:shadow-md"
            }`}
          >
            <Type className="h-8 w-8 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Digitar Texto</h3>
            <p className="text-sm">
              Digite ou cole o texto da sua redação diretamente
            </p>
          </button>
        </div>

        {selectedOption && (
          <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
            {selectedOption === "upload" && (
              <div className="text-center">
                <input
                  type="file"
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Upload className="h-5 w-5 mr-2" />
                  Selecionar arquivo
                </label>
              </div>
            )}

            {selectedOption === "camera" && (
              <div className="text-center">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <Camera className="h-5 w-5 mr-2" />
                  Abrir câmera
                </button>
              </div>
            )}

            {selectedOption === "type" && (
              <div>
                <textarea
                  className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Digite sua redação aqui..."
                />
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Enviar para correção
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
