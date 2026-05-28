"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-neon/30 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/20 blur-3xl animate-float" />
      </div>

      <div className="max-w-4xl mx-auto px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] text-neon-bright/90 mb-5"
        >
          A MODERN ANIME COMMUNITY
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-gradient leading-tight"
        >
          MARGA NANIME
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5 text-white/70 text-base sm:text-lg max-w-xl mx-auto"
        >
          Tempat berkumpul para penggemar anime — diskusi, event, gallery, dan komunitas
          yang hangat.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex items-center justify-center gap-3 flex-wrap"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-neon hover:bg-neon-bright text-black font-semibold shadow-neon transition"
          >
            Join Community
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-full glass hover:border-neon-bright/60 text-white font-medium transition"
          >
            Explore
          </a>
        </motion.div>
      </div>
    </section>
  );
}
