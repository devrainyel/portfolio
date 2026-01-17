import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { SoftSkills } from "./SoftSkills";
import { TechSkills } from "./TechSkills";
import { Footer } from "../../components/Footer";
import { GitHubCalendar } from 'react-github-calendar';


export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [techSkillsVisible, setTechSkillsVisible] = useState(false);
  const [softSkillsVisible, setSoftSkillsVisible] = useState(false);
  const [githubVisible, setGithubVisible] = useState(false);

  useEffect(() => {
    // Trigger main section animation on mount
    setIsVisible(true);

    // Intersection Observer for scroll-triggered animations
    const techSkillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTechSkillsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const softSkillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSoftSkillsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const githubObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setGithubVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const techSkillsElement = document.getElementById("tech-skills-section");
    const softSkillsElement = document.getElementById("soft-skills-section");
    const githubElement = document.getElementById("github-section");

    if (techSkillsElement) {
      techSkillsObserver.observe(techSkillsElement);
    }
    if (softSkillsElement) {
      softSkillsObserver.observe(softSkillsElement);
    }
    if (githubElement) {
      githubObserver.observe(githubElement);
    }

    return () => {
      if (techSkillsElement) techSkillsObserver.unobserve(techSkillsElement);
      if (softSkillsElement) softSkillsObserver.unobserve(softSkillsElement);
      if (githubElement) githubObserver.unobserve(githubElement);
    };
  }, []);

  return (
    <>
      <title>About</title>
      <Navbar />
      {/* ===== ABOUT SECTION ===== */}
      <section className="min-h-screen flex flex-col gap-10 justify-center items-center px-5">
        <div className="mt-[88px] max-w-6xl w-full">
          <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={isVisible ? { animationDelay: '0.1s' } : {}}>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black">
              ABOUT ME
            </h3>
            <h4 className="text-base sm:text-lg font-black mt-2">
              FULL-STACK DEVELOPER
            </h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 items-start">
            {/* Left Heading */}
            <div className={`flex items-center justify-center ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={isVisible ? { animationDelay: '0.3s' } : {}}>
              <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black bg-gradient-to-t from-[#00A8CC] to-[#6C63FF] text-transparent bg-clip-text text-center leading-snug">
                DRIVEN TO LEARN. INSPIRED TO CREATE.
              </h3>
            </div>
            {/* About Text */}
            <div className={`text-center lg:text-left ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={isVisible ? { animationDelay: '0.5s' } : {}}>
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
            <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={isVisible ? { animationDelay: '0.7s' } : {}}>
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
      <section id="tech-skills-section" className="mt-20 sm:mt-40 px-5 flex justify-center items-center">
        <div className="max-w-6xl w-full">
          <h3 className={`text-4xl sm:text-5xl md:text-6xl font-black mb-10 text-center lg:text-left ${techSkillsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={techSkillsVisible ? { animationDelay: '0.1s' } : {}}>
            TECH SKILLS
          </h3>
          <TechSkills isVisible={techSkillsVisible} />
        </div>
      </section>
      {/* ===== SOFT SKILLS SECTION ===== */}
      <section id="soft-skills-section" className="mt-20 sm:mt-40 flex flex-col gap-10 justify-center items-center px-5 mb-10">
        <div className="w-full max-w-6xl text-center lg:text-left">
          <h3 className={`text-4xl sm:text-5xl md:text-6xl font-black ${softSkillsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={softSkillsVisible ? { animationDelay: '0.1s' } : {}}>
            SOFT SKILLS
          </h3>
        </div>
        <SoftSkills isVisible={softSkillsVisible} />
      </section>
      {/* ===== GITHUB CONTRIBUTIONS SECTION ===== */}
      <section id="github-section" className="mt-20 sm:mt-40 flex flex-col gap-10 justify-center items-center px-5 mb-10">
        <div className="w-full max-w-6xl text-center lg:text-left">
          <h3 className={`text-4xl sm:text-5xl md:text-6xl font-black ${githubVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={githubVisible ? { animationDelay: '0.1s' } : {}}>
            GITHUB CONTRIBUTIONS
          </h3>
        </div>
        <div className={`w-full max-w-6xl flex justify-center ${githubVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={githubVisible ? { animationDelay: '0.3s' } : {}}>
          <div className="github-calendar-container">
            <GitHubCalendar username="devrainyel" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
