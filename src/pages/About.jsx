import CTABtn from "../utils/CTABtn";

function About() {
  return (
    <section
      id="about"
      className=" p-8 relative mt-12 grid gap-3 rounded-2xl border-slate-100 border-2"
    >
      <main className=" rounded-2xl  md:col-span-2 md:row-span-2  lg:col-span-3 ">
        <article className="flex items-center justify-between">
          <div className="basis-[90%] mr-12">
            <h3 className="text-2xl font-medium leading-4 mt-8 tracking-tight dark:text-darkMode-textGray sm:leading-none">
              Hello there,
            </h3>
            <h1
              className="mt-2  bg-gradient-to-r from-gradientBlue via-60% via-gradientRose to-gradientRose bg-clip-text 
            text-[34px]  font-bold tracking-tight text-transparent sm:text-5xl md:text-[40px]  
            lg:text-[56px]"
            >
              I'm Tamim Ahamed.
            </h1>
            <p className="mt-4 font-roboto text-deepNaviBlue dark:text-darkMode-textGray">
              A Full-stack Developer & UI Designer from Bangladesh. I'm a CS
              undergraduate and a passionate MERN developer with a strong
              foundation in building dynamic and scalable web applications using
              MongoDB/PostgreSQL, Express.js, React, Typescript, Tailwindcss,
              and Node.js.
            </p>
            <div className="mt-16 flex items-center justify-between  gap-4 md:justify-start">
              <CTABtn
                cta_name="Resume"
                border={false}
                icon_visivility={false}
              />
              <CTABtn
                cta_name="Projects"
                link="#projects"
                border={true}
                icon_visivility={true}
              />
            </div>
          </div>

          <figure className="relative rounded-lg basis-[50%]">
            <img
              src="assets/images/profile_pic.png"
              alt="tamim's_profile_pic"
              className="rounded-lg w-full h-full filter grayscale"
            />
          </figure>
        </article>
      </main>

      {/* <div className=" flex flex-col items-center justify-center rounded-2xl bg-white p-6 dark:bg-darkMode-background">
        <div className="relative flex items-center gap-2">
          <span className="mb-2 h-3 w-3 rounded-full bg-primary "></span>
          <span className="absolute mb-2 h-3 w-3 animate-ping rounded-full bg-primary "></span>
          <h1 className="mb-2 text-center font-medium dark:text-darkMode-textGray">
            Let's connect
          </h1>
        </div>
        
      </div> */}
    </section>
  );
}

export default About;
