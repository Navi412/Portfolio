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
      fecha: "2022 - 2024",
      desc: "Especialización en desarrollo de software, diseño de interfaces, acceso a bases de datos y programación orientada a objetos. La base principal del arsenal técnico.",
      tags: ["Java", "C#", "Bases de Datos", "Interfaces UI/UX"],
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
      fecha: "2020 - 2022",
      desc: "Base académica con fuerte enfoque en matemáticas, física y tecnología. Fundamentos lógicos y analíticos preparatorios para la programación avanzada.",
      tags: ["Matemáticas", "Física", "Tecnología Industrial"],
      color: "bg-purple-600", 
      logo: "/logo-bachiller.png",
      logoSize: "w-40 h-40" 
    }
  ];

  return (
    <div className="bg-[#0a0014] min-h-screen text-white font-sans overflow-x-hidden md:overflow-hidden flex flex-col relative pb-20">
      
      {/* MARCA DE AGUA DE FONDO */}
      <div className="absolute top-1/4 left-10 md:left-20 opacity-5 pointer-events-none z-0 fixed">
        <h1 className="text-[120px] md:text-[200px] font-black italic -rotate-12 leading-none whitespace-nowrap">STATS</h1>
      </div>

      {/* CABECERA (Adaptable) */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 border-b-8 border-black bg-purple-900/20 shadow-[0_8px_0_rgba(147,51,234,0.3)] gap-4 md:gap-0">
        <div className="flex items-center gap-4 md:gap-6 w-full justify-between md:justify-start">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter drop-shadow-[2px_2px_0px_rgba(147,51,234,1)]">
            Estudios
          </h2>
          <span className="bg-white text-black font-bold text-xs md:text-base px-2 py-1 md:px-3 border-2 border-black -rotate-2 whitespace-nowrap">
            TRAINING & SKILLS
          </span>
        </div>
        
        {/* BOTÓN DE VOLVER */}
        <Link href="/portfolio" className="w-full md:w-auto mt-2 md:mt-0">
          <motion.button 
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-black text-white font-black uppercase px-4 md:px-6 py-2 md:py-3 border-4 border-white italic text-base md:text-lg shadow-[4px_4px_0px_rgba(147,51,234,1)] hover:bg-white hover:text-black hover:border-purple-600 transition-colors flex items-center justify-center md:justify-start gap-2"
          >
            <span className="text-lg md:text-xl leading-none font-mono">{"//"}</span> ATRÁS
          </motion.button>
        </Link>
      </div>

      {/* CONTENEDOR DE ESTUDIOS */}
      <div className="relative z-10 p-4 md:p-16 max-w-5xl mx-auto w-full flex flex-col gap-8 md:gap-12 mt-6">
        
        {estudios.map((estudio, idx) => (
          <motion.div
            key={estudio.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, type: "spring", stiffness: 100 }}
            className="group"
          >
            {/* ======================================================== */}
            {/* VISTA ORDENADOR                                          */}
            {/* ======================================================== */}
            <div className="hidden md:flex bg-neutral-950 border-4 border-neutral-800 p-8 relative flex-row shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_rgba(147,51,234,1)] transition-all duration-300 hover:border-purple-500">
              
              {/* LADO IZQUIERDO: LOGO */}
              <div className="flex items-center justify-center pr-8 border-r-4 border-neutral-800 group-hover:border-purple-500 transition-colors min-w-[200px]">
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
              <div className="pl-8 flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className={`${estudio.color} text-white font-black px-3 py-1 text-xs uppercase tracking-widest border border-black inline-block mb-2 transform -skew-x-6`}>
                      {estudio.subtitle}
                    </span>
                    <h3 className="text-4xl font-black italic uppercase tracking-tighter drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      {estudio.title}
                    </h3>
                  </div>
                  <div className="bg-black text-white font-mono text-xs px-2 py-1 border border-neutral-700 whitespace-nowrap">
                    {estudio.status}
                  </div>
                </div>

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

                <div className="flex flex-wrap gap-2 mt-6">
                  {estudio.tags.map((tag, i) => (
                    <span key={i} className="bg-neutral-900 text-neutral-400 font-bold text-xs uppercase px-3 py-1 border border-neutral-800 group-hover:border-purple-600 group-hover:text-white transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-4 right-4 text-neutral-800 font-mono text-xs opacity-50 group-hover:opacity-100 transition-opacity">
                SYS.LOG // RECORD_FOUND
              </div>
            </div>

            {/* ======================================================== */}
            {/* VISTA MÓVIL                                              */}
            {/* ======================================================== */}
            <div className="flex md:hidden bg-neutral-950 border-4 border-neutral-800 relative flex-col shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              
              {/* Franja de estado superior */}
              <div className="bg-neutral-900 px-4 py-2 flex justify-between items-center border-b-2 border-neutral-800">
                <span className="text-xs font-mono text-neutral-500 font-bold">ID: {estudio.id}</span>
                <span className="bg-black text-purple-400 font-mono text-[10px] px-2 py-1 border border-purple-900">
                  {estudio.status}
                </span>
              </div>

              <div className="p-5 relative">
                {/* Acento lateral */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-purple-600 opacity-50" />
                
                {/* Título y subtítulo */}
                <div className="pl-2 mb-4">
                  <span className="inline-block bg-purple-600 text-white font-bold px-2 py-0.5 text-[10px] uppercase tracking-wider border border-black mb-2 transform -skew-x-6">
                    {estudio.subtitle}
                  </span>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter leading-tight drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] text-white">
                    {estudio.title}
                  </h3>
                </div>

                {/* Metadatos */}
                <div className="pl-2 flex flex-col gap-2 mb-4 text-[11px] font-bold text-neutral-400 uppercase font-mono bg-black/40 p-3 border border-neutral-800/50">
                  <span className="flex items-start gap-2">
                    <span className="text-purple-600">⌖</span> 
                    <span className="leading-tight">{estudio.centro}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-purple-600">◷</span> {estudio.fecha}
                  </span>
                </div>

                {/* Descripción */}
                <p className="pl-2 text-neutral-300 text-sm font-medium leading-snug mb-5">
                  {estudio.desc}
                </p>

                {/* Tags */}
                <div className="pl-2 flex flex-wrap gap-1.5">
                  {estudio.tags.map((tag, i) => (
                    <span key={i} className="bg-neutral-900 text-purple-200/80 font-bold text-[10px] uppercase px-2 py-1 border border-neutral-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}