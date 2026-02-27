import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { icon: "💪", title: "FISIOTERAPIA AVANZADA", desc: "Tratamientos personalizados de rehabilitación con equipo de última generación." },
  { icon: "⚡", title: "REHABILITACIÓN POST-LESIÓN", desc: "Recuperación completa con seguimiento especializado y terapias manuales." },
  { icon: "🦴", title: "AJUSTE QUIROPRÁCTICO", desc: "Alineación vertebral profesional para alivio del dolor y mejor postura." },
  { icon: "💆", title: "MASAJE DESCONTRACTURANTE", desc: "Liberación de tensión muscular profunda con técnicas especializadas." },
  { icon: "🔌", title: "ELECTROESTIMULACIÓN TENS", desc: "Tecnología TENS para recuperación muscular y alivio del dolor." },
  { icon: "👑", title: "SERVICIO PREMIUM", desc: "Experiencia completa: ajuste + sillón Recovery + suspensión vertical.", highlight: true }
];

export const Services: React.FC = () => {
  return (
    <div className="py-20 md:py-32 bg-black px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 text-center lg:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 md:mb-8 italic uppercase tracking-tighter">SERVICIOS</h2>
          <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
            Contamos con los tratamientos más avanzados de la región. Nuestro equipo está comprometido con tu rendimiento supremo.
          </p>
          <div className="flex flex-col space-y-4 max-w-xs mx-auto lg:mx-0">
             <div className="bg-zinc-900/50 p-4 rounded-xl flex items-center space-x-4 border-l-4 border-l-neon">
               <span className="text-xl">🏆</span>
               <span className="text-[10px] font-black text-white uppercase tracking-widest">Tecnología de Élite</span>
             </div>
             <div className="bg-zinc-900/50 p-4 rounded-xl flex items-center space-x-4 border-l-4 border-l-neon">
               <span className="text-xl">👨‍⚕️</span>
               <span className="text-[10px] font-black text-white uppercase tracking-widest">Especialistas Certificados</span>
             </div>
          </div>
        </motion.div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 md:p-8 rounded-[2rem] transition-all duration-500 border relative overflow-hidden ${s.highlight ? 'bg-neon/5 border-neon/40' : 'bg-zinc-900/30 border-zinc-800 hover:border-neon/20'}`}
            >
              <div className="text-4xl md:text-5xl mb-6">{s.icon}</div>
              <h3 className="text-xl md:text-2xl font-black mb-3 tracking-tight uppercase italic">{s.title}</h3>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-medium">{s.desc}</p>
              {s.highlight && (
                <div className="mt-6 inline-block bg-neon text-black text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Experiencia Élite
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
