"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      // 1. BAJAMOS EL VOLUMEN AL 20% (0.2)
      audioRef.current.volume = 0.2;

      // 2. INTENTAMOS FORZAR EL AUTOPLAY
      const attemptPlay = audioRef.current.play();
      
      if (attemptPlay !== undefined) {
        attemptPlay
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            const playOnFirstClick = () => {
              if (audioRef.current) {
                audioRef.current.play();
                setIsPlaying(true);
              }
              document.removeEventListener("click", playOnFirstClick);
            };
            document.addEventListener("click", playOnFirstClick);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/bgm.mp3" loop preload="auto" />
      
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 z-50 bg-black text-white border-2 border-purple-600 px-4 py-2 shadow-[4px_4px_0px_rgba(147,51,234,1)] font-black italic uppercase flex items-center gap-2 select-none"
        style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
      >
        <span className={isPlaying ? "text-purple-400" : "text-neutral-500"}>
          {/* AQUÍ ESTÁ EL CAMBIO: Usamos el emoji 🔊 */}
          {isPlaying ? "🔊 MÚSICA ON" : "🔇 MÚSICA OFF"}
        </span>
      </motion.button>
    </>
  );
}