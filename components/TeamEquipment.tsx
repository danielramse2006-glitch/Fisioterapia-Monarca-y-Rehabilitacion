import React, { useRef } from 'react';

const items = [
  { title: "Láser Terapéutico", desc: "Luz roja para regeneración tisular", img: "imagenes/FOTO1.jpg" },
  { title: "Electroestimulador TENS/EMS", desc: "Parches de estimulación muscular avanzada", img: "imagenes/FOTO2.jpg" },
  { title: "Masajeador de Percusión Médico", desc: "Aparato de alta frecuencia con manijas", img: "imagenes/FOTO3.jpg" },
  { title: "Ondas de Choque Radiales", desc: "Cilindro plateado de terapia profunda", img: "imagenes/FOTO4.jpg" },
  { title: "Ultrasonido Terapéutico", desc: "Cabeza gris circular de precisión", img: "imagenes/FOTO5.jpg" },
];

export const TeamEquipment: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' });
  };

  return (
    <div className="py-24 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-black italic">NUESTRO EQUIPO</h2>
            <p className="text-zinc-500 mt-2">Tecnología de punta para tu recuperación</p>
          </div>
          {/* Arrow controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-neon hover:text-neon transition-colors text-lg"
            >
              ‹
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-neon hover:text-neon transition-colors text-lg"
            >
              ›
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800"
              style={{ width: '260px', height: '340px' }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/monarca${i}/400/500`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h4 className="text-base font-bold mb-1 leading-tight">{item.title}</h4>
                <p className="text-zinc-400 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};