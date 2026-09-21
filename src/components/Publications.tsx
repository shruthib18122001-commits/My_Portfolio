import Image from "next/image";
import { publications } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";

export default function Publications() {
  return (
    <section
      id="publications"
      className="py-20 px-5"
      style={{ backgroundColor: "rgba(56, 58, 89, 0.7)" }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Publications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl border border-dracula-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:border-dracula-cyan"
              style={{ background: "rgba(40, 42, 54, 0.8)" }}
            >
              {/* Image */}
              <div className="h-48 relative overflow-hidden bg-dracula-dark border-b border-dracula-border">
                <Image
                  src={withBasePath(pub.image)}
                  alt={pub.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-dracula-cyan font-semibold text-base leading-snug mb-3">
                  {pub.title}
                </h3>
                <p className="text-dracula-fg text-sm leading-relaxed flex-1">
                  {pub.description}
                </p>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-dracula-cyan font-semibold text-sm hover:text-dracula-purple transition-all duration-300 hover:translate-x-1"
                >
                  View Publication (IJISRT) →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
