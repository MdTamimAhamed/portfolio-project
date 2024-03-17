import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="container max-w-5xl px-2 font-inter text-deepNaviBlue md:px-4">
      <Navbar />
      <div className="">
        <About />
        <Experience />
        <Project />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
