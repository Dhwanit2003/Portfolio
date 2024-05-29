import React from "react"

import About from "./Components/About"
import NavBar from "./Components/Navbar"
import Skills from "./Components/Skills"
import { skills } from "./constants/skillsimage"
import Projects from "./Components/Projects"
import ContactMe from "./Components/ContactMe"
import Footer from "./Components/Footer"


function App() {
 
  return (
    <>
    <div>
      <NavBar/>
      <About/>
      <Skills skills={skills}/>
      <Projects/>
      <ContactMe/>
      <Footer/>
     </div>
    </>
  ) 
}

export default App
