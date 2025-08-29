import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Statistics = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array com 6 itens para o carousel (vazios por enquanto)
  const carouselItems = [
    { id: 1, title: "Gráfico 1", description: "Descrição do primeiro gráfico" },
    { id: 2, title: "Gráfico 2", description: "Descrição do segundo gráfico" },
    { id: 3, title: "Gráfico 3", description: "Descrição do terceiro gráfico" },
    { id: 4, title: "Gráfico 4", description: "Descrição do quarto gráfico" },
    { id: 5, title: "Gráfico 5", description: "Descrição do quinto gráfico" },
    { id: 6, title: "Gráfico 6", description: "Descrição do sexto gráfico" }
  ];

  // Auto-rotate do carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  // Navegação manual
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  // Navegação por indicadores
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="min-h-screen bg-[#4B0073] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-24 pt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Estatísticas <span className="text-pink-400">Vion</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            Visualize dados e insights sobre a segurança digital através de nossos gráficos interativos
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Carousel */}
          <div className="relative h-[500px] sm:h-[600px] lg:h-[800px] overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 flex items-center justify-center p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                {/* Item do Carousel - Aqui você colocará os gráficos do ECharts */}
                <div className="text-center">
                                     <div className="w-full h-[400px] sm:h-[500px] lg:h-[700px] bg-white/5 rounded-2xl border-2 border-dashed border-white/20 flex items-center justify-center">
                    <div className="text-white/60 text-center">
                      <div className="text-6xl mb-4">📊</div>
                      <h3 className="text-2xl font-semibold mb-2">{carouselItems[currentIndex].title}</h3>
                      <p className="text-lg">{carouselItems[currentIndex].description}</p>
                      <p className="text-sm mt-4">Gráfico ECharts será inserido aqui - teste</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Botões de Navegação */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-3">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-pink-400 w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Contador */}
          <div className="text-center mt-6">
            <span className="text-white/80 text-lg">
              {currentIndex + 1} de {carouselItems.length}
            </span>
          </div>
        </div>

        {/* Informações Adicionais */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-white/80 mb-6">
            Os gráficos são atualizados em tempo real com dados de segurança
          </p>
          <div className="flex justify-center space-x-4 text-sm text-white/60">
            <span>🔄 Auto-rotate a cada 5s</span>
            <span>👆 Clique para navegar</span>
            <span>📱 Totalmente responsivo</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
