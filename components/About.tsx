import { Download } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-white dark:bg-[#121212] relative z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 md:px-24 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full" />
        </div>
        <div className="md:w-2/3 space-y-6 text-lg text-gray-700 dark:text-gray-300 font-light leading-relaxed">
          <p>
            I am a Project Associate - PMS with expertise in performance management systems, business intelligence, and organizational analytics.
          </p>
          <p>
            With a strong academic background in Computer Applications and an MBA in Marketing & HR from LEAD College of Management, I bridge the gap between technical execution and high-level business strategy.
          </p>
          <p>
            Currently, as a Project Associate at HSJB Global Solutions LLP, I contribute directly to performance consulting projects involving KPI design, PMS framework development, MIS dashboards, and organizational restructuring. My focus is always purely on improving operational efficiency and helping businesses scale using data-driven strategies. I specialize in converting complex organizational data into clear, actionable insights for leadership decision-making.
          </p>
          <div className="pt-6">
             <a href="/Dinakar_S_Resume.pdf" download="Dinakar_S_Resume.pdf" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
               <Download size={18} />
               Download Resume
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
