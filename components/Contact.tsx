import { Mail, Linkedin, Github, Instagram, Download } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-white/5 relative z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 md:px-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Let's Connect</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Whether you need a full organizational gap analysis, a new MIS dashboard, or want to discuss performance scaling strategies, I'm open to conversations.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 flex-wrap">
          <a href="mailto:dinakars007@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors w-full md:w-auto justify-center">
            <Mail size={20} />
            Email Me
          </a>
          <a href="/Dinakar_S_Resume.pdf" download="Dinakar_S_Resume.pdf" className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors w-full md:w-auto justify-center">
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <a href="https://www.linkedin.com/in/dinakar26/" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:border-blue-600 transition-colors shadow-sm dark:shadow-none">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/dinakardinu26" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-gray-900 dark:hover:border-white transition-colors shadow-sm dark:shadow-none">
            <Github size={24} />
          </a>
          <a href="https://www.instagram.com/iam.dinakar?igsh=OG9tc2lieGg0OHBo&utm_source=qr" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-pink-600 hover:border-pink-600 transition-colors shadow-sm dark:shadow-none">
            <Instagram size={24} />
          </a>
        </div>
        
        <div className="mt-24 pt-8 border-t border-gray-200 dark:border-white/10 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Dinakar S. Based in Kochi, Kerala, India. @iam.dinakar</p>
        </div>
      </div>
    </section>
  );
}
