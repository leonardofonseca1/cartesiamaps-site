
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const portfolioItems = [
  {
    id: 1,
    title: "Mapa de Análise Urbana",
    description: "Mapeamento de uso e ocupação do solo para planejamento urbano municipal.",
    shortDescription: "Análise de uso do solo para planejamento urbano.",
    image: "/placeholder.svg",
    client: "Prefeitura Municipal",
  },
  {
    id: 2,
    title: "Mapa Ambiental",
    description: "Estudo de áreas de preservação e impacto ambiental para licenciamento.",
    shortDescription: "Áreas de preservação e impacto ambiental.",
    image: "/placeholder.svg",
    client: "Empresa de Consultoria Ambiental",
  },
  {
    id: 3,
    title: "Mapa de Bacias Hidrográficas",
    description: "Análise detalhada de bacias hidrográficas para gestão de recursos hídricos.",
    shortDescription: "Gestão de recursos hídricos.",
    image: "/placeholder.svg",
    client: "Agência Nacional de Águas",
  },
  {
    id: 4,
    title: "Mapa Turístico",
    description: "Mapa personalizado destacando pontos turísticos e rotas de acesso.",
    shortDescription: "Pontos turísticos e rotas de acesso.",
    image: "/placeholder.svg",
    client: "Secretaria de Turismo",
  },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  return (
    <section id="portfólio" className="bg-white">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto">Nosso Portfólio</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-cartesia-dark-green mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.shortDescription}</p>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="text-cartesia-light-green font-medium hover:underline flex items-center"
                >
                  Ver Detalhes
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        {selectedItem && (
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle className="text-2xl text-cartesia-dark-green">
                {selectedItem.title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <div className="space-y-4">
                <p className="text-gray-700">{selectedItem.description}</p>
                <div>
                  <span className="font-semibold text-cartesia-dark-green">Cliente:</span>{" "}
                  {selectedItem.client}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Portfolio;
