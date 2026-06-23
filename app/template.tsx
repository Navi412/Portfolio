"use client";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Tajo 1: Panel Blanco Rápido */}
      <motion.div
        initial={{ x: "100%", skewX: -20 }}
        animate={{ x: "-150%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Curva de aceleración agresiva
        className="fixed top-0 bottom-0 w-[150vw] z-[100] bg-white pointer-events-none"
      />
      {/* Tajo 2: Panel Morado Retrasado */}
      <motion.div
        initial={{ x: "100%", skewX: -20 }}
        animate={{ x: "-150%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed top-0 bottom-0 w-[150vw] z-[100] bg-purple-600 pointer-events-none shadow-[0_0_50px_rgba(147,51,234,0.5)]"
      />
      
      {/* Contenido de la nueva página que aparece por detrás del tajo */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 200 }}
      >
        {children}
      </motion.div>
    </div>
  );
}