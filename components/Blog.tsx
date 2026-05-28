"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "./Section";
import { posts } from "@/data/content";

export default function Blog() {
  return (
    <Section
      id="blog"
      eyebrow="BLOG & NEWS"
      title="Cerita Terbaru"
      subtitle="Update, rekomendasi, dan kabar dari komunitas."
    >
      {posts.length === 0 ? (
        <div className="text-center text-white/50 py-10">Belum ada artikel.</div>
      ) : (
        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl overflow-hidden hover:border-neon/60 transition group"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={p.thumbnail}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-neon-bright/80 mb-2">{p.date}</p>
                <h3 className="font-display text-lg text-white leading-snug mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-white/65 mb-4">{p.excerpt}</p>
                <button className="inline-flex items-center gap-1 text-sm text-neon-bright hover:text-white transition">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </Section>
  );
}
