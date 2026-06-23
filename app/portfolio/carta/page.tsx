"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CartaPage() {
  return (
    <div className="bg-[#0a0014] min-h-screen text-white font-sans overflow-hidden flex flex-col relative pb-20">
      
      {/* MARCA DE AGUA DE FONDO */}
      <div className="absolute top-1/4 left-10 opacity-5 pointer-events-none z-0">
        <h1 className="text-[200px] font-black italic -rotate-12 leading-none text-purple-600/40 mix-blend-screen transform -translate-y-10">
          DOCS
        </h1>
      </div>

      {/* CABECERA (Header) */}
      <div className="relative z-20 flex flex-wrap justify-between items-center p-8 border-b-8 border-black bg-purple-900/20 shadow-[0_8px_0_rgba(147,51,234,0.3)] gap-4">
        <div className="flex items-center gap-6">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter drop-shadow-[2px_2px_0px_rgba(147,51,234,1)]">
            Reference
          </h2>
          <span className="bg-white text-black font-bold px-3 py-1 -rotate-2 border-2 border-black hidden md:block">
            VERIFIED FILE
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

      {/* CONTENEDOR DEL DOCUMENTO TEXTUAL */}
      <div className="relative z-10 p-4 md:p-8 max-w-4xl mx-auto w-full mt-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="w-full bg-neutral-950 border-4 border-neutral-800 p-6 md:p-12 relative flex flex-col shadow-[12px_12px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_rgba(147,51,234,1)] hover:border-purple-500 transition-all duration-300 group"
        >
          
          {/* BARRA SUPERIOR ESTILO TERMINAL + BOTÓN DESCARGA */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b-2 border-neutral-800 pb-6 gap-4">
            <div className="flex items-center gap-3">
              <span className="flex gap-1">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </span>
              <span className="text-purple-400 font-mono text-sm font-bold tracking-widest uppercase ml-2">
                &gt; CARTA_RECOMENDACIÓN.TXT
              </span>
            </div>
            
            {/* BOTÓN DE DESCARGA DEL PDF ORIGINAL */}
            <a 
              href="/CartaRecomendación.pdf" 
              download="CartaRecomendación.pdf"
              className="bg-purple-600 text-white font-black uppercase px-4 py-2 border-2 border-black text-xs shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black hover:border-purple-600 transition-colors flex items-center gap-2 transform -skew-x-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              DESCARGAR PDF ORIGINAL
            </a>
          </div>

          {/* CONTENIDO DE LA CARTA */}
          <div className="font-mono text-neutral-300 text-sm md:text-base leading-relaxed space-y-6">
            
            {/* CABECERA DEL EMISOR */}
            <div className="border-l-4 border-purple-600 pl-4 mb-10">
              <p className="font-bold text-white text-lg tracking-wide uppercase">Joan Morera Perich</p>
              <p className="text-neutral-400">Jefe del equipo de desarrollo del videojuego Moción</p>
              <p className="text-neutral-400">Técnico Informático de Gestión (Universitat de Girona, 2005)</p>
              <p className="text-neutral-400">Compañía de Jesús Provincia de España</p>
              <p className="text-purple-400 mt-1 hover:underline cursor-pointer">joanmorera@jesuitas.es</p>
              <p className="mt-4 text-neutral-500 font-bold">Lleida, 8 de junio de 2026</p>
            </div>

            <p className="font-bold text-white uppercase tracking-widest">A quien pueda interesar:</p>

            <p>
              Por medio de la presente hago constar que <span className="bg-purple-900/30 text-purple-300 font-bold px-1 border border-purple-500/30">Iván Martín Vallejo</span> ha trabajado durante 410h en el equipo de programadores de nuestro videojuego Moción desde el 12 de enero de 2026 al 28 de mayo de 2026, con el objetivo de completar sus prácticas de empresa del Grado superior de Desarrollo de Aplicaciones Multiplataforma en el centro iFP - Innovación en Formación Profesional.
            </p>

            <p>
              Puedo decir como tutor suyo que su implicación en la tarea encomendada, su capacidad de análisis y resolución de los retos que se le presentaban, y su creatividad para proponer innovaciones o características que veía útiles en el contexto, han sido valores y aptitudes más que sobresalientes en Iván. Como programador del sector de la cinemática machinima final (Sector S16) ha logrado conjugar el arte de unas perspectivas y automatizaciones muy cinematográficas, con sus conocimientos en <span className="text-white font-bold">Unity 3D y C#</span>. En concreto, aprendió desde cero y con gran capacidad la técnica de <span className="text-white font-bold">Cinemachine</span>, configuró las secuencias junto con sus efectos especiales vfx y sfx, e incluso grabó para el resto de compañeros/as un video-tutorial explicativo para facilitar el aprendizaje y compartir sus conocimientos. 
            </p>

            <p>
              Su trabajo se ha desarrollado en cinco escenarios completos distintos (CasaSamuel, Exteriores, UniversidadPlanta0, Laboratorio Futuro, Dormitorio), dentro de los cuales ha dejado programadas las cinemáticas con gran precisión y calidad. Además de todo esto, ha contribuido siempre que ha podido a crear buen entendimiento en el equipo, ha apoyado a los y las compañeras que tenían problemas con machinimas, y destaco también su gran capacidad de trabajar autónomamente y con responsabilidad las tareas encomendadas, y la comunicación de informes muy completos de sus avances.
            </p>

            {/* CAJA DE RECOMENDACIÓN DESTACADA */}
            <div className="bg-purple-900/20 border-2 border-purple-600 p-6 text-white font-bold text-base md:text-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] my-8 transform -skew-x-2">
              <span className="text-purple-400 text-2xl leading-none mr-2">"</span>
              Por todos estos motivos, considero que Iván Martín Vallejo es un muy buen candidato para ocupar cualquier puesto de trabajo relacionado con la programación y el desarrollo de videojuegos. Si desean más información, estoy a vuestra disposición para lo que necesiten. Sin duda volveríamos a reclutarlo para nuestro proyecto, pues hemos quedado muy contentos y agradecidos con él.
            </div>

            <p>Sin otro particular, reciban un cordial saludo.</p>

            {/* PIE DE FIRMA */}
            <div className="mt-12 pt-8 border-t-2 border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <p className="text-neutral-400">Atentamente,</p>
                <p className="font-black text-white text-xl mt-4 uppercase tracking-widest">Joan Morera Perich</p>
              </div>
              
              {/* SELLO DE FIRMA DIGITAL ESTILO TERMINAL */}
              <div className="text-[10px] text-green-500 font-mono border border-green-500/30 p-3 bg-green-950/20 uppercase tracking-widest">
                [ FIRMA DIGITAL VALIDADA ]<br/>
                <span className="text-neutral-400">Emisor:</span> MORERA PERICH JOAN<br/>
                <span className="text-neutral-400">Fecha:</span> 08/06/2026
              </div>
            </div>

          </div>

          {/* DECORACIÓN CIBERNÉTICA */}
          <div className="absolute -bottom-4 -right-4 bg-black border-2 border-purple-600 px-4 py-1 text-purple-400 font-mono text-xs shadow-[4px_4px_0px_rgba(147,51,234,1)] z-20">
            SYS.LOG // REFERENCE_VERIFIED
          </div>
        </motion.div>
      </div>
    </div>
  );
}