"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HabilidadesPage() {
  const skillCategories = [
    {
      id: "01",
      title: "Game Dev & Arte 2D",
      subtitle: "Motor & Creatividad",
      color: "bg-purple-600",
      borderColor: "border-purple-600",
      skills: [
        { name: "Unity 3D", level: 90 },
        { name: "C# Scripting", level: 85 },
        { name: "Aseprite & Piskel", level: 95 },
        { name: "Photoshop (UI/Sprites)", level: 80 },
      ]
    },
    {
      id: "02",
      title: "Desarrollo Web",
      subtitle: "Frontend & Frameworks",
      color: "bg-orange-600",
      borderColor: "border-orange-600",
      skills: [
        { name: "Next.js & React", level: 95 },
        { name: "Angular", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Git & GitLab (Versiones)", level: 85 },
      ]
    },
    {
      id: "03",
      title: "Sistemas & Móvil",
      subtitle: "Nativo & Hardware",
      color: "bg-emerald-600",
      borderColor: "border-emerald-600",
      skills: [
        { name: "Kotlin (Android)", level: 85 },
        { name: "Hardware & BIOS", level: 90 },
        { name: "VR Setup & Streaming", level: 85 },
      ]
    }
  ];

  return (
    // overflow-x-hidden md:overflow-hidden permite scroll en móvil
    <div className="bg-[#0a0014] min-h-screen text-white font-sans overflow-x-hidden md:overflow-hidden flex flex-col relative pb-20">
      
      {/* CABECERA (Header adaptable) */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 border-b-8 border-black bg-purple-900/20 shadow-[0_8px_0_rgba(147,51,234,0.3)] gap-4 md:gap-0">
        <div className="flex items-center gap-4 md:gap-6 w-full justify-between md:justify-start">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter drop-shadow-[2px_2px_0px_rgba(147,51,234,1)] leading-none">
            Arsenal Técnico
          </h2>
          <span className="bg-white text-black font-bold text-[10px] md:text-sm px-2 py-1 md:px-3 rotate-2 border-2 border-black whitespace-nowrap">
            SKILLS & PROFICIENCY
          </span>
        </div>
        <Link href="/portfolio" className="w-full md:w-auto mt-2 md:mt-0">
          <motion.button 
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-black text-white font-black uppercase px-4 md:px-6 py-2 md:py-3 border-4 border-white italic text-sm md:text-lg shadow-[4px_4px_0px_rgba(147,51,234,1)] flex items-center justify-center md:justify-start gap-2"
          >
            <span className="text-lg md:text-xl leading-none font-mono">{"//"}</span> ATRÁS
          </motion.button>
        </Link>
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative z-10 p-4 md:p-16 max-w-7xl mx-auto w-full grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12 mt-4 md:mt-0">
        
        {skillCategories.map((category, catIdx) => (
          <motion.div 
            key={category.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIdx * 0.2, type: "spring", stiffness: 100 }}
            className="group"
          >
            
            {/* ======================================================== */}
            {/* VISTA ORDENADOR                                          */}
            {/* ======================================================== */}
            <div 
              className="hidden md:flex bg-black border-4 border-neutral-800 p-8 relative flex-col hover:border-white transition-colors duration-300 h-full"
              style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 95%, 95% 100%, 0 100%, 0 5%)' }}
            >
              <div className="absolute top-2 right-4 text-7xl font-black italic text-neutral-900 pointer-events-none select-none z-0 group-hover:text-neutral-800 transition-colors">
                {category.id}
              </div>

              <div className="relative z-10 mb-8">
                <span className={`${category.color} text-white font-black px-3 py-1 uppercase italic text-xs border-2 border-black -skew-x-12 inline-block mb-2 shadow-[2px_2px_0px_rgba(0,0,0,1)]`}>
                  {category.subtitle}
                </span>
                <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white">
                  {category.title}
                </h3>
              </div>

              <div className="relative z-10 flex flex-col gap-6 flex-1 justify-end">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                      <span className="font-bold text-sm tracking-wider uppercase text-neutral-300">
                        {skill.name}
                      </span>
                      <span className="font-black italic text-sm text-neutral-500">
                        LVL {skill.level}
                      </span>
                    </div>
                    
                    <div className="w-full h-3 bg-neutral-900 border-2 border-black relative overflow-hidden transform -skew-x-12">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + (catIdx * 0.2) + (skillIdx * 0.1), ease: "easeOut" }}
                        className={`h-full ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ======================================================== */}
            {/* VISTA MÓVIL                                              */}
            {/* ======================================================== */}
            <div className="flex md:hidden flex-col bg-neutral-950 border-4 border-neutral-800 shadow-[6px_6px_0px_rgba(0,0,0,1)] relative overflow-hidden">
              
              {/* Barra lateral de color para identificar la categoría */}
              <div className={`absolute left-0 top-0 bottom-0 w-2 ${category.color}`} />

              <div className="p-5 pl-6 flex flex-col h-full">
                {/* Título y número */}
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                    {category.title}
                  </h3>
                  <span className="text-neutral-700 font-mono font-black text-xl italic">
                    {category.id}
                  </span>
                </div>
                
                {/* Subtítulo */}
                <div className="mb-6">
                  <span className={`${category.color} text-white font-bold px-2 py-0.5 text-[10px] uppercase tracking-wider border border-black inline-block transform -skew-x-6`}>
                    {category.subtitle}
                  </span>
                </div>

                {/* Barras de Skills adaptadas a móvil */}
                <div className="flex flex-col gap-4 mt-auto">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex flex-col gap-1">
                      <div className="flex justify-between items-end">
                        <span className="font-bold text-[11px] tracking-wider uppercase text-neutral-300">
                          {skill.name}
                        </span>
                        <span className={`font-black italic text-[11px] ${category.color.replace('bg-', 'text-')}`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Barra de progreso más fina y con menos inclinación para móvil */}
                      <div className="w-full h-2 bg-neutral-900 border border-black relative overflow-hidden transform -skew-x-6">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + (catIdx * 0.1) + (skillIdx * 0.1), ease: "easeOut" }}
                          className={`h-full ${category.color}`}
                        />
                      </div>
                    </div>
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