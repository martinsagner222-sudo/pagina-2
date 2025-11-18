
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section id="ativar" className="text-center py-28 px-5 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-[60px] font-bold text-[#00ffaa] leading-tight">
          Amanhã já pode ser tarde.
        </h2>
        <p className="mt-6 text-2xl md:text-[32px] max-w-4xl mx-auto">
          O concorrente do lado pode ativar isso hoje e roubar TODOS os seus clientes do WhatsApp.
        </p>
        <div className="mt-12">
          <a
            href="https://seusite.com/ativar" 
            className="inline-block py-7 px-20 bg-[#ff4d00] text-white font-black text-3xl md:text-[36px] rounded-xl shadow-[0_10px_30px_rgba(255,77,0,0.4)] transition-transform duration-300 hover:scale-105 hover:bg-[#ff6a2b] no-underline"
          >
            ATIVAR AGENTE GRÁTIS – SÓ PRO NORTE DE MINAS
          </a>
          <p className="mt-8 text-[20px] text-gray-400">
            7 dias grátis • Depois R$ 297 único • Acesso vitalício
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
