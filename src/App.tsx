import Navbar from "./components/Navbar";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import TechnologiesSection from "./sections/TechnologiesSection";

const App = () => {
  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen scroll-smooth">
      <Navbar />
      <main className="px-6 md:px-12 lg:px-20">
        <HomeSection />
        <AboutSection />
        <TechnologiesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
