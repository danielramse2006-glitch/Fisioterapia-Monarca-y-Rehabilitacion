import React from 'react';
import { motion } from 'framer-motion';

const packs = [
  { id: "paquete-quiro", icon: "🦴", title: "Ajuste Quiropráctico Completo", price: "$400" },
  { id: "paquete-fisica", icon: "🧘", title: "Terapia Física Especializada", price: "$400" },
  { id: "paquete-masaje", icon: "💆", title: "Masaje Descontracturante", price: "$600" },
  { id: "paquete-premium", icon: "👑", title: "Servicio Premium Monarca", price: "$800", rec: true },
];

interface PackagesProps {
  onSelectPackage: (id: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <div className="py-20 md:py-32 bg-black px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black italic mb-4 uppercase tracking-tighter"
          >
            INVERSIÓN
          </motion.h2>
          <p className="text-zinc-600 uppercase tracking-widest text-[9px] md:text-xs font-black">Tu salud es tu activo más valioso. Elige tu plan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {packs.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectPackage(p.id)}
              className={`p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between group cursor-pointer relative overflow-hidden ${p.rec ? 'bg-zinc-900/60 border-neon/50' : 'bg-zinc-900/20 border-zinc-800'}`}
            >
              {p.rec && (
                <div className="absolute top-0 right-0 bg-neon text-black text-[8px] font-black px-4 py-2 rounded-bl-2xl uppercase italic">
                  Top Choice
                </div>
              )}
              
              <div className="flex items-center space-x-6 md:space-x-8 mb-6 sm:mb-0">
                <span className="text-5xl md:text-6xl group-hover:scale-110 transition-transform">{p.icon}</span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black italic leading-tight uppercase max-w-[200px] md:max-w-[250px]">{p.title}</h3>
                </div>
              </div>

              <div className="text-left sm:text-right border-t sm:border-t-0 border-zinc-800 pt-4 sm:pt-0">
                <div className="text-4xl md:text-5xl font-black text-neon">{p.price}</div>
                <div className="text-zinc-600 text-[9px] font-bold mt-1 uppercase tracking-widest">MXN por sesión</div>
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-4 text-neon hidden sm:block"
                >→</motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
