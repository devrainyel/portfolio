import { siGit, siGithub, siPostman , siVitest } from "simple-icons/icons";


export function ToolsIcons() {
    return (
        <ul className='flex gap-6 justify-center mt-4'>
        <li>
          <svg
        role="img"
        viewBox="0 0 24 24"
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        fill={`#${siGit.hex}`}
      >
        <title>{siGit.title}</title>
        <path d={siGit.path} />
      </svg>
        </li>
        <li>
           <svg
        role="img"
        viewBox="0 0 24 24"
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        className='github-icon'
        fill="currentColor"
      >
        <title>{siGithub.title}</title>
        <path d={siGithub.path} />
      </svg>
        </li>
        <li>
          <svg
        role="img"
        viewBox="0 0 24 24"
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        fill={`#${siPostman.hex}`}
      >
        <title>{siPostman.title}</title>
        <path d={siPostman.path} />
      </svg>
        </li>
        <li>
          <svg
        role="img"
        viewBox="0 0 24 24"
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        fill={`#${siVitest.hex}`}
      >
        <title>{siVitest.title}</title>
        <path d={siVitest.path} />
      </svg>
        </li>
      </ul>
    );
}