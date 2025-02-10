
import { ProjectCard } from "@/components/ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="projects" className="min-h-screen py-16 bg-[rgb(12,0,64)] relative">
      <div className="absolute inset-0 bg-fixed opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
