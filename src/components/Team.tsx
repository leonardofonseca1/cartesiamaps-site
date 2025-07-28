
import React from "react";
import { Avatar } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Leonardo Fonseca",
    role: "Analista de Geoprocessamento",
    bio: "Graduando em Geografia (Bacharelado) na UFF Campos, estagiário em Geoprocessamento no CIDAC da prefeitura de Campos dos Goytacazes e voluntário na célula ambiental do projeto Atlas Socioeconômico do Norte Fluminense.",
    image: "/placeholder.svg",
  },
  {
    name: "Ruan Silva",
    role: "Analista de Geoprocessamento",
    bio: "Bacharel em Geografia pela UFF Campos, onde foi bolsista de Iniciação Científica pelo CNPq em duas ocasiões. Atualmente, é mestrando no Programa de Pós-Graduação em Geografia da Universidade Federal Fluminense (PPG/UFF).",
    image: "/placeholder.svg",
  },
];

const Team = () => {
  return (
    <section id="equipe" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto">Nossa Equipe</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-32 h-32 mb-6">
                  <img src={member.image} alt={member.name} />
                </Avatar>
                <h3 className="text-xl font-bold text-cartesia-dark-green mb-1">
                  {member.name}
                </h3>
                <p className="text-cartesia-light-green font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
