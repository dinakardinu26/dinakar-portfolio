"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1 (0–20%): "Dinakar S." — right side (restored)
  const opacity1 = useTransform(scrollYProgress, [0, 0.12, 0.20], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.20], [0, -60]);

  // Section 2 (20–45%): "AI-Driven Business Excellence" — top-left
  // Appears when the upward gaze fades and person still looks up-left
  const opacity2 = useTransform(scrollYProgress, [0.20, 0.28, 0.38, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.20, 0.30], [20, 0]);

  // Section 3 (45–70%): "Empowering Scalability." — left
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.62, 0.70], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.55], [50, 0]);

  // Section 4 (70–90%): "Actionable Insights." — right
  const opacity4 = useTransform(scrollYProgress, [0.70, 0.78, 0.85, 0.92], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.70, 0.80], [50, 0]);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <div className="sticky top-0 h-[100dvh] w-full pointer-events-none">

        {/* ── Section 1: Dinakar S. — right side (restored) ── */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right md:mr-32 pr-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 pointer-events-auto">
            Dinakar S.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light pointer-events-auto max-w-2xl px-4">
            Business Intelligence & Project Associate - PMS
          </p>
        </motion.div>

        {/* ── Section 2: AI-Driven Business Excellence — top-left ── */}
        {/* Appears mid-scroll when the person transitions from looking up-left */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute top-10 left-6 max-w-[200px] sm:top-14 sm:left-10 md:top-20 md:left-16 lg:top-24 lg:left-24 lg:max-w-xs"
        >
          <h2 className="text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl">
            AI-Driven<br />Business Excellence
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
            Using AI and data intelligence to build smarter, faster, and more efficient business solutions.
          </p>
        </motion.div>

        {/* ── Section 3: Empowering Scalability — left ── */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left md:ml-32"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4 max-w-xl pointer-events-auto">
            Empowering Scalability.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-md pointer-events-auto">
            Specializing in KPI frameworks, PMS systems, MIS dashboards, and organizational restructuring.
          </p>
        </motion.div>

        {/* ── Section 4: Actionable Insights — right ── */}
        <motion.div
          style={{ opacity: opacity4, y: y4 }}
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
