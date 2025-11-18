
import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section className="bg-[#0f1b3d] py-20 text-center">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Um robô treinado para clínicas e estética que responde 24h, agenda automático e custa menos que 1 hora de secretária.
        </h2>
        <br />
        <a
          href="#ativar"
          className="inline-block mt-4 py-4 px-10 bg-[#00ffaa] text-black font-black text-xl md:text-2xl rounded-xl shadow-[0_10px_30px_rgba(0,255,170,0.4)] transition-transform duration-300 hover:scale-105 no-underline"
        >
          QUERO TESTAR GRÁTIS
        </a>
      </div>
    </section>
  );
};

export default Benefits;
