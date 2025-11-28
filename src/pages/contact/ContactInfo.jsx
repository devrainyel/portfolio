import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export function ContactInfo() {
  return (
    <div className='space-y-6 order-2 lg:order-1 mb-10 lg:mb-0'>
      <a
        className='flex items-center gap-4 p-4 rounded-lg border border-[#4b5563] group relative'
        href='mailto:devrainyel@gmail.com'
      >
        <MdEmail className='icon' />
        <div>
          <h3 className='font-extrabold'>Email</h3>
          <p>devrainyel@gmail.com</p>
        </div>
      </a>
      <div className='flex items-center gap-4 p-4 rounded-lg border border-[#4b5563]'>
        <FaLocationDot className='icon' />
        <div>
          <h3 className='font-extrabold'>Location</h3>
          <p>Philippines</p>
        </div>
      </div>
    </div>
  );
}