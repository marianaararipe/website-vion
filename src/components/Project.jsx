import { useState, useEffect } from "react";
import "./Integrantes.css";

const Project = () => {
  const [activeTab, setActiveTab] = useState("resumo");
  const [selectedODS, setSelectedODS] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIntegrante, setActiveIntegrante] = useState(0);

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
      text: "Desenvolver o Vion, uma ferramenta integrada e automatizada para diagnosticar vulnerabilidades em roteadores e redes domésticas, orientar usuários e incentivar boas práticas de cibersegurança, tornando a proteção digital acessível e proativa. O aplicativo conta com uma inteligência artificial que atua como um assistente para auxiliar na compreensão e aplicação das dicas de segurança."
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
      title: "Título Integrantes",
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
      name: "Integrante 1",
      image: "/assets/images/integrante1.jpg",
    },
    {
      id: 2,
      name: "Integrante 2", 
      image: "/assets/images/integrante2.jpg",
    },
    {
      id: 3,
      name: "Integrante 3",
      image: "/assets/images/integrante3.jpg",
    },
    {
      id: 4,
      name: "Integrante 4",
      image: "/assets/images/integrante4.jpg",
    },
    {
      id: 5,
      name: "Orientador",
      image: "/assets/images/orientador.jpg",
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

  return (
         <section id="project-section" className="min-h-screen bg-[#F5F5F5] p-2 flex flex-col justify-center">
             {/* Título à esquerda */}
       <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center md:text-left md:pl-16 md:pb-6 pt-8 md:pt-0">
         Nosso projeto
       </h1>

             {/* Box centralizado horizontalmente */}
       <div className="w-full flex justify-center">
         <div className="w-full max-w-[900px]">
           <div className="flex flex-col md:flex-row w-full">

            {/* Sidebar */}
            <div
              className="flex flex-col w-full md:w-1/4 md:flex-shrink-0 border-b-4 md:border-b-0 md:border-r-4 border-purple-800 p-0"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left border-none outline-none cursor-pointer transition-colors duration-300 text-sm md:text-base
                    ${activeTab === tab.id ? "bg-purple-800 text-white" : "bg-transparent text-gray-800"}
                    h-[50px] md:h-[70px] px-3 md:px-5 m-0`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

                         {/* Content Box */}
             <div
               className="flex flex-col flex-1 p-4 md:p-5 min-h-[60vh] md:min-h-0 overflow-y-auto"
             >
              {tabs.map((tab) =>
                tab.id === activeTab ? (
                  <div key={tab.id}>
                    {tab.id === "integrantes" ? null : (
                      <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-gray-900">{tab.title}</h2>
                    )}

                    {tab.id === "resumo" ? (
                      <p className="text-gray-800 leading-relaxed text-base md:text-lg">
                        O Vion é um aplicativo desenvolvido para aumentar a <strong>segurança digital</strong> dos clientes da Vivo. Utilizando <strong>inteligência artificial</strong>, o app analisa roteadores para identificar falhas como WPS ativo, firmware desatualizado e outras vulnerabilidades, oferecendo soluções práticas para corrigi-las. Além disso, conta com um chatbot que auxilia na detecção de fraudes em mensagens suspeitas e ensina boas práticas de segurança online.
                      </p>
                    ) : tab.id === "ods" ? (
                      <div className="space-y-4 sm:space-y-6">
                        <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6 px-2">
                          O Vion está alinhado com os ODS da ONU, contribuindo para um futuro mais seguro no ambiente digital.
                        </p>

                        {/* Container das 3 imagens das ODSs */}
                        <div className="flex flex-row justify-start items-center gap-6 overflow-x-auto pb-4 px-2 scrollbar-hide">
                          {odsData.map((ods) => (
                            <div
                              key={ods.id}
                              className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105 flex-shrink-0"
                              onClick={() => openModal(ods)}
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
                            </div>
                          ))}
                        </div>

                        <p className="text-gray-600 text-xs sm:text-sm text-center mt-4 sm:mt-6 px-2">
                          Clique em uma ODS para saber mais sobre como nosso projeto se relaciona com ela.
                        </p>
                      </div>
                    ) : tab.id === "integrantes" ? (
                      <div className="flex justify-center items-center h-full">
                        {/* Cards dos Integrantes */}
                        <div className="integrantes-container">
                          {integrantesData.map((integrante, index) => (
                            <div
                              key={integrante.id}
                              className={`integrante-option ${activeIntegrante === index ? 'active' : ''}`}
                              style={{
                                '--optionBackground': `url(${integrante.image})`
                              }}
                              onClick={() => setActiveIntegrante(index)}
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
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-800 leading-relaxed text-base md:text-lg">
                        {tab.text}
                      </p>
                    )}
                  </div>
                ) : null
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Modal das ODSs */}
      {isModalOpen && selectedODS && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
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
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
