
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-[#0f1b3d] to-[#000000] py-16 px-5 text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black leading-tight">
          Você está jogando cliente fora no WhatsApp <span className="text-[#ff4d00]">AGORA MESMO.</span>
          <br /><br />
          Coloque um atendente IA que NUNCA dorme, agenda sozinho e enche sua agenda em 48h.
          <br /><br />
          <span className="text-4xl md:text-6xl text-[#00ffaa]">7 dias GRÁTIS.</span> Só paga R$ 297 se sua agenda explodir.
        </h1>
        <div className="mt-8">
          <a
            href="#ativar"
            className="inline-block py-4 px-10 bg-[#ff4d00] text-white font-black text-xl md:text-2xl rounded-xl shadow-[0_10px_30px_rgba(255,77,0,0.4)] transition-transform duration-300 hover:scale-105 hover:bg-[#ff6a2b] no-underline"
          >
            ATIVAR 7 DIAS GRÁTIS AGORA
          </a>
          <p className="mt-5 text-lg">Sem cartão • Sem contrato • Zero risco</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
