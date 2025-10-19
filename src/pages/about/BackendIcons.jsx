import {
  siPhp,
  siNodedotjs,
  siExpress,
  siMongodb,
  siMysql,
} from "simple-icons";

const backendSkills = [
  { icon: siPhp, name: "Php" },
  { icon: siNodedotjs, name: "Node JS" },
  { icon: siExpress, name: "Express JS" },
  { icon: siMongodb, name: "Mongo DB" },
  { icon: siMysql, name: "Mysql" },
];

export function BackendIcons() {
  return (
    <ul className="flex flex-wrap gap-6">
      {backendSkills.map((backendSkill, index) => (
        <li key={index} className="relative group">
          <svg
            role="img"
            viewBox="0 0 24 24"
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            className={backendSkill.icon === siExpress ? "express-icon" : ""}
            fill={
              backendSkill.icon === siExpress
                ? "currentColor"
                : `#${backendSkill.icon.hex}`
            }
          >
            <path d={backendSkill.icon.path} />
          </svg>
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
            {backendSkill.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
