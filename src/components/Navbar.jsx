import { HashLink } from "react-router-hash-link";
import { MdSunny } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import TrafficDot from "../utils/TrafficDot";
import { useEffect, useRef, useState } from "react";

function Navbar({ setState }) {
  const [toggleNav, setToggleNav] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode === "dark";
  });

  const navReference = useRef(null);

  const NavElements = [
    { id: 0, item: "Home" },
    { id: 1, item: "About", path: "#about" },
    { id: 2, item: "Experience", path: "#experience" },
    { id: 3, item: "Project", path: "#projects" },
    { id: 4, item: "Skills", path: "#skills" },
    { id: 5, item: "Contact", path: "#contact" },
    { id: 6, item: "FAQ", path: "#faq" },
  ];

  function toggleNavbar(e) {
    setToggleNav(!toggleNav);
  }

  function toggleDarkMode() {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("themeMode", newMode ? "dark" : "light");
  }

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    setState(savedMode === "dark" ? true : false);
  });

  //burger menu - onclick show and hide
  useEffect(() => {
    function clickOutside(e) {
      if (navReference.current && !navReference.current.contains(e.target)) {
        setToggleNav(false);
      }
    }
    if (toggleNav) {
      window.addEventListener("click", clickOutside);
    }
    return () => {
      window.addEventListener("click", clickOutside);
    };
  }, [toggleNav]);

  //on scroll nav show and hide
  useEffect(() => {
    let lastScrollPosition = 0;
    function navController() {
      const currentScrollPosition = window.scrollY;
      if (
        currentScrollPosition > lastScrollPosition &&
        currentScrollPosition > 0
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollPosition = currentScrollPosition;
    }
    window.addEventListener("scroll", navController);

    return () => {
      window.removeEventListener("scroll", navController);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`${!isVisible ? "-translate-y-20" : ""} sticky top-2 z-50 transition-all duration-200 ease-in`}
      >
        <div
          className={`relative flex h-[69px] w-full items-center rounded-xl border-[1px] border-deepNaviBlue/10 bg-white px-8 shadow-sm backdrop-blur-md  dark:border-gray-700 dark:bg-darkMode-background/90`}
        >
          <nav className="flex w-full items-center justify-between ">
            <TrafficDot />
            <ul
              className={`${toggleNav ? "block" : "hidden"} absolute left-0 top-20 z-10 w-full rounded-xl 
             bg-white px-2 py-6 shadow-md dark:bg-gray-700 md:static md:top-0 md:z-0 md:flex md:items-center md:justify-center md:bg-transparent md:p-0 md:shadow-none md:dark:bg-transparent`}
            >
              {NavElements.map((data) => (
                <li
                  key={data.id}
                  className="mx-4 cursor-pointer rounded-md p-2  transition-all duration-150 
                 ease-in hover:bg-black/5 dark:text-darkMode-textGray hover:dark:bg-darkMode-textGray/15 md:mx-2"
                >
                  <HashLink onClick={scrollToTop} to={data.path}>
                    <span className="pl-2 md:pl-0">{data.item}</span>
                  </HashLink>
                </li>
              ))}
            </ul>
            <button>
              {!darkMode ? (
                <MdDarkMode
                  onClick={toggleDarkMode}
                  className=" cursor-pointer dark:text-darkMode-textGray"
                />
              ) : (
                <MdSunny
                  onClick={toggleDarkMode}
                  className=" cursor-pointer dark:text-yellow-500"
                />
              )}
            </button>
          </nav>
          <div ref={navReference}>
            <HiOutlineMenuAlt3
              onClick={toggleNavbar}
              className={`ml-6 cursor-pointer text-2xl dark:text-darkMode-textGray md:hidden`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
