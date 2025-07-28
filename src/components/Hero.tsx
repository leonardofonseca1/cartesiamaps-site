
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cartesia-dark-green"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cartesia-light-green font-montserrat tracking-wider mb-4">
            CARTESIA MAPS
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Na sua jornada para mapas precisos e análises geográficas, a Cartesia Maps será seu guia!
          </h1>
          <p className="text-lg md:text-xl text-cartesia-off-white mb-8">
            Criação de mapas temáticos, geoprocessamento aplicado, consultoria em dados espaciais e muito mais, 
            com foco na prática e resultados para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contato"
              className="px-8 py-3 bg-cartesia-light-green hover:bg-opacity-90 text-white font-medium rounded-md transition-all duration-200"
            >
              Fale Conosco
            </a>
            <a
              href="#servicos"
              className="px-8 py-3 bg-transparent border border-cartesia-off-white text-cartesia-off-white hover:bg-white hover:bg-opacity-10 font-medium rounded-md transition-all duration-200"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
