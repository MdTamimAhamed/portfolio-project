import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaLinux,
  FaJava,
} from "react-icons/fa";

import {
  SiExpress,
  SiRedux,
  SiSass,
  SiMui,
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si";

import { MdCheck } from "react-icons/md";
import { RiNotionFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoFirebase,
} from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { CgFigma } from "react-icons/cg";
import { DiMongodb } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";

function Skills() {
  const FrontendSkillIcons = [
    { id: 1, icon: <FaReact />, iconName: "React" },
    { id: 2, icon: <SiTailwindcss />, iconName: "Tailwind" },
    { id: 3, icon: <IoLogoJavascript />, iconName: "Javascript" },
    { id: 4, icon: <FaGitAlt />, iconName: "Git" },
    { id: 5, icon: <FaGithub />, iconName: "Github" },
    { id: 6, icon: <FaHtml5 />, iconName: "HTML" },
    { id: 7, icon: <FaCss3Alt />, iconName: "CSS" },
    { id: 8, icon: <SiSass />, iconName: "SASS" },
    { id: 9, icon: <FaBootstrap />, iconName: "Bootstrap" },
    { id: 10, icon: <SiMui />, iconName: "Material UI", status: "Learning" },
    { id: 11, icon: <SiRedux />, iconName: "RTK" },
  ];

  const BackendSkills = [
    { id: 1, icon: <FaJava />, iconName: "Java" },
    {
      id: 2,
      icon: <BiLogoSpringBoot />,
      iconName: "Spring Boot",
      status: "Learning",
    },
    { id: 3, icon: <IoLogoNodejs />, iconName: "Node" },
    { id: 4, icon: <SiExpress />, iconName: "Express" },
    { id: 5, icon: <DiMongodb />, iconName: "MongoDB" },
    {
      id: 6,
      icon: <BiLogoPostgresql />,
      iconName: "PostgreSQL",
    },
    { id: 7, icon: <GrMysql />, iconName: "MySQL" },
    {
      id: 8,
      icon: <IoLogoFirebase />,
      iconName: "Firebase",
      status: "Exploring",
    },
  ];

  const ExtraSkillIcons = [
    { id: 1, icon: <CgFigma />, iconName: "Figma" },
    { id: 2, icon: <SiAdobexd />, iconName: "Adobe XD" },
    { id: 3, icon: <SiAdobeillustrator />, iconName: "Illustrator" },
    {
      id: 4,
      icon: <SiAdobephotoshop />,
      iconName: "Photoshop",
      status: "Basics",
    },
    { id: 5, icon: <SiAdobepremierepro />, iconName: "Premiere Pro" },
    { id: 6, icon: <SiPostman />, iconName: "Postman" },
    { id: 7, icon: <SiVisualstudiocode />, iconName: "VS Code" },
    { id: 8, icon: <RiNotionFill />, iconName: "Notion" },
    { id: 9, icon: <FaLinux />, iconName: "Linux" },
  ];

  return (
    <>
      <div
        id="skills"
        className="mt-10 rounded-2xl bg-white px-6 py-12 dark:bg-darkMode-background dark:text-darkMode-textGray lg:px-16"
      >
        <h1 className=" pb-4 text-xl font-bold text-deepNaviBlue dark:text-darkMode-textGray">
          Skills
        </h1>

        <div className="flex items-center">
          <MdCheck className="text-xl dark:text-darkMode-green" />
          <h1 className=" ml-1 font-medium">Frontend</h1>
        </div>

        {/* Frontend skill ---> iconset */}
        <figure className="mt-2 grid grid-cols-3 gap-4 sm:grid-cols-4  mdx:grid-cols-5 lg:grid-cols-6">
          {FrontendSkillIcons.map((data) => (
            <div
              className="relative flex h-28 w-full cursor-default flex-col  items-center justify-center rounded-xl border-[1px] border-deepNaviBlue/20 transition-all duration-200 ease-linear
                  hover:scale-105 hover:bg-primary/10 dark:border-darkMode-textGray/20 hover:dark:bg-darkMode-textGray/10 md:h-32 md:w-32"
              key={data.id}
            >
              <span className="text-4xl">{data.icon}</span>
              <span className="mt-2 text-sm font-semibold">
                {data.iconName}
              </span>

              {data.status ? (
                <span className="absolute top-0 rounded-sm bg-green-300/20 px-2 text-xs font-medium  text-green-500 dark:bg-green-300/10">
                  {data.status}
                </span>
              ) : (
                ""
              )}
            </div>
          ))}
        </figure>

        <div className="mt-8 flex items-center">
          <MdCheck className="text-xl dark:text-darkMode-green " />
          <h1 className="ml-1 font-medium">Backend</h1>
        </div>

        {/* Backend skill ---> iconset */}
        <figure className="mt-2 grid grid-cols-3 gap-4 sm:grid-cols-4  mdx:grid-cols-5 lg:grid-cols-6">
          {BackendSkills.map((data) => (
            <div
              key={data.id}
              className="relative flex h-28 w-full cursor-default  flex-col items-center justify-center rounded-xl
              border-[1px] border-deepNaviBlue/20 transition-all duration-200
              ease-linear hover:scale-105 hover:bg-primary/10 dark:border-darkMode-textGray/20 hover:dark:bg-darkMode-textGray/10 md:h-32 md:w-32"
            >
              <span className="text-4xl">{data.icon}</span>
              <span className="mt-2 text-sm font-semibold">
                {data.iconName}
              </span>

              {data.status ? (
                <span className="absolute top-0 rounded-sm bg-green-300/20 px-2 text-xs font-medium  text-green-500 dark:bg-green-300/10">
                  {data.status}
                </span>
              ) : (
                ""
              )}
            </div>
          ))}
        </figure>

        <div className="mt-8 flex items-center">
          <MdCheck className="text-xl dark:text-darkMode-green " />
          <h1 className="ml-1 font-medium">Complementary</h1>
        </div>

        {/* Extra skill ---> iconset */}
        <figure className="mt-2 grid grid-cols-3 gap-4 sm:grid-cols-4  mdx:grid-cols-5 lg:grid-cols-6">
          {ExtraSkillIcons.map((data) => (
            <div
              key={data.id}
              className="relative flex h-28 w-full cursor-default  flex-col items-center justify-center rounded-xl
              border-[1px] border-deepNaviBlue/20 transition-all duration-200
              ease-linear hover:scale-105 hover:bg-primary/10 dark:border-darkMode-textGray/20 hover:dark:bg-darkMode-textGray/10 md:h-32 md:w-32"
            >
              <span className="text-4xl">{data.icon}</span>
              <span className="mt-2 text-sm font-semibold">
                {data.iconName}
              </span>

              {data.status ? (
                <span className="absolute top-0 rounded-sm bg-green-300/20 px-2 text-xs font-medium  text-green-500 dark:bg-green-300/10">
                  {data.status}
                </span>
              ) : (
                ""
              )}
            </div>
          ))}
        </figure>
      </div>
    </>
  );
}

export default Skills;
