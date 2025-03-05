"use client";
import React, { useEffect, useState } from "react";
import { Crown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getCookie } from "@/hook/useAuth";

import Link from "next/link";
import Image from "next/image";
import Facilitai from "@/assets/logo.svg";

export default function Header() {
  const [foto, setFoto] = useState<string | null>(null);
  const [premium, setPremium] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setFoto(getCookie("auth_user_foto"));
      setPremium(Boolean(getCookie("auth_user_premium")));
      setToken(getCookie("auth_token"));
    }
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Como Funciona" },
    { href: "/pricing", label: "Preços" },
    { href: "/about", label: "Sobre" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center justify-center group">
            <Image
              src={Facilitai}
              alt="logo"
              className="h-10 w-10 text-emerald-600 transition-transform group-hover:scale-110"
              width={40}
                  height={40}
            />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              FACILITAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-emerald-600 transition-colors relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          {!token ? (
            <div className="hidden md:flex items-center gap-4">
              <Link href="/login">
                <button className="px-6 py-2 bg-transparent border-2 border-emerald-600 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-all hover:scale-105">
                  Entrar
                </button>
              </Link>
              <Link href="/register">
                <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all hover:scale-105 shadow-md hover:shadow-lg">
                  Comece Agora
                </button>
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center">
              {!premium && (
                <Link
                  href={"/pricing"}
                  className="mr-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all flex items-center"
                >
                  <Crown className="h-4 w-4 mr-2" />
                  Seja Premium
                </Link>
              )}
              <Link href={"/dashboard"} className="flex items-center">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={foto ? foto : ""}
                  alt={"avatar"}
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-emerald-600 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                {token ? (
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <Image
                      src={foto ? foto : ""}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                      width={40}
                      height={40}
                    />
                    <Link
                      href="/dashboard"
                      className="text-emerald-600 hover:text-emerald-700 font-medium transition-all"
                    >
                      Acessar meu perfil
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 pt-4 border-t">
                    <Link href="/login">
                      <button className="w-full px-6 py-2 bg-transparent border-2 border-emerald-600 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-all">
                        Entrar
                      </button>
                    </Link>
                    <Link href="/register">
                      <button className="w-full px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all shadow-md">
                        Comece Agora
                      </button>
                    </Link>
                  </div>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
