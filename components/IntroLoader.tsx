"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function IntroLoader({ finishLoading }: { finishLoading: () => void }) {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading();
    }, 3500);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  const letterVariants: any = {
    initial: { y: 400, rotate: -50, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      rotate: i % 2 === 0 ? -6 : 6,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12,
        delay: i * 0.04 + 0.2,
      },
    }),
  };

  const words = ["TAKE", "YOUR", "TIME"];

  return (
    <motion.div 
      className="fixed inset-0 bg-neutral-950 flex flex-col items-center justify-center z-50 select-none overflow-hidden"
      exit={{ 
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      {/* Fondos optimizados con will-change-transform */}
      <motion.div 
        initial={{ skewX: -20 }}
        animate={{ x: ["-30vw", "130vw"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 bottom-0 w-64 bg-purple-700 opacity-20 pointer-events-none left-0 transform-gpu will-change-transform"
      />
      
      <motion.div 
        initial={{ skewX: -20 }}
        animate={{ x: ["130vw", "-30vw"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 bottom-0 w-96 bg-purple-500 opacity-10 pointer-events-none left-0 transform-gpu will-change-transform"
      />

      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 max-w-4xl px-4 text-center z-10">
        {words.map((word, wordIndex) => (
          <div key={wordIndex} className="flex gap-1 md:gap-2 mr-2 md:mr-4 mb-2 md:mb-4">
            {word.split("").map((char, charIndex) => {
              const globalIndex = wordIndex * 4 + charIndex;
              const isEven = globalIndex % 2 === 0;
              const isThird = globalIndex % 3 === 0;
              
              let styles = "bg-purple-600 text-white border-2 border-black";
              // NOTA: Quitamos las rotaciones de Tailwind (-rotate-3, rotate-6) de aquí
              // porque Framer Motion ya se encarga de rotarlas en letterVariants.
              if (isEven) styles = "bg-white text-black border-4 border-black";
              if (isThird) styles = "bg-black text-purple-400 border-2 border-purple-500 shadow-[4px_4px_0px_0px_rgba(147,51,234,1)]";

              return (
                <motion.span
                  key={charIndex}
                  custom={globalIndex}
                  initial="initial"
                  animate="animate"
                  variants={letterVariants}
                  // HEMOS BORRADO: 'transform transition-transform' para evitar el tirón
                  // Y ajustado los tamaños para que quepan bien en móvil
                  className={`inline-block font-black tracking-tighter text-3xl sm:text-4xl md:text-7xl px-2 md:px-4 py-1 md:py-2 italic uppercase will-change-transform ${styles}`}
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
        ))}
      </div>

      {/* Estrella flotante optimizada */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        // Cambiado drop-shadow por un textShadow en línea (mucho más rápido para el móvil)
        className="absolute bottom-8 right-8 text-purple-600 opacity-30 pointer-events-none text-[250px] font-black transform-gpu will-change-transform"
        style={{ textShadow: "5px 5px 0px rgba(0,0,0,0.8)" }}
      >
        ★
      </motion.div>
    </motion.div>
  );
}