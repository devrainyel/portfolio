import { useState, useEffect, useRef } from 'react';
import { Navbar } from "../components/Navbar";
import { FaStarOfLife } from "react-icons/fa6";
import {
    siHtml5,
    siBootstrap,
    siJavascript,
    siPhp,
    siMysql,
    siReact,
    siTailwindcss,
    siExpress
} from "simple-icons";

const technologies = [
    { icon: siHtml5, name: "HTML", hex: siHtml5.hex },
    { icon: siBootstrap, name: "Bootstrap", hex: siBootstrap.hex },
    { icon: siJavascript, name: "JavaScript", hex: siJavascript.hex },
    { icon: siPhp, name: "PHP", hex: siPhp.hex },
    { icon: siMysql, name: "MySQL", hex: siMysql.hex },
    { icon: siReact, name: "ReactJS", hex: siReact.hex },
    { icon: siTailwindcss, name: "TailwindCSS", hex: siTailwindcss.hex },
    { icon: siExpress, name: "ExpressJS", hex: 'ffffff' }
];

const projectsData = [
    {
        id: "tlms",
        title: "TESDA LEAVE MANAGEMENT SYSTEM (TLMS)",
        category: "Internship Project",
        imageSrc: "./LMS.JPG",
        description:
            "A full-stack system developed for TESDA that allows employees to request leave electronically and enables administrators to efficiently manage, approve, or reject these requests through a secure, role-based dashboard.",
        features: [
            "User role-based dashboards (Employee/Admin)",
            "Leave request submission and tracking",
            "Automated leave balance calculation",
            "Admin approval workflow",
        ],
        techNames: ["HTML", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    },
    {
        id: "dogbreedsexplorer",
        title: "DOG BREEDS EXPLORER",
        category: "Personal Project",
        imageSrc: "./LMS.JPG",
        description:
            "An application that uses an external API to fetch and display various dog breeds, including their images, temperament, and origin, built with a focus on fast rendering and responsive design.",
        features: [
            "Search and filter functionality",
            "Dynamic fetching from external API",
            "Responsive grid layout",
            "Detailed breed view page",
        ],
        techNames: ["TailwindCSS", "ReactJS", "ExpressJS"],
    }
];

// --- Component ---

export function Projects() {
    // State to track the currently selected project for the sticky panel
    const [selectedProject, setSelectedProject] = useState(projectsData[0]);

    // Ref to hold the list of all project card elements
    const projectRefs = useRef([]);

    // Logic to filter technologies for the selected project
    const relevantTechnologies = technologies.filter(tech => 
        selectedProject.techNames.includes(tech.name)
    );

    // Step 1: Implement Intersection Observer
    useEffect(() => {
        // Define the observer options
        const options = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            // Triggers when 50% of the element is visible
            threshold: .9
        };

        // Define the observer callback function
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Find the project data object that matches the observed element's ID
                    const newProject = projectsData.find(p => p.id === entry.target.id);
                    if (newProject) {
                        setSelectedProject(newProject);
                    }
                }
            });
        }, options);

        // Attach the observer to all project cards
        projectRefs.current.forEach(ref => {
            if (ref) {
                observer.observe(ref);
            }
        });

        // Cleanup function to stop observing when the component unmounts
        return () => {
            projectRefs.current.forEach(ref => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []); // Empty dependency array means this runs only once on mount

    return (
        <>
            <title>Projects</title>
            <Navbar />
            <section className="min-h-screen flex-col gap-10 justify-center">
                <div className="text-center mb-20 mt-[120px]">
                    <h3 className="text-6xl font-black">PROJECTS</h3>
                    <p className="text-xl">These are the projects I worked on</p>
                </div>
                <div className="flex justify-center gap-20 pb-[400px]">
                    
                    {/* LEFT COLUMN: Project Cards (Observed Elements) */}
                    <div className="w-full max-w-2xl space-y-28">
                        {projectsData.map((projectPreview, index) => (
                            <div 
                                key={projectPreview.id} 
                                id={projectPreview.id} // <-- Assign ID for lookup
                                // Step 2: Assign ref to the element
                                ref={el => projectRefs.current[index] = el} 
                                className={`card border w-full transition-all cursor-pointer 
                                    ${selectedProject.id === projectPreview.id 
                                        ? 'border-[#00a8cc] shadow-lg shadow-[#00a8cc]/20 scale-[1.01]' 
                                        : 'border-[#4b5563] hover:border-gray-500'}`
                                }
                            >
                                <div className="w-full">
                                    <img 
                                        src={projectPreview.imageSrc} 
                                        className="object-cover h-96 w-full" 
                                        alt={`Screenshot of the ${projectPreview.title} project`} 
                                    />
                                </div>
                                <h3 className="p-5 font-black text-center">
                                    {projectPreview.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                    {/* The content here now relies entirely on the 'selectedProject' state */}
                    <div className="max-w-sm sticky top-25 h-fit space-y-4">
                        <h3 className="text-xl font-bold">{selectedProject.category}</h3>
                        <p className="text-md">
                            {selectedProject.description}
                        </p>
                        
                        {/* Dynamic Features List */}
                        <ul className='space-y-2'>
                            {selectedProject.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2 text-white">
                                    <FaStarOfLife className="text-[#00a8cc] w-[16px]" />
                                    <span className="text-sm italic">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        {/* Dynamic Technologies Display */}
                        <div className="flex flex-wrap gap-3 mt-8">
                            {relevantTechnologies.map((technology, index) => (
                                <div
                                    key={index}
                                    className="rounded-full relative group border border-gray-800 p-3 bg-gray-900 hover:bg-gray-700 transition"
                                >
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="2em"
                                        height="2em"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ fill: `#${technology.hex}` }} 
                                    >
                                        <path d={technology.icon.path} />
                                    </svg>
                                    <span className="absolute top-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                                        {technology.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}