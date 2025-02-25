/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Como estruturar uma redação nota 1000 no ENEM",
    excerpt:
      "Aprenda as técnicas essenciais para construir uma redação que atenda todos os critérios de avaliação do ENEM.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "15 Mar 2024",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Dicas para melhorar sua argumentação",
    excerpt:
      "Descubra como desenvolver argumentos consistentes e convincentes para sua redação.",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "12 Mar 2024",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Os erros mais comuns na redação do ENEM",
    excerpt:
      "Conheça os principais erros cometidos pelos candidatos e aprenda como evitá-los.",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "10 Mar 2024",
    readTime: "6 min",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent py-2">
                Blog FACILITAI
              </h1>
              <p className="text-xl text-gray-600">
                Dicas, estratégias e novidades sobre redação para o ENEM
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-gray-800">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Ler mais
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
