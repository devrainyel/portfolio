import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function ProjectPreview({ projectRefs, selectedProject, projectPreview, index }) {
  return (
    <div
      id={projectPreview.id}
      ref={(el) => (projectRefs.current[index] = el)}
      className={`card border w-full transition-all cursor-pointer group overflow-hidden
            ${
              selectedProject.id === projectPreview.id
                ? "border-[#00a8cc] shadow-xl shadow-[#00a8cc]/20 scale-[1.01]"
                : "border-[#4b5563] hover:border-gray-500"
            }`}
    >
      {/* Image and Overlay Container */}
      <div className="relative w-full overflow-hidden">
        <img
          src={projectPreview.imageSrc}
          className="object-cover h-40 xs:h-96 w-full transition-transform duration-500 group-hover:scale-105"
          alt={`Screenshot of the ${projectPreview.title} project`}
        />

        {/* The Hover Overlay */}
        <div className="absolute inset-0 bg-black/75 flex items-center justify-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={projectPreview.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl  transition-all hover:scale-120"
            onClick={(e) => e.stopPropagation()}
            title="View Code"
          >
            <FaGithub />
          </a>
          <a
            href={projectPreview.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl transition-all hover:scale-120"
            onClick={(e) => e.stopPropagation()}
            title="Live Demo"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      <h3 className="p-5 font-black text-center">{projectPreview.title}</h3>
    </div>
  );
}