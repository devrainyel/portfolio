import { useState, useEffect, useRef } from "react";

// The hook needs projectsData passed in to match IDs with project objects
export function useProjectObserver(projectsData) {
  // State to track the currently selected project (defaults to the first one)
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  // Ref to hold the list of all project card elements
  const projectRefs = useRef([]);

  // Logic to attach the Intersection Observer
  useEffect(() => {
    // Define the observer options (you can pass these as arguments if needed)
    const options = {
      root: null, // relative to the viewport
      rootMargin: "0px",
      // Triggers when 90% of the element is visible
      threshold: 0.9,
    };

    // Define the observer callback function
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find the project data object that matches the observed element's ID
          const newProject = projectsData.find((p) => p.id === entry.target.id);
          if (newProject) {
            // Only update state if the project is actually different
            setSelectedProject(prevProject => 
                prevProject.id !== newProject.id ? newProject : prevProject
            );
          }
        }
      });
    }, options);

    // Attach the observer to all project cards
    projectRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Cleanup function to stop observing when the component unmounts
    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [projectsData]); // projectsData is included as a dependency for completeness

  // Return the necessary values for the Projects component
  return { selectedProject, projectRefs };
}