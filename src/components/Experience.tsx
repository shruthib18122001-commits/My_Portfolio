import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-5"
      style={{ backgroundColor: "rgba(40, 42, 54, 0.7)" }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Experience</h2>

        <div className="space-y-6">
          {experiences.map((company) => {
            const multiRole = company.roles.length > 1;
            return (
              <div key={company.company} className="portfolio-card p-7">
                {/* Company header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-5">
                  <div>
                    <h3 className="text-dracula-fg font-bold text-lg leading-snug">
                      {company.company}
                    </h3>
                    {company.period && (
                      <p className="text-dracula-muted text-xs mt-0.5">
                        {company.period}
                      </p>
                    )}
                  </div>
                  <span className="text-dracula-muted text-xs shrink-0 sm:text-right">
                    {company.location}
                  </span>
                </div>

                {/* Roles */}
                <ol
                  className={
                    multiRole
                      ? "relative ml-1.5 space-y-7 border-l border-dracula-border"
                      : "space-y-7"
                  }
                >
                  {company.roles.map((role) => (
                    <li
                      key={role.title}
                      className={multiRole ? "relative pl-6" : ""}
                    >
                      {multiRole && (
                        <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-dracula-cyan border-2 border-dracula-surface" />
                      )}

                      <h4 className="text-dracula-cyan font-semibold text-base leading-snug">
                        {role.title}
                      </h4>

                      {role.courses && (
                        <p className="text-dracula-purple text-xs italic mt-1.5">
                          {role.courses}
                        </p>
                      )}

                      <ul className="mt-3 space-y-2 pl-4">
                        {role.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="text-dracula-fg text-sm leading-relaxed relative before:content-['•'] before:absolute before:-left-3 before:text-dracula-cyan"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
