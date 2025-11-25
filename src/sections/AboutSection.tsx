import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 flex flex-col items-center text-center">
      
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-teal-400 tracking-wide mb-8"
      >
        {t.about.title}
      </motion.h2>

      {/* Contenedor del texto */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
        className="max-w-3xl px-6"
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          {t.about.description}
        </p>
      </motion.div>

      {/* Línea decorativa */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10 h-1 w-32 bg-linear-to-r from-teal-400 to-teal-600 rounded-full origin-left"
      />
    </section>
  );
};

export default AboutSection;
