import './App.css'
import MainBackground from './utils/MainBackground'
import Navbar from './components/Navbar'
import About from './pages/About'
import Experience from './pages/Experience'
import Project from './pages/Project'

function App() {

  return (
    <div className='max-w-[908px] mx-auto p-6 font-inter text-deepNaviBlue'>
      <MainBackground/>
      <Navbar/>
      <About/>
      <Experience/>
      <Project/>
    </div>
  )
}

export default App
