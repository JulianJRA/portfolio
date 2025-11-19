import Navbar from "./components/Navbar";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSectionPlaceholder from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

const App = () => {
  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen scroll-smooth">
      <Navbar />
      <main className="px-6 md:px-12 lg:px-20">
        <HomeSection />
        <AboutSection />
        <ProjectsSectionPlaceholder />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
