import { siGit, siGithub, siPostman, siVitest } from "simple-icons/icons";

const toolIcons = [
  { icon: siGit, name: "Git" },
  { icon: siGithub, name: "Github" },
  { icon: siPostman, name: "Postman" },
  { icon: siVitest, name: "Vitest" },
];

export function ToolsIcons() {
  return (
    <ul className="flex gap-6">
      {toolIcons.map((toolIcon, index) => (
        <li key={index} className="relative group transition-transform duration-300 hover:scale-110">
          <svg
            role="img"
            viewBox="0 0 24 24"
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            className={toolIcon.icon === siGithub ? "github-icon" : ""}
            fill={
              toolIcon.icon === siGithub
                ? "currentColor"
                : `#${toolIcon.icon.hex}`
            }
          >
            <path d={toolIcon.icon.path} />
          </svg>
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
            {toolIcon.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
