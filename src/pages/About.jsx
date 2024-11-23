import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionTitle from "../components/reUseable/bigTitle/SectionTitle";

function About() {
  const [rotate1, setRotate1] = useState(0);
  const [rotate2, setRotate2] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const section = document.querySelector(".rotateDiv");

      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top >= 0 && rect.bottom <= windowHeight) {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY) {
            setRotate1(-20);
            setRotate2(-10);
          } else {
            setRotate1(20);
            setRotate2(10);
          }

          lastScrollY = currentScrollY;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <SectionTitle
        title1="About"
        title2="Know me"
        description="Have questions or seeking collaboration? Let's connect! Whether it's a project discussion or any inquiry, I'm here to help."
      />
      <section
        id="about"
        className=" rotateDiv fold-pane p-4 md:p-6  rounded-4xl border-slate-100 border-1 dark:border-white/20"
      >
        <main className=" rounded-2xl dark:border-white/20  border-1 bg-flatBg dark:bg-darkMode-background  ">
          <article className="md:flex items-center justify-between lg:m-16">
            <figure className="relative z-0 m-16 mt-4 flex justify-center w-[200px] lg:w-[600px] h-full items-center rounded-lg basis-3/12">
              <img
                src="/assets/images/profile_about.jpg"
                alt="tamim's_profile_pic"
                className="relative z-0 w-full  border-8 border-flatBg h-full filter grayscale "
              />
              <motion.div
                animate={{ rotate: rotate1 }}
                transition={{ type: "spring", stiffness: 100, damping: 50 }}
                className={` absolute -z-20  -top-6 left-0  bg-gray-200 border-dashed rounded-2xl w-[95%] h-[108%] `}
              ></motion.div>
              <motion.div
                animate={{ rotate: rotate2 }}
                transition={{ type: "tween", stiffness: 100, damping: 50 }}
                className={` absolute -z-20 -top-6 left-0 bg-gradient-to-br from-gradientBlue to-gradientRose rounded-2xl w-[95%] h-[108%] `}
              ></motion.div>
            </figure>

            <div className=" lg:ml-20 lg:basis-8/12">
              <h3 className="text-lg font-medium leading-4 mt-3 tracking-tight dark:text-darkMode-textGray sm:leading-none">
                Hello there,
              </h3>

              <div className="mt-4 font-roboto text-deepNaviBlue dark:text-darkMode-textGray">
                <p>
                  Hi, I’m Tamim, a practical-minded Software Developer & UI
                  Designer from Bangladesh.
                </p>

                <p className="pt-4">
                  My journey in technology began with a curiosity that evolved
                  into a deep love for coding. Currently studying Computer
                  Science and I'm passionate about Full Stack Web Development
                  and and I'm actively seeking opportunities to apply my skills
                  and contribute to innovative projects.
                </p>

                <p className="pt-4">
                  With a love for tech, a fast learning ability, and
                  adaptability, I'm ready to take on challenges and make a
                  meaningful impact. Beyond the buzz of web development, I have
                  a soft spot for AI and mobile development, adding a touch of
                  innovation to my skill set.
                </p>

                <p className="pt-4">
                  I believe in the power of collaboration and teamwork. If
                  you're looking for someone who not only codes but also
                  understands the broader picture, I'm your go-to person.
                </p>
                <h1 className="pt-4">Follow me on</h1>
              </div>
            </div>
          </article>
        </main>
      </section>
    </>
  );
}

export default About;
