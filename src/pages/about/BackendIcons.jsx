import {
  siPhp,
  siNodedotjs,
  siExpress,
  siMongodb,
  siMysql,
} from 'simple-icons/icons';

export function BackendIcons() {
  return (
    <ul className='flex gap-6 justify-center mt-4'>
      <li>
        <svg
          role='img'
          viewBox='0 0 24 24'
          width='50'
          height='50'
          xmlns='http://www.w3.org/2000/svg'
          fill={`#${siPhp.hex}`}
        >
          <title>{siPhp.title}</title>
          <path d={siPhp.path} />
        </svg>
      </li>
      <li>
        <svg
          role='img'
          viewBox='0 0 24 24'
          width='50'
          height='50'
          xmlns='http://www.w3.org/2000/svg'
          fill={`#${siNodedotjs.hex}`}
        >
          <title>{siNodedotjs.title}</title>
          <path d={siNodedotjs.path} />
        </svg>
      </li>
      <li>
        <svg
          role='img'
          viewBox='0 0 24 24'
          width='50'
          height='50'
          xmlns='http://www.w3.org/2000/svg'
          className='express-icon'
          fill='currentColor'
        >
          <title>{siExpress.title}</title>
          {/* 👇 important! */}
          <path d={siExpress.path} />
        </svg>
      </li>

      <li>
        <svg
          role='img'
          viewBox='0 0 24 24'
          width='50'
          height='50'
          xmlns='http://www.w3.org/2000/svg'
          fill={`#${siMongodb.hex}`}
        >
          <title>{siMongodb.title}</title>
          <path d={siMongodb.path} />
        </svg>
      </li>
      <li>
        <svg
          role='img'
          viewBox='0 0 24 24'
          width='50'
          height='50'
          xmlns='http://www.w3.org/2000/svg'
          fill={`#${siMysql.hex}`}
        >
          <title>{siMysql.title}</title>
          <path d={siMysql.path} />
        </svg>
      </li>
    </ul>
  );
}
