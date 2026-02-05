
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const waLink = "https://wa.me/528991254720?text=Hola%20Monarca%20Fisio,%20estoy%20listo%20para%20mi%20tratamiento.";

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent py-20">
      {/* CRUCES GIRATORIAS - DECORATIVAS */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute left-[-4rem] md:left-[5%] top-[50%] -translate-y-1/2 text-white/10 font-black text-[18rem] md:text-[22rem] pointer-events-none select-none z-0"
      >
        +
      </motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-4rem] md:right-[5%] top-[30%] text-white/10 font-black text-[18rem] md:text-[22rem] pointer-events-none select-none z-0"
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
          {/* LOGO ACTUALIZADO - SIN RECORTES (H-AUTO) */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0, scale: 0.95 },
              visible: { y: 0, opacity: 1, scale: 1 }
            }}
            className="w-full max-w-5xl mb-12 rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-[0_0_100px_rgba(223,255,0,0.2)] relative group bg-black"
          >
            <img 
              src="https://iili.io/fDcj8FV.jpg" 
              alt="Monarca Performance Logo" 
              className="w-full h-auto block transition-transform duration-1000 group-hover:scale-[1.02]"
              style={{ 
                imageRendering: 'auto',
                WebkitBackfaceVisibility: 'hidden'
              }}
              onError={(e) => { 
                // Fallback por si acaso
                (e.target as HTMLImageElement).src = 'https://i.ibb.co/LdZN1jwH/logo.jpg'; 
              }}
            />
            {/* Acabado premium */}
            <div className="absolute inset-0 border-[1px] border-neon/10 rounded-[2.5rem] pointer-events-none"></div>
          </motion.div>

          <motion.h1 
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            className="text-6xl md:text-[10rem] font-black italic mb-6 tracking-tighter leading-[0.85] uppercase"
          >
            TU CUERPO. <br/>
            <motion.span 
              className="text-neon drop-shadow-[0_0_30px_rgba(223,255,0,0.4)]"
            >
              TU REINO.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { y: 15, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            className="text-zinc-400 text-sm md:text-2xl mb-12 font-black tracking-[0.3em] uppercase max-w-4xl mx-auto leading-tight"
          >
            REHABILITACIÓN DE ÉLITE PARA REYES DEL RENDIMIENTO
          </motion.p>

          <div className="flex justify-center">
            <motion.a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(223,255,0,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-neon text-black px-12 py-5 rounded-2xl font-black italic uppercase tracking-widest transition-all duration-300 text-xl md:text-2xl overflow-hidden shadow-2xl"
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
