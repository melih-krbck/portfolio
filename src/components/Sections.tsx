"use client";

import { profile } from "@/data/content";
import { useLanguage } from "@/i18n/language";
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
  const { t } = useLanguage();
  return (
    <section id="projeler" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <Reveal>
        <SectionHeading
          index={t.projectsSection.index}
          title={t.projectsSection.title}
          desc={t.projectsSection.desc}
        />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {t.projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  const { t } = useLanguage();
  return (
    <section
      id="yetenekler"
      className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20"
    >
      <Reveal>
        <SectionHeading index={t.skillsSection.index} title={t.skillsSection.title} />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {t.skills.map((group, i) => (
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
  const { t } = useLanguage();
  return (
    <section id="hakkimda" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div>
            <SectionHeading index={t.about.index} title={t.about.title} />
            <div className="space-y-4 text-pretty leading-relaxed text-muted">
              {t.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl glass p-6">
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted">{t.about.locationLabel}</dt>
                <dd className="text-text">{t.location}</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted">{t.about.focusLabel}</dt>
                <dd className="text-text">{t.about.focusValue}</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted">{t.about.langLabel}</dt>
                <dd className="text-text">{t.about.langValue}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">{t.about.statusLabel}</dt>
                <dd className="text-cyan">{t.about.statusValue}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="iletisim" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl glass p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-violet/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />

          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {t.contact.titlePre}
            <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">{t.contact.desc}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-violet px-6 py-3 font-medium text-white glow-violet transition-transform hover:scale-105"
            >
              {t.contact.email}
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
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono text-xs">{t.footer}</span>
      </div>
    </footer>
  );
}
