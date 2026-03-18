export default function Highlights() {
  const stats = [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "5+" },
    { label: "Dashboards Built", value: "10+" },
    { label: "Efficiency Increase", value: "30%" },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#121212] border-t border-gray-200 dark:border-white/5 relative z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 md:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <h3 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
