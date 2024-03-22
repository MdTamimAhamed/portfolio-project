import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function ProjectCTABtn({ cta_name, border, icon_visivility }) {
  return (
    <div
      className={`${
        border
          ? "dark:border-darkMode-textGray/30 hover:dark:border-darkMode-green dark:text-darkMode-textGray hover:dark:text-darkMode-background border-[1px] border-deepNaviBlue bg-transparent hover:border-primary hover:bg-primary"
          : "dark:bg-darkMode-textGray dark:text-darkMode-background hover:dark:bg-darkMode-green bg-deepNaviBlue text-white hover:bg-primary hover:text-deepNaviBlue"
      } 
    group flex h-12 w-full cursor-pointer items-center justify-center rounded-xl px-6 font-medium  transition-all duration-150 ease-in md:h-10 md:w-full`}
    >
      {cta_name === "Resume" ? (
        <a href="https://www.google.com" target="_blank">
          {cta_name}
        </a>
      ) : (
        <Link to={""}>{cta_name}</Link>
      )}
      {icon_visivility ? (
        <GoArrowUpRight className="ml-2 text-lg transition-all duration-200 ease-out group-hover:text-xl" />
      ) : (
        ""
      )}
    </div>
  );
}

export default ProjectCTABtn;
