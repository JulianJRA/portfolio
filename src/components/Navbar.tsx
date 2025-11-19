import { Menu } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, setLang, lang } = useLanguage();

  const links = [
    { label: t.navbar.home, href: "#home" },
    { label: t.navbar.about, href: "#about" },
    { label: t.navbar.technologies, href: "#technologies" },
    { label: t.navbar.projects, href: "#projects" },
    { label: t.navbar.contact, href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur bg-black/20">
      <nav className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Mi Portfolio</h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-teal-400 transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
          <Menu size={28} />
        </button>

        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="ml-4 w-20 h-9 rounded-full bg-gray-700 relative flex items-center transition"
        >
          <div
            className={`absolute h-7 w-7 bg-teal-400 rounded-full transition-all ${
              lang === "es" ? "left-1" : "left-11"
            }`}
          ></div>
          <span className="absolute left-3 text-sm">ES</span>
          <span className="absolute right-3 text-sm">EN</span>
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-black/70 px-6 py-4 space-y-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block py-2 hover:text-teal-400"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
