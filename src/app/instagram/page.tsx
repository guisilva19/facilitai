import { Bookmark, Brain, Camera, Heart, MessageCircle, MoreHorizontal, Notebook, Send, Upload } from "lucide-react";

export default function Instagram() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Instagram Post Header */}
        <div className="p-4 flex items-center justify-between border-b">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <Brain className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">redacao.ai</p>
              <p className="text-xs text-gray-500">Patrocinado</p>
            </div>
          </div>
          <MoreHorizontal className="h-5 w-5 text-gray-500" />
        </div>

        {/* Instagram Post Image */}
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-5"></div>
            <div className="text-center max-w-xs z-10 p-6">
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                🎯 Feedback Inteligente
              </div>
              <h1 className="text-2xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Avalie sua Redação com IA
              </h1>
              <p className="text-sm text-gray-600 mb-4">
                Receba feedback instantâneo baseado nos critérios do ENEM
              </p>
              <div className="flex justify-center space-x-3">
                {[Camera, Upload, Notebook].map((Icon, index) => (
                  <div
                    key={index}
                    className="bg-emerald-50 w-10 h-10 rounded-full flex items-center justify-center"
                  >
                    <Icon className="h-5 w-5 text-emerald-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Post Actions */}
        <div className="p-4 flex justify-between">
          <div className="flex space-x-4">
            <Heart className="h-6 w-6 text-gray-700" />
            <MessageCircle className="h-6 w-6 text-gray-700" />
            <Send className="h-6 w-6 text-gray-700" />
          </div>
          <Bookmark className="h-6 w-6 text-gray-700" />
        </div>

        {/* Instagram Post Likes */}
        <div className="px-4 pb-2">
          <p className="font-semibold text-sm">1,234 curtidas</p>
        </div>

        {/* Instagram Post Caption */}
        <div className="px-4 pb-4">
          <p className="text-sm">
            <span className="font-semibold">redacao.ai</span> Apresentamos nossa
            nova plataforma de avaliação de redações com IA! 📝✨ Fotografe sua
            redação, envie e receba feedback instantâneo baseado nos critérios
            do ENEM.
            <br />
            <br />
            Versão gratuita disponível! Experimente agora e melhore suas notas.
            <br />
            <br />
            #RedacaoEnem #InteligenciaArtificial #Educacao #Vestibular
          </p>
        </div>

        {/* Instagram Post Comments */}
        <div className="px-4 py-3 border-t text-sm text-gray-500">
          <p>Ver todos os 87 comentários</p>
        </div>

        {/* Instagram Post Time */}
        <div className="px-4 py-2 border-t">
          <p className="text-xs text-gray-400">HÁ 2 HORAS</p>
        </div>

        {/* Instagram Post Comment Input */}
        <div className="px-4 py-3 border-t flex items-center">
          <input
            type="text"
            placeholder="Adicione um comentário..."
            className="text-sm flex-grow focus:outline-none"
          />
          <button className="text-emerald-600 font-semibold text-sm">
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
}
