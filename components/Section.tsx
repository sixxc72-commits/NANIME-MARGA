"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {eyebrow && (
            <p className="text-xs tracking-[0.3em] text-neon-bright/90 mb-3">{eyebrow}</p>
          )}
          <h2 className="font-display text-3xl sm:text-4xl text-gradient">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-white/65 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
