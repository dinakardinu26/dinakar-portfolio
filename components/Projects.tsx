export default function Projects() {
  const projects = [
    { title: "Retail Chain Restructuring", tech: "Scalability Strategy", desc: "Organizational restructuring for outlets, built KPI systems and MIS dashboards. Enabled expansion with real-time dashboards." },
    { title: "Store Optimization in Retail Units", tech: "Operational Analysis", desc: "Evaluated store layout and productivity, improved workflow efficiency, identified employee bottlenecks resulting in better operational efficiency." },
    { title: "Performance Consulting", tech: "PMS Design", desc: "KPI & KRA Framework Development, Business Intelligence Dashboards, Organizational Gap Analysis." }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#121212] relative z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 md:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="group relative h-80 rounded-3xl overflow-hidden bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 p-8 flex flex-col justify-end cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 dark:from-black/80 to-transparent z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-sm font-mono text-purple-400 mb-2 block">{p.tech}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-300 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
