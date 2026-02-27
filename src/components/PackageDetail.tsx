import React from 'react';
import { motion } from 'framer-motion';

interface PackageDetailProps {
  title: string;
  id: string;
  onBack: () => void;
}

const packageData: Record<string, {
  includes: string[];
  treats: string[];
  extraInfo?: { title: string; desc: string }[];
  price: string;
}> = {
  quiro: {
    price: "$400",
    includes: [
      "Ajuste quiropráctico corporal",
      "Aplicación de calor",
      "Electroestimulación",
      "Aplicación con masajeadora alemana"
    ],
    treats: [
      "Dolor de espalda (alta, media o baja)",
      "Dolor de cuello y rigidez cervical",
      "Lumbalgia y contracturas musculares",
      "Dolor por malas posturas",
      "Tensión muscular general",
      "Sensación de rigidez o 'cuerpo cargado'"
    ]
  },
  masaje: {
    price: "$600",
    includes: [
      "Masaje descontracturante manual",
      "Descarga muscular profunda",
      "Aplicación de calor",
      "Electroestimulación",
      "Aplicación con masajeadora alemana"
    ],
    treats: [
      "Contracturas musculares severas",
      "Dolor muscular por estrés o sobrecarga",
      "Espalda cansada o adolorida",
      "Dolor en hombros y trapecios",
      "Fatiga muscular post-ejercicio",
      "Tensión acumulada por sedentarismo"
    ]
  },
  premium: {
    price: "$800",
    includes: [
      "Ajuste quiropráctico completo",
      "Masaje descontracturante",
      "Suspensión vertical (Descompresión)",
      "Sillón Recovery de masaje inteligente",
      "Aplicación de calor y Electroestimulación",
      "Masajeadora alemana de alta frecuencia"
    ],
    treats: [
      "Dolor crónico de espalda o cuello",
      "Lumbalgia recurrente y compresión vertebral",
      "Estrés físico y mental extremo",
      "Fatiga muscular generalizada",
      "Alta carga laboral o deportiva",
      "Recuperación integral de élite"
    ],
    extraInfo: [
      { 
        title: "🤖 Sillón Recovery", 
        desc: "Masaje inteligente automático que trabaja todo el cuerpo para eliminar el estrés." 
      },
      { 
        title: "🔝 Suspensión Vertical", 
        desc: "Técnica de descompresión controlada de la columna ideal para hernias." 
      }
    ]
  },
  fisica: {
    price: "$400",
    includes: [
      "Terapia manual especializada",
      "Ejercicios terapéuticos personalizados",
      "Movilidad articular",
      "Fortalecimiento muscular",
      "Tecnología TENS avanzada"
    ],
    treats: [
      "Lesiones musculares y articulares",
      "Esguinces y distensiones",
      "Dolor de rodilla, hombro y cadera",
      "Recuperación post-fracturas",
      "Tendinitis y sobrecargas",
      "Limitación de movimiento"
    ]
  }
};

export const PackageDetail: React.FC<PackageDetailProps> = ({ title, id, onBack }) => {
  const data = packageData[id] || packageData.quiro;
  const waLink = `https://wa.me/528991254720?text=Hola%20Monarca%20Fisio,%20me%20interesa%20el%20paquete%20de%20${encodeURIComponent(title)}.`;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black py-12 md:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="text-zinc-500 hover:text-neon transition-colors mb-8 md:mb-12 flex items-center space-x-2 font-black uppercase tracking-widest text-[10px]"
        >
          <span>←</span> <span>REGRESAR AL CATÁLOGO</span>
        </button>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between space-y-8 lg:space-y-0 mb-12 md:mb-16 border-b border-zinc-900 pb-10">
          <div className="flex flex-col leading-none">
            <span className="text-neon font-black text-4xl md:text-8xl tracking-tighter italic leading-none drop-shadow-[0_0_20px_rgba(223,255,0,0.2)]">
              MONARCA
            </span>
            <h1 className="text-2xl md:text-5xl font-black italic uppercase tracking-tighter text-white mt-4">
              {title}
            </h1>
          </div>
          <div className="text-left lg:text-right bg-zinc-900/40 p-6 rounded-2xl md:bg-transparent md:p-0">
             <span className="text-zinc-600 font-bold uppercase tracking-widest text-[10px]">INVERSIÓN POR SESIÓN</span>
             <div className="text-5xl md:text-8xl font-black text-neon italic">{data.price}</div>
             <span className="text-zinc-700 font-bold text-xs">MONEDA NACIONAL (MXN)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-[2rem]"
          >
            <h3 className="text-neon font-black mb-6 uppercase tracking-widest text-[10px] flex items-center">
              <span className="mr-2">⚡</span> ¿Qué Incluye?
            </h3>
            <ul className="space-y-4">
              {data.includes.map((item, i) => (
                <li key={i} className="text-zinc-300 flex items-start space-x-3 text-sm">
                  <span className="text-neon">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-[2rem]"
          >
            <h3 className="text-white font-black mb-6 uppercase tracking-widest text-[10px] flex items-center">
              <span className="mr-2">🎯</span> Ideal para:
            </h3>
            <ul className="space-y-4">
              {data.treats.map((item, i) => (
                <li key={i} className="text-zinc-500 flex items-start space-x-3 text-sm">
                  <span className="text-zinc-700">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="md:col-span-2 lg:col-span-1 space-y-6">
            {data.extraInfo?.map((info, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-neon/5 border border-neon/20 p-6 md:p-8 rounded-[2rem]"
              >
                <h4 className="text-neon font-black italic mb-2 uppercase text-sm">{info.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{info.desc}</p>
              </motion.div>
            ))}

            <a 
              href={waLink}
              target="_blank"
              className="block w-full text-center bg-neon text-black py-5 md:py-6 rounded-2xl font-black italic uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-2xl text-base md:text-lg"
            >
              SOLICITAR CITA
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
