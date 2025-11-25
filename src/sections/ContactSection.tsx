import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactSection = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_ss47lp3",       
        "template_6xoa0un",      
        formRef.current,
        "dftv8rZfZoD6SSSYr"     
      )
      .then(
        () => setStatus("success"),
        () => setStatus("error")
      );

    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-28 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold text-teal-400 mb-10">{t.contact.title}</h2>

      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-10">

        
        <div className="flex md:w-1/2">
          <div className="flex flex-col justify-center items-center md:items-start w-full space-y-6">
            <a
              href={`mailto:${t.contact.email}`}
              className="flex items-center gap-3 hover:text-teal-400 transition text-lg"
            >
              <Mail /> {t.contact.email}
            </a>

            <a
              href={t.contact.linkedin.startsWith("http") ? t.contact.linkedin : `https://${t.contact.linkedin}`}
              className="flex items-center gap-3 hover:text-teal-400 transition text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin /> {t.contact.linkedin.replace("https://", "")}
            </a>
          </div>
        </div>

        
        <div className="md:w-1/2">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-gray-800/40 p-8 rounded-2xl backdrop-blur-sm shadow-lg border border-gray-700 flex flex-col gap-4"
          >
            <input
              name="user_name"
              type="text"
              placeholder={t.contact.form.name}
              required
              className="p-3 rounded-lg bg-gray-900/60 border border-gray-700 text-gray-200 focus:outline-none focus:border-teal-400"
            />

            <input
              name="user_email"
              type="email"
              placeholder={t.contact.form.email}
              required
              className="p-3 rounded-lg bg-gray-900/60 border border-gray-700 text-gray-200 focus:outline-none focus:border-teal-400"
            />

            <textarea
              name="message"
              placeholder={t.contact.form.message}
              required
              className="p-3 h-32 rounded-lg bg-gray-900/60 border border-gray-700 text-gray-200 focus:outline-none focus:border-teal-400"
            />

            {/* Campo oculto para enviar la hora de envío */}
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <button
              type="submit"
              className="mt-2 bg-teal-500 hover:bg-teal-600 transition text-white py-3 rounded-lg font-semibold"
            >
              {t.contact.form.send}
            </button>

            {status === "success" && (
              <p className="text-green-400 mt-2 font-medium">{t.contact.form.success}</p>
            )}
            {status === "error" && (
              <p className="text-red-400 mt-2 font-medium">{t.contact.form.error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
