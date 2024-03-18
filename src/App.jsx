import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="container w-full px-2 font-inter text-deepNaviBlue sm:max-w-5xl md:px-4">
      <Navbar />
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
  );
}

export default App;
