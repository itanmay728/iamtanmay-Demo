import { useState } from 'react'
import Navbar from './components/NavBar';
import About from './components/About'
import Experience from './components/Experience';
import Projects from './components/projects'
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='bg-blue-950' >
    
    <Navbar />
    <About/>
    <Experience/>
    <Projects />
    <Footer/>
    </div>
    
    
    
    
   
  )
}

export default App
