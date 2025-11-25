import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const techs = [
  { name: "Java", logo: "/assets/java.png" },
  { name: "Spring Boot", logo: "/assets/springboot.png" },
  { name: "JUnit", logo: "/assets/junit.png" },
  { name: "JMeter", logo: "/assets/jmeter.png" },
  { name: "Swagger", logo: "/assets/swagger.png" },
  { name: "SQL", logo: "/assets/sql.png" },
  { name: "Postman", logo: "/assets/postman.png" },
  { name: "Git", logo: "/assets/git.png" },
  { name: "HTML5", logo: "/assets/html.png" },
  { name: "CSS3", logo: "/assets/css.png" },
  { name: "React", logo: "/assets/react.png" },
  { name: "Docker", logo: "/assets/docker.png" },
  { name: "MongoDB", logo: "/assets/mongodb.png" },
  { name: "MySQL", logo: "/assets/mysql.png" },
  { name: "SQL Server", logo: "/assets/sqlserver.png" },
  { name: "Azure DevOps", logo: "/assets/azuredevops.png" },
  { name: "Jira", logo: "/assets/jira.png" },
  { name: "SonarQube", logo: "/assets/sonarqube.png" },
];

const TechnologiesSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="technologies" className="py-28">
      <h2 className="text-4xl font-extrabold text-teal-400 text-center mb-14 tracking-wide">
        {lang === "en" ? "Technologies" : "Tecnologías"}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center px-6">
        {techs.map((tech, index) => (
          <motion.div
            key={tech.name}
            whileHover={{ scale: 1.15, rotateX: 8, rotateY: -8 }}
            transition={{ type: "spring", stiffness: 150, damping: 14 }}
            className="relative flex flex-col items-center bg-gray-900 p-6 rounded-2xl border border-gray-700 w-44 h-44 shadow-[0_0_15px_rgba(20,184,166,0.25)] hover:shadow-[0_0_25px_rgba(20,184,166,0.6)] transition-all duration-300"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-teal-500 opacity-20 blur-2xl -z-10"
              animate={{
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            />

            <motion.div
              className="flex items-center justify-center w-20 h-20 mb-3"
              animate="animate"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </motion.div>

            <p className="text-gray-200 font-semibold text-center tracking-wide drop-shadow-[0_0_6px_black]">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
