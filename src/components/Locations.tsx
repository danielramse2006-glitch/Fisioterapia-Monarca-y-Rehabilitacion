import React, { useState } from 'react';

const locations = {
  occidental: {
    name: "Occidental",
    fullName: "Sucursal Occidental",
    address: "Calle Occidental #995, Col. Rodríguez",
    map: "https://maps.app.goo.gl/Bt3CxEhP1oiAhNEi6"
  },
  plazanorte: {
    name: "Plaza Norte",
    fullName: "Sucursal Plaza Norte",
    address: "Carretera a Mty #100, Col. Granjas Económicas del Norte (Detrás de Café Moots)",
    map: "https://maps.app.goo.gl/iPf4qN7VFK7zjgwF8"
  }
};

export const Locations: React.FC = () => {
  const [active, setActive] = useState<keyof typeof locations>('occidental');
  
  const igLink = "https://www.instagram.com/monarca_rehabilitacion24";
  const fbLink = "https://www.facebook.com/carreravaqueraextrema";
  const waLink = "https://wa.me/528991254720";

  return (
    <div className="py-20 md:py-32 bg-zinc-950 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-black italic mb-6 md:mb-8 tracking-tighter uppercase">UBICACIONES</h2>
            <p className="text-zinc-600 mb-8 md:mb-10 text-sm md:text-base leading-relaxed">Tecnología de élite cerca de ti. Selecciona la sucursal que más te convenga.</p>
            
            <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-4 mb-8">
              {Object.entries(locations).map(([key, loc]) => (
                <button 
                  key={key}
                  onClick={() => setActive(key as any)}
                  className={`flex-1 lg:w-full p-4 md:p-6 rounded-xl md:rounded-2xl border text-center lg:text-left flex items-center justify-center lg:justify-between transition-all font-black uppercase text-[10px] md:text-xs tracking-widest ${active === key ? 'bg-zinc-900 border-neon text-white' : 'bg-transparent border-zinc-800 text-zinc-500'}`}
                >
                  <span>{loc.name}</span>
                  <span className="hidden lg:block text-neon">›</span>
                </button>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start space-x-4 mb-12 lg:mb-0">
               <a href={igLink} target="_blank" className="w-12 h-12 bg-zinc-900 rounded-full border border-zinc-800 flex items-center justify-center text-neon hover:border-neon transition-colors">📸</a>
               <a href={fbLink} target="_blank" className="w-12 h-12 bg-zinc-900 rounded-full border border-zinc-800 flex items-center justify-center text-neon hover:border-neon transition-colors font-black italic">f</a>
               <a href={waLink} target="_blank" className="w-12 h-12 bg-zinc-900 rounded-full border border-zinc-800 flex items-center justify-center text-neon hover:border-neon transition-colors">💬</a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-neon p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] text-black flex flex-col justify-between min-h-[300px] shadow-2xl">
             <div>
               <div className="text-3xl md:text-4xl mb-6">📍</div>
               <h3 className="text-3xl md:text-4xl font-black italic mb-4 md:mb-6 uppercase tracking-tight">{locations[active].fullName}</h3>
               <p className="text-base md:text-lg font-bold leading-tight mb-8">{locations[active].address}</p>
             </div>
             <a 
              href={locations[active].map} 
              target="_blank" 
              className="flex items-center space-x-2 font-black uppercase tracking-widest text-[10px] md:text-xs hover:underline bg-black/5 p-3 rounded-lg w-fit"
             >
               <span>VER EN GOOGLE MAPS</span>
               <span>→</span>
             </a>
          </div>

          <div className="lg:col-span-4 bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between min-h-[300px]">
             <div>
               <div className="text-3xl md:text-4xl mb-6 text-neon">🕒</div>
               <h3 className="text-3xl md:text-4xl font-black italic mb-6 uppercase tracking-tight">HORARIOS</h3>
               
               <div className="space-y-6">
                 <div>
                   <p className="text-neon text-[8px] font-black uppercase tracking-widest mb-1">Lunes a Viernes</p>
                   <p className="text-xl md:text-2xl font-black uppercase tracking-tighter">9:00 AM – 8:00 PM</p>
                 </div>
                 <div className="pt-4 border-t border-zinc-800/50">
                   <p className="text-neon text-[8px] font-black uppercase tracking-widest mb-1">Sábado</p>
                   <p className="text-xl md:text-2xl font-black uppercase tracking-tighter">9:00 AM – 4:00 PM</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
