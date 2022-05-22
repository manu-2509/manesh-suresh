import { Zoom } from "react-awesome-reveal";
import "../style.css"
import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"
export const About=()=>{
    const {theme} = useContext(ThemeContext);
    return(
       
         <div id="about" className="about">
         <Zoom cascade>
         <h1 className={!theme?"color-d":"color"} >About</h1>
         <p className="about-1">A Full Stack Web Developer, passionate and focused in creating products that makes people's life more easy in there everyday life.I love working in an challenging environment as i can use my true potential and also improve my knowledge and skills. I now have the ability to write clean, reusable, optimised code. Skilled and experienced at building and maintaining MERN based web applications.</p>
         <p>Drop a mail here : <a className={!theme?"none":"none1"} href="mailto:maneshs111@gmail.com">maneshs111@gmail.com</a></p>
         <p>Call me at : <a className={!theme?"none":"none1"} href="tel:9061202920">+91 9061202920</a></p>
         </Zoom>
         </div>
        
      
    )
}