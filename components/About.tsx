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
            I am a <strong className="font-semibold text-gray-900 dark:text-white">Project Associate in Performance Management &amp; Business Consulting</strong>, with hands-on experience in organizational performance improvement and business transformation across the manufacturing sector.
          </p>
          <p>
            Holding an MBA in Marketing &amp; HR from the University of Calicut and a foundation in Computer Applications, I bridge strategic business thinking with analytical rigor — enabling me to design data-driven solutions that drive measurable organizational outcomes.
          </p>
          <p>
            I have contributed to multiple organizational restructuring and business transformation projects, delivering work in defining the strategic way forward, KPI architecture, Performance Management System (PMS) design, process optimization, MIS &amp; executive dashboard development, and cross-functional organizational analytics. My consulting engagements have spanned complex manufacturing environments where operational efficiency and structured performance governance are critical.
          </p>
          <p>
            I specialize in translating complex organizational data into clear, actionable intelligence — supporting leadership teams in making data-driven decisions, improving process efficiency, and building scalable performance frameworks for sustainable business growth.
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
