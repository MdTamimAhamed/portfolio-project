import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosSunny } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import TrafficDot from "../../utils/TrafficDot";

function Navbar({ setState }) {
  const [switchBtn, setSwitchBtn] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode === "light";
  });

  const navReference = useRef(null);

  const NavElements = [
    { id: 0, item: "Home", path: "#home"},
    { id: 1, item: "About", path: "#home" },
    { id: 2, item: "Project", path: "#projects" },
    { id: 3, item: "Skills", path: "#skills" },
    { id: 4, item: "Contact", path: "#contact" },
    { id: 5, item: "FAQ", path: "#faq" },
  ];

  function toggleNavbar(e) {
    setToggleNav(!toggleNav);
  }

  function toggleDarkMode() {
    setSwitchBtn(!switchBtn);
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("themeMode", !newMode ? "dark" : "light");
  }

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    setState(savedMode !== "light");
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

  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
    });
  };


  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ease-linear`}
      >
        <div
          className={`  py-2  bg-white/60  backdrop-blur-2xl  dark:border-gray-700 dark:bg-darkMode-background/60`}
        >
          <div className="max-w-6xl flex items-center mx-auto px-6 xl:px-0">
            <nav className="flex w-full items-center justify-between ">
              <TrafficDot />

              <ul
                className={`${toggleNav ? "block" : "hidden"} absolute  right-4 top-16 z-10 w-1/2 rounded-xl 
              bg-white px-2 py-6 shadow-xl dark:bg-gray-700 lg:static lg:top-0 lg:z-0 lg:flex lg:items-center lg:justify-center lg:bg-transparent lg:p-0 lg:shadow-none lg:dark:bg-transparent`}
              >
                {NavElements.map((data) => (
                  <li
                    key={data.id}
                    className="mx-4 cursor-pointer lg:rounded-md p-2  transition-all duration-150 
                  ease-in hover:bg-sky-600/5 lg:hover:bg-black/5  hover:border-l-4 hover:border-l-sky-300 lg:hover:border-none dark:text-darkMode-textGray hover:dark:bg-darkMode-textGray/15 md:mx-2"
                  >
                    <HashLink onClick={scrollToTop} to={data.path}>
                      <span className="pl-2 md:pl-0">{data.item}</span>
                    </HashLink>
                  </li>
                ))}
                <div className="absolute h-3 w-3 -top-1 right-4 lg:hidden rotate-45 bg-white"></div>
              </ul>

              <div className=" flex items-center justify-between ">
                <IoIosSunny
                  onClick={toggleDarkMode}
                  className={`${switchBtn ? "text-yellow-400" : "right-1 "} cursor-pointer`}
                />

                {/*<div className="group relative  hover:bg-gray-100 border-1 border-slate-300 text-black text-sm py-2 rounded-lg cursor-pointer">*/}
                {/*  <p className="mx-6 text-black font-medium">Service Profile</p>*/}
                {/*  <span className="absolute h-3 w-3 bg-black -bottom-4 hidden group-hover:block left-1/2 -translate-x-1/2 rotate-45"></span>*/}
                {/*  <div className="absolute bg-black text-gray-100 text-center text-xs w-full left-1/2 -translate-x-1/2 -bottom-[110%] p-2 rounded-md hidden group-hover:block">*/}
                {/*    Under Development !*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </nav>
            <div ref={navReference}>
              <HiOutlineMenuAlt3
                onClick={toggleNavbar}
                className={`ml-6 cursor-pointer text-2xl dark:text-darkMode-textGray lg:hidden`}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
