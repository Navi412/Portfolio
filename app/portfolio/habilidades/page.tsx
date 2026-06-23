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
        { name: "Git & GitLab (Control de versiones)", level: 85 },
      ]
    },
    {
      id: "03",
      title: "Sistemas & Móvil",
      subtitle: "Nativo & Hardware",
      color: "bg-emerald-600",
      borderColor: "border-emerald-600",
      skills: [
        { name: "Kotlin (Android Studio)", level: 85 },
        { name: "Optimización Hardware & BIOS", level: 90 },
        { name: "VR Setup & Streaming (Quest)", level: 85 },
      ]
    }
  ];

  return (
    <div className="bg-[#0a0014] min-h-screen text-white font-sans overflow-hidden flex flex-col relative pb-20">
      
      {/* CABECERA (Header) */}
      <div className="relative z-20 flex justify-between items-center p-8 border-b-8 border-black bg-purple-900/20 shadow-[0_8px_0_rgba(147,51,234,0.3)]">
        <div className="flex items-center gap-6">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter drop-shadow-[2px_2px_0px_rgba(147,51,234,1)]">
            Arsenal Técnico
          </h2>
          <span className="bg-white text-black font-bold px-3 py-1 rotate-2 border-2 border-black">
            SKILLS & PROFICIENCY
          </span>
        </div>
        <Link href="/portfolio">
          <motion.button 
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-black text-white font-black uppercase px-6 py-2 border-4 border-white italic text-lg shadow-[4px_4px_0px_rgba(147,51,234,1)]"
          >
            ◀ Atrás
          </motion.button>
        </Link>
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative z-10 p-8 md:p-16 max-w-7xl mx-auto w-full grid grid-cols-1 xl:grid-cols-3 gap-12">
        
        {skillCategories.map((category, catIdx) => (
          <motion.div 
            key={category.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIdx * 0.2, type: "spring", stiffness: 100 }}
            className="bg-black border-4 border-neutral-800 p-8 relative flex flex-col group hover:border-white transition-colors duration-300"
            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 95%, 95% 100%, 0 100%, 0 5%)' }}
          >
            {/* Número decorativo de fondo */}
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

            <div className="relative z-10 flex flex-col gap-6 flex-1">
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
                  
                  {/* Contenedor de la barra de progreso */}
                  <div className="w-full h-3 bg-neutral-900 border-2 border-black relative overflow-hidden transform -skew-x-12">
                    {/* Animación de la barra llenándose */}
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.5 + (catIdx * 0.2) + (skillIdx * 0.1), 
                        ease: "easeOut" 
                      }}
                      className={`h-full ${category.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}