"use client";
import React, { useState } from "react";
import {
  BookOpen,
  Crown,
  History,
  Settings,
  Star,
  TrendingUp,
  User,
  Mail,
  Lock,
  LogOut,
  Camera,
  Edit,
  Menu,
  X,
} from "lucide-react";
import { useAuth } from "@/hook/useAuth";
import { motion } from "framer-motion";

import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import Image from "next/image";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [editingProfile, setEditingProfile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { logout, user, loadingUser } = useAuth();

  const mockUser = {
    name: user?.nome,
    email: user?.email,
    telefone: user?.telefone,
    avatar: user?.foto
      ? user.foto
      : `https://avatar.oxro.io/avatar.svg?name=${user?.nome}`,
    isPremium: user?.isPremium,
    stats: {
      totalEssays: 12,
      averageScore: 780,
      bestScore: 920,
    },
    notifications: {
      newEssays: true,
      feedback: true,
      updates: false,
    },
    recentEssays: [
      {
        title: "O Impacto da Inteligência Artificial na Sociedade",
        date: "22/03/2024",
        score: 860,
      },
      {
        title: "Desafios da Educação no Século XXI",
        date: "15/03/2024",
        score: 780,
      },
      {
        title: "Sustentabilidade e Desenvolvimento Econômico",
        date: "08/03/2024",
        score: 820,
      },
    ],
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
  };

  const renderDashboard = () => (
    <motion.div initial="hidden" animate="visible" className="space-y-6">
      {/* Premium Banner */}
      {!mockUser.isPremium && (
        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg shadow-sm p-4 sm:p-6 text-white"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h3 className="text-xl font-bold mb-2">
                Desbloqueie Todos os Recursos
              </h3>
              <p className="mb-4">
                Torne-se premium e tenha acesso ilimitado a todas as
                funcionalidades.
              </p>
              <Link
                href="/princing"
                className="px-6 py-2 bg-white text-amber-600 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                Ver Planos
              </Link>
            </div>
            <Crown className="h-16 w-16 opacity-90" />
          </div>
        </motion.div>
      )}

      {/* Quick Stats */}
      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {[
          {
            icon: <BookOpen className="h-6 w-6 text-emerald-600" />,
            label: "Total de Redações",
            value: mockUser.stats.totalEssays,
          },
          {
            icon: <Star className="h-6 w-6 text-emerald-600" />,
            label: "Média Geral",
            value: mockUser.stats.averageScore,
          },
          {
            icon: <TrendingUp className="h-6 w-6 text-emerald-600" />,
            label: "Melhor Nota",
            value: mockUser.stats.bestScore,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-white rounded-lg shadow-sm p-4 sm:p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-emerald-100 rounded-lg">{item.icon}</div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  {item.label}
                </p>
                <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {item.value}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* New Essay Card */}
      <motion.div
        variants={fadeInUp}
        className="bg-white rounded-lg shadow-sm p-4 sm:p-6 text-center"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Iniciar Nova Redação
        </h2>
        <p className="text-gray-600 mb-6">
          Escolha um tema atual e receba orientações para começar sua redação.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-emerald-600 text-white rounded-lg shadow-sm hover:bg-emerald-700 transition-all"
        >
          Começar Agora
        </motion.button>
      </motion.div>

      {/* Recent Essays */}
      <motion.div
        variants={fadeInUp}
        className="bg-white rounded-lg shadow-sm p-4 sm:p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Redações Recentes
        </h3>
        <div className="space-y-4">
          {mockUser.recentEssays.map((essay, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="mb-2 sm:mb-0">
                <h4 className="font-medium text-gray-900">{essay.title}</h4>
                <p className="text-sm text-gray-500">{essay.date}</p>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-semibold text-emerald-600">
                  {essay.score}
                </span>
                <History className="h-5 w-5 text-gray-400 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  const renderProfile = () => (
    <motion.div initial="hidden" animate="visible" className="space-y-6">
      <motion.div
        className="bg-white rounded-lg shadow-sm p-6"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <motion.div className="relative" variants={fadeInUp}>
            <Image
              src={mockUser.avatar}
              alt="Profile"
              className="w-24 sm:w-32 h-24 sm:h-32 rounded-full object-cover"
              width={24}
              height={24}
            />
            <motion.button
              className="absolute bottom-0 right-0 p-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                /* Handle avatar update */
              }}
            >
              <Camera className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
          </motion.div>
          <div className="flex-1 text-center md:text-left">
            <motion.div
              className="flex items-center justify-center md:justify-start space-x-4 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                {mockUser.name}
              </h2>
              <motion.button
                onClick={() => setEditingProfile(!editingProfile)}
                className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Edit className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
            </motion.div>
            <p className="text-gray-600 mb-4">{mockUser.email}</p>
            {mockUser.isPremium ? (
              <motion.span
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Crown className="h-4 w-4 mr-1" />
                Premium
              </motion.span>
            ) : (
              <motion.button
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <Crown className="h-4 w-4 inline mr-2" />
                Upgrade para Premium
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white rounded-lg shadow-sm p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Estatísticas
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {["totalEssays", "averageScore", "bestScore"].map((stat, index) => (
            <motion.div
              key={stat}
              className="p-4 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <p className="text-sm text-gray-600">
                {stat === "totalEssays"
                  ? "Total de Redações"
                  : stat === "averageScore"
                  ? "Média Geral"
                  : "Melhor Nota"}
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-emerald-600">
                {mockUser.stats.bestScore}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  const renderSettings = () => (
    <motion.div initial="hidden" animate="visible" className="space-y-6">
      <motion.div
        variants={fadeInUp}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Configurações da Conta
        </h3>
        <div className="space-y-6">
          <motion.div
            variants={fadeInUp} // Aplica animação aqui também
            className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-600 mr-2" />
                <h4 className="font-medium text-gray-900">Email</h4>
              </div>
              <p className="text-gray-600 mt-1">{mockUser.email}</p>
            </div>
            <button className="w-full md:w-auto px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              Alterar Email
            </button>
          </motion.div>

          <motion.div
            variants={fadeInUp} // Aplica animação aqui também
            className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <Lock className="h-5 w-5 text-gray-600 mr-2" />
                <h4 className="font-medium text-gray-900">Senha</h4>
              </div>
              <p className="text-gray-600 mt-1">Última alteração há 3 meses</p>
            </div>
            <button className="w-full md:w-auto px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              Alterar Senha
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* <motion.div
        variants={fadeInUp}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Aparência</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Palette className="h-5 w-5 text-gray-600 mr-2" />
            <span>Tema Escuro</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="input-switch"></div>
          </label>
        </div>
      </motion.div> */}

      <motion.div
        variants={fadeInUp}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Sessão</h3>
        <button
          onClick={logout}
          className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Sair da Conta
        </button>
      </motion.div>
    </motion.div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return renderProfile();
      case "settings":
        return renderSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <>
      {loadingUser && <Loader />}
      <div className="min-h-screen bg-gray-50">
        {/* Top Navigation */}
        <motion.nav
          className="bg-white shadow-sm"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={fadeInUp}
          >
            <div className="flex justify-between h-16">
              <Link href="/dashboard" className="flex items-center group">
                <BookOpen className="h-8 w-8 text-emerald-600 transition-transform group-hover:scale-110" />
                <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  FACILITAI
                </span>
              </Link>
              <div className="flex items-center space-x-4">
                <div className="hidden lg:flex items-center">
                  {!mockUser.isPremium && (
                    <Link
                      href={"/pricing"}
                      className="mr-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all flex items-center"
                    >
                      <Crown className="h-4 w-4 mr-2" />
                      Seja Premium
                    </Link>
                  )}
                  <Image
                    className="h-8 w-8 rounded-full"
                    src={mockUser.avatar}
                    alt={mockUser.name || ""}
                    width={40}
                    height={40}
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setActiveTab("dashboard");
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeTab === "dashboard"
                    ? "bg-emerald-50 text-emerald-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  setActiveTab("profile");
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeTab === "profile"
                    ? "bg-emerald-50 text-emerald-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Meu Perfil
              </button>
              <button
                onClick={() => {
                  setActiveTab("settings");
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeTab === "settings"
                    ? "bg-emerald-50 text-emerald-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Configurações
              </button>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="flex flex-col bg-white rounded-lg shadow-sm p-4">
                <div className="flex flex-col justify-between">
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={`nav-link flex items-center h-14 transition-colors duration-200 rounded-lg px-2 ${
                      activeTab === "dashboard"
                        ? "bg-blue-100 border-l-4 border-emerald-500 text-emerald-700"
                        : "nav-link-inactive hover:bg-gray-100"
                    }`}
                  >
                    <TrendingUp className="h-5 w-5 mr-3" />
                    Dashboard
                  </button>
                  <button
                    onClick={() => setActiveTab("essays")}
                    className={`nav-link flex items-center h-14 transition-colors duration-200 rounded-lg px-2 ${
                      activeTab === "essays"
                        ? "bg-blue-100 border-l-4 border-emerald-500 text-emerald-700"
                        : "nav-link-inactive hover:bg-gray-100"
                    }`}
                  >
                    <BookOpen className="h-5 w-5 mr-3" />
                    Minhas Redações
                  </button>
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`nav-link flex items-center h-14 transition-colors duration-200 rounded-lg px-2 ${
                      activeTab === "profile"
                        ? "bg-blue-100 border-l-4 border-emerald-500 text-emerald-700"
                        : "nav-link-inactive hover:bg-gray-100"
                    }`}
                  >
                    <User className="h-5 w-5 mr-3" />
                    Meu Perfil
                  </button>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`nav-link flex items-center h-14 transition-colors duration-200 rounded-lg px-2 ${
                      activeTab === "settings"
                        ? "bg-blue-100 border-l-4 border-emerald-500 text-emerald-700"
                        : "nav-link-inactive hover:bg-gray-100"
                    }`}
                  >
                    <Settings className="h-5 w-5 mr-3" />
                    Configurações
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">{renderContent()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
