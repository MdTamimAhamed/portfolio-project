import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function ProjectCTABtn({ cta_name, border, icon_visivility }) {
  return (
    <div
      className={`${
        border
          ? "border-[1px] border-deepNaviBlue/30 bg-transparent hover:border-primary hover:bg-primary"
          : "bg-deepNaviBlue text-white hover:bg-primary hover:text-deepNaviBlue"
      } 
    flex h-12 w-full cursor-pointer items-center justify-center rounded-xl px-6 font-medium  transition-all duration-150 ease-in md:h-10 md:w-full`}
    >
      {cta_name === "Resume" ? (
        <a href="https://www.google.com" target="_blank">
          {cta_name}
        </a>
      ) : (
        <Link to={""}>{cta_name}</Link>
      )}
      {icon_visivility ? <GoArrowUpRight className="ml-2 text-lg" /> : ""}
    </div>
  );
}

export default ProjectCTABtn;
