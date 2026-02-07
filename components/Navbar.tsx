
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const waLink = "https://wa.me/528991254720?text=Hola%20Monarca%20Fisio,%20me%20gustaría%20agendar%20una%20cita.";

  const navLinks = [
    { id: 'fisioterapia', label: 'FISIOTERAPIA' },
    { id: 'rehabilitacion', label: 'REHABILITACIÓN' },
    { id: 'quiropractica', label: 'QUIROPRÁCTICA' },
    { id: 'masajes', label: 'MASAJES' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-[100] bg-black/90 backdrop-blur-xl border-b border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <motion.div 
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => handleNav('inicio')}
        >
          <div className="w-10 h-7 md:w-12 md:h-8 rounded-lg overflow-hidden border border-zinc-800">
            <img 
              src="https://iili.io/fDcj8FV.jpg" 
              alt="Monarca Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-neon font-black text-xl md:text-2xl tracking-tighter italic leading-none">
              MONARCA
            </span>
            <span className="text-zinc-600 text-[5px] md:text-[6px] tracking-[0.4em] font-bold uppercase mt-1">
              FISIO & REHAB
            </span>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 text-[9px] font-black uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleNav(link.id)} 
              className={`${currentPage === link.id ? 'text-neon' : 'text-zinc-500'} hover:text-neon transition-all relative group py-2`}
            >
              {link.label}
              {currentPage === link.id && (
                <motion.div 
                  layoutId="nav-underline" 
                  className="absolute -bottom-0.5 left-0 w-full h-1 bg-neon shadow-[0_0_10px_#DFFF00]" 
                />
              )}
            </button>
          ))}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={waLink}
            target="_blank"
            className="bg-neon text-black px-6 py-2.5 rounded-xl font-black italic tracking-widest text-[10px]"
          >
            AGENDAR
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
           <a href={waLink} target="_blank" className="bg-neon text-black p-2 rounded-lg font-black text-[10px] italic">
             CITA
           </a>
           <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
           >
             <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span className={`h-0.5 bg-neon transition-all duration-300 ${isMenuOpen ? 'w-6 translate-y-2 -rotate-45' : 'w-6'}`}></span>
                <span className={`h-0.5 bg-neon transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                <span className={`h-0.5 bg-neon transition-all duration-300 ${isMenuOpen ? 'w-6 -translate-y-2.5 rotate-45' : 'w-5'}`}></span>
             </div>
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zinc-950 border-b border-zinc-900 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6 text-center">
               {navLinks.map((link) => (
                 <button 
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-sm font-black tracking-[0.3em] uppercase ${currentPage === link.id ? 'text-neon' : 'text-zinc-400'}`}
                 >
                   {link.label}
                 </button>
               ))}
               <div className="pt-4 border-t border-zinc-900">
                  <p className="text-zinc-600 text-[10px] font-bold tracking-widest mb-4">REYNOSA, TAMAULIPAS</p>
                  <div className="flex justify-center space-x-6">
                    <span className="text-neon">📍</span>
                    <span className="text-neon">📞</span>
                    <span className="text-neon">📸</span>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
