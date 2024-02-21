import SocialButton from "../utils/SocialButton"
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";


function About() {
  return (
    <div className="container max-w-[768px] mt-20 md:p-8 font-inter">
        <div>
            <p className="text-4xl font-bold text-deepNaviBlue"><span className="text-4xl font-marck ml-1">Hi,</span> I'm Tamim</p>
            <h1 className="text-[56px] md:text-[58px] text-transparent font-bold bg-gradient-to-r from-secondary to-primary
             bg-clip-text leading-none tracking-tight">Fullstack Developer.</h1>
        </div>

        <main className="mt-8 relative font-roboto text-deepNaviBlue cs:flex justify-between">
            <div>
                <p>Hello there, I'm Tamim Ahamed, a Full-stack software Developer & UI Designer
                   from Bangladesh.</p>
                <p className="mt-2">Currently studying Computer Science and  I'm passionate
                   about Full Stack Web Development and and I'm actively seeking 
                   opportunities to apply my skills and contribute to innovative projects.</p>
            </div>
            <div className="w-full flex justify-center md:justify-end items-center cs:-mt-10 md:-mt-10 mx-2">
                <img src="/src/assets/images/profile.svg" alt="Profile_Picture" />
            </div>
        </main>

        <div className="relative cs:-mt-10 md:-mt-12">
            <p className="font-medium text-deepNaviBlue">Let's connect</p>
            <div className="mt-1 flex flex-wrap items-center gap-2">
                <SocialButton
                    icon={<FaGithub/>}
                    iconName="Github"
                    link="https://github.com/MdTamimAhamed"
                />
                <SocialButton
                    icon={<FaLinkedin/>}
                    iconName="LinkedIn"
                    link="https://www.linkedin.com/in/tamim-ahamed-000432174/"
                />
                <SocialButton
                    icon={<FaFacebook/>}
                    iconName="Facebook"
                    link="https://www.facebook.com/tamim.ssgt/"
                />
            </div>
        </div>
    </div>
  )
}

export default About