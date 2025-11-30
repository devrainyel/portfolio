import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ProjectPreview } from "./ProjectPreview";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectDescriptionMobile } from "./ProjectDescriptionMobile";
import { technologies } from "./technologies";
import { projectsData } from "./projectsData";
import { useProjectObserver } from "../../hooks/useProjectObserver";

export function Projects() {
  const { selectedProject, projectRefs } = useProjectObserver(projectsData);

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
        <div className="flex justify-center px-5 lg:px-0 gap-20 pb-20 lg:pb-[292px]">
          {/* Project Cards (Observed Elements) */}
          <div className="w-full max-w-2xl space-y-28">
            {projectsData.map((project, index) => ( // <-- Use a single map
              <div key={project.id}> 
                {/* 1. Project Preview Card */}
                <ProjectPreview
                  projectPreview={project}
                  index={index}
                  selectedProject={selectedProject}
                  projectRefs={projectRefs}
                />
                {/* Project Description for Small Screens */}
                <ProjectDescriptionMobile project={project} />
              </div>
            ))}
          </div>
          <div className="hidden lg:flex">
            <ProjectDescription
              relevantTechnologies={relevantTechnologies}
              selectedProject={selectedProject}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
