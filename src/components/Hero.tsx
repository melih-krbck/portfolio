import { profile } from "@/data/content";
import SocialButton from "./SocialButton";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center justify-center px-6 pt-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="animate-float mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted">
          <span className="orb inline-block h-2 w-2 rounded-full bg-violet" />
          Selçuk Üniversitesi · Bilgisayar Mühendisliği
        </div>

        <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
          Merhaba, ben <span className="gradient-text neon-text">Melih</span>.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projeler"
            className="group rounded-full bg-violet px-6 py-3 font-medium text-white glow-violet transition-transform hover:scale-105"
          >
            Projelerimi Gör
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <SocialButton href={profile.github} label="GitHub" icon="github" />
          <SocialButton href={profile.linkedin} label="LinkedIn" icon="linkedin" />
        </div>

        <div className="mt-14 flex items-center justify-center gap-2 text-xs text-muted/70">
          <span className="h-px w-8 bg-border" />
          <span className="font-mono">Godot · Next.js · Python · React</span>
          <span className="h-px w-8 bg-border" />
        </div>
      </div>
    </section>
  );
}
