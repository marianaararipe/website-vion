import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactECharts from "echarts-for-react";

const Statistics = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array com 6 gráficos na ordem especificada
  const carouselItems = [
    { 
      id: 1, 
      title: "Top 10 Country (CC) dos endereços IP de origem de varreduras e tentativas de ataque",
      description: "Análise dos países com maior volume de ataques cibernéticos",
      chart: "grafico1"
    },
    { 
      id: 2, 
      title: "Incidentes Notificados ao CERT.br -- Janeiro a Dezembro de 2024",
      description: "Distribuição de incidentes por categoria no ano de 2024",
      chart: "grafico2"
    },
    { 
      id: 3, 
      title: "Dispositivos com evidências de estarem comprometidos e sendo ativamente abusados",
      description: "Monitoramento de dispositivos comprometidos por tipo de ameaça",
      chart: "grafico3"
    },
    { 
      id: 4, 
      title: "Incidentes Notificados ao CERT.br -- Janeiro a Julho de 2025",
      description: "Análise de incidentes de Malware e Phishing em 2025",
      chart: "grafico4"
    },
    { 
      id: 5, 
      title: "Servidores DNS maliciosos no Brasil e fora do Brasil",
      description: "Evolução temporal de servidores DNS comprometidos",
      chart: "grafico5"
    },
    { 
      id: 6, 
      title: "Dispositivos com evidências de estarem comprometidos e sendo ativamente abusados",
      description: "Visão geral de todos os tipos de incidentes por mês",
      chart: "grafico6"
    }
  ];

  // Configurações dos gráficos
  const getChartOption = (chartType) => {
    switch (chartType) {
      case "grafico1":
        return {
          title: {
            text: "Top 10 Country (CC) dos endereços IP de origem de varreduras e tentativas de ataque",
            left: "center",
            textStyle: {
              fontSize: 14,
              fontWeight: "bold",
              color: "white"
            }
          },
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: ["BR","US","TW","CN","KR","SG","JP","HK","GB","DE"],
            axisLabel: { color: "white" }
          },
          yAxis: {
            type: "value",
            axisLabel: {
              color: "white",
              formatter: (value) => {
                if (value >= 1000000) return (value/1000000) + "M";
                if (value >= 1000) return (value/1000) + "k";
                return value;
              }
            },
          },
          series: [{
            name: "Tentativas de Ataque",
            type: "bar",
            data: [77925,42283,26138,21092,13682,11038,6538,6208,4611,4260],
            itemStyle: { color: "#EC4899" }
          }],
        };

      case "grafico2":
        return {
          title: {
            text: "Incidentes Notificados ao CERT.br -- Janeiro a Dezembro de 2024",
            left: "center",
            textStyle: {
              fontSize: 14,
              fontWeight: "bold",
              color: "white"
            }
          },
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "value",
            axisLabel: {
              color: "white",
              formatter: (value) => {
                if (value >= 1000000) return (value/1000000) + "M";
                if (value >= 1000) return (value/1000) + "k";
                return value;
              }
            },
          },
          yAxis: {
            name: "Categorias",
            type: "category",
            data: ["Outros","invasão","Web","Fraude","DoS","Soan"],
            nameTextStyle: {
              fontSize: 12,
              fontWeight: "bold",
              color: "#ffffff"
            },
            axisLabel: { color: "white" }
          },
          series: [{
            name: "Incidentes",
            type: "bar",
            data: [3100,6763,7937,23637,57498,417621],
            itemStyle: { color: "#8B5CF6" }
          }],
        };

      case "grafico3":
        return {
          title: {
            text: "Dispositivos com evidências de estarem comprometidos e sendo ativamente abusados",
            left: "center",
            textStyle: {
              fontSize: 14,
              fontWeight: "bold",
              color: "white"
            }
          },
          tooltip: {
            trigger: "axis"
          },
          legend: {
            bottom: 0,
            data: ["Malware SEO", "Proxy 4145/TCP", "Proxy 5678/TCP"],
            textStyle: {
              color: "white",
            }
          },
          xAxis: {
            type: "category",
            name: "Mês",
            data: [
              "2024-08","2024-09","2024-10","2024-11","2024-12",
              "2025-01","2025-02","2025-03","2025-04","2025-05","2025-06","2025-07"
            ],
            axisLabel: { color: "#ffffff" },
            nameTextStyle: { color: "#ffffff" }
          },
          yAxis: {
            type: "value",
            name: "IP",
            axisLabel: {
              color: "#ffffff",
              formatter: (value) => {
                if (value >= 1000) return value / 1000 + "k";
                return value;
              }
            },
            nameTextStyle: { color: "#ffffff" },
          },
          series: [
            {
              name: "Malware SEO",
              type: "line",
              smooth: false,
              data: [20, 25, 30, 1800, 2000, 1100, 900, 850, 950, 800, 400, 200],
              itemStyle: { color: "#EC4899" }
            },
            {
              name: "Proxy 4145/TCP",
              type: "line",
              smooth: false,
              data: [15, 18, 20, 25, 40, 35, 30, 32, 28, 27, 25, 20],
              itemStyle: { color: "#8B5CF6" }
            },
            {
              name: "Proxy 5678/TCP",
              type: "line",
              smooth: false,
              data: [10, 12, 15, 20, 22, 18, 16, 17, 15, 14, 13, 12],
              itemStyle: { color: "#8B5CF6" }
            }
          ]
        };

      case "grafico4":
        return {
          title: {
            text: "Incidentes Notificados ao CERT.br -- Janeiro a Julho de 2025",
            left: "center",
            textStyle: {
              fontSize: 14,
              fontWeight: "bold",
              color: "white"
            }
          },
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "shadow" }
          },
          legend: {
            bottom: 0,
            data: ["Malware", "Phishing"],
            textStyle: { color: "white" }
          },
          grid: {
            left: "10%",
            right: "5%",
            bottom: "15%",
            containLabel: true
          },
          xAxis: {
            type: "value",
            name: "",
            axisLabel: { color: "white" }
          },
          yAxis: {
            type: "category",
            data: ["jan", "fev", "mar", "abr", "mai", "jun", "jul"],
            axisLabel: { color: "white" }
          },
          series: [
            {
              name: "Malware",
              type: "bar",
              stack: "total",
              label: { show: true, position: "insideLeft", color: "white" },
              data: [33, 28, 8, 68, 9, 435, 344],
              itemStyle: { color: "#EC4899" }
            },
            {
              name: "Phishing",
              type: "bar",
              stack: "total",
              label: { show: true, position: "insideRight", color: "white" },
              data: [1572, 1717, 1477, 1798, 1727, 1975, 2263],
              itemStyle: { color: "#8B5CF6" }
            }
          ]
        };

      case "grafico5":
        return {
          title: {
            text: "Servidores DNS maliciosos no Brasil e fora do Brasil",
            left: "center",
            textStyle: {
              fontSize: 14,
              fontWeight: "bold",
              color: "white"
            },
            subtext: "2023-08-10 -- 2025-08-09",
            subtextStyle: { color: "white" }
          },
          tooltip: {
            trigger: "axis"
          },
          legend: {
            bottom: 0,
            data: ["Brasil", "Internacional"],
            textStyle: { color: "white" }
          },
          grid: {
            left: "8%",
            right: "5%",
            bottom: "15%",
            containLabel: true
          },
          xAxis: {
            type: "time",
            axisLabel: {
              color: "white",
              formatter: (value) => {
                const date = new Date(value);
                return date.toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric"
                });
              }
            },
          },
          yAxis: {
            type: "value",
            name: "Servidores DNS ativos por dia",
            axisLabel: { color: "white" },
            nameTextStyle: { color: "white" }
          },
          series: [
            {
              name: "Brasil",
              type: "line",
              smooth: true,
              symbol: "white",
              itemStyle: { color: "#EC4899" },
              data: [
                ["2023-09-01", 0],
                ["2023-09-15", 2],
                ["2023-10-01", 6],
                ["2024-04-01", 5],
                ["2024-10-01", 8],
                ["2025-07-01", 4]
              ]
            },
            {
              name: "Internacional",
              type: "line",
              smooth: true,
              symbol: "white",
              itemStyle: { color: "#8B5CF6" },
              data: [
                ["2023-09-01", 3],
                ["2023-09-15", 6],
                ["2023-12-01", 1],
                ["2024-06-01", 2],
                ["2024-12-01", 3],
                ["2025-06-01", 1]
              ]
            }
          ]
        };

      case "grafico6":
        return {
          title: {
            text: "Dispositivos com evidências de estarem comprometidos e sendo ativamente abusados",
            left: "center",
            textStyle: {
              fontSize: 14,
              fontWeight: "bold",
              color: "white"
            }
          },
          legend: {
            orient: "vertical",
            left: 0,
            top: "middle",
            data: ["Total", "DoS", "Fraude", "Invasão", "Scan", "Web", "Outros"],
            textStyle: {
              color: "white",
              fontSize: 14,
              fontWeight: "bold",
            },
            itemWidth: 15,
            itemHeight: 10,
            itemGap: 40
          },
          tooltip: {
            trigger: "axis"
          },
          xAxis: {
            type: "category",
            name: "Mês",
            data: ["jan","fev","mar","abr","mai","jun","total"],
            axisLabel: { color: "#ffffff" },
            nameTextStyle: { color: "#ffffff" }
          },
          yAxis: {
            type: "value",
            name: "IP",
            axisLabel: {
              color: "#ffffff",
              formatter: (value) => {
                if (value >= 1000) return value / 1000 + "k";
                return value;
              }
            },
            nameTextStyle: { color: "#ffffff" },
          },
          series: [
            {
              name: "Total",
              type: "line",
              smooth: true,
              data: [53324,37446,39530,39205,34625,28196,232642],
              itemStyle: { color: "#EC4899" }
            },
            {
              name: "DoS",
              type: "line",
              smooth: true,
              data: [2552,3490,6188,4547,368,530,18280],
              itemStyle: { color: "#8B5CF6" }
            },
            {
              name: "Fraude",
              type: "line",
              smooth: true,
              data: [1605,1745,1485,1866,1736,2410,10847],
              itemStyle: { color: "#F59E0B" }
            },
            {
              name: "Invasão",
              type: "line",
              smooth: true,
              data: [232,149,400,216,287,290,1799],
              itemStyle: { color: "#10B981" }
            },
            {
              name: "Scan",
              type: "line",
              smooth: true,
              data: [47869,31257,30497,31552,30440,24135,195750],
              itemStyle: { color: "#8B5CF6" }
            },
            {
              name: "Web",
              type: "line",
              smooth: true,
              data: [744,609,675,771,882,659,4340],
              itemStyle: { color: "#F59E0B" }
            },
            {
              name: "Outros",
              type: "line",
              smooth: true,
              data: [322,196,285,253,312,172,1626],
              itemStyle: { color: "#8B5CF6" }
            }
          ]
        };

      default:
        return {};
    }
  };

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
                {/* Item do Carousel com Gráfico */}
                <div className="text-center w-full h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {carouselItems[currentIndex].title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {carouselItems[currentIndex].description}
                    </p>
                  </div>
                                     <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-900/80 rounded-2xl border border-white/20 flex items-center justify-center backdrop-blur-sm">
                    <ReactECharts 
                      option={getChartOption(carouselItems[currentIndex].chart)}
                      style={{ height: "100%", width: "100%" }}
                      className="p-4"
                    />
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
      </div>
    </section>
  );
};

export default Statistics;
