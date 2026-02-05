
import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const socials = [
    { name: 'WhatsApp', url: 'https://wa.me/528991254720' },
    { name: 'Instagram', url: 'https://www.instagram.com/monarca_rehabilitacion24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { name: 'Facebook', url: 'https://www.facebook.com/carreravaqueraextrema?locale=pt_PT' },
    { name: 'TikTok', url: '#' }
  ];

  return (
    <footer className="bg-black border-t border-zinc-900 py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
            {/* LOGO EN TEXTO PARA EL FOOTER */}
            <div className="flex flex-col leading-none text-center md:text-left">
              <span className="text-neon font-black text-5xl tracking-tighter italic drop-shadow-[0_0_20px_rgba(223,255,0,0.3)]">
                MONARCA
              </span>
              <span className="text-zinc-800 text-[10px] tracking-[0.5em] font-bold uppercase mt-2">
                Tu Cuerpo. Tu Reino.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10 text-zinc-700">
            {socials.map((social) => (
               <a 
                key={social.name} 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon transition-all text-[10px] font-black uppercase tracking-[0.3em] hover:tracking-[0.5em]"
               >
                 {social.name}
               </a>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-8 text-center">
          <p className="text-zinc-800 text-[10px] font-black tracking-[0.3em] uppercase">
            © 2026 MONARCA FISIO & REHAB. REYNOSA, TAMAULIPAS.
          </p>
          <div className="flex items-center space-x-3 opacity-30">
             <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse"></div>
             <p className="text-white text-[10px] font-black tracking-widest uppercase italic">
               ELITE PERFORMANCE REHABILITATION
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
