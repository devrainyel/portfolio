import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ProjectPreview } from "./ProjectPreview";
import { ProjectDescription } from "./ProjectDescription";
import { technologies } from "./technologies";
import { projectsData } from "./projectsData";
import { useProjectObserver } from "../../hooks/useProjectObserver";

export function Projects() {
  // Use the custom hook to manage project state and refs
  const { selectedProject, projectRefs } = useProjectObserver(projectsData); // <-- Call the hook

  // Logic to filter technologies for the selected project
  const relevantTechnologies = technologies.filter((tech) =>
    selectedProject.techNames.includes(tech.name)
  );

  return (
    <>
      <title>Projects</title>
      <Navbar />
      <section className="min-h-screen flex-col gap-10 justify-center">
        <div className="text-center mb-20 mt-[120px]">
          <h3 className="text-6xl font-black">PROJECTS</h3>
          <p className="text-xl">These are the projects I worked on</p>
        </div>
        <div className="flex justify-center gap-20 pb-[292px]">
          {/* LEFT COLUMN: Project Cards (Observed Elements) */}
          <div className="w-full max-w-2xl space-y-28">
            {projectsData.map((projectPreview, index) => (
              <ProjectPreview
                key={projectPreview.id}
                projectPreview={projectPreview}
                index={index}
                selectedProject={selectedProject}
                projectRefs={projectRefs}
              />
            ))}
          </div>
          <ProjectDescription relevantTechnologies={relevantTechnologies} selectedProject={selectedProject} />
        </div>
      </section>
      <Footer />
    </>
  );
}