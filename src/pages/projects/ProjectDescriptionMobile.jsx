import { ProjectTechnologyUsed } from "./ProjectTechnologyUsed";
import { FaStarOfLife } from "react-icons/fa6";
import { technologies } from "./technologies";

export function ProjectDescriptionMobile({ project }) {
  // Filter technologies for this specific project
  const projectTechnologies = technologies.filter((tech) =>
    project.techNames.includes(tech.name)
  );

  return (
    <div className="w-full lg:hidden space-y-4 pt-10">
      <h3 className="text-xl font-bold">{project.category}</h3>
      <p className="text-md">{project.description}</p>
      {/* Features */}
      <ul className="space-y-2">
        {project.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-white">
            <FaStarOfLife className="text-[#00a8cc] w-[16px]" />
            <span className="text-sm italic">{feature}</span>
          </li>
        ))}
      </ul>
      {/* Technologies */}
      <div className="flex flex-wrap gap-3 mt-8">
        {projectTechnologies.map((technology) => (
          <ProjectTechnologyUsed
            key={technology.name}
            technology={technology}
          />
        ))}
      </div>
    </div>
  );
}

