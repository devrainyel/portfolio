import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ProjectPreview } from "./ProjectPreview";
import { ProjectDescription } from "./ProjectDescription";
import { technologies } from "./technologies";
import { projectsData } from "./projectsData";
import { useProjectObserver } from "../../hooks/useProjectObserver";
import { FaStarOfLife } from "react-icons/fa6";
import { ProjectTechnologyUsed } from "./ProjectTechnologyUsed";

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
        <div className="flex justify-center px-5 lg:px-0 gap-20 pb-20 lg:pb-[292px]">
          {/* LEFT COLUMN: Project Cards (Observed Elements) */}
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

                {/* 2. In-line Description (1 per ProjectPreview) - Use project data */}
                <div className="w-full lg:hidden space-y-4 pt-10">
                  <h3 className="text-xl font-bold">
                    {project.category}
                  </h3>
                  <p className="text-md">{project.description}</p>
                  
                  {/* Features and Technologies - Kept dynamic using selectedProject 
                      based on your original logic (for small screens) */}
                  
                  {/* Dynamic Features List (Will only show features for the active project) */}
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-white"
                      >
                        <FaStarOfLife className="text-[#00a8cc] w-[16px]" />
                        <span className="text-sm italic">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Dynamic Technologies Used Display */}
                  <div className="flex flex-wrap gap-3 mt-8">
                    {technologies
                      .filter((tech) => project.techNames.includes(tech.name))
                      .map((technology) => (
                        <ProjectTechnologyUsed
                          key={technology.name}
                          technology={technology}
                        />
                      ))}
                  </div>
                </div>
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
