import React from 'react';
import { motion } from 'framer-motion';

interface PageTemplateProps {
  name: string;
  onBack: () => void;
}

const pageDetails: Record<string, {
  fullTitle: string;
  subtitle: string;
  desc: string;
  tech: string[];
  includes: string[];
  benefits: string[];
}> = {
  "FISIOTERAPIA": {
    fullTitle: "Fisioterapia Avanzada",
    subtitle: "RECUPERACIÓN Y MEJORA DE LA FUNCIÓN FÍSICA",
    desc: "Servicio terapéutico enfocado en la recuperación utilizando técnicas especializadas y tecnología de vanguardia para que recuperes tu movilidad absoluta.",
    tech: ["Ultrasonido terapéutico", "Láser terapéutico", "Ondas de choque", "Plataformas vibratorias", "Plataforma de masaje alemana"],
    includes: ["Terapia manual", "Ejercicios personalizados", "Movilidad articular", "Fortalecimiento muscular", "Aplicación de calor y TENS"],
    benefits: ["Lesiones musculares", "Esguinces y distensiones", "Dolor de rodilla/hombro", "Tendinitis", "Rehabilitación postoperatoria"]
  },
  "REHABILITACIÓN": {
    fullTitle: "Rehabilitación Física",
    subtitle: "PLAN TERAPÉUTICO PROGRESIVO Y SUPERVISADO",
    desc: "Enfoque integral en recuperar la fuerza, movilidad y estabilidad después de una lesión o cirugía mediante reeducación del movimiento.",
    tech: ["Láser de alta potencia", "Ondas de choque radiales", "Ultrasonido de precisión", "Plataformas de equilibrio"],
    includes: ["Diagnóstico funcional", "Ejercicios progresivos", "Reeducación del movimiento", "Coordinación y equilibrio", "Terapia manual"],
    benefits: ["Postoperatorio", "Secuelas de inmovilización", "Readaptación laboral/deportiva", "Debilidad muscular", "Fracturas"]
  },
  "QUIROPRÁCTICA": {
    fullTitle: "Ajuste Quiropráctico",
    subtitle: "ALINEACIÓN VERTEBRAL Y SISTEMA NERVIOSO",
    desc: "Corrección de desalineaciones de la columna para optimizar el funcionamiento de tu sistema nervioso y eliminar dolores de raíz.",
    tech: ["Mesa quiropráctica de precisión", "Masajeadora alemana", "Activador neurológico"],
    includes: ["Ajuste manual", "Evaluación postural", "Termoterapia", "Electroestimulación"],
    benefits: ["Dolor lumbar/cervical", "Hernias discales", "Migrañas tensionales", "Mejora de la postura", "Alineación integral"]
  },
  "MASAJES": {
    fullTitle: "Masaje Descontracturante",
    subtitle: "LIBERACIÓN DE TENSIÓN MUSCULAR PROFUNDA",
    desc: "Servicio terapéutico diseñado para relajar músculos sobrecargados y eliminar los nudos producidos por el estrés o el ejercicio intenso.",
    tech: ["Masajeadora de percusión alemana", "Aceites terapéuticos", "Piedras calientes (opcional)"],
    includes: ["Masaje manual profundo", "Descarga muscular", "Crioterapia", "Puntos gatillo"],
    benefits: ["Estrés acumulado", "Nudos musculares", "Sobrecarga deportiva", "Fatiga crónica", "Cuerpo pesado"]
  }
};

export const PageTemplate: React.FC<PageTemplateProps> = ({ name, onBack }) => {
  const content = pageDetails[name.toUpperCase()] || pageDetails["FISIOTERAPIA"];

  return (
    <div className="min-h-screen bg-zinc-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onBack}
          className="text-zinc-500 hover:text-neon mb-12 flex items-center space-x-2 font-black uppercase tracking-widest text-[10px]"
        >
          <span>←</span> <span>VOLVER AL INICIO</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <span className="text-neon font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">
                {content.subtitle}
              </span>
              <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter mb-8">
                {content.fullTitle}
              </h1>
              <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed italic mb-12">
                {content.desc}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-white font-black uppercase text-xs tracking-widest mb-6 border-b border-zinc-800 pb-2">Tecnología Monarca</h3>
                <ul className="space-y-3">
                  {content.tech.map((t, i) => (
                    <li key={i} className="text-zinc-500 text-sm flex items-center space-x-3">
                      <span className="w-1.5 h-1.5 bg-neon rounded-full"></span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-white font-black uppercase text-xs tracking-widest mb-6 border-b border-zinc-800 pb-2">Qué incluye la sesión</h3>
                <ul className="space-y-3">
                  {content.includes.map((inc, i) => (
                    <li key={i} className="text-zinc-500 text-sm flex items-center space-x-3">
                      <span className="text-neon">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-zinc-900 border border-zinc-800 p-12 rounded-[3rem] sticky top-32"
            >
              <h3 className="text-neon font-black italic text-3xl mb-8 uppercase">Padecimientos que tratamos</h3>
              <div className="space-y-4">
                {content.benefits.map((benefit, i) => (
                  <div key={i} className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 flex items-center justify-between group hover:border-neon transition-colors">
                    <span className="text-zinc-300 font-bold uppercase text-xs">{benefit}</span>
                    <span className="text-neon opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-zinc-800">
                <a 
                  href="https://wa.me/528991254720"
                  target="_blank"
                  className="block w-full text-center bg-neon text-black py-5 rounded-2xl font-black italic uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl shadow-neon/20"
                >
                  SOLICITAR VALORACIÓN
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
