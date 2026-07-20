import { profile, projects, skills } from "@/data/content";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SocialButton from "./SocialButton";

function SectionHeading({
  index,
  title,
  desc,
}: {
  index: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <span className="font-mono text-sm text-violet">{index}</span>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-3 text-muted">{desc}</p>}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projeler" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <Reveal>
        <SectionHeading
          index="01 / PROJELER"
          title="Yaptığım işler"
          desc="Oyun geliştirmeden gerçek müşteriler için üretim uygulamalarına kadar üzerinde çalıştığım projeler."
        />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section
      id="yetenekler"
      className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20"
    >
      <Reveal>
        <SectionHeading index="02 / YETENEKLER" title="Kullandığım teknolojiler" />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 80}>
            <div className="h-full rounded-2xl glass p-6">
              <h3 className="mb-4 text-lg font-semibold text-text">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-white/[0.03] px-3 py-1.5 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="hakkimda" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div>
            <SectionHeading index="03 / HAKKIMDA" title="Biraz kendimden" />
            <div className="space-y-4 text-pretty leading-relaxed text-muted">
              <p>
                Selçuk Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Kod
                yazmaya olan ilgim oyun geliştirmeyle başladı ve zamanla web
                uygulamalarına da uzandı.
              </p>
              <p>
                Bitirme projem{" "}
                <span className="text-text">Vessel: Null</span>, Godot ile
                geliştirdiğim bir 2D Souls-like — ilgimi en çok çeken kısım ise
                boss yapay zekasını pekiştirmeli öğrenme ile eğitmek. Bunun
                yanında React ve Next.js ile gerçek müşteriler için üretim
                uygulamaları geliştiriyorum.
              </p>
              <p>
                Güçlü bir tasarım vizyonuyla, teknik uygulamayı bir araya
                getirmeyi seviyorum — ister bir oyunun atmosferi, ister bir
                arayüzün akışı olsun.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl glass p-6">
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted">Konum</dt>
                <dd className="text-text">{profile.location}</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted">Odak</dt>
                <dd className="text-text">Oyun & Web</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted">Diller</dt>
                <dd className="text-text">GDScript, Python, TS</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Durum</dt>
                <dd className="text-cyan">Staja açık</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="iletisim" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl glass p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-violet/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />

          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Birlikte bir şey <span className="gradient-text">yapalım</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Staj fırsatları, proje işbirlikleri veya sadece merhaba demek için —
            her zaman ulaşabilirsin.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-violet px-6 py-3 font-medium text-white glow-violet transition-transform hover:scale-105"
            >
              E-posta Gönder
            </a>
            <SocialButton href={profile.github} label="GitHub" icon="github" />
            <SocialButton href={profile.linkedin} label="LinkedIn" icon="linkedin" />
          </div>

          <p className="mt-6 font-mono text-sm text-muted">{profile.email}</p>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono text-xs">
          Next.js · Tailwind ile yapıldı
        </span>
      </div>
    </footer>
  );
}
