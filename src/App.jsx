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
  const [modalMessage, setModalMessage] = useState(false);

  return (
    <div className={`${darkClass ? "dark" : ""}`}>
      <div
        className={` bg-background 
        bg-[linear-gradient(to_right,#E5EEF5_1px,transparent_1px),linear-gradient(to_bottom,#E5EEF5_1px,transparent_1px)]
        bg-[size:15px_15px]
         dark:bg-gray-900 dark:bg-[linear-gradient(to_right,#132131_1px,transparent_1px),linear-gradient(to_bottom,#132131_1px,transparent_1px)]`}
      >
        <div
          className={`${modalMessage ? "translate-y-10 opacity-100" : "-translate-y-40 opacity-0"} fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-md bg-green-200 px-8 py-4 
          shadow-xl shadow-primary/10 transition-all ${!modalMessage ? "duration-500" : "duration-300"} ease-out`}
        >
          <p className="font-semibold text-green-700">
            Your message sent successfully!
          </p>
          <p className="text-center text-sm text-green-700">
            You will get a response soon!
          </p>
        </div>

        <div className=" container w-full px-2 font-inter text-deepNaviBlue transition-all duration-300 ease-out sm:max-w-5xl md:px-4">
          <Navbar setState={setDarkClass} />
          <div className="">
            <About />
            <Experience />
            <Project />
            <Skills />
            <Contact setModalMessage={setModalMessage} />
            <FAQ />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
