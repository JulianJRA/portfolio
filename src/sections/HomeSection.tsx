import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const HomeSection = () => {
  const { t, lang } = useLanguage();
  const name = "Julián Román Alberca";

  const title = lang === "en" ? "Software Engineer" : "Ingeniero de Software";

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center text-center px-4">
      {/* Nombre */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold text-gray-100"
      >
        <span className="text-teal-400">{name}</span>
      </motion.h1>

      {/* Título profesional */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-2 text-xl md:text-3xl font-medium text-gray-300"
      >
        {title}
      </motion.h2>

      {/* Descripción */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
      >
        {t.hero.description}
      </motion.p>
    </section>
  );
};

export default HomeSection;
