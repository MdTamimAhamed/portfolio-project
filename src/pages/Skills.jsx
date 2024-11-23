import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLinux,
  FaReact,
} from "react-icons/fa";

import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiExpress,
  SiMui,
  SiRedux,
} from "react-icons/si";

import {
  BiLogoCPlusPlus,
  BiLogoPostgresql,
  BiLogoSpringBoot,
} from "react-icons/bi";
import { CgFigma } from "react-icons/cg";
import { DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import { HiDatabase, HiOutlineCode } from "react-icons/hi";
import {
  IoLogoFirebase,
  IoLogoJavascript,
  IoLogoNodejs,
} from "react-icons/io5";
import { MdLaptopMac } from "react-icons/md";
import { RiSparkling2Fill } from "react-icons/ri";
import {
  SiDaisyui,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVersions } from "react-icons/vsc";
import SectionTitle from "../components/reUseable/bigTitle/SectionTitle";
import ShowSkillIcons from "../components/reUseable/skillset/ShowSkillIcons";

function Skills() {
  const FrontendSkillIcons = [
    { id: 1, icon: <FaReact />, iconName: "React" },
    { id: 2, icon: <SiTailwindcss />, iconName: "Tailwind" },
    { id: 3, icon: <FaHtml5 />, iconName: "HTML" },
    { id: 4, icon: <FaCss3Alt />, iconName: "CSS" },
    { id: 5, icon: <FaBootstrap />, iconName: "Bootstrap" },
    { id: 6, icon: <SiMui />, iconName: "Material UI" },
    { id: 7, icon: <SiDaisyui />, iconName: "Daisyui" },
    { id: 8, icon: <SiRedux />, iconName: "RTK" },
  ];

  const BackendSkills = [
    { id: 1, icon: <IoLogoNodejs />, iconName: "Node" },
    { id: 2, icon: <SiExpress />, iconName: "Express" },
    { id: 3, icon: <DiMongodb />, iconName: "MongoDB" },
    {
      id: 4,
      icon: <BiLogoPostgresql />,
      iconName: "PostgreSQL",
    },
    {
      id: 5,
      icon: <IoLogoFirebase />,
      iconName: "Firebase",
    },
    {
      id: 6,
      icon: <BiLogoSpringBoot />,
      iconName: "Spring Boot",
      status: "Exploring",
    },
  ];

  const ExtraSkillIcons = [
    { id: 1, icon: <FaLinux />, iconName: "Linux" },
    { id: 2, icon: <CgFigma />, iconName: "Figma" },
    { id: 3, icon: <SiAdobeillustrator />, iconName: "Illustrator" },
    {
      id: 4,
      icon: <SiAdobephotoshop />,
      iconName: "Photoshop",
    },
    { id: 5, icon: <SiAdobepremierepro />, iconName: "Premiere Pro" },
    { id: 6, icon: <SiAdobexd />, iconName: "Adobe XD" },
  ];

  const ProgrammingLang = [
    { id: 1, icon: <BiLogoCPlusPlus />, iconName: "C/C++" },
    { id: 1, icon: <IoLogoJavascript />, iconName: "Javascript" },
    { id: 1, icon: <SiPython />, iconName: "Python" },
    { id: 1, icon: <FaJava />, iconName: "Java" },
    {
      id: 1,
      icon: <SiTypescript />,
      iconName: "Typescript",
      status: "Learning",
    },
  ];

  return (
    <>
      <SectionTitle
        title1="Skill &"
        title2="Expertise"
        description="Welcome to my project showcase. Explore my cruated collection of
          diverse Projects that showcase my passion, dedication and expertise."
      />

      <div
        id="skills"
        className=" border-1 dark:border-white/20 px-4 md:px-6 pb-6 lg:p-6 rounded-4xl bg-white dark:bg-darkMode-background dark:text-darkMode-textGray"
      >
        <ShowSkillIcons
          icon={<HiOutlineCode />}
          title="Languages"
          icons={ProgrammingLang}
        />

        <div className="lg:my-6">
          <ShowSkillIcons
            icon={<MdLaptopMac />}
            title="Frontend"
            icons={FrontendSkillIcons}
          />
        </div>

        <div className="lg:my-6">
          <ShowSkillIcons
            icon={<HiDatabase />}
            title="Backend"
            icons={BackendSkills}
          />
        </div>

        <div className="lg:my-6">
          <ShowSkillIcons
            icon={<VscVersions />}
            title="Version Control"
            icons={[
              { id: 1, icon: <FaGitAlt />, iconName: "Git" },
              { id: 2, icon: <FaGithub />, iconName: "Github" },
            ]}
          />
        </div>

        <ShowSkillIcons
          icon={<RiSparkling2Fill />}
          title="Complementary"
          icons={ExtraSkillIcons}
        />
      </div>
    </>
  );
}

export default Skills;
