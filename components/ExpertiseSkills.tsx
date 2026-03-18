export default function ExpertiseSkills() {
  const skills = {
    "Programming & Data": ["Python", "SQL (MySQL, PostgreSQL)", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"],
    "AI & Prompt Engineering": ["Vibe Coding", "LLMs", "Google AI Studio", "Antigravity"],
    "Business Intelligence": ["Power BI", "Tableau", "SAP BI", "Google Data Studio"],
    "Enterprise & Tools": ["SAP ERP", "Advanced Microsoft Excel", "Google Workspace", "Google Analytics", "Meta Ads"],
    "Core Expertise": ["Performance Management Systems", "Organizational Gap Analysis", "MIS Dashboard Development", "Retail Operations Analytics", "AI Powered Workflow Automation"],
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#121212] relative z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 md:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16">Expertise & Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items], i) => (
            <div key={i}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-white/10 pb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item, j) => (
                  <span 
                    key={j} 
                    className="px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-700 dark:text-gray-300 text-sm shadow-sm dark:shadow-none hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
