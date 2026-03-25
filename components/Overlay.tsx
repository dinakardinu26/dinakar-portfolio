"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: "Dinakar S." — right side, 0% → 25%
  const opacity1 = useTransform(scrollYProgress, [0, 0.12, 0.22], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.22], [0, -80]);

  // Section 1.5: "AI-Driven Business Excellence" — top-left, appears at 6% (looking up) fades at 24%
  const opacity15 = useTransform(scrollYProgress, [0.04, 0.08, 0.18, 0.24], [0, 1, 1, 0]);
  const y15 = useTransform(scrollYProgress, [0.04, 0.10], [30, 0]);

  // Section 2: "Empowering Scalability." — left, 25% → 55%
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.40], [50, 0]);

  // Section 3: "Actionable Insights." — right, 55% → 85%
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.70], [50, 0]);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <div className="sticky top-0 h-[100dvh] w-full pointer-events-none">

        {/* Section 1: Dinakar S. — right side */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right md:pr-32 px-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 pointer-events-auto">
            Dinakar S.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light pointer-events-auto max-w-2xl">
            Business Intelligence &amp; Project Associate - PMS
          </p>
        </motion.div>

        {/* Section 1.5: AI-Driven Business Excellence — top-left (during "looking up" frames) */}
        <motion.div
          style={{ opacity: opacity15, y: y15 }}
          className="absolute top-0 left-0 flex flex-col items-start justify-start text-left md:ml-32 md:mt-24 mt-16 ml-8 px-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 max-w-xl pointer-events-auto leading-tight">
            AI-Driven Business Excellence
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-md pointer-events-auto font-light">
            Using AI and data intelligence to build smarter, faster, and more efficient business solutions.
          </p>
        </motion.div>

        {/* Section 2: Empowering Scalability. — bottom-left */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left md:ml-32 px-8"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4 max-w-xl pointer-events-auto">
            Empowering Scalability.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-md pointer-events-auto">
            Specializing in KPI frameworks, PMS systems, MIS dashboards, and organizational restructuring.
          </p>
        </motion.div>

        {/* Section 3: Actionable Insights. — right */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right md:pr-32 px-8"
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
