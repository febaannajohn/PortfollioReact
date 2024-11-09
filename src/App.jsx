import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Works from './Components/Works/Works'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <NavBar />
       <Hero />
       <About/>
       <Services/>
       <Works />
       <Contact />
       <Footer />
      </div>
   
  
  )
}

export default App
