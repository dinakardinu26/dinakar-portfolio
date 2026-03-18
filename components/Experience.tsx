export default function Experience() {
  const jobs = [
    {
      role: "Project Associate – Data Analytics & Performance Consulting",
      company: "HSJB Global Solutions LLP",
      date: "Nov 2025 – Present",
      tasks: [
        "Conduct organizational data analysis and gap assessments",
        "Design KPI frameworks and PMS systems",
        "Develop MIS dashboards and trackers",
        "Create job descriptions and org structures",
        "Implement AI-based workflows and train PMS team members",
      ]
    },
    {
      role: "Management Trainee – Key Accounts",
      company: "Lulu International Shopping Mall Pvt Ltd",
      date: "Apr 2025 – Sep 2025",
      tasks: [
        "Prepared sales and performance reports",
        "Built dashboards for store tracking",
        "Analyzed stock, revenue, and productivity",
        "Supported leadership with insights",
      ]
    },
    {
      role: "Management & Operations Intern",
      company: "Arvind Fashions Limited",
      date: "May 2024 – Jun 2024",
      tasks: [
        "Managed store operations",
        "Analyzed customer behavior",
        "Improved upselling and cross-selling",
      ]
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-white/5 relative z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 md:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16">Professional Experience</h2>
        
        <div className="space-y-12 border-l border-gray-200 dark:border-white/10 pl-8 md:pl-12 ml-4">
          {jobs.map((job, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-[41px] md:-left-[57px] top-2 h-4 w-4 rounded-full bg-gray-200 dark:bg-white/20 border-2 border-white dark:border-[#121212] group-hover:bg-purple-500 dark:group-hover:bg-white transition-colors duration-300" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{job.role}</h3>
                <span className="text-sm font-mono text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{job.date}</span>
              </div>
              <p className="text-xl text-purple-600 dark:text-purple-400 mb-6">{job.company}</p>
              <ul className="space-y-3">
                {job.tasks.map((task, j) => (
                  <li key={j} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="mr-3 text-gray-300 dark:text-white/40 mt-1">▹</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
