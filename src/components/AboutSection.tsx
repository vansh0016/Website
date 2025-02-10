
import { Github, Linkedin, Mail } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-16 bg-[rgb(12,0,64)] relative">
      <div className="absolute inset-0 bg-fixed" style={{ backgroundImage: 'url("/path-to-your-background.jpg")', opacity: 0.1 }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Professional headshot"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div>
            <p className="text-lg text-gray-300 mb-8">
              I'm a full-stack developer with a passion for creating beautiful and functional web applications. 
              With expertise in modern web technologies, I focus on delivering high-quality solutions that meet 
              both user needs and business objectives.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                <Github className="w-6 h-6 mr-2" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                <Linkedin className="w-6 h-6 mr-2" />
                LinkedIn
              </a>
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                <Mail className="w-6 h-6 mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
