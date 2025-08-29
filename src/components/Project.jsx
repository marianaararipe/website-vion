import { useState, useEffect } from "react";

const Project = () => {
  const [activeTab, setActiveTab] = useState("resumo");
  const [sidebarHeight, setSidebarHeight] = useState(0);

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
      title: "Título da Pergunta",
      text: "Texto explicativo sobre a pergunta norteadora."
    },
    {
      id: "objetivo",
      label: "Objetivo",
      title: "Título do Objetivo",
      text: "Descrição do objetivo principal."
    },
    {
      id: "ods",
      label: "ODS",
      title: "Título ODS",
      text: "Informações sobre os Objetivos de Desenvolvimento Sustentável (ODS)."
    },
    {
      id: "integrantes",
      label: "Error 504 - Integrantes",
      title: "Título Integrantes",
      text: "Lista e informações dos integrantes da equipe."
    },
  ];

  // Calcula altura da sidebar para usar como maxHeight no conteúdo
  useEffect(() => {
    const height = tabs.length * 70; // 70px por botão
    setSidebarHeight(height);
  }, [tabs.length]);

  return (
    <section className="h-[90vh] flex flex-col justify-center bg-[#F5F5F5] p-2">
      {/* Título à esquerda */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center md:text-left md:pl-16 md:pb-6 mt-16 md:mt-0">
        Nosso projeto
      </h1>

      {/* Box centralizado horizontalmente */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[900px]">
          <div className="flex flex-col md:flex-row w-full overflow-hidden">

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
              className="flex flex-col flex-1 p-4 md:p-5 overflow-auto"
              style={{
                maxHeight: window.innerWidth >= 768 ? `${sidebarHeight}px` : 'none'
              }}
            >
              {tabs.map((tab) =>
                tab.id === activeTab ? (
                  <div key={tab.id}>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-gray-900">{tab.title}</h2>
                    <p className="text-gray-800 leading-relaxed text-base md:text-lg">
                      {tab.id === "resumo" ? (
                        <>
                          O Vion é um aplicativo desenvolvido para aumentar a <strong>segurança digital</strong> dos clientes da Vivo. Utilizando <strong>inteligência artificial</strong>, o app analisa roteadores para identificar falhas como WPS ativo, firmware desatualizado e outras vulnerabilidades, oferecendo soluções práticas para corrigi-las. Além disso, conta com um chatbot que auxilia na detecção de fraudes em mensagens suspeitas e ensina boas práticas de segurança online.
                        </>
                      ) : (
                        tab.text
                      )}
                    </p>
                  </div>
                ) : null
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
