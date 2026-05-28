"use client";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";

type Errors = { name?: string; email?: string; message?: string };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Nama wajib diisi";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email tidak valid";
    if (form.message.trim().length < 10) e.message = "Pesan minimal 10 karakter";
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }
  };

  const field = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-neon outline-none transition placeholder:text-white/30";

  return (
    <Section
      id="contact"
      eyebrow="CONTACT"
      title="Sapa Kami"
      subtitle="Punya pertanyaan atau ingin gabung? Kirim pesan, kami akan balas secepatnya."
    >
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto space-y-4"
        noValidate
      >
        <div>
          <input
            className={field}
            placeholder="Nama"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            className={field}
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
        </div>
        <div>
          <textarea
            className={`${field} min-h-[140px] resize-y`}
            placeholder="Pesan"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-neon hover:bg-neon-bright text-black font-semibold shadow-neon transition"
        >
          Kirim Pesan
        </button>
        {sent && (
          <p className="text-sm text-emerald-400 text-center">
            Terima kasih! Pesanmu sudah terkirim.
          </p>
        )}
      </motion.form>
    </Section>
  );
}
