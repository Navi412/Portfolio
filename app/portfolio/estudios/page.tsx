"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EstudiosPage() {
  const estudios = [
    {
      id: "01",
      title: "DESARROLLO DE APLICACIONES MULTIPLATAFORMA",
      subtitle: "GRADO SUPERIOR (DAM)",
      status: "COMPLETADO",
      centro: "iFP - Innovación en Formación Profesional",
      fecha: "2022 - 2024", // Dato a corregir
      desc: "Especialización en desarrollo de software, diseño de interfaces, acceso a bases de datos y programación orientada a objetos. La base principal del arsenal técnico.",
      tags: ["Java", "C#", "Bases de Datos", "Interfaces UI/UX"], // Datos a corregir
      color: "bg-purple-600",
      logo: "/logo-centro.png",
      logoSize: "w-28 h-28"
    },
    {
      id: "02",
      title: "BACHILLERATO DE CIENCIAS Y TECNOLOGÍA",
      subtitle: "EDUCACIÓN SECUNDARIA POSTOBLIGATORIA",
      status: "COMPLETADO",
      centro: "Colegio Guzmán el Bueno",
      fecha: "2020 - 2022", // Dato a corregir
      desc: "Base académica con fuerte enfoque en matemáticas, física y tecnología. Fundamentos lógicos y analíticos preparatorios para la programación avanzada.",
      tags: ["Matemáticas", "Física", "Tecnología Industrial"], // Datos a corregir
      color: "bg-purple-600", 
      logo: "/logo-bachiller.png",
      logoSize: "w-40 h-40" 
    }
  ];

  return (
    <div className="bg-[#0a0014] min-h-screen text-white font-sans overflow-hidden flex flex-col relative pb-20">
      
      {/* MARCA DE AGUA DE FONDO */}
      <div className="absolute top-1/4 left-10 opacity-5 pointer-events-none z-0">
        <h1 className="text-[200px] font-black italic -rotate-12 leading-none">STATS</h1>
      </div>

      {/* CABECERA (Header) */}
      <div className="relative z-20 flex justify-between items-center p-8 border-b-8 border-black bg-purple-900/20 shadow-[0_8px_0_rgba(147,51,234,0.3)]">
        <div className="flex items-center gap-6">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter drop-shadow-[2px_2px_0px_rgba(147,51,234,1)]">
            Estudios
          </h2>
          <span className="bg-white text-black font-bold px-3 py-1 -rotate-2 border-2 border-black hidden md:block">
            TRAINING & SKILLS
          </span>
        </div>
        
        {/* BOTÓN DE VOLVER */}
        <Link href="/portfolio">
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-black text-white font-black uppercase px-6 py-3 border-4 border-white italic text-lg shadow-[4px_4px_0px_rgba(147,51,234,1)] hover:bg-white hover:text-black hover:border-purple-600 transition-colors flex items-center gap-2"
          >
            <span className="text-xl leading-none font-mono">{"//"}</span> ATRÁS AL MENÚ
          </motion.button>
        </Link>
      </div>

      {/* CONTENEDOR DE ESTUDIOS */}
      <div className="relative z-10 p-8 md:p-16 max-w-5xl mx-auto w-full flex flex-col gap-12 mt-6">
        
        {estudios.map((estudio, idx) => (
          <motion.div
            key={estudio.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, type: "spring", stiffness: 100 }}
            className="bg-neutral-950 border-4 border-neutral-800 p-8 relative flex flex-col md:flex-row shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_rgba(147,51,234,1)] transition-all duration-300 group hover:border-purple-500"
          >
            
            {/* LADO IZQUIERDO: LOGO */}
            <div className="hidden md:flex items-center justify-center pr-8 border-r-4 border-neutral-800 group-hover:border-purple-500 transition-colors min-w-[200px]">
              {estudio.logo ? (
                <img 
                  src={estudio.logo} 
                  alt={`Logo de ${estudio.centro}`} 
                  className={`${estudio.logoSize} object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300`}
                />
              ) : (
                <span className="text-7xl font-black italic text-neutral-800 group-hover:text-purple-600 transition-colors">
                  {estudio.id}
                </span>
              )}
            </div>

            {/* CONTENIDO DE LA TARJETA */}
            <div className="md:pl-8 flex-1 flex flex-col justify-center mt-4 md:mt-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className={`${estudio.color} text-white font-black px-3 py-1 text-xs uppercase tracking-widest border border-black inline-block mb-2 transform -skew-x-6`}>
                    {estudio.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    {estudio.title}
                  </h3>
                </div>
                
                {/* STATUS BADGE */}
                <div className="bg-black text-white font-mono text-xs px-2 py-1 border border-neutral-700 hidden sm:block whitespace-nowrap">
                  {estudio.status}
                </div>
              </div>

              {/* NUEVOS DATOS CHULOS: Centro y Fecha */}
              <div className="flex flex-wrap gap-6 mb-4 text-xs font-bold text-neutral-500 uppercase tracking-wider font-mono">
                <span className="flex items-center gap-2">
                  <span className="text-purple-600 text-base">⌖</span> {estudio.centro}
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-purple-600 text-base">◷</span> {estudio.fecha}
                </span>
              </div>

              <p className="text-neutral-400 group-hover:text-neutral-300 font-medium leading-relaxed max-w-3xl">
                {estudio.desc}
              </p>

              {/* NUEVOS DATOS CHULOS: Tags de habilidades */}
              <div className="flex flex-wrap gap-2 mt-6">
                {estudio.tags.map((tag, i) => (
                  <span key={i} className="bg-neutral-900 text-neutral-400 font-bold text-xs uppercase px-3 py-1 border border-neutral-800 group-hover:border-purple-600 group-hover:text-white transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* DECORACIÓN CIBERNÉTICA */}
            <div className="absolute bottom-4 right-4 text-neutral-800 font-mono text-xs opacity-50 group-hover:opacity-100 transition-opacity hidden md:block">
              SYS.LOG // RECORD_FOUND
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}