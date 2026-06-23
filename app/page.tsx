"use client";
import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import IntroLoader from "@/components/IntroLoader";

function Home() {
  const [loading, setLoading] = useState(true);

  // Variantes para los paneles de transición con tipado explícito
  const flashPanelVariants: Variants = {
    initial: { skewX: -25, x: "110%", opacity: 0 },
    animate: {
      x: "-120%",
      opacity: 1,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.1 }
    }
  };

  return (
    <main className="bg-[#05000a] min-h-screen text-white relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* FONDO DE CINTAS */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.12] pointer-events-none flex flex-col justify-center gap-6 md:gap-10 -rotate-12 scale-[1.5]">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ x: i % 2 === 0 ? ["-50%", "0%"] : ["0%", "-50%"] }}
            transition={{ duration: 30 + i * 2, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap font-black italic text-6xl md:text-8xl text-purple-600 tracking-widest uppercase"
          >
            SYSTEM.ACCESS // PORTFOLIO // IVÁN MARTÍN // SYSTEM.ACCESS // PORTFOLIO // IVÁN MARTÍN // SYSTEM.ACCESS // PORTFOLIO // IVÁN MARTÍN // 
          </motion.div>
        ))}
      </div>
      
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05000a_80%)] pointer-events-none" />

      <AnimatePresence mode="wait">
        {loading ? (
          <IntroLoader key="loader" finishLoading={() => setLoading(false)} />
        ) : (
          <motion.div 
            key="content"
            className="flex flex-col items-center justify-center min-h-screen p-8 text-center relative z-10 w-full"
          >
            {/* CAPA DE TRANSICIÓN RELÁMPAGO */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="fixed inset-0 z-40 flex overflow-hidden pointer-events-none"
            >
              <motion.div
                initial="initial" animate="animate" exit="exit" variants={flashPanelVariants}
                className="absolute inset-0 bg-purple-950/80"
                style={{ clipPath: 'polygon(0% 15%, 70% 0%, 100% 40%, 100% 80%, 20% 100%, 0% 70%)' }}
              />
              <motion.div
                initial="initial" animate="animate" exit="exit" variants={flashPanelVariants}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="absolute inset-0 bg-white"
                style={{ clipPath: 'polygon(100% 15%, 30% 0%, 0% 40%, 0% 80%, 80% 100%, 100% 70%)' }}
              />
            </motion.div>

            {/* CONTENIDO PRINCIPAL */}
            <motion.div
              initial={{ scale: 3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.45 }}
              className="flex flex-col items-center relative z-10"
            >
              <motion.div
                animate={{ 
                  x: [0, -15, 15, -10, 10, -5, 5, 0],
                  y: [0, 10, -10, 8, -8, 0] 
                }}
                transition={{ duration: 0.4, delay: 0.45, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <h1 className="flex flex-col items-center font-black italic uppercase tracking-tight select-none">
                  <span className="text-6xl md:text-9xl text-purple-500 drop-shadow-[5px_5px_0px_rgba(255,255,255,1)]">
                    Iván Martín
                  </span>
                  <span 
                    className="text-5xl md:text-7xl text-white bg-purple-600 px-8 py-3 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-3 mt-4 inline-block transform"
                    style={{ clipPath: 'polygon(3% 0%, 100% 8%, 97% 100%, 0% 92%)' }}
                  >
                    Vallejo
                  </span>
                </h1>

                <Link href="/portfolio" className="mt-10 z-20 outline-none">
                  <motion.div 
                    initial={{ y: 50, opacity: 0, rotate: -10 }}
                    animate={{ y: 0, opacity: 1, rotate: 1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: -3, 
                      backgroundColor: "#7e22ce",
                      color: "#ffffff",
                      borderColor: "#000000",
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-xl md:text-2xl font-bold bg-white text-black px-8 py-3 border-4 border-purple-600 inline-block uppercase shadow-[4px_4px_0px_rgba(147,51,234,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] cursor-pointer select-none transition-colors duration-150"
                  >
                    Entrar al Portfolio
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Home;