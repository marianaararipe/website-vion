import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, LogIn, Wifi, FileText, Settings, Bot, Circle, Sun, Moon } from "lucide-react";

const Prototype = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true); // Inicia no modo escuro

  // Dados das tabs - você pode ajustar os vídeos e descrições conforme necessário
  const tabs = [
    {
      label: <LogIn className="w-6 h-6" />,
      title: "Cadastro e Login",
      darkMedia: "/assets/videos/loginRegisterBlack.mp4", // Vídeo para modo escuro
      lightMedia: "/assets/videos/hero.mp4", // Imagem/vídeo para modo claro (substitua depois)
      description: "Cadastre-se rapidamente e faça login com segurança.",
    },
    {
      label: <Home className="w-6 h-6" />,
      title: "Tela Inicial",
      darkMedia: "/assets/videos/telaInicialBlack.mp4",
      lightMedia: "/assets/videos/explore.mp4", // Substitua depois
      description: "Acompanhe seu progresso e acesse tudo de forma prática.",
    },
    {
      label: <Wifi className="w-6 h-6" />,
      title: "Roteadores",
      darkMedia: "/assets/videos/roteadorBlack.mp4",
      lightMedia: "/assets/videos/highlight-first.mp4", // Substitua depois
      description: "Gerencie seus roteadores e conexões facilmente.",
    },
    {
      label: <FileText className="w-6 h-6" />,
      title: "Relatórios",
      darkMedia: "/assets/videos/relatoriosBlack.mp4",
      lightMedia: "/assets/videos/hightlight-sec.mp4", // Substitua depois
      description: "Visualize relatórios detalhados sobre o uso do app.",
    },
    {
      label: <Settings className="w-6 h-6" />,
      title: "Configurações",
      darkMedia: "/assets/videos/perfilBlack.mp4",
      lightMedia: "/assets/videos/hightlight-third.mp4", // Substitua depois
      description: "Personalize o app de acordo com suas preferências.",
    },
    {
      label: <Bot className="w-6 h-6" />,
      title: "Chatbot",
      darkMedia: "/assets/videos/hightlight-fourth.mp4",
      lightMedia: "/assets/videos/hightlight-fourth.mp4", // Substitua depois
      description: "Converse com o assistente virtual para suporte rápido.",
    },
  ];

  return (
    <section className={`min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 transition-colors duration-500 relative ${
      isDarkMode ? 'bg-black' : 'bg-[#F78DA7]'
    }`}>
      {/* Interruptor de Modo Claro/Escuro */}
      <motion.button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`absolute top-6 right-6 p-4 rounded-full backdrop-blur-sm transition-all duration-300 z-10 shadow-lg ${
          isDarkMode 
            ? 'bg-white/30 text-white hover:bg-white/50 border-2 border-white/40' 
            : 'bg-black/40 text-black hover:bg-black/60 border-2 border-black/40'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDarkMode ? <Sun className="w-7 h-7" /> : <Moon className="w-7 h-7" />}
      </motion.button>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16 max-w-7xl mx-auto w-full px-4">
        {/* Barra lateral de tabs - Responsiva */}
        <aside className="flex flex-row lg:flex-col items-center p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-full lg:rounded-full w-auto lg:w-16 h-16 lg:h-auto order-2 lg:order-1">
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
                             className={`p-2 sm:p-3 rounded-full transition-all duration-300 mx-1 lg:mx-0 lg:mb-2 ${
                 index === activeIndex 
                   ? isDarkMode ? "text-white bg-white/20" : "text-black bg-black/20"
                   : isDarkMode ? "text-white/70 hover:text-white hover:bg-white/10" : "text-black/70 hover:text-black hover:bg-black/10"
               }`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {index === activeIndex ? tab.label : <Circle className="w-4 h-4" />}
            </motion.button>
          ))}
        </aside>

        {/* Showcase com mockup + vídeo dinâmico - Responsivo */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16 order-1 lg:order-2">
          {/* Mockup do Celular - Responsivo */}
          <div className="relative h-[450px] w-[270px] sm:h-[400px] sm:w-[240px] lg:h-[500px] lg:w-[300px] flex items-center justify-center lg:justify-start">
            {/* Vídeo atrás */}
            <div className="absolute top-[2%] left-[12%] h-[96%] w-[76%] sm:top-[2%] sm:left-[2%] sm:h-[97%] sm:w-[58%] lg:top-[2%] lg:left-[2%] lg:h-[97%] lg:w-[230px] overflow-hidden rounded-[18px] sm:rounded-[25px] lg:rounded-[30px] z-0">
              <AnimatePresence mode="wait">
                                 <motion.video
                   key={`${tabs[activeIndex].title}-${isDarkMode}`}
                   className="h-full w-full object-cover object-center"
                   playsInline
                   muted
                   autoPlay
                   loop
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.3 }}
                 >
                   <source src={isDarkMode ? tabs[activeIndex].darkMedia : tabs[activeIndex].lightMedia} type="video/mp4" />
                 </motion.video>
              </AnimatePresence>
            </div>

            {/* Frame do celular */}
            <img 
              src="/assets/images/frame.png" 
              alt="Mockup celular" 
              className="relative z-10 h-full w-auto"
            />
          </div>

          {/* Texto de apoio - Responsivo */}
          <motion.div 
            className={`max-w-[320px] sm:max-w-[400px] lg:max-w-[550px] text-center lg:text-left px-4 sm:px-0 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}
            initial={{ opacity: 0, y: 20, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5 }}
          >
                         <h2 className="text-2xl sm:text-3xl lg:text-5xl leading-tight font-normal">
               <span className={isDarkMode ? 'text-[#EB3C7D]' : 'text-[#660099]'}>
                 {tabs[activeIndex].title}:
               </span>
               <br />
               <span className={isDarkMode ? 'text-white' : 'text-black'}>
                 {tabs[activeIndex].description}
               </span>
             </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Prototype;
  