
import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const getAuthorLine = () => {
    if (testimonial.author === 'Dra. Camila Torres') {
      return `${testimonial.author} – ${testimonial.company}`;
    }
    return `${testimonial.author} (${testimonial.company})`;
  };

  return (
    <div className="bg-[#1a1a1a] p-8 rounded-2xl border-l-8 border-[#c9a96e] flex flex-col h-full">
      <div className="flex-grow">
        <strong className="block text-lg">⭐⭐⭐⭐⭐ {getAuthorLine()}</strong>
        <p className="mt-4">“{testimonial.quote}”</p>
      </div>
      <small className="block mt-4 text-gray-400">{testimonial.details}</small>
    </div>
  );
};

export default TestimonialCard;
