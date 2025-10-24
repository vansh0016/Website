import { Badge } from "@/components/ui/badge";

interface Education {
  title: string;
  company: string;
  period: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const education: Education[] = [
  {
    title: "M.S. Data Analytics Engineering",
    company: "George Mason University",
    period: "August 2024 - May 2026",
  },
  {
    title: "Bachelor of Engineering - Major: Electronics / Minor: Data Science",
    company: "University Of Mumbai",
    period: "July 2020 - May 2024",
  },
];

const experiences: Experience[] = [
  {
    title: "Graduate Research Assistant",
    company: "George Mason University",
    period: "March 2025 - Present",
    description: "Currently working under the guidance of Dr. Duoduo Liao, developing deep learning frameworks for structural health monitoring and exploring multimodal fusion approaches to advance predictive maintenance in non-destructive evaluation methods.",
    skills: [],
  },
  {
    title: "Applied AI Engineer Intern",
    company: "Alchemus",
    period: "May 2025 - August 2025",
    description: "Designed and deployed agentic AI pipelines with modular micro-agents, built scalable RESTful APIs and optimized prompt engineering workflows to enhance automation and system reliability.",
    skills: [],
  },
  {
    title: "Data Analyst Intern",
    company: "Global EduTrails",
    period: "November 2022 - April 2023",
    description: "Built forecasting models to support data-driven pricing strategies and developed interactive dashboards that enhanced business decision-making.",
    skills: [],
  },
  {
    title: "Quality Assurance Tester",
    company: "Pravin Electronics",
    period: "November 2022 - April 2023",
    description:"Executed bench/test setups to verify device performance, analyzed specifications and data sheets to enhance product compliance and performance, and prepared detailed documentation that improved client satisfaction and understanding.",
    skills: [],
  },
];

export const ExperienceSection = () => {
  return (
    <div id="experience" className="min-h-screen py-16 relative bg-gradient-to-br from-[rgb(18,24,56)] to-[rgb(9,18,48)]">
      {/* Education Section */}
      <section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(25,118,210,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">
            Education & Experience
            <span className="block mt-2 text-lg font-normal text-blue-300"></span>
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] backdrop-blur-lg p-6 rounded-xl border border-white/5 hover:border-blue-400/30 transition-all duration-300 shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{edu.title}</h3>
                    <p className="text-blue-200 font-medium">{edu.company}</p>
                  </div>
                  <span className="text-blue-300/80 text-sm">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="my-8" />

      {/* Experience Section */}
      <section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(25,118,210,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] backdrop-blur-lg p-6 rounded-xl border border-white/5 hover:border-blue-400/30 transition-all duration-300 shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-blue-200 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-blue-300/80 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
