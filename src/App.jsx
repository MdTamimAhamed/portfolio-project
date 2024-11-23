import { useState } from "react";
import "./App.css";
import HomeContainer from "./layout/container/HomeContainer";

import Container from "./layout/container/Container";
import Navbar from "./layout/nav/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

function App() {
  const [darkClass, setDarkClass] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);

  return (
    <div className={`${darkClass ? "dark" : ""} relative font-inter`}>
      <div className={` bg-background  dark:bg-darkMode-primary_bg `}>
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

        <Navbar setState={setDarkClass} />
        <HomeContainer />
        <div className="">
          <Container>
            <Project />
            <Skills />
            <About />
            <Education />
            <Contact setModalMessage={setModalMessage} />
            <FAQ />
            <Footer />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
