
import React from 'react';

interface PageTemplateProps {
  name: string;
  onBack: () => void;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ name, onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-zinc-950 py-20">
      <div className="mb-12 text-center">
        <span className="text-neon font-black text-6xl md:text-8xl tracking-tighter italic opacity-80 drop-shadow-[0_0_30px_rgba(223,255,0,0.2)]">
          MONARCA
        </span>
        <div className="h-1 w-20 bg-neon mx-auto mt-4"></div>
      </div>
      <h1 className="text-4xl md:text-7xl font-black italic text-white mb-4 tracking-tighter uppercase">
        PÁGINA DE {name.toUpperCase()}
      </h1>
      <p className="text-zinc-500 max-w-md text-center mb-12 uppercase tracking-[0.3em] text-[10px] font-bold">
        Servicio especializado de rehabilitación de élite
      </p>
      <button 
        onClick={onBack}
        className="bg-neon text-black px-12 py-4 rounded-full font-black italic uppercase text-xs tracking-[0.2em] hover:scale-105 transition-all shadow-xl shadow-neon/20"
      >
        ← Volver al Inicio
      </button>
    </div>
  );
};
