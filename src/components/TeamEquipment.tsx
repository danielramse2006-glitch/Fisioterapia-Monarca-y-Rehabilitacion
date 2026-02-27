import React from 'react';

import { motion } from 'framer-motion';

const items = [
  { title: "Láser Terapéutico", desc: "Luz roja de alta potencia para regeneración celular", img: "https://i.postimg.cc/YGLmFKDX/FOTO1.jpg" },
  { title: "Electroestimulador TENS/EMS", desc: "Alivio del dolor y fortalecimiento muscular", img: "https://i.postimg.cc/ph5njbc7/FOTO2.jpg" },
  { title: "Masajeador de Percusión Médico", desc: "Masaje profundo de grado médico", img: "https://i.postimg.cc/Vr0btQZ3/FOTO3.jpg" },
  { title: "Ondas de Choque Radiales", desc: "Tratamiento avanzado para dolor crónico", img: "https://i.postimg.cc/1nVNFh7d/FOTO4.jpg" },
  { title: "Ultrasonido Terapéutico", desc: "Terapia de calor profundo para tejidos", img: "https://i.postimg.cc/7CW2bY9C/FOTO5.jpg" },
];

export const TeamEquipment: React.FC = () => {
  return (
    <div className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">NUESTRO EQUIPO</h2>
            <p className="text-neon mt-2 uppercase text-[10px] md:text-xs tracking-[0.3em] font-black animate-pulse">Tecnología de Élite en Movimiento</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 hidden md:block">
            <span className="text-2xl">⚡</span>
          </div>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          {/* Duplicamos los items para el loop infinito */}
          {[...items, ...items].map((item, i) => (
            <div key={i} className="inline-block w-[280px] md:w-[420px] mx-4 whitespace-normal group relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-zinc-800 aspect-[4/5] transition-all duration-500 hover:border-neon/50">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-[0.97] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <h4 className="text-2xl md:text-4xl font-black italic uppercase leading-tight mb-2 md:mb-4">{item.title}</h4>
                <p className="text-zinc-400 text-xs md:text-sm uppercase tracking-widest font-bold leading-relaxed">{item.desc}</p>
                <div className="mt-6 h-1 w-0 bg-neon group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
