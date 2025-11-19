import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const techs = [
  { name: "Java", logo: "/assets/java.png" },
  { name: "Spring Boot", logo: "/assets/springboot.png" },
  { name: "JUnit", logo: "/assets/junit.png" },
  { name: "Mockito", logo: "/assets/mockito.png" },
  { name: "SQL", logo: "/assets/sql.png" },
  { name: "Postman", logo: "/assets/postman.png" },
  { name: "Git", logo: "/assets/git.png" },
  { name: "HTML5", logo: "/assets/html.png" },     
  { name: "CSS3", logo: "/assets/css.png" },       
  { name: "JavaScript", logo: "/assets/javascript.png" },  
  { name: "React", logo: "/assets/react.png" },
  { name: "Docker", logo: "/assets/docker.png" },
  { name: "MongoDB", logo: "/assets/mongodb.png" },
  { name: "MySQL", logo: "/assets/mysql.png" },
  { name: "SQLServer", logo: "/assets/sqlserver.png" },
  { name: "Azure DevOps", logo: "/assets/azuredevops.png" },
  { name: "Jira", logo: "/assets/jira.png" },
  { name: "SonarQube", logo: "/assets/sonarqube.png" },
];

const TechnologiesSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="technologies" className="py-28">
      <h2 className="text-3xl font-bold text-teal-400 text-center mb-10">
        {lang === "en" ? "Technologies" : "Tecnologías"}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
        {techs.map((tech) => (
          <motion.div
            key={tech.name}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center bg-gray-900 p-4 rounded-xl border border-gray-800 shadow hover:shadow-teal-400 transition w-40 h-40"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-2">
              <img src={tech.logo} alt={tech.name} className="max-w-full max-h-full object-contain" />
            </div>
            <p className="text-gray-200 font-medium text-center">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
