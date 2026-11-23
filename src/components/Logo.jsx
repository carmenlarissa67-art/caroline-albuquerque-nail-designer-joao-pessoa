import React from 'react';

// Logo da Carol Albuquerque: o nome em serifa espaçada e "Nail Designer" em
// letra cursiva por cima, como nos posts do Instagram dela, com um ponto
// vermelho da cor do batom que aparece nas fotos.
export default function Logo({ light = false }) {
  const main = light ? '#f3ebe2' : '#2d201b';
  const accent = light ? '#e2bfb4' : '#9a6a5e';
  const red = light ? '#e0545b' : '#b3242c';
  return (
    <span className="inline-flex flex-col items-start leading-none select-none" aria-label="Carol Albuquerque Nail Designer">
      <span className="flex items-center gap-1.5">
        <span className="font-serif font-medium text-[0.9rem] sm:text-[1.05rem] tracking-[0.24em]" style={{ color: main }}>CAROL ALBUQUERQUE</span>
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: red }} aria-hidden="true" />
      </span>
      <span className="font-script text-[1.6rem] sm:text-[1.8rem] leading-none mt-1 self-end pr-2" style={{ color: accent }}>Nail Designer</span>
    </span>
  );
}
