export function ContactForm() {
  return (
    <div className='border border-[#4b5563] rounded-lg order-1 lg:order-2 p-6  backdrop-blur-sm'>
      <h2 className='text-2xl font-extrabold mb-6'>Send Message</h2>
      <form className='space-y-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label htmlFor='name' className='block text-sm font-bold mb-1'>
              Your Name
            </label>
            <input
              id='name'
              name='name'
              className='w-full border border-[#4b5563] rounded-md p-3 placeholder:text-[#4b5563] focus:border-0 focus:outline-0'
              placeholder='Enter your name'
              type='text'
              required
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-bold mb-1'>
              Your Email
            </label>
            <input
              id='email'
              name='email'
              className='w-full border border-[#4b5563] rounded-md p-3 placeholder:text-[#4b5563] focus:border-0 focus:outline-0'
              placeholder='Enter your email'
              type='email'
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor='subject' className='block text-sm font-bold mb-1'>
            Subject
          </label>
          <input
            id='subject'
            name='subject'
            className='w-full border border-[#4b5563] rounded-md p-3 placeholder:text-[#4b5563] focus:border-0 focus:outline-0'
            placeholder='Enter subject'
            type='text'
            required
          />
        </div>
        <div>
          <label htmlFor='message' className='block text-sm font-bold mb-1'>
            Your Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={4}
            className='w-full border border-[#4b5563] rounded-md p-3 placeholder:text-[#4b5563] focus:border-0 focus:outline-0 resize-none'
            placeholder='Enter your message'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full bg-gradient-to-r from-[#00A8CC] to-[#6C63FF] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md cursor-pointer hover:bg-gradient-to-l'
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
