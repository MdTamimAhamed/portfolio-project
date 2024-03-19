import CTABtn from "../utils/CTABtn";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function About() {
  return (
    <main
      id="about"
      className=" relative mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-4"
    >
      <div className="absolute -top-20 -z-50 h-60 w-60 rounded-full bg-gradient-to-br from-secondary to-primary opacity-30 blur-[120px] sm:h-96 sm:w-96"></div>
      <div className="absolute bottom-0 right-0 -z-50 h-96 w-96 rounded-full bg-gradient-to-br from-secondary to-primary opacity-30   blur-[130px]"></div>

      <article className="rounded-2xl bg-white px-8 py-20 md:col-span-2  md:row-span-2 lg:col-span-3 lg:px-16">
        <h3 className="text-3xl font-bold leading-4 tracking-tight sm:leading-none">
          <span className="font-marck">Hi, </span>
          I'm Tamim
        </h3>
        <h1
          className=" bg-gradient-to-r from-secondary to-primary bg-clip-text 
          text-[34px]  font-bold tracking-tight text-transparent sm:text-5xl md:text-[40px]  
          lg:text-[56px]"
        >
          Full Stack Developer.
        </h1>
        <p className="mt-4 font-roboto text-deepNaviBlue">
          I'm Tamim Ahamed, a Full-stack Developer & UI Designer from
          Bangladesh.
          <br />
          Currently studying Computer Science and I'm passionate about Full
          Stack Web Development and and I'm actively seeking opportunities to
          apply my skills and contribute to innovative projects.
        </p>

        <div className="mt-14 flex items-center justify-between  gap-4 md:justify-start">
          <CTABtn cta_name="Resume" border={false} />
          <CTABtn cta_name="Projects" border={true} />
        </div>
      </article>

      <figure className="flex items-center justify-center rounded-2xl bg-white py-4">
        <img
          src="/assets/images/profile.svg"
          alt="user profile picture"
          className="py-2 transition-transform duration-300 ease-in hover:scale-105"
        />
      </figure>

      <div className=" flex flex-col items-center justify-center rounded-2xl bg-white p-6">
        <div className="relative flex items-center gap-2">
          <span className="mb-2 h-3 w-3 rounded-full bg-primary "></span>
          <span className="absolute mb-2 h-3 w-3 animate-ping rounded-full bg-primary "></span>
          <h1 className="mb-2 text-center font-medium">Let's connect</h1>
        </div>
        <div className="flex items-center justify-center gap-6 text-3xl md:gap-4 md:text-[26px]">
          <a
            className="cursor-pointer transition-all duration-150 ease-in hover:text-primary"
            href="https://github.com/MdTamimAhamed"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="cursor-pointer transition-all duration-150 ease-in hover:text-primary"
            href="https://www.linkedin.com/in/tamim-ahamed-000432174/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="cursor-pointer transition-all duration-150 ease-in hover:text-primary"
            href="https://www.facebook.com/tamim.ssgt/"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="cursor-pointer transition-all duration-150 ease-in hover:text-primary"
            href="https://www.instagram.com/tamim_ahamed_zan/"
            target="_blank"
          >
            <RiInstagramFill />
          </a>
        </div>
      </div>
    </main>
  );
}

export default About;
