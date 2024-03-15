import SocialButton from "../utils/SocialButton"
import CTABtn from "../utils/CTABtn";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


function About() {
  return (
    <main className="relative mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
      <div className="w-96 h-96 bg-gradient-to-br from-secondary to-primary rounded-full blur-[120px] opacity-30 absolute -top-20 -z-50"></div>
      <div className="w-96 h-96 bg-gradient-to-br from-secondary to-primary rounded-full blur-[130px] opacity-30 absolute right-0 bottom-0   -z-50"></div>

      <article className="px-8 lg:px-16 py-20 md:col-span-2 lg:col-span-3  md:row-span-2 bg-white rounded-2xl">
        <h3 className="text-3xl font-bold tracking-tight leading-4 sm:leading-none">
          <span className="font-marck">Hi, </span>
          I'm Tamim
        </h3>
        <h1 className="text-[34px] sm:text-5xl md:text-[40px] lg:text-[56px] font-bold  tracking-tight text-transparent bg-gradient-to-r from-secondary to-primary  bg-clip-text">Full Stack Developer.</h1>
        <p className="mt-4 font-roboto text-deepNaviBlue">I'm Tamim Ahamed, a Full-stack Developer & UI Designer from Bangladesh.<br/>
           Currently studying Computer Science and  I'm passionate about Full Stack Web Development and and I'm actively seeking opportunities to apply my skills and contribute to innovative projects.
        </p>
        <div className="flex justify-between md:justify-start items-center  gap-4 mt-14">
          <CTABtn
            cta_name="Resume"
            border = {false}
          />
          <CTABtn
            cta_name="Projects"
            border = {true}
          />
        </div>
      </article>

      <figure className="py-4 flex justify-center items-center bg-white rounded-2xl">
        <img 
        src="../../src/assets/images/profile.svg" 
        alt="user profile picture"
        className="py-2 hover:scale-105 transition-transform duration-300 ease-in" 
        />
      </figure>

      <div className= " bg-white rounded-2xl p-6 flex flex-col justify-center items-center">
        <div className="relative flex items-center gap-2">
          <span className="w-3 h-3 mb-2 bg-primary rounded-full "></span>
          <span className="animate-ping absolute w-3 h-3 mb-2 bg-primary rounded-full "></span>
          <h1 className="text-center mb-2 font-medium">Let's connect</h1>
        </div>
        <div className="text-3xl md:text-[26px] flex justify-center gap-6 md:gap-4 items-center">
          <a 
            className="cursor-pointer hover:text-primary transition-all duration-150 ease-in"
            href="https://github.com/MdTamimAhamed" target="_blank">
            <FaGithub/>
          </a>
          <a 
            className="cursor-pointer hover:text-primary transition-all duration-150 ease-in"
            href="https://www.linkedin.com/in/tamim-ahamed-000432174/" target="_blank">
              <FaLinkedin/>
          </a>
          <a 
            className="cursor-pointer hover:text-primary transition-all duration-150 ease-in"
            href="https://www.facebook.com/tamim.ssgt/" target="_blank">
              <FaFacebook/>
          </a>
          <a 
            className="cursor-pointer hover:text-primary transition-all duration-150 ease-in"
            href="https://www.instagram.com/tamim_ahamed_zan/" target="_blank">
              <RiInstagramFill/>
          </a>
        </div>
      </div>

    </main>
  )
}

export default About