import { BsArrowRight } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

function CTABtn({ cta_name, border, icon_visivility, link }) {
  return (
    <button
      className={`${
        border
          ? "border-[1px] border-deepNaviBlue bg-transparent hover:border-primary hover:bg-primary dark:border-darkMode-textGray dark:text-darkMode-textGray hover:dark:border-darkMode-green hover:dark:text-darkMode-background"
          : "bg-deepNaviBlue text-white hover:bg-primary hover:text-deepNaviBlue dark:bg-darkMode-textGray dark:text-darkMode-background hover:dark:bg-darkMode-green"
      } 
    group flex h-12 w-full cursor-pointer items-center justify-center rounded-xl px-6 font-medium  transition-all duration-150 ease-in md:h-10 md:w-36`}
    >
      {cta_name === "Resume" ? (
        <a
          href="https://www.google.com"
          target="_blank"
          className="transition-all duration-200 ease-out group-hover:tracking-wider"
        >
          {cta_name}
        </a>
      ) : (
        <HashLink to={link}>{cta_name}</HashLink>
      )}
      {icon_visivility ? (
        <BsArrowRight className="ml-1 text-lg transition-all duration-200 ease-out group-hover:ml-2" />
      ) : (
        ""
      )}
    </button>
  );
}

export default CTABtn;
