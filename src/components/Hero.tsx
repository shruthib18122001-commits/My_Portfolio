"use client";

import { useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="min-h-[calc(100vh-64px)] flex items-center justify-center py-20 px-5"
        style={{ backgroundColor: "rgba(40, 42, 54, 0.7)" }}
      >
        <div className="max-w-5xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 gradient-text leading-tight">
              Hi, I&apos;m {personalInfo.name}
            </h1>
            <p className="text-lg md:text-xl text-dracula-fg mb-5 leading-relaxed">
              {personalInfo.heroSubtitle}
            </p>
            <p className="text-dracula-muted mb-8 text-base">
              {personalInfo.skillsPreview}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#projects" className="btn-primary">
                View My Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex-shrink-0">
            <Image
              src="/your-photo.jpeg"
              alt="Shruthi Basavaraju"
              width={250}
              height={250}
              className="rounded-full border-4 border-dracula-cyan animate-pulse-border cursor-pointer object-cover"
              onClick={() => setModalOpen(true)}
              priority
            />
          </div>
        </div>
      </section>

      {/* Photo modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center"
          onClick={() => setModalOpen(false)}
        >
          <button
            className="absolute top-6 right-11 text-white text-5xl font-bold leading-none hover:text-dracula-muted transition-colors"
            onClick={() => setModalOpen(false)}
            aria-label="Close modal"
          >
            &times;
          </button>
          <Image
            src="/your-photo.jpeg"
            alt="Shruthi Basavaraju"
            width={600}
            height={600}
            className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
