import { personalInfo, education } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-5"
      style={{ backgroundColor: "rgba(56, 58, 89, 0.7)" }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="mb-12 space-y-4">
          {personalInfo.about.map((para, i) => (
            <p key={i} className="text-dracula-fg text-base leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <h3 className="text-xl font-bold text-dracula-cyan mb-6 border-b-2 border-dracula-cyan inline-block pb-1">
          Education
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {education.map((edu) => (
            <div key={edu.institution} className="portfolio-card p-6">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                <div>
                  <h4 className="text-dracula-cyan font-semibold text-base">
                    {edu.degree}
                  </h4>
                  <p className="text-dracula-fg font-medium text-sm mt-1">
                    {edu.institution}
                  </p>
                </div>
                {"gpa" in edu && edu.gpa && (
                  <span className="tech-badge text-dracula-purple border-dracula-purple/30">
                    GPA: {edu.gpa}
                  </span>
                )}
              </div>

              <p className="text-dracula-muted text-xs mb-3">
                {edu.location} &nbsp;|&nbsp; {edu.period}
              </p>

              {"courses" in edu && edu.courses && (
                <div>
                  <p className="text-dracula-muted text-xs font-medium mb-2">
                    Courses:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course) => (
                      <span key={course} className="tech-badge text-xs">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
