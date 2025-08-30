import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Integrantes.css";

const Project = () => {
  const [activeTab, setActiveTab] = useState("resumo");
  const [selectedODS, setSelectedODS] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIntegrante, setActiveIntegrante] = useState(0);
  const [selectedIntegrante, setSelectedIntegrante] = useState(null);
  const [isIntegranteModalOpen, setIsIntegranteModalOpen] = useState(false);

  // Refs para animações
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const tabs = [
    {
      id: "resumo",
      label: "Resumo",
      title: "O que é o Vion?",
      text: ""
    },
    {
      id: "pergunta",
      label: "Pergunta Norteadora",
      title: "Segurança Digital no mercado de telefonia",
      text: "Como podemos empregar conhecimentos e técnicas da ciência de dados e inteligência artificial para proteger clientes da Vivo contra golpes digitais e propor soluções preventivas de segurança cibernética?"
    },
    {
      id: "objetivo",
      label: "Objetivo",
      title: "Vion: Diagnóstico Inteligente para Redes Domésticas",
      text: "Desenvolver o Vion, uma ferramenta integrada e automatizada para diagnosticar <strong>vulnerabilidades</strong> em roteadores e redes domésticas, orientar usuários e incentivar boas práticas de <strong>cibersegurança</strong>, tornando a <strong>proteção digital</strong> acessível e proativa. O aplicativo conta com uma <strong>inteligência artificial</strong> que atua como um assistente para auxiliar na compreensão e aplicação das dicas de segurança."
    },
    {
      id: "ods",
      label: "ODS",
      title: "Objetivos de Desenvolvimento Sustentável",
      text: "Informações sobre os Objetivos de Desenvolvimento Sustentável (ODS)."
    },
    {
      id: "integrantes",
      label: "Error 504 - Integrantes",
      title: "",
      text: "Lista e informações dos integrantes da equipe."
    },
  ];

  // Dados das ODSs relacionadas ao projeto
  const odsData = [
    {
      id: 9,
      title: "ODS 9 - Indústria, Inovação e Infraestrutura",
      image: "/assets/images/ods9.jpeg",
      description: "Contribui para o acesso seguro e acessível à internet, garantindo infraestrutura digital robusta e inovadora, especialmente em redes domésticas."
    },
    {
      id: 16,
      title: "ODS 16 - Paz, Justiça e Instituições Eficazes",
      image: "/assets/images/ods16.jpg",
      description: "Promove um ambiente digital mais seguro para os usuários domésticos, combatendo vulnerabilidades e fortalecendo a confiança online."
    },
    {
      id: 17,
      title: "ODS 17 - Parcerias e Meios de Implementação",
      image: "/assets/images/ods17.jpg",
      description: "Fomenta a colaboração para o desenvolvimento de soluções tecnológicas que impulsionam a segurança digital, com foco na proteção de redes domésticas."
    }
  ];

  // Dados dos integrantes da equipe Error 504
  const integrantesData = [
    {
      id: 1,
      name: "Mariana",
      role: "Roteirista e Designer",
      image: "/assets/images/integrante1.jpg",
      description: "Roteirista e responsável pelo relatório. Designer de telas e do site.",
      skills: ["Roteirização", "Design", "Relatórios", "UI/UX"]
    },
    {
      id: 2,
      name: "Ivan", 
      role: "Programador Front-end",
      image: "/assets/images/integrante2.jpg",
      description: "Programador front-end do app e do site. Designer de telas e do site.",
      skills: ["React", "JavaScript", "Design", "UI/UX"]
    },
    {
      id: 3,
      name: "Emile Cristine",
      role: "Analista de Dados e Videomaker",
      image: "/assets/images/integrante3.jpg",
      description: "Analista de dados e referências. Videomaker.",
      skills: ["Análise de Dados", "Videomaker", "Referências", "Edição"]
    },
    {
      id: 4,
      name: "Pedro Santana",
      role: "Programador Front-end e Analista",
      image: "/assets/images/integrante4.jpg",
      description: "Programador front-end do site. Tratamento e visualização de dados.",
      skills: ["React", "JavaScript", "Visualização de Dados", "Tratamento de Dados"]
    },
    {
      id: 5,
      name: "Rafael",
      role: "Orientador",
      image: "/assets/images/orientador.jpg",
      description: "Orientador do projeto.",
      skills: ["Orientação", "Mentoria", "Pesquisa", "Coordenação"]
    }
  ];



  // Função para abrir o modal
  const openModal = (ods) => {
    setSelectedODS(ods);
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedODS(null);
  };

  // Função para abrir o modal do integrante
  const openIntegranteModal = (integrante) => {
    setSelectedIntegrante(integrante);
    setIsIntegranteModalOpen(true);
  };

  // Função para fechar o modal do integrante
  const closeIntegranteModal = () => {
    setIsIntegranteModalOpen(false);
    setSelectedIntegrante(null);
  };

  return (
    <motion.section 
      ref={sectionRef}
      id="project-section" 
      className="min-h-screen bg-[#F5F5F5] p-2 flex flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Título à esquerda */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center md:text-left md:pl-16 md:pb-6 pt-8 md:pt-0"
      >
        Nosso projeto
      </motion.h1>

      {/* Box centralizado horizontalmente */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full flex justify-center"
      >
        <div className="w-full max-w-[900px]">
          <div className="flex flex-col md:flex-row w-full">

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col w-full md:w-1/4 md:flex-shrink-0 border-b-4 md:border-b-0 md:border-r-4 border-purple-800 p-0"
            >
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left border-none outline-none cursor-pointer transition-colors duration-300 text-sm md:text-base
                    ${activeTab === tab.id ? "bg-purple-800 text-white" : "bg-transparent text-gray-800"}
                    h-[50px] md:h-[70px] px-3 md:px-5 m-0`}
                >
                  {tab.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Content Box */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col flex-1 p-4 md:p-5 min-h-[60vh] md:min-h-0 overflow-y-auto"
            >
              <AnimatePresence mode="wait">
                {tabs.map((tab) =>
                  tab.id === activeTab ? (
                    <motion.div 
                      key={tab.id}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                    {tab.id === "integrantes" ? null : (
                      <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-gray-900">{tab.title}</h2>
                    )}

                    {tab.id === "resumo" ? (
                      <p className="text-gray-800 leading-relaxed text-base md:text-lg">
                        O Vion é um aplicativo desenvolvido para aumentar a <strong>segurança digital</strong> dos clientes da Vivo. Utilizando <strong>inteligência artificial</strong>, o app analisa roteadores para identificar falhas como WPS ativo, firmware desatualizado e outras vulnerabilidades, oferecendo soluções práticas para corrigi-las. Além disso, conta com um <strong>chatbot</strong> que auxilia na detecção de fraudes em mensagens suspeitas e ensina boas práticas de segurança online.
                      </p>
                    ) : tab.id === "ods" ? (
                      <div className="space-y-4 sm:space-y-6">
                        <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6 px-2">
                          O Vion está alinhado com os ODS da ONU, contribuindo para um futuro mais seguro no ambiente digital.
                        </p>

                        {/* Container das 3 imagens das ODSs */}
                        <div className="flex flex-row justify-start items-start gap-6 overflow-x-auto pb-4 px-2 scrollbar-hide">
                          {odsData.map((ods, index) => (
                            <motion.div
                              key={ods.id}
                              initial={{ opacity: 0, y: 50, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
                              transition={{ duration: 0.6, delay: 1.0 + (index * 0.2) }}
                              className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105 flex-shrink-0"
                              onClick={() => openModal(ods)}
                              whileHover={{ scale: 1.1, y: -5 }}
                            >
                              {/* Imagem da ODS */}
                              <img 
                                src={ods.image} 
                                alt={ods.title}
                                className="w-40 h-40 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-lg shadow-lg object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                              {/* Fallback caso a imagem não carregue */}
                              <div 
                                className="w-40 h-40 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl sm:text-lg shadow-lg"
                                style={{ display: 'none' }}
                              >
                                ODS {ods.id}
                              </div>
                              <p className="text-sm sm:text-sm text-gray-700 mt-3 text-center max-w-32 sm:max-w-28 md:max-w-36 px-1">
                                {ods.title.split(' - ')[1]}
                              </p>
                            </motion.div>
                          ))}
                        </div>

                        <p className="text-gray-600 text-xs sm:text-sm text-center mt-4 sm:mt-6 px-2">
                          Clique em uma ODS para saber mais sobre como nosso projeto se relaciona com ela.
                        </p>
                      </div>
                    ) : tab.id === "integrantes" ? (
                      <div className="flex flex-col items-center h-full">
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="text-gray-600 text-center mb-8 max-w-2xl"
                        >
                          Clique em um integrante para conhecer mais sobre sua contribuição no projeto
                        </motion.p>

                        {/* Cards dos Integrantes */}
                        <div className="integrantes-container">
                          {integrantesData.map((integrante, index) => (
                            <motion.div
                              key={integrante.id}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                              className={`integrante-option ${activeIntegrante === index ? 'active' : ''} cursor-pointer`}
                              style={{
                                '--optionBackground': `url(${integrante.image})`
                              }}
                              onClick={() => {
                                setActiveIntegrante(index);
                                openIntegranteModal(integrante);
                              }}
                              whileHover={{ scale: 1.05, y: -5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {/* Sombra */}
                              <div className="shadow" />
                              
                              {/* Label com informações */}
                              <div className="label">
                                <div className="icon">
                                  {integrante.id}
                                </div>
                                <div className="info">
                                  <div className="main">{integrante.name}</div>
                                </div>
                              </div>

                              {/* Indicador de clique */}
                              <motion.div 
                                className="absolute top-2 right-2 bg-white/80 rounded-full p-1"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + (index * 0.1) }}
                              >
                                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-800 leading-relaxed text-base md:text-lg" dangerouslySetInnerHTML={{ __html: tab.text }}>
                      </p>
                    )}
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Modal das ODSs */}
      <AnimatePresence>
        {isModalOpen && selectedODS && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto"
            >
            {/* Header do Modal */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{selectedODS.title}</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none"
              >
                ×
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-4">
                             {/* Imagem da ODS */}
               <div className="flex justify-center mb-4">
                 <img 
                   src={selectedODS.image} 
                   alt={selectedODS.title}
                   className="w-20 h-20 rounded-lg shadow-lg object-cover"
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'flex';
                   }}
                 />
                 {/* Fallback caso a imagem não carregue */}
                 <div 
                   className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg"
                   style={{ display: 'none' }}
                 >
                   ODS {selectedODS.id}
                 </div>
               </div>

              {/* Descrição */}
              <p className="text-gray-700 leading-relaxed text-sm">
                {selectedODS.description}
              </p>
            </div>

            {/* Footer do Modal */}
            <div className="flex justify-end p-4 border-t border-gray-200">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
              >
                Fechar
              </button>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal dos Integrantes */}
      <AnimatePresence>
        {isIntegranteModalOpen && selectedIntegrante && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeIntegranteModal}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header do Modal */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">{selectedIntegrante.name}</h3>
                <button
                  onClick={closeIntegranteModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none"
                >
                  ×
                </button>
              </div>

              {/* Conteúdo do Modal */}
              <div className="p-4">
                {/* Imagem do Integrante */}
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                    <img 
                      src={selectedIntegrante.image} 
                      alt={selectedIntegrante.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl"
                      style={{ display: 'none' }}
                    >
                      {selectedIntegrante.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                {/* Cargo */}
                <div className="text-center mb-4">
                  <h4 className="text-purple-600 font-semibold text-lg">{selectedIntegrante.role}</h4>
                </div>

                {/* Descrição */}
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {selectedIntegrante.description}
                  </p>
                </div>


              </div>

              {/* Footer do Modal */}
              <div className="flex justify-end p-4 border-t border-gray-200">
                <button
                  onClick={closeIntegranteModal}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Project;
