"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function PortfolioMenu() {
  const router = useRouter();

  // Estado para el menú central (Solo usado en PC)
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  // Opciones del menú principal central
  const menuItems = [
    { title: "ESTUDIOS", subtitle: "Academic Stats", url: "/portfolio/estudios" },
    { title: "PROYECTOS", subtitle: "Infiltrations & Apps", url: "/portfolio/proyectos" },
    { title: "HABILIDADES", subtitle: "Technical Skills", url: "/portfolio/habilidades" },
    { title: "SOCIAL LINK", subtitle: "Contact & Network", url: "/portfolio/social" }
  ];

  // Enlaces de acción
  const actionLinks = [
    { 
      name: "GITHUB", 
      url: "https://github.com/Navi412", 
      isExternal: true 
    },
    { 
      name: "CURRICULUM", 
      url: "/Curriculum%20Vitae%20CV%20Iv%C3%A1n%20Mart%C3%ADn%20Vallejo.pdf", 
      isExternal: true, 
      download: "Curriculum Vitae CV Iván Martín Vallejo.pdf" 
    },
    { 
      name: "CARTA RECOMEND.", 
      url: "/portfolio/carta", 
      isExternal: false 
    }
  ];

  return (
    // Añadimos overflow-y-auto en móvil por si la pantalla es muy pequeña y necesita scroll
    <div className="bg-[#0a0014] min-h-screen text-white font-sans overflow-x-hidden md:overflow-hidden relative flex flex-col md:flex-row items-center select-none pt-24 md:pt-0">
      
      {/* 1. FONDO INMERSIVO */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none fixed">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[150vw] md:w-[150vw] h-[150vw] md:h-[150vw] rounded-full border-[10px] border-purple-600/40"
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[10%] w-[120vw] h-[120vw] rounded-full border-[16px] border-purple-700/30"
        />
      </div>

      {/* 2. TOP LEFT: Caja de Status (Adaptable a móvil y PC) */}
      <div className="absolute top-4 md:top-8 left-0 z-50 bg-white text-black pl-4 md:pl-8 pr-8 md:pr-16 py-2 md:py-4 border-y-4 border-r-4 border-black shadow-[6px_6px_0px_0px_rgba(147,51,234,1)] md:shadow-[8px_8px_0px_0px_rgba(147,51,234,1)]">
        <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter leading-none uppercase">Iván</h2>
        <p className="text-xs md:text-sm font-bold uppercase mt-1 text-purple-700">Graduado en DAM</p>
      </div>

      {/* 3. LADO IZQUIERDO: Nombre Gigante de Fondo */}
      <div className="absolute left-[-25vw] md:left-[-5vw] top-0 bottom-0 flex items-center z-10 pointer-events-none opacity-10 md:opacity-100 fixed">
        <h1 className="text-[150px] md:text-[250px] font-black italic text-purple-600/40 -rotate-90 tracking-tighter mix-blend-screen transform -translate-y-10">
          NAVI
        </h1>
      </div>

      {/* ========================================================= */}
      {/* VISTA ORDENADOR (Idéntica a tu código, oculta en móvil)   */}
      {/* ========================================================= */}
      
      {/* Action Links Desktop */}
      <div className="absolute right-0 top-1/3 z-40 hidden md:flex flex-col gap-6 items-end">
        {actionLinks.map((link, i) => (
          <motion.a
            key={`desk-link-${i}`}
            href={link.isExternal ? link.url : undefined}
            onClick={(e) => {
              if (!link.isExternal) {
                e.preventDefault();
                router.push(link.url);
              }
            }}
            target={link.isExternal && !link.download ? "_blank" : undefined}
            rel={link.isExternal ? "noopener noreferrer" : undefined}
            download={link.download}
            initial={{ x: 150 }}
            animate={{ x: 20 }}
            whileHover={{ 
              x: -10,
              backgroundColor: "#ffffff",
              color: "#000000",
              transition: { type: "spring", stiffness: 400, damping: 15 }
            }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
            className="bg-neutral-900 text-white border-4 border-black pl-10 pr-12 py-3 w-72 shadow-[-6px_6px_0px_0px_rgba(147,51,234,1)] hover:shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] relative transform -skew-x-12 cursor-pointer transition-colors duration-75 block group"
          >
            <div className="absolute top-0 left-0 w-3 h-full bg-purple-600 group-hover:bg-black transition-colors duration-75" />
            <span className="text-xl font-black italic uppercase tracking-tight skew-x-12 block whitespace-nowrap">
              {link.name}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Menú Central Desktop */}
      <div className="relative z-30 hidden md:flex flex-col items-start ml-[30vw] space-y-[-20px]">
        {menuItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const xOffset = index * 25; 

          return (
            <div 
              key={`desk-menu-${index}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onClick={() => router.push(item.url)}
              className="relative cursor-pointer group"
              style={{ marginLeft: `${xOffset}px` }}
            >
              {isHovered && (
                <motion.div
                  layoutId="menu-splash-desktop"
                  className="absolute inset-0 bg-purple-600 z-[-1] pointer-events-none"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  style={{ 
                    clipPath: 'polygon(10% 0%, 100% 15%, 90% 100%, 0% 85%)',
                    transform: 'scale(1.3) rotate(-2deg)'
                  }}
                />
              )}

              <motion.div 
                className="py-2 px-4"
                animate={{ x: isHovered ? 20 : 0, scale: isHovered ? 1.05 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="flex flex-col">
                  <div className="h-4 overflow-hidden mb-1">
                    <AnimatePresence>
                      {isHovered && (
                        <motion.span 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 20, opacity: 0 }}
                          className="text-sm font-bold text-black uppercase tracking-widest block bg-white px-2 w-max shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        >
                          {item.subtitle}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <span className={`text-8xl font-black italic uppercase tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-colors duration-200 ${
                    isHovered ? 'text-white' : 'text-purple-400/50'
                  }`}>
                    {item.title}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* VISTA MÓVIL (Rediseñada para vertical, oculta en PC)      */}
      {/* ========================================================= */}
      <div className="relative z-30 flex md:hidden flex-col w-full px-6 pb-12">
        
        {/* Menú Principal Móvil */}
        <div className="flex flex-col gap-4 mt-8 w-full">
          {menuItems.map((item, index) => (
            <motion.div
              key={`mob-menu-${index}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              onClick={() => router.push(item.url)}
              whileTap={{ scale: 0.95 }}
              className="relative w-full cursor-pointer bg-neutral-950 border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(147,51,234,1)] transform -skew-x-6"
            >
              {/* Adorno visual */}
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-600" />
              
              <div className="pl-4 skew-x-6 flex flex-col items-start">
                <span className="bg-white text-black px-2 text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-1 inline-block">
                  {item.subtitle}
                </span>
                <span className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter text-white drop-shadow-[2px_2px_0px_rgba(147,51,234,0.5)]">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Links Móvil (Separador visual y botones full width) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="mt-12 w-full"
        >
          <div className="w-full h-1 bg-purple-600 mb-6 transform -skew-x-12 relative">
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0014] px-4 text-purple-400 text-sm font-bold italic tracking-widest">
               /// ACTIONS ///
             </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {actionLinks.map((link, i) => (
              <a
                key={`mob-link-${i}`}
                href={link.isExternal ? link.url : undefined}
                onClick={(e) => {
                  if (!link.isExternal) {
                    e.preventDefault();
                    router.push(link.url);
                  }
                }}
                target={link.isExternal && !link.download ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                download={link.download}
                className="w-full bg-white text-black border-4 border-purple-600 py-3 text-center shadow-[4px_4px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 transition-all"
              >
                <span className="text-xl font-black italic uppercase tracking-tight">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

      </div>

    </div>
  );
}