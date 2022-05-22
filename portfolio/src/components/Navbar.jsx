import "../style.css"
import {Link} from "react-scroll";
import {Complete} from "./complete"
import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"
export const Navbar=()=>{
    const {theme} = useContext(ThemeContext);
    return(
        <div className={!theme?"navbar-d":"navbar"}>
            <img className="nav-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUq1FstEWGjBPGNx2cRI1z-x6TApuulCf_g&usqp=CAU" alt="logo" />
           <div className="items">
        
                 <Link className="nav-h" to="about" smooth={true} offset={-255.26}>About</Link>
                 <Link className="nav-h" to="education" smooth={true} offset={-240}>Education</Link>
                 <Link className="nav-h" to="skills" smooth={true} offset={-130}>Skills</Link>
                 <Link className="nav-h" to="projects" smooth={true} offset={-100}>Projects</Link>
                 <Link className="nav-h" to="contact" smooth={true} offset={2}>Contact</Link>
                 <Complete></Complete>
           </div>
          
        </div>
    )
}