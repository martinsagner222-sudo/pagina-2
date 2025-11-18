
import React from 'react';

const UrgencySection: React.FC = () => {
  return (
    <section className="bg-[#ff4d00] text-black text-center py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-[52px] font-bold leading-tight">
          Você aí de Montes Claros, Janaúba, Pirapora…
        </h2>
        <p className="mt-4 text-2xl md:text-[32px]">
          Sabe como é: toca tudo sozinho, o WhatsApp não para e o cliente não espera.
        </p>
        <p className="mt-4 text-3xl md:text-[36px] font-black">
          Quem tá testando agora já tá com agenda lotada.
        </p>
        <div className="mt-8 bg-[rgba(255,0,0,0.2)] p-5 rounded-xl text-[20px] font-black max-w-3xl mx-auto">
          ⚡ VAGAS LIMITADAS: só pras primeiras 47 clínicas da região nessa fase
          <br />
          Já foram 29 ativadas hoje
        </div>
        <div className="mt-8">
          <a
            href="#ativar"
            className="inline-block py-6 px-14 bg-white text-[#ff4d00] font-black text-2xl md:text-[32px] rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 no-underline"
          >
            EU QUERO SER UM DOS 47 – ATIVAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
