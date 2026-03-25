"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1 — "AI-Driven Business Excellence" top-left (0% – 25%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -60]);

  // "Dinakar S." fades in slightly later at the right (0% – 25%)
  const opacityName = useTransform(scrollYProgress, [0, 0.10, 0.25], [1, 1, 0]);
  const yName = useTransform(scrollYProgress, [0, 0.25], [0, -60]);

  // Section 2 — "Empowering Scalability" left (25% – 55%)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.40], [50, 0]);

  // Section 3 — "Actionable Insights" right (55% – 85%)
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.70], [50, 0]);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <div className="sticky top-0 h-[100dvh] w-full pointer-events-none">

        {/* === SECTION 1 === */}

        {/* TOP-LEFT: "AI-Driven Business Excellence" — sits in the dark upper-left area where the subject gazes */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute top-0 left-0 flex flex-col justify-start pt-14 pl-8 md:pt-20 md:pl-20 max-w-[45%] md:max-w-[38%]"
        >
          {/* Eyebrow label */}
          <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 backdrop-blur-sm">
            Portfolio 2025
          </span>

          <h2 className="text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
            AI-Driven<br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Business Excellence
            </span>
          </h2>

          <p className="mt-3 text-[11px] font-light leading-relaxed text-gray-400 sm:text-xs md:text-sm max-w-[26ch]">
            Using AI and data intelligence to build smarter, faster, and more efficient business solutions.
          </p>
        </motion.div>

        {/* RIGHT: "Dinakar S." name — stays on the right as before */}
        <motion.div
          style={{ opacity: opacityName, y: yName }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right md:mr-32"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 pointer-events-auto">
            Dinakar S.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light pointer-events-auto max-w-2xl px-4">
            Business Intelligence & Project Associate - PMS
          </p>
        </motion.div>

        {/* === SECTION 2 === */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left md:ml-32"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4 max-w-xl pointer-events-auto">
            Empowering Scalability.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-md pointer-events-auto">
            Specializing in KPI frameworks, PMS systems, MIS dashboards, and organizational restructuring.
          </p>
        </motion.div>

        {/* === SECTION 3 === */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right md:mr-32"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4 max-w-xl pointer-events-auto">
            Actionable Insights.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-md pointer-events-auto">
            Converting complex organizational data into clear strategies for leadership decision-making.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
