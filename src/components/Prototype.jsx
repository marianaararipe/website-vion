import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Home, LogIn, Wifi, FileText, Settings, Bot, Circle, Sun, Moon } from "lucide-react";

const Prototype = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true); // Inicia no modo escuro
  
  // Ref para detectar quando a seção está visível
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Dados das tabs - você pode ajustar os vídeos e descrições conforme necessário
  const tabs = [
    {
      label: <LogIn className="w-6 h-6" />,
      title: "Cadastro e Login",
      darkMedia: "/assets/videos/loginRegisterBlack.mp4", // Vídeo para modo escuro
      lightMedia: "/assets/videos/loginRegisterWhite.mp4", // Imagem/vídeo para modo claro (substitua depois)
      description: "Cadastre-se rapidamente e faça login com segurança.",
    },
    {
      label: <Home className="w-6 h-6" />,
      title: "Tela Inicial",
      darkMedia: "/assets/videos/telaInicialBlack.mp4",
      lightMedia: "/assets/videos/telaInicialWhite.mp4",
      description: "Acompanhe seu progresso e acesse tudo de forma prática.",
    },
    {
      label: <Wifi className="w-6 h-6" />,
      title: "Roteadores",
      darkMedia: "/assets/videos/roteadorBlack.mp4",
      lightMedia: "/assets/videos/roteadorWhite.mp4", // Substitua depois
      description: "Gerencie seus roteadores e conexões facilmente.",
    },
    {
      label: <FileText className="w-6 h-6" />,
      title: "Relatórios",
      darkMedia: "/assets/videos/relatoriosBlack.mp4",
      lightMedia: "/assets/videos/relatoriosWhite.mp4", // Substitua depois
      description: "Visualize relatórios detalhados sobre o uso do app.",
    },
    {
      label: <Settings className="w-6 h-6" />,
      title: "Configurações",
      darkMedia: "/assets/videos/perfilBlack.mp4",
      lightMedia: "/assets/videos/perfilWhite.mp4", // Substitua depois
      description: "Personalize o app de acordo com suas preferências.",
    },
    {
      label: <Bot className="w-6 h-6" />,
      title: "Chatbot",
      darkMedia: "/assets/videos/telaChatbotBlack.mp4",
      lightMedia: "/assets/videos/telaChatbotWhite.mp4", // Substitua depois
      description: "Converse com o assistente virtual para suporte rápido.",
    },
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative ${
        isDarkMode ? 'bg-black' : 'bg-[#F78DA7]'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Interruptor de Modo Claro/Escuro */}
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -50, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`absolute top-6 right-6 flex items-center gap-3 p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10 shadow-lg ${
          isDarkMode 
            ? 'bg-white/20 text-white hover:bg-white/30 border border-white/30' 
            : 'bg-black/20 text-black hover:bg-black/30 border border-black/30'
        }`}
        whileHover={{ scale: 1.05 }}
      >
        {/* Texto explicativo */}
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          className="text-sm font-medium whitespace-nowrap hidden sm:block"
        >
          {isDarkMode ? 'Ver Modo Claro' : 'Ver Modo Escuro'}
        </motion.span>
        
        {/* Botão com ícone */}
        <motion.button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 rounded-full transition-all duration-300 ${
            isDarkMode 
              ? 'bg-white/20 hover:bg-white/40' 
              : 'bg-black/20 hover:bg-black/40'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={isDarkMode ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </motion.button>
      </motion.div>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16 max-w-7xl mx-auto w-full px-4">
        {/* Barra lateral de tabs - Responsiva */}
        <motion.aside 
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -100, scale: 0.8 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-row lg:flex-col items-center p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-full lg:rounded-full w-auto lg:w-16 h-16 lg:h-auto order-2 lg:order-1"
        >
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
        </motion.aside>

        {/* Showcase com mockup + vídeo dinâmico - Responsivo */}
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16 order-1 lg:order-2"
        >
          {/* Mockup do Celular - Responsivo */}
          <motion.div 
            initial={{ opacity: 0, rotateY: -15, scale: 0.9 }}
            animate={isInView ? { opacity: 1, rotateY: 0, scale: 1 } : { opacity: 0, rotateY: -15, scale: 0.9 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="relative h-[450px] w-[270px] sm:h-[400px] sm:w-[240px] lg:h-[500px] lg:w-[300px] flex items-center justify-center lg:justify-start"
          >
            {/* Vídeo atrás */}
            <div className="absolute top-[2%] left-[12%] h-[96%] w-[76%] sm:top-[2%] sm:left-[12%] sm:h-[97%] sm:w-[76%] md:top-[2%] md:left-[12%] md:h-[97%] md:w-[76%] lg:top-[2%] lg:left-[2%] lg:h-[97%] lg:w-[230px] overflow-hidden rounded-[18px] sm:rounded-[25px] lg:rounded-[30px] z-0">
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
          </motion.div>

          {/* Texto de apoio - Responsivo */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex} // Força re-animação quando activeIndex muda
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`max-w-[320px] sm:max-w-[400px] lg:max-w-[550px] text-center lg:text-left px-4 sm:px-0 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
            >
                         <h2 className="text-2xl sm:text-3xl lg:text-5xl leading-tight font-normal mb-6">
               <span className={isDarkMode ? 'text-[#EB3C7D]' : 'text-[#660099]'}>
                 {tabs[activeIndex].title}:
               </span>
               <br />
               <span className={isDarkMode ? 'text-white' : 'text-black'}>
                 {tabs[activeIndex].description}
               </span>
             </h2>
             
             {/* Botão para Figma */}
             <motion.button
               onClick={() => window.open('https://www.figma.com/design/Jbgm1ifwh7qi16D9795VnK/Vion-%7C-Error-504?node-id=2001-501&t=6R9IGAyXVvrtssgC-1', '_blank')}
               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                 isDarkMode 
                   ? 'bg-[#EB3C7D] text-white hover:bg-[#d63384]' 
                   : 'bg-[#660099] text-white hover:bg-[#5a0080]'
               }`}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               Ver Protótipo no Figma
             </motion.button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Prototype;
  