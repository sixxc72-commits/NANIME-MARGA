"use client";
import { motion } from "framer-motion";
import { Sparkles, Users, Heart } from "lucide-react";
import Section from "./Section";

const items = [
  {
    icon: Sparkles,
    title: "Visi",
    text: "Menjadi komunitas anime modern yang kreatif, inklusif, dan menginspirasi."
  },
  {
    icon: Users,
    title: "Misi",
    text: "Menghubungkan penggemar lewat event, diskusi, dan konten berkualitas."
  },
  {
    icon: Heart,
    title: "Nilai",
    text: "Saling menghargai, berbagi, dan tumbuh bersama dalam satu komunitas."
  }
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="ABOUT US"
      title="Tentang MARGA NANIME"
      subtitle="Kami adalah komunitas penggemar anime dari berbagai latar belakang yang berbagi semangat yang sama."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-7 hover:border-neon/60 transition"
          >
            <div className="h-11 w-11 rounded-xl bg-neon/15 flex items-center justify-center text-neon-bright mb-4">
              <it.icon size={22} />
            </div>
            <h3 className="font-display text-xl text-white mb-2">{it.title}</h3>
            <p className="text-white/65 text-sm leading-relaxed">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
