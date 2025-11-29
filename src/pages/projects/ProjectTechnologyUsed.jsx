export function ProjectTechnologyUsed({ technology }) {
  return (
    <div
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
  );
}
