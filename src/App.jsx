import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";
import { useEffect, useState } from "react";

function App() {
  const [darkClass, setDarkClass] = useState(false);

  return (
    <div className={`${darkClass ? "dark" : ""}`}>
      <div
        className={` bg-background 
        bg-[linear-gradient(to_right,#E5EEF5_1px,transparent_1px),linear-gradient(to_bottom,#E5EEF5_1px,transparent_1px)]
        bg-[size:15px_15px]
         dark:bg-gray-900 dark:bg-[linear-gradient(to_right,#132131_1px,transparent_1px),linear-gradient(to_bottom,#132131_1px,transparent_1px)]`}
      >
        <div className=" container w-full px-2 font-inter text-deepNaviBlue transition-all duration-300 ease-out sm:max-w-5xl md:px-4">
          <Navbar setState={setDarkClass} />
          <div className="">
            <About />
            <Experience />
            <Project />
            <Skills />
            <Contact />
            <FAQ />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
