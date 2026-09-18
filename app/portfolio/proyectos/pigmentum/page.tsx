"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PigmentumPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleFullscreen = () => {
    const el = iframeRef.current as (HTMLIFrameElement & {
      webkitRequestFullscreen?: () => void;
      msRequestFullscreen?: () => void;
    }) | null;
    if (!el) return;

    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  };

  const gameUrl = "/pigmentum/index.html";
  const tech = ["Unity 3D", "C#", "Pixel Art", "WebGL"];

  return (
    <div className="bg-[#0a0014] min-h-screen text-white font-sans overflow-x-hidden flex flex-col relative pb-20">

      {/* MARCA DE AGUA DE FONDO */}
      <div className="absolute top-1/4 left-5 md:left-10 opacity-5 pointer-events-none z-0 fixed">
        <h1 className="text-[100px] md:text-[200px] font-black italic -rotate-12 leading-none whitespace-nowrap">INFILTRATION</h1>
      </div>

      {/* CABECERA */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 border-b-8 border-black bg-purple-900/20 shadow-[0_8px_0_rgba(147,51,234,0.3)] gap-4 md:gap-0">
        <div className="flex items-center gap-4 md:gap-6 w-full justify-between md:justify-start">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter drop-shadow-[2px_2px_0px_rgba(147,51,234,1)] leading-none">
            Pigmentum
          </h2>
          <span className="bg-white text-black font-bold text-[10px] md:text-sm px-2 py-1 md:px-3 -rotate-2 border-2 border-black whitespace-nowrap">
            UNITY // GAME
          </span>
        </div>
        <Link href="/portfolio/proyectos" className="w-full md:w-auto mt-2 md:mt-0">
          <motion.button
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-black text-white font-black uppercase px-4 md:px-6 py-2 md:py-3 border-4 border-white italic text-sm md:text-lg shadow-[4px_4px_0px_rgba(147,51,234,1)] hover:bg-white hover:text-black hover:border-purple-600 transition-colors flex items-center justify-center md:justify-start gap-2"
          >
            <span className="text-lg md:text-xl leading-none font-mono">{"//"}</span> ATRÁS
          </motion.button>
        </Link>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col gap-8 p-4 md:p-16 max-w-6xl mx-auto w-full mt-6">

        {/* ZONA DE JUEGO */}
        <div className="relative bg-neutral-900 border-4 border-neutral-800 overflow-hidden min-h-[300px] md:min-h-[600px] flex items-center justify-center shadow-[10px_10px_0px_rgba(0,0,0,1)]">
          {isPlaying ? (
            <div className="absolute inset-0 z-10 bg-black flex flex-col">
              <div className="absolute top-4 right-4 z-20 flex gap-3">
                <button
                  onClick={() => setIsPlaying(false)}
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
                src={gameUrl}
                className="w-full h-full border-none"
                title="Jugar Pigmentum"
                allowFullScreen
              />
            </div>
          ) : (
            <>
              <img
                src="/pigmentum-bg.png"
                alt="Fondo de Pigmentum"
                className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none z-0"
              />
              <div className="absolute inset-0 bg-purple-600 mix-blend-multiply opacity-40 z-0 pointer-events-none" />

              <button
                onClick={() => setIsPlaying(true)}
                className="relative z-10 bg-purple-600 text-white px-8 py-4 border-4 border-black hover:bg-white hover:text-black hover:border-purple-600 transition-colors shadow-[6px_6px_0px_rgba(0,0,0,1)] flex items-center gap-3 cursor-pointer font-black italic uppercase"
              >
                ▶ INICIAR INFILTRACIÓN
              </button>
            </>
          )}
        </div>

        {/* FICHA DEL PROYECTO */}
        <div className="bg-black border-4 border-neutral-800 p-6 md:p-10 shadow-[10px_10px_0px_rgba(0,0,0,1)]">
          <div className="bg-purple-600 text-white font-black px-4 py-1 uppercase italic inline-block text-sm mb-4 border-2 border-black w-max transform -skew-x-12">
            METROIDVANIA 2D
          </div>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl">
            Videojuego de plataformas Metroidvania en 2D. Diseño completo de físicas, combate ágil,
            mecánicas de plataformeo e integración de animaciones pixel-art propias. Desarrollado
            íntegramente en Unity, con exportación a WebGL para jugarse directamente en el navegador.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {tech.map((t, i) => (
              <span key={i} className="bg-neutral-900 text-white font-bold text-xs uppercase px-3 py-1 border border-neutral-700">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
