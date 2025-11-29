export function HomeMainContent() {
    return (
  <>
    <h1 className="text-[40px] xs:text-[65px] sm:text-7xl leading-none inline-block">
      {"FULL-STACK".split("").map((letter, i) => (
        <span
          key={i}
          className="inline-block font-heading animate-[wave_2s_ease-in-out_infinite] bg-gradient-to-t from-[#6C63FF] to-[#00A8CC] bg-clip-text text-transparent"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {letter}
        </span>
      ))}
    </h1>
    <h1 className="text-[40px] xs:text-[65px] sm:text-7xl bg-gradient-to-t from-[#00A8CC] to-[#6C63FF] text-transparent bg-clip-text leading-none mb-20">
      DEVELOPER
    </h1>
    <h3 className="font-extrabold text-xl sm:text-3xl mb-2">I'm Reniel</h3>
    <p className="text-[13px] sm:text-lg text-center mb-20 px-5 max-w-[750px]">
      I enjoy building modern web applications with React, Tailwind CSS, and
      JavaScript. I focus on creating clean, efficient, and user-centered
      experiences. My goal is to craft interfaces that feel intuitive and
      meaningful to use.
    </p>
  </>
  );
}
