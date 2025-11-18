// FIX: The original file was incomplete, causing a build error due to a missing default export.
// This complete version of the HowItWorks component, including the export, resolves the issue.
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Como funciona na prática? 3 passos:</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border-t-4 border-[#ff4d00]">
            <h3 className="text-2xl font-bold"><span className="text-[#ff4d00]">1.</span> Ative o teste GRÁTIS</h3>
            <p className="mt-4 text-gray-300">Clique no botão, preencha seu nome e WhatsApp. A gente te chama na hora e libera seu acesso por 7 dias, sem pedir cartão.</p>
          </div>
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border-t-4 border-[#ff4d00]">
            <h3 className="text-2xl font-bold"><span className="text-[#ff4d00]">2.</span> Conectamos pra você</h3>
            <p className="mt-4 text-gray-300">Nossa equipe faz a configuração do seu número em 5 minutos. Você não precisa fazer nada técnico. É só ler um QR Code e pronto.</p>
          </div>
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border-t-4 border-[#ff4d00]">
            <h3 className="text-2xl font-bold"><span className="text-[#ff4d00]">3.</span> Veja a agenda encher</h3>
            <p className="mt-4 text-gray-300">O agente IA começa a responder, qualificar e agendar com clientes na mesma hora. Você acompanha tudo pelo celular e vê sua agenda lotar sozinha.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
