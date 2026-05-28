import { Github, Instagram, Twitter, Youtube } from "lucide-react";

const links = ["Home", "About", "Members", "Gallery", "Blog", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="max-w-6xl mx-auto px-5 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-display text-lg text-gradient tracking-widest">MARGA NANIME</p>
          <p className="mt-3 text-sm text-white/55 max-w-xs">
            Modern anime community — tempat berkumpul, berbagi, dan tumbuh bersama.
          </p>
        </div>
        <div>
          <p className="text-sm text-white/80 mb-3">Navigasi</p>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-white/55 hover:text-neon-bright transition"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm text-white/80 mb-3">Ikuti Kami</p>
          <div className="flex gap-3">
            {[Instagram, Twitter, Youtube, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-neon-bright/60 hover:text-neon-bright text-white/70 transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} MARGA NANIME. All rights reserved.
      </div>
    </footer>
  );
}
