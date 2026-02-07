
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const waLink = "https://wa.me/528991254720?text=Hola%20Monarca%20Fisio,%20estoy%20listo%20para%20mi%20tratamiento.";

  return (
    <div className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent py-12 md:py-20">
      {/* CRUCES GIRATORIAS - DECORATIVAS */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute left-[-2rem] md:left-[5%] top-[50%] -translate-y-1/2 text-white/5 md:text-white/10 font-black text-[12rem] md:text-[22rem] pointer-events-none select-none z-0"
      >
        +
      </motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-2rem] md:right-[5%] top-[20%] text-white/5 md:text-white/10 font-black text-[12rem] md:text-[22rem] pointer-events-none select-none z-0"
      >
        +
      </motion.div>

      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
          className="w-full flex flex-col items-center"
        >
          {/* LOGO */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0, scale: 0.95 },
              visible: { y: 0, opacity: 1, scale: 1 }
            }}
            className="w-full max-w-[90%] md:max-w-5xl mb-8 md:mb-12 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl relative group bg-black"
          >
            <img 
              src="https://iili.io/fDcj8FV.jpg" 
              alt="Monarca Performance Logo" 
              className="w-full h-auto block transition-transform duration-1000 group-hover:scale-[1.02]"
            />
          </motion.div>

          <motion.h1 
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            className="text-5xl sm:text-7xl md:text-[10rem] font-black italic mb-4 md:mb-6 tracking-tighter leading-[0.9] uppercase"
          >
            TU CUERPO. <br/>
            <motion.span 
              className="text-neon drop-shadow-[0_0_20px_rgba(223,255,0,0.3)]"
            >
              TU REINO.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { y: 15, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            className="text-zinc-500 text-[10px] md:text-2xl mb-10 md:mb-12 font-black tracking-[0.2em] md:tracking-[0.3em] uppercase max-w-2xl mx-auto leading-tight"
          >
            REHABILITACIÓN DE ÉLITE PARA REYES DEL RENDIMIENTO
          </motion.p>

          <div className="flex justify-center w-full">
            <motion.a 
              href={waLink}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-neon text-black px-8 md:px-16 py-4 md:py-6 rounded-xl md:rounded-2xl font-black italic uppercase tracking-widest transition-all duration-300 text-lg md:text-2xl overflow-hidden shadow-2xl w-full max-w-xs md:max-w-none"
            >
              <span className="relative z-10">¡AGENDAR AHORA!</span>
              <motion.div 
                animate={{ x: ["-100%", "300%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/3 skew-x-12"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
