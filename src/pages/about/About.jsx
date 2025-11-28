import { Navbar } from "../../components/Navbar";
import { RiMessageFill, RiLightbulbFlashFill } from "react-icons/ri";
import { AiOutlineRise } from "react-icons/ai";
import { FrontendIcons } from "./FrontendIcons";
import { BackendIcons } from "./BackendIcons";
import { ToolsIcons } from "./ToolsIcons";

export function About() {
  return (
    <>
      <title>About</title>
      <Navbar />

      {/* ===== ABOUT SECTION ===== */}
      <section className="min-h-screen flex flex-col gap-10 justify-center items-center px-5">
        <div className="mt-[88px] max-w-6xl w-full">
          <div className="text-center mb-20">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black">
              ABOUT ME
            </h3>
            <h4 className="text-base sm:text-lg font-black">
              FULL-STACK DEVELOPER
            </h4>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 items-start">
            {/* Left Heading */}
            <div className="flex items-center justify-center">
              <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black bg-gradient-to-t from-[#00A8CC] to-[#6C63FF] text-transparent bg-clip-text text-center leading-snug">
                DRIVEN TO LEARN. INSPIRED TO CREATE.
              </h3>
            </div>

            {/* About Text */}
            <div className="text-center lg:text-left">
              <p className="text-base sm:text-lg leading-relaxed">
                I'm Reniel, and I'm passionate about solving real-world problems
                through technology. I'm currently focusing on front-end
                development and working to specialize in it, but I also have the
                capability to build full-stack applications. My interest in
                development began with a fascination for how data flows and
                interacts between the backend and frontend.
              </p>
              <br />
              <p className="text-base sm:text-lg leading-relaxed">
                I value both self-directed learning and learning from others. I
                work well in collaborative environments, effectively utilizing
                available tools to contribute to team goals. I can quickly adapt
                to new responsibilities and acquire new skills through hands-on
                experience with assigned tasks.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                className="w-full border border-[#4b5563] object-cover"
                src="/hero-img.png"
                alt="Profile"
              />
              <div className="rounded-sm border border-[#4b5563] p-2 flex items-center gap-2 w-fit mx-auto absolute bottom-2 right-2 bg-[#4b5563]">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-blink"></div>
                <p className="text-xs sm:text-sm text-emerald-400">
                  Open to Work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECH SKILLS SECTION ===== */}
      <section className="mt-20 sm:mt-40 px-5 flex justify-center items-center">
        <div className="max-w-6xl w-full">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black mb-10 text-center lg:text-left">
            TECH SKILLS
          </h3>
          <div className="flex flex-col gap-14">
            {/* Frontend */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <h3 className="md:col-span-5 text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left">
                FRONT-END
              </h3>
              <div className="md:col-span-7 flex flex-wrap justify-center md:justify-start gap-4">
                <FrontendIcons />
              </div>
            </div>

            {/* Backend */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <h3 className="md:col-span-5 text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left">
                BACK-END
              </h3>
              <div className="md:col-span-7 flex flex-wrap justify-center md:justify-start gap-4">
                <BackendIcons />
              </div>
            </div>

            {/* Tools */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <h3 className="md:col-span-5 text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left">
                TOOLS
              </h3>
              <div className="md:col-span-7 flex flex-wrap justify-center md:justify-start gap-4">
                <ToolsIcons />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOFT SKILLS SECTION ===== */}
      <section className="mt-20 sm:mt-40 flex flex-col gap-10 justify-center items-center px-5 mb-10">
        <div className="w-full max-w-6xl text-center lg:text-left">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black">
            SOFT SKILLS
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 max-w-6xl w-full">
          <div className="border border-[#4b5563] rounded-md p-6 sm:p-10">
            <div className="flex items-center gap-2 mb-5">
              <RiLightbulbFlashFill className="icon" size={25} />
              <h3 className="text-lg sm:text-xl font-extrabold">
                Problem-Solving
              </h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed">
              I enjoy identifying challenges and finding efficient solutions
              through logical thinking and creativity. I approach problems step
              by step, focusing on understanding the root cause and delivering
              practical results.
            </p>
          </div>

          <div className="border border-[#4b5563] rounded-md p-6 sm:p-10">
            <div className="flex items-center gap-2 mb-5">
              <AiOutlineRise className="icon" size={25} />
              <h3 className="text-lg sm:text-xl font-extrabold">Adaptability</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed">
              I can easily adjust to new tools, environments, and workflows. I
              see change as an opportunity to grow and learn, which helps me
              stay flexible and productive in different situations.
            </p>
          </div>

          <div className="border border-[#4b5563] rounded-md p-6 sm:p-10">
            <div className="flex items-center gap-2 mb-5">
              <RiMessageFill className="icon" size={25} />
              <h3 className="text-lg sm:text-xl font-extrabold">
                Communication
              </h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed">
              I value teamwork and believe great results come from working
              together. I communicate clearly, listen actively, and contribute
              ideas to achieve shared goals with others.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
