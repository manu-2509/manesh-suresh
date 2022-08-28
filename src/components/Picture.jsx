import img from '../round.png';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub,BsTwitter } from "react-icons/bs";
import "../style.css"
import { Zoom } from "react-awesome-reveal";
import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"
export const Picture =()=>{
    const {theme} = useContext(ThemeContext);
    return( 
    
        <div id="top" className="top">
            <div className="profile">
            <Zoom cascade >

             <img className="profile-pic" src={img} alt="profile" />   
            <div className="details">
            <h3>Hello!, I'm <span className={!theme?"color-d":"color"}>Manesh Suresh</span></h3>
            <p className={!theme?"sky-d" : 'sky'}> Learner | Full Stack Web Developer</p>
            <a className={!theme?"resume-d":"resume"} href="https://drive.google.com/file/d/1AjN0QJTm6jivriNhvkNR3AtVV765PlSQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a><br></br>
           <br></br><br></br>
                <a className={!theme?"nodec-d":"nodec"} href="https://www.linkedin.com/in/manesh-suresh-2046391a6/" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a> 
                <a className={!theme?"nodec-d":"nodec"} href="https://github.com/manu-2509" target="_blank" rel="noopener noreferrer"><BsGithub></BsGithub></a>
                <a className={!theme?"nodec-d":"nodec"} href="https://github.com/manu-2509" target="_blank" rel="noopener noreferrer"><BsTwitter></BsTwitter></a>
            </div>
            
                </Zoom>
            </div>
          
    
        </div> 
    )
}