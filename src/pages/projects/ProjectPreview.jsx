export function ProjectPreview({ projectRefs, selectedProject, projectPreview, index }) {
  return (
    <div
      id={projectPreview.id}
      // Step 2: Assign ref to the element
      ref={(el) => (projectRefs.current[index] = el)}
      className={`card border w-full transition-all cursor-pointer 
            ${
              selectedProject.id === projectPreview.id
                ? "border-[#00a8cc] shadow-lg shadow-[#00a8cc]/20 scale-[1.01]"
                : "border-[#4b5563] hover:border-gray-500"
            }`}
    >
      <div className="w-full">
        <img
          src={projectPreview.imageSrc}
          className="object-cover h-40 xs:h-96 w-full"
          alt={`Screenshot of the ${projectPreview.title} project`}
        />
      </div>
      <h3 className="p-5 font-black text-center">{projectPreview.title}</h3>
    </div>
  );
}
