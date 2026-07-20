import type { Project, StatusKey } from "@/data/content";
import { useLanguage } from "@/i18n/language";

const statusStyles: Record<StatusKey, string> = {
  developing: "text-violet border-violet/40 bg-violet/10",
  live: "text-cyan border-cyan/40 bg-cyan/10",
  completed: "text-pink border-pink/40 bg-pink/10",
};

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <article
      className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl glass p-6"
      style={{ ["--accent" as string]: project.accent }}
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
        style={{ background: project.accent }}
      />

      <div className="mb-4 flex items-start justify-between gap-3">
        {project.logo ? (
          <div className="h-12 w-12 overflow-hidden rounded-xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
            style={{
              background: `${project.accent}1a`,
              border: `1px solid ${project.accent}40`,
            }}
          >
            {project.emoji}
          </div>
        )}
        <span
          className={`rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[project.status]}`}
        >
          {t.statusLabels[project.status]}
        </span>
      </div>

      <h3 className="text-xl font-bold tracking-tight text-text">
        {project.title}
      </h3>
      <p className="mt-1 text-sm font-medium" style={{ color: project.accent }}>
        {project.subtitle}
      </p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border bg-white/[0.03] px-2 py-1 font-mono text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.live || project.repo) && (
        <div className="mt-5 flex gap-3 border-t border-border pt-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-violet"
            >
              {t.liveLabel}
              <span aria-hidden>↗</span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-text"
            >
              {t.codeLabel}
              <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
