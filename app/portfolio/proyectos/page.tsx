"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ProyectosPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [playGame, setPlayGame] = useState<string | null>(null);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if ((iframeRef.current as any).webkitRequestFullscreen) {
        (iframeRef.current as any).webkitRequestFullscreen();
      } else if ((iframeRef.current as any).msRequestFullscreen) {
        (iframeRef.current as any).msRequestFullscreen();
      }
    }
  };

  const proyectos = [
    {
      id: "01",
      title: "Pigmentum",
      type: "UNITY // GAME",
      tech: ["Unity 3D", "C#", "Pixel Art", "WebGL"],
      desc: "Videojuego de plataformas Metroidvania en 2D. Diseño completo de físicas, combate ágil, mecánicas de plataformeo e integración de animaciones pixel-art propias.",
      color: "bg-purple-600",
      gameUrl: "/pigmentum/index.html", 
      imageUrl: "/pigmentum-bg.png", // <-- AQUÍ ENLAZAMOS TU NUEVA IMAGEN
      imagePlaceholder: "PIGMENTUM_GAMEPLAY.GIF" 
    }
  ];

  return (
    <div className="bg-[#0a0014] min-h-screen text-white font-sans overflow-hidden flex flex-col relative pb-20">
      
      <div className="absolute top-1/4 left-10 opacity-5 pointer-events-none z-0">
        <h1 className="text-[200px] font-black italic -rotate-12 leading-none">INFILTRATION</h1>
      </div>

      <div className="relative z-20 flex justify-between items-center p-8 border-b-8 border-black bg-purple-900/20 shadow-[0_8px_0_rgba(147,51,234,0.3)]">
        <div className="flex items-center gap-6">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter drop-shadow-[2px_2px_0px_rgba(147,51,234,1)]">
            Log de Proyectos
          </h2>
          <span className="bg-white text-black font-bold px-3 py-1 -rotate-2 border-2 border-black">
            PROYECTOS Y DESARROLLOS
          </span>
        </div>
        <Link href="/portfolio">
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-black text-white font-black uppercase px-6 py-2 border-4 border-white italic text-lg shadow-[4px_4px_0px_rgba(147,51,234,1)]"
          >
            ◀ Volver Atrás
          </motion.button>
        </Link>
      </div>

      <div className="relative z-10 flex flex-col gap-16 p-8 md:p-16 max-w-7xl mx-auto w-full">
        {proyectos.map((proj, idx) => {
          const isHovered = hoveredProject === idx;
          const isPlaying = playGame === proj.id;

          return (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50, skewX: -5 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              transition={{ delay: idx * 0.2, type: "spring", stiffness: 100 }}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative flex flex-col md:flex-row items-stretch group"
            >
              <div className="absolute -left-10 -top-10 text-9xl font-black italic text-neutral-800/50 group-hover:text-purple-600/30 transition-colors pointer-events-none z-0">
                {proj.id}
              </div>

              <div className="w-full md:w-1/2 bg-black border-4 border-neutral-800 p-8 relative z-10 group-hover:border-purple-500 transition-colors shadow-[10px_10px_0px_rgba(0,0,0,1)] group-hover:shadow-[10px_10px_0px_rgba(147,51,234,1)] flex flex-col justify-center">
                <div className={`${proj.color} text-white font-black px-4 py-1 uppercase italic inline-block text-sm mb-4 border-2 border-black w-max transform -skew-x-12`}>
                  {proj.type}
                </div>
                <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4 text-white">
                  {proj.title}
                </h3>
                <p className="text-lg text-neutral-400 mb-6 font-medium">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="bg-neutral-900 text-white font-bold text-xs uppercase px-3 py-1 border border-neutral-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/2 relative bg-neutral-900 border-4 border-l-0 border-neutral-800 overflow-hidden min-h-[350px] flex items-center justify-center group-hover:border-purple-500 transition-colors">
                
                {proj.gameUrl && isPlaying ? (
                  <div className="absolute inset-0 z-50 bg-black flex flex-col">
                    <div className="absolute top-4 right-4 z-[60] flex gap-3">
                      <button 
                        onClick={() => setPlayGame(null)}
                        className="bg-black text-white px-4 py-2 border-2 border-white font-black italic uppercase text-xs shadow-[4px_4px_0px_rgba(220,38,38,1)] hover:bg-red-600 hover:text-white hover:border-black transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <span className="text-lg leading-none">✖</span> CERRAR
                      </button>

                      <button 
                        onClick={handleFullscreen}
                        className="bg-purple-600 text-white px-4 py-2 border-2 border-black font-black italic uppercase text-xs shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black hover:border-purple-600 transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <span className="text-lg leading-none">⛶</span> AMPLIAR
                      </button>
                    </div>
                    
                    <iframe 
                      ref={iframeRef}
                      src={proj.gameUrl} 
                      className="w-full h-full border-none"
                      title={`Jugar ${proj.title}`}
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <>
                    <motion.div 
                      className={`absolute inset-0 ${proj.color} mix-blend-multiply opacity-50 z-20 pointer-events-none`}
                      animate={{ opacity: isHovered ? 0 : 0.5 }}
                    />

                    <motion.div 
                      animate={{ scale: isHovered ? 1.05 : 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="absolute inset-0 bg-neutral-800 flex flex-col items-center justify-center font-black italic text-neutral-600 text-2xl uppercase border-4 border-dashed border-neutral-700 m-4 z-10 overflow-hidden"
                    >
                      {/* LA MAGIA DEL FONDO: Renderiza la imagen si existe */}
                      {proj.imageUrl && (
                        <img 
                          src={proj.imageUrl} 
                          alt={`Fondo de ${proj.title}`} 
                          className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none z-0" 
                        />
                      )}

                      {/* Botón flotando por encima de la imagen */}
                      <div className="relative z-30">
                        {proj.gameUrl ? (
                          <button 
                            onClick={() => setPlayGame(proj.id)}
                            className="bg-purple-600 text-white px-8 py-4 border-4 border-black hover:bg-white hover:text-black hover:border-purple-600 transition-colors shadow-[6px_6px_0px_rgba(0,0,0,1)] flex items-center gap-3 cursor-pointer pointer-events-auto"
                          >
                            ▶ INICIAR INFILTRACIÓN
                          </button>
                        ) : (
                          <div className="flex flex-col items-center">
                            <span>[ REEMPLAZAR POR ARCHIVO ]</span>
                            <span className="text-purple-500 text-lg mt-2">{proj.imagePlaceholder}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                    
                    <AnimatePresence>
                      {isHovered && !isPlaying && (
                        <motion.div
                          initial={{ x: "-100%", skewX: -45 }}
                          animate={{ x: "200%" }}
                          transition={{ duration: 0.5 }}
                          className="absolute top-0 bottom-0 w-32 bg-white/20 pointer-events-none z-40"
                        />
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}