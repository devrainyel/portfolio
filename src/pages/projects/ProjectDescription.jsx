import { ProjectTechnologyUsed } from "./ProjectTechnologyUsed";
import { FaStarOfLife } from "react-icons/fa6";

export function ProjectDescription({ selectedProject, relevantTechnologies }) {
  return (
    <div className="max-w-sm sticky top-25 h-fit space-y-4">
      <h3 className="text-xl font-bold">{selectedProject.category}</h3>
      <p className="text-md">{selectedProject.description}</p>
      {/* Dynamic Features List */}
      <ul className="space-y-2">
        {selectedProject.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-white">
            <FaStarOfLife className="text-[#00a8cc] w-[16px] h-[16px] flex-shrink-0 mt-0.5" />
            <span className="text-sm italic">{feature}</span>
          </li>
        ))}
      </ul>
      {/* Dynamic Technologies Used Display */}
      <div className="flex flex-wrap gap-3 mt-8">
        {relevantTechnologies.map((technology) => (
          <ProjectTechnologyUsed
            key={technology.name}
            technology={technology}
          />
        ))}
      </div>
    </div>
  );
}
