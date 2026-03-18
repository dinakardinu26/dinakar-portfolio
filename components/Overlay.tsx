"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.40], [50, 0]);

  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.70], [50, 0]);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24 pointer-events-none">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right md:mr-32"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 pointer-events-auto">
            Dinakar S.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light pointer-events-auto max-w-2xl px-4">
            Business Intelligence & Project Associate - PMS
          </p>
        </motion.div>

        {/* Section 2 */}
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

        {/* Section 3 */}
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
