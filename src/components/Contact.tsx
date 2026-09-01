import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="py-20 px-5 text-center border-t border-dracula-border"
      style={{ backgroundColor: "#191a24" }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Get in Touch</h2>

        <p className="text-dracula-muted text-base mb-3">
          I&apos;m currently seeking 2027 full-time software engineering roles.
          Let&apos;s connect!
        </p>

        <p className="text-dracula-fg text-base mb-6">
          <strong className="text-dracula-fg">Email: </strong>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-dracula-cyan font-semibold hover:text-dracula-purple transition-colors hover:underline"
          >
            {personalInfo.email}
          </a>
        </p>

        <div className="flex items-center justify-center gap-8 flex-wrap">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dracula-cyan text-lg font-semibold hover:text-dracula-purple transition-all duration-300 hover:scale-110 inline-block"
          >
            LinkedIn
          </a>
          <span className="text-dracula-border">|</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dracula-cyan text-lg font-semibold hover:text-dracula-purple transition-all duration-300 hover:scale-110 inline-block"
          >
            GitHub
          </a>
        </div>

        <p className="text-dracula-border text-xs mt-10">
          © {new Date().getFullYear()} Shruthi Basavaraju. Built with Next.js,
          TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
