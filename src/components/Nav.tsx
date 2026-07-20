"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/language";
import type { Lang } from "@/data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#projeler", label: t.nav.projects },
    { href: "#yetenekler", label: t.nav.skills },
    { href: "#hakkimda", label: t.nav.about },
    { href: "#iletisim", label: t.nav.contact },
  ];

  const langs: Lang[] = ["tr", "en"];

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
        <div className="flex items-center gap-3">
          {/* Dil değiştirici */}
          <div className="flex items-center rounded-full border border-border bg-white/[0.03] p-0.5 text-xs font-medium">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
                  lang === l
                    ? "bg-violet text-white"
                    : "text-muted hover:text-text"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="#iletisim"
            className="hidden rounded-full bg-violet/90 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-violet sm:inline-block"
          >
            {t.nav.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
