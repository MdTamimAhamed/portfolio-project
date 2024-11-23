import Typewriter from "typewriter-effect";
import SocialProfile from "../components/extraComponents/SocialProfile";
import CallToActionBtn from "../components/reUseable/buttons/CallToActionBtn";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function Home() {
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        controls.start({ y: -20 });
      } else {
        controls.start({ y: 10 });
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, controls]);

  return (
    <motion.div
      id="home"
      className="border-1 z-10 border-white/50 dark:border-white/30 rounded-4xl p-3 sm:p-6 my-12 relative overflow-hidden"
      animate={controls}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <section
        className="box gap-3 bg-white dark:bg-darkMode-background w-full rounded-[1.3rem] sm:rounded-xl relative pb-3">
        <main className="rounded-2xl">
          <article className="flex flex-col lg:flex-row justify-between items-center gap-4 px-8 md:px-10 py-24">
            <div className="basis-full lg:basis-[60%]">
              <div>
                <p className="text-gray-400 leading-3 sm:leading-5 text-[1.3rem] xs:text-2xl sm:text-3xl">
                  <Typewriter
                    options={{
                      strings: ["Hey! Hi,", "I'm Tamim Ahamed"],
                      autoStart: true,
                      loop: true,
                      cursor: "",
                      deleteSpeed: 54,
                      delay: 50,
                    }}
                  />
                </p>
                <h1
                  className="mt-4 text-transparent tracking-tight text-[2.1rem] sm:text-5xl font-bold bg-gradient-to-r from-sky-600 via-60% via-gradientRose to-gradientRose bg-clip-text animate-wavy">
                  Fullstack Developer
                </h1>
                <p className="mt-4 text-gray-600 dark:text-white/70 md:text-justify">
                  A Full-stack Developer & UI Designer from Bangladesh.
                  <br /> I'm a CS graduate and a passionate MERN stack developer
                  with a strong foundation in building dynamic and scalable web
                  applications using Express.js, React, MongoDB, PostgreSQL,
                  Redux, Typescript, Tailwind CSS, and Node.js.
                </p>
              </div>
              <div
                className="mt-10 md:mt-16 gap-2 flex items-center sm:gap-4 sm:justify-between md:justify-center lg:justify-start">
                <CallToActionBtn cta_name="Resume" border={false} />
                <CallToActionBtn cta_name="Projects" link="#projects" border />
              </div>
            </div>
            <figure className="relative z-0 h-40 mt-8 lg:mt-0 sm:w-5/12 md:w-5/12 lg:h-1/3 lg:w-1/3">
              <motion.div
                animate={{
                  y: ["0%", "-2%", "0%", "-2%", "0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/assets/images/colored.png"
                  alt="Tamim's Profile Pic"
                  className="relative w-full h-full rounded-2xl filter grayscale transition-all duration-300 hover:scale-105"
                />
              </motion.div>
            </figure>
          </article>
        </main>

        <div
          className="470:mt-56 570:mt-64 sm:mt-10 mt-14 md:mt-24 lg:mt-0 flex flex-col items-center justify-center rounded-xl bg-flatBg mx-3 dark:bg-gray-800">
          <div className="relative flex items-center gap-2 mt-4">
            <span className="mb-2 h-3 w-3 rounded-full bg-green-400"></span>
            <span className="absolute mb-2 h-3 w-3 animate-ping rounded-full bg-green-400"></span>
            <h1 className="mb-2 text-center font-medium text-gray-800 dark:text-gray-300">
              Let's connect
            </h1>
          </div>
          <SocialProfile />
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
