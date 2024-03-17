import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaLinux,
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

function Skills() {
  const PrimarySkillIcons = [
    { id: 1, icon: <FaReact />, iconName: "React" },
    { id: 2, icon: <SiTailwindcss />, iconName: "Tailwind" },
    { id: 3, icon: <IoLogoJavascript />, iconName: "Javascript" },
    { id: 4, icon: <IoLogoNodejs />, iconName: "Node" },
    { id: 5, icon: <SiExpress />, iconName: "Express" },
    { id: 6, icon: <DiMongodb />, iconName: "MongoDB" },
    { id: 7, icon: <BiLogoPostgresql />, iconName: "PostgreSQL" },
    { id: 8, icon: <GrMysql />, iconName: "MySQL" },
    { id: 9, icon: <FaGitAlt />, iconName: "Git" },
    { id: 10, icon: <FaGithub />, iconName: "Github" },
    { id: 11, icon: <FaHtml5 />, iconName: "HTML" },
    { id: 12, icon: <FaCss3Alt />, iconName: "CSS" },
    { id: 13, icon: <SiSass />, iconName: "SASS" },
    { id: 14, icon: <IoLogoFirebase />, iconName: "Firebase" },
    { id: 15, icon: <FaBootstrap />, iconName: "Bootstrap" },
    { id: 16, icon: <SiMui />, iconName: "Material UI" },
    { id: 17, icon: <SiRedux />, iconName: "RTK" },
  ];

  const ExtraSkillIcons = [
    { id: 1, icon: <CgFigma />, iconName: "Figma" },
    { id: 2, icon: <SiAdobeillustrator />, iconName: "Illustrator" },
    { id: 3, icon: <SiAdobephotoshop />, iconName: "Photoshop" },
    { id: 4, icon: <SiAdobexd />, iconName: "Adobe XD" },
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
        className="mt-10 rounded-2xl bg-white px-8 py-20 lg:px-16"
      >
        <h1 className="pb-4 text-xl font-bold text-deepNaviBlue">Skills</h1>
        <div className="flex items-center">
          <MdCheck className="text-xl" />
          <h1 className="ml-1 font-medium">Primary Skills</h1>
        </div>

        <figure className="mt-2 grid grid-cols-3 gap-4 sm:grid-cols-4  mdx:grid-cols-5 lg:grid-cols-6">
          {PrimarySkillIcons.map((data) => (
            <div
              className="flex h-28 w-full cursor-default  flex-col items-center justify-center rounded-xl border-[1px] border-deepNaviBlue/20 transition-all
                  duration-200 ease-in hover:bg-primary/10 md:h-32 md:w-32"
              key={data.id}
            >
              <span className="text-4xl">{data.icon}</span>
              <span className="mt-2 text-sm font-semibold">
                {data.iconName}
              </span>
            </div>
          ))}
        </figure>

        <div className="mt-8 flex items-center">
          <MdCheck className="text-xl" />
          <h1 className="ml-1 font-medium">Extra Skills</h1>
        </div>

        <figure className="mt-2 grid grid-cols-3 gap-4 sm:grid-cols-4  mdx:grid-cols-5 lg:grid-cols-6">
          {ExtraSkillIcons.map((data) => (
            <div
              key={data.id}
              className="relative flex h-28 w-full cursor-default  flex-col items-center justify-center
              rounded-xl border-[1px] border-deepNaviBlue/20 transition-all
              duration-200 ease-in hover:bg-primary/10 md:h-32 md:w-32"
            >
              <span className="text-4xl">{data.icon}</span>
              <span className="mt-2 text-sm font-semibold">
                {data.iconName}
              </span>
            </div>
          ))}
        </figure>
      </div>
    </>
  );
}

export default Skills;
