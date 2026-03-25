"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1 — appears at 0–25% scroll, top-left "AI-Driven" text
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -40]);

  // Section 2 — appears at 25–55% scroll
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.40], [50, 0]);

  // Section 3 — appears at 55–85% scroll
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.70], [50, 0]);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <div className="sticky top-0 h-[100dvh] w-full pointer-events-none">

        {/* Section 1 — "AI-Driven Business Excellence" top-left of canvas */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute top-10 left-6 max-w-[220px] sm:top-14 sm:left-10 md:top-20 md:left-16 lg:top-24 lg:left-24 lg:max-w-xs"
        >
          <h1 className="text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
            AI-Driven<br />Business Excellence
          </h1>
          <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
            Using AI and data intelligence to build smarter, faster, and more efficient business solutions.
          </p>
        </motion.div>

        {/* Section 2 — "Empowering Scalability" */}
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

        {/* Section 3 — "Actionable Insights" */}
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
