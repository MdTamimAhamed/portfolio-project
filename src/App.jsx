import './App.css'
import MainBackground from './util/MainBackground'
import Navbar from './components/Navbar'
import About from './sections/About'

function App() {

  return (
    <div className='m-6'>
      <MainBackground/>
      <Navbar/>
      <About/>
    </div>
  )
}

export default App
