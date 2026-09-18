"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BacklogPage() {
  const repoUrl = "https://github.com/Navi412/App-Steamdb";
  const tech = ["Node.js", "node:sqlite", "Electron", "HTML/CSS/JS", "GitHub Actions"];

  const funcionalidades = [
    "Sincroniza automáticamente la biblioteca de Steam y, opcionalmente, Xbox/Game Pass y Epic Games.",
    "Guarda snapshots periódicos del contador acumulado de horas y deriva sola cuánto se jugó en cada intervalo, ya que ninguna API ofrece histórico directo.",
    "Permite añadir a mano juegos de otras plataformas (Nintendo físico, etc.).",
    "Enriquece cada juego con el tiempo estimado para completarlo vía IGDB.",
    "Carátulas personalizables por juego, subiendo imagen o pegando una URL.",
    "Onboarding guiado que conecta cada plataforma con validación en vivo contra la API real."
  ];

  return (
    <div className="bg-[#0a0014] min-h-screen text-white font-sans overflow-x-hidden flex flex-col relative pb-20">

      {/* MARCA DE AGUA DE FONDO */}
      <div className="absolute top-1/4 left-5 md:left-10 opacity-5 pointer-events-none z-0 fixed">
        <h1 className="text-[100px] md:text-[200px] font-black italic -rotate-12 leading-none whitespace-nowrap">BACKLOG</h1>
      </div>

      {/* CABECERA */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 border-b-8 border-black bg-blue-900/20 shadow-[0_8px_0_rgba(37,99,235,0.3)] gap-4 md:gap-0">
        <div className="flex items-center gap-4 md:gap-6 w-full justify-between md:justify-start">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter drop-shadow-[2px_2px_0px_rgba(37,99,235,1)] leading-none">
            Backlog
          </h2>
          <span className="bg-white text-black font-bold text-[10px] md:text-sm px-2 py-1 md:px-3 -rotate-2 border-2 border-black whitespace-nowrap">
            APP // DESKTOP &amp; ANDROID
          </span>
        </div>
        <Link href="/portfolio/proyectos" className="w-full md:w-auto mt-2 md:mt-0">
          <motion.button
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-black text-white font-black uppercase px-4 md:px-6 py-2 md:py-3 border-4 border-white italic text-sm md:text-lg shadow-[4px_4px_0px_rgba(37,99,235,1)] hover:bg-white hover:text-black hover:border-blue-600 transition-colors flex items-center justify-center md:justify-start gap-2"
          >
            <span className="text-lg md:text-xl leading-none font-mono">{"//"}</span> ATRÁS
          </motion.button>
        </Link>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col gap-8 p-4 md:p-16 max-w-6xl mx-auto w-full mt-6">

        {/* ZONA DESTACADA / CTA REPO */}
        <div className="relative bg-neutral-900 border-4 border-neutral-800 overflow-hidden min-h-[220px] flex flex-col items-center justify-center gap-6 shadow-[10px_10px_0px_rgba(0,0,0,1)] p-8 text-center">
          <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-20 z-0 pointer-events-none" />
          <p className="relative z-10 text-neutral-400 font-mono text-sm md:text-base max-w-xl">
            Un único lugar para ver cuántas horas sumás entre Steam, Xbox y Epic —
            sin depender de que cada launcher lleve su propia cuenta.
          </p>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 border-4 border-black hover:bg-white hover:text-black hover:border-blue-600 transition-colors shadow-[6px_6px_0px_rgba(0,0,0,1)] flex items-center gap-3 cursor-pointer font-black italic uppercase"
            >
              ▶ VER REPOSITORIO EN GITHUB
            </motion.div>
          </a>
        </div>

        {/* FICHA DEL PROYECTO */}
        <div className="bg-black border-4 border-neutral-800 p-6 md:p-10 shadow-[10px_10px_0px_rgba(0,0,0,1)]">
          <div className="bg-blue-600 text-white font-black px-4 py-1 uppercase italic inline-block text-sm mb-4 border-2 border-black w-max transform -skew-x-12">
            TRACKER DE VIDEOJUEGOS
          </div>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl">
            Siempre me picó la curiosidad por saber cuántas horas sumaba en total entre todos mis
            videojuegos, pero cada launcher las guarda por su lado y no hay forma de juntarlas.
            Backlog nació de eso: un sitio único donde ver tu biblioteca y tus horas jugadas,
            vengan de Steam, Xbox, Epic o de donde sea.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {tech.map((t, i) => (
              <span key={i} className="bg-neutral-900 text-white font-bold text-xs uppercase px-3 py-1 border border-neutral-700">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* FUNCIONALIDADES */}
        <div className="bg-black border-4 border-neutral-800 p-6 md:p-10 shadow-[10px_10px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-6 drop-shadow-[2px_2px_0px_rgba(37,99,235,0.6)]">
            Qué hace
          </h3>
          <ul className="flex flex-col gap-3">
            {funcionalidades.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-neutral-300 text-base leading-relaxed">
                <span className="text-blue-500 font-black mt-1">▸</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CÓMO SE USA + DISEÑO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black border-4 border-neutral-800 p-6 md:p-8 shadow-[10px_10px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter mb-4 drop-shadow-[2px_2px_0px_rgba(37,99,235,0.6)]">
              Cómo se usa
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              App de escritorio para Windows (instalador .exe, sin necesidad de Node/git/terminal)
              y APK para Android. También corre desde código fuente (<code className="text-blue-400">npm start</code> en
              navegador, <code className="text-blue-400">npm run electron</code> como app nativa) —
              mismo backend para ambas formas. CI/CD con GitHub Actions compila y publica el
              instalador de Windows automáticamente al crear un tag de versión.
            </p>
          </div>

          <div className="bg-black border-4 border-neutral-800 p-6 md:p-8 shadow-[10px_10px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter mb-4 drop-shadow-[2px_2px_0px_rgba(37,99,235,0.6)]">
              Diseño técnico
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              Arquitectura en capas con dependencia en una sola dirección: <code className="text-blue-400">/ui → /api → /db, /sync, /core</code>.
              El corazón de la app es la derivación de sesiones de juego a partir de pares de
              instantáneas consecutivas del contador acumulado — lógica pura en <code className="text-blue-400">/core</code>,
              sin dependencias y completamente testeable, que trata igual los datos de APIs
              externas y los introducidos a mano, sin que el origen se filtre a la capa de estadísticas.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
