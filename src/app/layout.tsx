import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shruthi Basavaraju | Software Engineer",
  description:
    "Portfolio of Shruthi Basavaraju — USC M.S. CS student and Software Engineer specializing in backend, full-stack, and cloud systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-dracula-bg text-dracula-fg overflow-x-hidden antialiased`}
      >
        {/* Background aura effects */}
        <div className="fixed top-0 left-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 aura-cyan opacity-10 blur-[100px] pointer-events-none z-0" />
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] translate-x-1/2 translate-y-1/2 aura-purple opacity-[0.15] blur-[120px] pointer-events-none z-0" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
