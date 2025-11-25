import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-28">
      <h2 className="text-4xl font-extrabold text-teal-400 text-center mb-14 tracking-wide">
        {t.projects.title}
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-10 p-10 bg-gray-900 rounded-xl border border-gray-800 text-center text-gray-400"
      >
        {t.projects.placeholder}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
