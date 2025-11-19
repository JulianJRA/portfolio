import { Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-28">
      <h2 className="text-3xl font-bold text-teal-400">{t.contact.title}</h2>

      <div className="mt-10 space-y-4">
        <a href={`mailto:${t.contact.email}`} className="flex items-center gap-3 hover:text-teal-400 transition">
          <Mail /> {t.contact.email}
        </a>

        <a href={`https://${t.contact.github}`} className="flex items-center gap-3 hover:text-teal-400 transition">
          <Github /> {t.contact.github}
        </a>

        <a href={`https://${t.contact.linkedin}`} className="flex items-center gap-3 hover:text-teal-400 transition">
          <Linkedin /> {t.contact.linkedin}
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
