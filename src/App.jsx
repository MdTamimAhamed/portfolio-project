import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Experience from './pages/Experience'
import Project from './pages/Project'

function App() {

  return (
    <div className='container max-w-5xl px-2 md:px-4 font-inter text-deepNaviBlue'>
      <Navbar/>
      <div className=''>
        <About/>
        <Experience/>
        <Project/>
      </div>
    </div>
  )
}

export default App
