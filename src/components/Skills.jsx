import {SiHtml5} from "react-icons/si"
import {SiCss3} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {GrReactjs} from "react-icons/gr"
import {SiRedux} from "react-icons/si"
import {IoLogoNodejs} from "react-icons/io"
import {SiExpress} from "react-icons/si"
import {SiMongodb} from "react-icons/si"
import "../style.css";
import { Zoom } from "react-awesome-reveal";
import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"

export const Skills=()=>{
    const {theme} = useContext(ThemeContext);
    return( 
        <div id="skills">
<Zoom>
     <h1 className={!theme?"color-d":"color"}>Skills</h1>
        <div className="skills">
           
            <div className="front">
                <h2>Front-end Skills</h2>
                <div className={!theme?"darkend":"frontend"}>
                    <SiHtml5 className="skill"></SiHtml5>
                    <h3>HTML</h3>
                </div>
                <div className={!theme?"darkend":"frontend"}>
                    <SiCss3 className="skill"></SiCss3>
                    <h3>CSS</h3>
                </div>
                <div className={!theme?"darkend":"frontend"}>
                    <SiJavascript className="skill"></SiJavascript>
                    <h3>JavaScript</h3>
                </div>
                <div className={!theme?"darkend":"frontend"}>
                    <GrReactjs className="skill"></GrReactjs>
                    <h3>React</h3>
                </div> 
                <div className={!theme?"darkend":"frontend"}>
                    <SiRedux className="skill"></SiRedux>
                    <h3>Redux</h3>
                </div>
            </div>
            <div className="back">
            <h2>Back-end Skills</h2>
            <div className={!theme?"darkend": "backend"}>
                    <IoLogoNodejs className="skill"></IoLogoNodejs>
                    <h3>Node.js</h3>
                </div>
                <div className={!theme?"darkend": "backend"}>
                    <SiExpress className="skill"></SiExpress>
                    <h3>Express.js</h3>
                </div>
                <div className={!theme?"darkend": "backend"}>
                    <SiMongodb className="skill"></SiMongodb>
                    <h3>MongoDB</h3>
                </div>
            </div>
        </div>
</Zoom>
   
        </div>
    )
}