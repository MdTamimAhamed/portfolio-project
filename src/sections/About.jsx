import SocialButton from "../util/SocialButton"
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";


function About() {
  return (
    <div className="container max-w-[768px] mt-20 font-inter">
        <div>
            <p className="text-4xl font-bold text-deepNaviBlue"><span className="text-4xl font-marck ml-1">Hi,</span> I'm Tamim</p>
            <h1 className="text-[48px] text-transparent font-bold bg-gradient-to-r from-secondary to-primary
             bg-clip-text leading-none tracking-tight">Fullstack Developer.</h1>
        </div>

        <main className="mt-8 font-roboto text-deepNaviBlue md:flex">
            <div>
                <p>Hello there, I'm Tamim Ahamed, a Full-stack software Developer & UI Designer
                   from Bangladesh.</p>
                <p className="mt-2">Currently studying Computer Science and  I'm passionate
                   about Full Stack Web Development and and I'm actively seeking 
                   opportunities to apply my skills and contribute to innovative projects.</p>
            </div>
            <div className="w-full flex justify-center items-center">
                <img src="/src/images/profile.svg" alt="Profile_Picture" />
            </div>
        </main>

        <div className="mt-4">
            <p className="font-medium text-deepNaviBlue">Let's connect</p>
            <div className="mt-1 flex items-center gap-2">
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