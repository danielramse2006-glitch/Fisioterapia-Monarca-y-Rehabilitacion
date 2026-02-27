import React, { useRef } from 'react';

const items = [
  { title: "Láser Terapéutico", desc: "Luz roja para regeneración tisular", img: "https://i.ibb.co/S4bqp5kL/FOTO1.jpg" },
  { title: "Electroestimulador TENS/EMS", desc: "Parches de estimulación muscular avanzada", img: "https://i.ibb.co/7t27jM2n/FOTO2.jpg" },
  { title: "Masajeador de Percusión Médico", desc: "Aparato de alta frecuencia con manijas", img: "https://i.ibb.co/7NtwKyDM/FOTO3.jpg" },
  { title: "Ondas de Choque Radiales", desc: "Cilindro plateado de terapia profunda", img: "https://i.ibb.co/wF0Bw8qD/FOTO4.jpg" },
  { title: "Ultrasonido Terapéutico", desc: "Cabeza gris circular de precisión", img: "https://i.ibb.co/n8fVjC7z/FOTO5.jpg" },
];

const carouselStyles = `
  @keyframes scrollRight {
    0%   { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }
  .equipment-track {
    animation: scrollRight 10s linear infinite;
    display: flex;
  }
  .equipment-track:hover {
    animation-play-state: paused;
  }
`;

export const TeamEquipment: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return;
    trackRef.current.style.animationPlayState = 'paused';
    const current = new DOMMatrix(getComputedStyle(trackRef.current).transform).m41;
    trackRef.current.style.transform = `translateX(${current + (dir === 'left' ? 280 : -280)}px)`;
    setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.style.transform = '';
        trackRef.current.style.animationPlayState = 'running';
      }
    }, 600);
  };

  return (
    <div className="py-24 bg-black px-4">
      <style>{carouselStyles}</style>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-black italic">NUESTRO EQUIPO</h2>
            <p className="text-zinc-500 mt-2">Tecnología de punta para tu recuperación</p>
          </div>
          {/* Flechas */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-neon hover:text-neon transition-colors text-xl font-black"
            >
              ‹
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-neon hover:text-neon transition-colors text-xl font-black"
            >
              ›
            </button>
          </div>
        </div>

        {/* Carrusel auto-scroll, pausa en hover, flechas manuales */}
        <div className="relative overflow-x-hidden">
          <div className="equipment-track" ref={trackRef}>
            {[...items, ...items].map((item, i) => (
              <div
                key={i}
                className="group relative flex-shrink-0 overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 mx-3"
                style={{ width: '260px', height: '340px' }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h4 className="text-base font-bold mb-1 leading-tight">{item.title}</h4>
                  <p className="text-zinc-400 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
