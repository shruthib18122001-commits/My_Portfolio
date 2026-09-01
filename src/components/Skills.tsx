import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-5"
      style={{ backgroundColor: "rgba(40, 42, 54, 0.7)" }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Technical Skills</h2>

        <div
          className="rounded-xl border border-dracula-border p-6 md:p-8 space-y-6"
          style={{ background: "rgba(56, 58, 89, 0.8)" }}
        >
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-dracula-fg font-semibold text-base mb-3 pb-1 border-b-2 border-dracula-cyan inline-flex items-center gap-2">
                <span>{group.icon}</span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
