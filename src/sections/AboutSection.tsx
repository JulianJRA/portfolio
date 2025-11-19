import { useLanguage } from "../context/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-28">
      <h2 className="text-3xl font-bold text-teal-400">{t.about.title}</h2>
      <p className="mt-6 text-gray-300 leading-relaxed max-w-3xl">{t.about.description}</p>
    </section>
  );
};

export default AboutSection;
