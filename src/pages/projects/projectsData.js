export const projectsData = [
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
      "Real-time notification and email notification",
      "Leave application PDF generation",
      "Admin approval workflow",
    ],
    techNames: ["HTML", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    liveUrl: "https://gov.tesdaregion3.com/",
    githubUrl: "#",
  },
  {
    id: "dogbreedsexplorer",
    title: "DOG BREEDS EXPLORER",
    category: "Personal Project",
    imageSrc: "./dogbreedsexplorerpreview.JPG",
    description:
      "A simple application that uses an external API to fetch and display various dog breeds, including their images, temperament, and origin, built with a focus on fast rendering and responsive design.",
    features: [
      "JWT Authentication",
      "Search and filter functionality",
      "Dynamic fetching from external API",
      "Detailed breed view page",
    ],
    techNames: ["TailwindCSS", "ReactJS", "NodeJS", "ExpressJS"],
    liveUrl: "https://gov.tesdaregion3.com/",
    githubUrl: "https://github.com/devrainyel/dog-breeds-explorer",
  },
  {
    id: "convofy",
    title: "CONVOFY",
    category: "Personal Project",
    imageSrc: "./convofy.JPG",
    description:
      "A real-time communication platform built for instant messaging and media sharing. The app focuses on a smooth user experience with built-in protections against common web abuse.",
    features: [
      "JWT Authentication",
      "Real-time chat using Socket.io",
      "Real-time notification using Socket.io",
      "Upload image using Cloudinary",
      "Integrated Arcjet security middleware to provide application-level rate limiting and protection against automated bot attacks.",
    ],
    techNames: ["TailwindCSS", "ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    liveUrl: "https://convofy-myw6.onrender.com",
    githubUrl: "https://github.com/devrainyel/convofy",
  },
];
