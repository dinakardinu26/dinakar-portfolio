export default function Education() {
  const education = [
    { degree: "MBA – Marketing & HR", institution: "LEAD College of Management" },
    { degree: "Bachelor of Computer Applications", institution: "Nehru Arts and Science College" },
  ];
  
  const certs = [
    "Lean Six Sigma Green Belt – KPMG",
    "Personnel Management Workshop – NIPM",
    "Google Digital Marketing Certification",
    "IBM Professional Skills Certification"
  ];

  return (
    <section className="py-24 bg-white dark:bg-white/5 relative z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i}>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                <p className="text-purple-600 dark:text-purple-400 text-lg">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">Certifications</h2>
           <ul className="space-y-4 border-l border-gray-200 dark:border-white/10 pl-6">
             {certs.map((cert, i) => (
               <li key={i} className="text-gray-700 dark:text-gray-300 text-lg flex items-center">
                 <span className="text-gray-400 dark:text-white/40 mr-4">▹</span>
                 {cert}
               </li>
             ))}
           </ul>
        </div>
        
      </div>
    </section>
  );
}
