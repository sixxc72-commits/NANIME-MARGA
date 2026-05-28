"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./Section";
import { members } from "@/data/content";

export default function Members() {
  return (
    <Section
      id="members"
      eyebrow="OUR MEMBERS"
      title="Bertemu Anggota Komunitas"
      subtitle="Wajah-wajah di balik MARGA NANIME — selalu siap berbagi cerita."
    >
      {members.length === 0 ? (
        <div className="text-center text-white/50 py-10">Belum ada anggota.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {members.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl p-4 text-center hover:border-neon/60 transition"
            >
              <div className="relative w-20 h-20 mx-auto mb-3">
                <Image
                  src={m.avatar}
                  alt={m.name}
                  fill
                  sizes="80px"
                  loading="lazy"
                  className="rounded-full object-cover border-2 border-neon/40"
                />
                <span
                  className={`absolute bottom-1 right-1 h-3 w-3 rounded-full ring-2 ring-black ${
                    m.online ? "bg-emerald-400" : "bg-zinc-500"
                  }`}
                  aria-label={m.online ? "online" : "offline"}
                />
              </div>
              <p className="text-sm font-medium text-white truncate">{m.name}</p>
              <p className="text-xs text-neon-bright/80">{m.role}</p>
            </motion.div>
          ))}
        </div>
      )}
    </Section>
  );
}
