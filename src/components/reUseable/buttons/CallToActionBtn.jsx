import { HiOutlineArrowRight } from "react-icons/hi";
import { HashLink } from "react-router-hash-link";

function CanToActionBtn({ cta_name, border, icon_visivility, link }) {
  return (
    <>
      {cta_name === "Resume" ? (
        <a
          href="/assets/Downloadable/Tamim Ahamed Updated Resume.pdf"
          download="Tamim Ahamed Updated Resume.pdf"
          target="_blank"
          className="transition-all duration-200 ease-out group-hover:tracking-wider"
        >
          <button
            className={`${
              border
                ? "border-2 border-slate-100 bg-transparent hover:border-primary hover:bg-primary dark:border-darkMode-textGray dark:text-darkMode-textGray hover:dark:border-darkMode-green hover:dark:text-darkMode-background"
                : "bg-deepNaviBlue text-white hover:bg-primary hover:text-deepNaviBlue dark:bg-darkMode-textGray dark:text-darkMode-background hover:dark:bg-darkMode-green"
            } group flex h-12 w-full cursor-pointer items-center justify-center rounded-full px-6 py-6 font-medium  transition-all duration-150 ease-in md:h-10 md:w-36`}
          >
            {cta_name}
          </button>
        </a>
      ) : (
        <HashLink to={link}>
          <button
            className={`${border ? "border-2 border-slate-100 bg-transparent hover:bg-primary dark:border-darkMode-textGray dark:text-darkMode-textGray hover:dark:border-darkMode-green hover:dark:text-darkMode-background" : ""}
            group flex h-12 w-full cursor-pointer items-center justify-center rounded-full px-6 py-6 font-medium  transition-all duration-150 ease-in md:h-10 md:w-36`}
          >
            {cta_name}
            {icon_visivility ? (
              <HiOutlineArrowRight className="ml-1 text-lg transition-all duration-200 ease-out group-hover:ml-3" />
            ) : (
              ""
            )}
          </button>
        </HashLink>
      )}
    </>
  );
}

export default CanToActionBtn;
