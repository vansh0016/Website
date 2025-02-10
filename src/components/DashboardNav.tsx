
import { useState, useEffect } from "react";
import { Home, User, Briefcase, Mail, Clock } from "lucide-react";

interface NavPanelProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  isActive: boolean;
}

const NavPanel = ({ icon, title, onClick, isActive }: NavPanelProps) => (
  <button
    onClick={onClick}
    className={`flex items-center p-4 rounded-lg transition-all duration-300 hover:bg-[rgb(12,0,64)] ${
      isActive ? "bg-secondary/30" : "bg-primary/50"
    } backdrop-blur-sm shadow-lg hover:shadow-xl`}
  >
    <div className="mr-3 text-white">{icon}</div>
    <span className="font-medium text-white">{title}</span>
  </button>
);

export const DashboardNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[rgb(18,24,56)]/80 backdrop-blur-sm z-50 p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white w-1/4">
            VANSH SETPAL
          </div>
          <div className="flex-grow"></div>
          <div className="flex gap-4 w-3/4 justify-end">
            <NavPanel
              icon={<Home className="w-5 h-5" />}
              title="Home"
              onClick={() => scrollToSection("home")}
              isActive={activeSection === "home"}
            />
            <NavPanel
              icon={<User className="w-5 h-5" />}
              title="About"
              onClick={() => scrollToSection("about")}
              isActive={activeSection === "about"}
            />
            <NavPanel
              icon={<Clock className="w-5 h-5" />}
              title="Experience"
              onClick={() => scrollToSection("experience")}
              isActive={activeSection === "experience"}
            />
            <NavPanel
              icon={<Briefcase className="w-5 h-5" />}
              title="Projects"
              onClick={() => scrollToSection("projects")}
              isActive={activeSection === "projects"}
            />
            <NavPanel
              icon={<Mail className="w-5 h-5" />}
              title="Contact"
              onClick={() => scrollToSection("contact")}
              isActive={activeSection === "contact"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
