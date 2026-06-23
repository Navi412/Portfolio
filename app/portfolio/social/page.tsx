"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SocialPage() {
  // Datos rediseñados con estética de sistema operativo técnico
  const socialLinks = [
    {
      id: "01",
      level: "ACCESS // LEVEL 01",
      name: "LINKEDIN",
      description: "Red profesional. Conexión directa para propuestas de desarrollo de software, colaboraciones técnicas y oportunidades laborales.",
      url: "https://www.linkedin.com/in/iv%C3%A1n-martin-vallejo",
      isExternal: true,
      color: "bg-purple-600",
      accent: "text-purple-400"
    },
    {
      id: "02",
      level: "ACCESS // LEVEL 02",
      name: "INSTAGRAM",
      description: "Espacio personal y creativo. Vistazo de fondo a proyectos visuales, arte 2D y actualizaciones casuales del día a día.",
      url: "https://www.instagram.com", 
      isExternal: true,
      color: "bg-orange-600",
      accent: "text-orange-400"
    },
    {
      id: "03",
      level: "ACCESS // LEVEL 03",
      name: "MAIL DIRECTO",
      description: "Línea directa de comunicación. Haz clic para abrir Gmail y enviarme un mensaje profesional directamente.",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=ivanmv412@gmail.com&su=Queremos%20contratarte!!",
      isExternal: true, 
      color: "bg-emerald-600",
      accent: "text-emerald-400"
    }
  ];

  return (
    <div className="bg-[#0a0014] min-h-screen text-white font-sans overflow-hidden flex flex-col relative pb-20">
      
      {/* CABECERA */}
      <div className="relative z-20 flex justify-between items-center p-8 border-b-8 border-black bg-purple-900/20 shadow-[0_8px_0_rgba(147,51,234,0.3)]">
        <div className="flex items-center gap-6">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter drop-shadow-[2px_2px_0px_rgba(147,51,234,1)]">
            Social Link
          </h2>
          <span className="bg-white text-black font-bold px-3 py-1 -rotate-2 border-2 border-black hidden md:block">
            CONTACTACTEMOS
          </span>
        </div>
        <Link href="/portfolio">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white font-black uppercase px-6 py-2 border-4 border-white italic text-lg shadow-[4px_4px_0px_rgba(147,51,234,1)]"
          >
            ◀ Regresar
          </motion.button>
        </Link>
      </div>

      {/* GRID DE TARJETAS */}
      <div className="relative z-10 p-8 md:p-16 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        
        {socialLinks.map((link, idx) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="bg-neutral-950 border-4 border-neutral-800 p-8 relative flex flex-col shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:border-purple-600 transition-colors duration-300 group cursor-pointer"
            style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)' }}
          >
            {/* STATUS BAR */}
            <div className="absolute top-0 right-0 bg-neutral-800 text-neutral-400 font-bold px-3 py-1 text-[10px] uppercase tracking-widest">
              STATUS: ACTIVE
            </div>

            <div className="mb-8 mt-2">
              <span className={`text-[10px] font-bold tracking-widest ${link.accent} block mb-2 font-mono`}>
                {link.level}
              </span>
              <h3 className="text-3xl font-black italic uppercase tracking-tighter">
                {link.name}
              </h3>
            </div>

            <p className="text-neutral-400 text-sm font-medium leading-relaxed mb-8 flex-grow">
              {link.description}
            </p>

            <div className="mt-auto w-full">
              <div className={`${link.color} text-white text-center font-black py-3 uppercase italic border-2 border-black text-sm tracking-widest group-hover:bg-white group-hover:text-black transition-colors duration-300`}>
                CONTACTAR
              </div>
            </div>
          </motion.a>
        ))}

      </div>

      {/* PIE DE PÁGINA */}
      <div className="mt-auto text-center relative z-10 py-10 border-t-2 border-neutral-900 mx-16">
        <p className="text-neutral-600 text-xs font-bold uppercase tracking-widest mb-4">
          Iván Martín Vallejo // Operational Identity Secure
        </p>
        
        <div className="inline-block border-2 border-purple-600 bg-black px-8 py-4 shadow-[4px_4px_0px_rgba(147,51,234,0.5)] transform -rotate-1">
          <p className="text-neutral-400 text-xs uppercase tracking-widest mb-1 font-mono">
            // Direct contact line
          </p>
          <a href="tel:682378476" className="text-3xl md:text-4xl font-black text-white hover:text-purple-400 transition-colors">
            682 37 84 76
          </a>
        </div>
      </div>

    </div>
  );
}