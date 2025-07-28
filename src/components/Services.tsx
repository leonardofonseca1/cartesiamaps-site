
import React from "react";
import { Map, ChartBar, Database, Search, Globe } from "lucide-react";

const serviceItems = [
  {
    icon: <Map className="w-10 h-10" />,
    title: "Mapas Temáticos Personalizados",
    description: "Desenvolvimento de mapas exclusivos para suas necessidades específicas.",
  },
  {
    icon: <ChartBar className="w-10 h-10" />,
    title: "Análise Geográfica e Urbana",
    description: "Estudos espaciais para planejamento e tomada de decisão.",
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Geoprocessamento Ambiental",
    description: "Processamento de dados geográficos para análises ambientais.",
  },
  {
    icon: <Search className="w-10 h-10" />,
    title: "Consultoria em SIG",
    description: "Suporte especializado em Sistemas de Informação Geográfica.",
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Mapeamento Digital",
    description: "Conversão de dados para formatos digitais georeferenciados.",
  },
];

const Services = () => {
  return (
    <section id="serviços" className="bg-cartesia-dark-green text-white">
      <div className="section-container">
        <h2 className="section-title text-center text-white mx-auto">
          Nossos Serviços
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="text-cartesia-light-green mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-cartesia-off-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
