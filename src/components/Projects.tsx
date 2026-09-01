import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-5"
      style={{ backgroundColor: "rgba(56, 58, 89, 0.7)" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Projects</h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-dracula-border bg-[rgba(40,42,54,0.85)] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-dracula-cyan hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
              style={{ borderLeftWidth: "4px", borderLeftColor: project.accentColor }}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-3xl"
                  style={{
                    backgroundColor: `${project.accentColor}1f`,
                    border: `1px solid ${project.accentColor}44`,
                  }}
                >
                  {project.icon}
                </div>
                <div className="min-w-0">
                  <h3
                    className="text-xl font-bold leading-tight"
                    style={{ color: project.accentColor }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-dracula-muted text-sm mt-1">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Tech badges */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="mt-5 space-y-2.5">
                {project.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-dracula-fg text-sm leading-relaxed relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-dracula-cyan"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
