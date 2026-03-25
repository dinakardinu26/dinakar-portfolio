"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#121212]">
      {/* Hero Image — first frame of the sequence */}
      <div className="absolute inset-0">
        <img
          src="/sequence/frame_000_delay-0.066s.webp"
          alt="Dinakar S — Portrait"
          className="h-full w-full object-cover object-top"
          loading="eager"
          fetchPriority="high"
        />
        {/* Cinematic overlay gradient — darkens the top-left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent" />
        {/* Bottom fade for seamless transition into the scrolly section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#121212] to-transparent" />
      </div>

      {/* Text Block — positioned in the top-left where the subject is looking */}
      <div className="relative z-10 flex h-full flex-col justify-start px-8 pt-28 md:px-24 md:pt-36 lg:pt-40">
        
        {/* Eyebrow Tag */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-block w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gray-300 backdrop-blur-sm"
        >
          Portfolio — 2025
        </motion.span>

        {/* Primary Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          AI-Driven<br />
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Business Excellence
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 max-w-lg text-base font-light leading-relaxed text-gray-400 md:text-lg"
        >
          Using AI and data intelligence to build smarter, faster, and more efficient business solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#about"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
          >
            Explore My Work
          </a>
          <a
            href="/Dinakar_S_Resume.pdf"
            download="Dinakar_S_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
