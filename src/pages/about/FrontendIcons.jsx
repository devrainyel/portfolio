import { siHtml5, siBootstrap, siTailwindcss, siReact } from "simple-icons/icons";


export function FrontendIcons() {
  return (
    <ul className='flex gap-6 justify-center mt-4'>
      <li>
        <svg
      role="img"
      viewBox="0 0 24 24"
      width="50"
      height="50"
      xmlns="http://www.w3.org/2000/svg"
      fill={`#${siHtml5.hex}`}
    >
      <title>{siHtml5.title}</title>
      <path d={siHtml5.path} />
    </svg>
      </li>
      <li>
         <svg
      role="img"
      viewBox="0 0 24 24"
      width="50"
      height="50"
      xmlns="http://www.w3.org/2000/svg"
      fill={`#${siBootstrap.hex}`}
    >
      <title>{siBootstrap.title}</title>
      <path d={siBootstrap.path} />
    </svg>
      </li>
      <li>
        <svg
      role="img"
      viewBox="0 0 24 24"
      width="50"
      height="50"
      xmlns="http://www.w3.org/2000/svg"
      fill={`#${siTailwindcss.hex}`}
    >
      <title>{siTailwindcss.title}</title>
      <path d={siTailwindcss.path} />
    </svg>
      </li>
      <li>
        <svg
      role="img"
      viewBox="0 0 24 24"
      width="50"
      height="50"
      xmlns="http://www.w3.org/2000/svg"
      fill={`#${siReact.hex}`}
    >
      <title>{siReact.title}</title>
      <path d={siReact.path} />
    </svg>
      </li>
    </ul>
  );
}
