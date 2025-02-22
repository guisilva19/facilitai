import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="h-8 w-8 text-white" />
            <span className="ml-2 text-2xl font-bold text-white">
              FACILITAI
            </span>
          </div>
          <div className="text-center">
            <p className="text-sm">
              © 2025 FACILITAI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
