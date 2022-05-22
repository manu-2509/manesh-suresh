import "../style.css"
import { Zoom } from "react-awesome-reveal";
import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"
export const Education=()=>{
    const {theme} = useContext(ThemeContext);
    return(
        <div id="education">
            <h1 className={!theme?"color-d":"color"}>Education</h1>
            <Zoom>
                   <div className="education">
                 <div className={!theme?"edu1-d":"edu1"}>
                <h4>Full Stack Web Development,</h4>
                <h4>Masai School,Bengalure</h4>
                <p className="color1">Worked extensively on :- </p>
                <p className="color1">-MERN Stack</p>
                <p className="color1">-Data Structure and Algorithms</p>
                <p className="color1">-Soft skills</p>
            </div>
            <div className={!theme?"edu2-d":"edu2"}>
                <h4>B.E Mechanical Engineering,</h4>
                <h4>Karpagam Academy of Higher Education,Coimbatore</h4>
                <p className="color1">Worked extensively on :-</p>
                <p className="color1">-Internships</p>
                <p className="color1">-Final Year Project</p>
                <p className="color1">-Practical and Theory sessions</p>
            </div>
            </div>
            </Zoom>
         
           
        </div>
    )
}