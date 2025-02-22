"use client";

import { BookOpen, Crown, LogOut } from "lucide-react";

export default function Header() {
  const isPremium = true;

  return (
    <>
      <header>
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-2xl font-bold text-gray-800">
                  FACILITAI
                </span>
              </div>
              <div className="flex items-center space-x-4">
                {isPremium && (
                  <span className="flex items-center text-yellow-600">
                    <Crown className="h-5 w-5 mr-1" />
                    <span className="hidden sm:inline">Premium</span>
                  </span>
                )}
                <button className="text-gray-500 hover:text-gray-700">
                  <LogOut className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
