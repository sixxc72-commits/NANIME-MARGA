"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./Section";
import { gallery } from "@/data/content";

export default function Gallery() {
  return (
    <Section
      id="gallery"
      eyebrow="GALLERY"
      title="Momen & Karya"
      subtitle="Koleksi visual dari komunitas — event, fan art, dan aesthetic."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {gallery.map((g, i) => (
          <motion.div
            key={g.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group relative aspect-square overflow-hidden rounded-2xl glass"
          >
            <Image
              src={g.src}
              alt={g.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
