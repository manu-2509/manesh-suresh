
import { Navbar } from './components/Navbar'
import {About} from './components/About'
import { Picture } from './components/Picture'
import { Education } from './components/Education'
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'
import {Footer} from './components/Footer'
import { useContext } from "react"
import { ThemeContext } from "./contexts/themeContext"
import './App.css'



function App() {
const {theme} = useContext(ThemeContext);

  return (
   <div className="App">
     <div className={!theme?"Dark":"light"}>
  <Navbar></Navbar>
  <Picture></Picture>
  <About></About>
  <Education></Education>
  <Skills></Skills>
  <Projects></Projects>
  <Footer></Footer>
  </div>
    </div>
  )
}

export default App
