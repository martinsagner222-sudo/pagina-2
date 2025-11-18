
import React from 'react';
import type { Testimonial } from '../types';
import TestimonialCard from './TestimonialCard';

const testimonialsData: Testimonial[] = [
  {
    author: 'Dra. Camila Torres',
    company: 'Clínica Belle Vie (Montes Claros)',
    quote: 'Em 4 dias o agente marcou 18 consultas que eu teria perdido. Hoje minha agenda de dezembro já tá 87% cheia.',
    details: '— Usando desde 03/11/2025',
  },
  {
    author: 'Letícia Estética Avançada',
    company: 'Janaúba',
    quote: 'Eu respondia cliente até 1h da manhã. Agora durmo às 22h e acordo com agenda lotada. Já recuperei 6 vezes o valor.',
    details: '— +42 agendamentos em 12 dias',
  },
  {
    author: 'Dr. Rafael Dermatologia',
    company: 'Pirapora',
    quote: 'Paguei achando que era golpe… no terceiro dia já tinha R$ 4.800 marcados no automático. Melhor investimento da vida.',
    details: '— Usando desde 01/11/2025',
  },
  {
    author: 'Studio da Mari',
    company: 'Bocaiuva',
    quote: 'Eu sou sozinha no negócio. Agora o robô responde mais rápido que eu e ainda é super educado. Meus clientes amam!',
    details: '— 31 agendamentos em 9 dias',
  },
  {
    author: 'Clínica OdontoTop',
    company: 'Montes Claros',
    quote: 'Testei os 7 dias por curiosidade. No dia 5 já tinha marcado 23 avaliações. Paguei na hora.',
    details: '— +R$ 18.200 no primeiro mês',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-[#111] py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-[48px] text-center font-bold text-[#c9a96e]">
          Depoimentos reais – Norte de Minas
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        <p className="mt-12 text-center text-2xl md:text-[28px] text-[#00ffaa] font-bold">
          Mais de 127 clínicas do Norte de Minas já estão usando.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
