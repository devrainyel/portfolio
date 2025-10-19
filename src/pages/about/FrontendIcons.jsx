import { siHtml5, siBootstrap, siTailwindcss, siReact } from "simple-icons";

const frontendSkills = [
  { icon: siHtml5, name: "HTML" },
  { icon: siBootstrap, name: "Bootstrap" },
  { icon: siTailwindcss, name: "Tailwind CSS" },
  { icon: siReact, name: "React JS" },
];

export function FrontendIcons() {
  return (
    <ul className="flex flex-wrap gap-6">
      {frontendSkills.map((frontendSkill, index) => (
        <li key={index} className="relative group transition-transform duration-300 hover:scale-110">
          <svg
            role="img"
            viewBox="0 0 24 24"
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            fill={`#${frontendSkill.icon.hex}`}
          >
            <path d={frontendSkill.icon.path} />
          </svg>
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
            {frontendSkill.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
