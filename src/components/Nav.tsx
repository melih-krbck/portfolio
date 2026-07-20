"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#projeler", label: "Projeler" },
  { href: "#yetenekler", label: "Yetenekler" },
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled ? "glass glass-blur glow-violet" : "border border-transparent"
        }`}
      >
        <a href="#top" className="font-mono text-sm font-bold tracking-tight">
          <span className="text-violet">&lt;</span>
          <span className="text-text">MK</span>
          <span className="text-violet">/&gt;</span>
        </a>
        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-text"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#iletisim"
          className="rounded-full bg-violet/90 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-violet"
        >
          İletişim
        </a>
      </nav>
    </header>
  );
}
