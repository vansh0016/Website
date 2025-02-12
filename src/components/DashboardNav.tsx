
import { useState, useEffect } from "react";
import { Home, User, Briefcase, Mail, Clock, Menu } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const currentSection = sections.find((section) => {
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
      // If a mobile menu item is clicked, close the menu.
      if (mobileMenuOpen) setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[rgba(18,24,56,0.8)] backdrop-blur-sm z-50 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand / Logo */}
        <div className="text-2xl font-bold text-white">
          VANSH A SETPAL
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
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

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2">
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
      )}
    </nav>
  );
};

