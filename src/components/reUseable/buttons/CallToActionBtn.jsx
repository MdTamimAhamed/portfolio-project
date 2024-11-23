import { MdDownloadDone, MdLaptopMac } from "react-icons/md";
import { HashLink } from "react-router-hash-link";

function CanToActionBtn({ cta_name, border, icon_visivility, link }) {
  return (
    <>
      {cta_name === "Resume" ? (
        <a
          href="/assets/Downloadable/TestDownload.pdf"
          download="TestDownload.pdf"
          target="_blank"
          className="transition-all w-full md:w-auto duration-200 ease-out group-hover:tracking-wider"
        >
          <button
            className={`${
              border
                ? "border-2 border-slate-100  hover:border-primary hover:bg-primary dark:border-darkMode-textGray dark:text-darkMode-textGray hover:dark:border-darkMode-green hover:dark:text-darkMode-background"
                : "bg-deepNavi text-white hover:bg-primary hover:text-deepNaviBlue  dark:bg-darkMode-textGray dark:text-darkMode-background hover:dark:bg-darkMode-green"
            } group  flex h-12 w-full cursor-pointer items-center justify-center rounded-lg px-6 py-6 font-medium  transition-all duration-150 ease-in md:h-10 md:w-36`}
          >
            {cta_name} <span className="ml-2">{<MdDownloadDone />}</span>
          </button>
        </a>
      ) : (
        <HashLink className="w-full md:w-auto" to={link}>
          <button
            className={`${border ? " bg-white border-1 dark:bg-transparent border-slate-300 hover:border-transparent bg-transparent hover:bg-primary dark:border-darkMode-textGray dark:text-darkMode-textGray hover:dark:border-darkMode-green hover:dark:text-primary" : ""}
            group flex h-12 w-full  cursor-pointer items-center justify-center rounded-lg px-6 py-6 font-medium  transition-all duration-150 ease-in md:h-10 md:w-36`}
          >
            {cta_name}
            <MdLaptopMac className="ml-2" />
          </button>
        </HashLink>
      )}
    </>
  );
}

export default CanToActionBtn;
