import {BsTwitter,BsLinkedin,BsInstagram,BsTelephoneFill,BsFillArrowUpCircleFill} from "react-icons/bs"
import {GrMail} from "react-icons/gr"
import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"
import {Link} from "react-scroll"

export const Footer=()=>{
    const {theme} = useContext(ThemeContext);
    return(
        <div id="contact" className={!theme?"footer-d": "footer"}>
            <h1 className="f-head">Get in Touch</h1>
            <h4 className={!theme?"f-name-d":"f-name"}>Manesh Suresh</h4>
            <div className="f-icon">
               <a className={!theme?"f-icon1-d":"f-icon1"} href="https://twitter.com/_manesh_suresh" target="_blank" rel="noopener noreferrer"><BsTwitter></BsTwitter></a>
               <a className={!theme?"f-icon1-d":"f-icon1"} href="https://www.instagram.com/manu._.259" target="_blank" rel="noopener noreferrer"><BsInstagram></BsInstagram></a>
               <a className={!theme?"f-icon1-d":"f-icon1"} href="https://www.linkedin.com/in/manesh-suresh-2046391a6/" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
               <a className={!theme?"f-icon1-d":"f-icon1"} href="mailto:maneshs111@gmail.com" target="_blank" rel="noopener noreferrer"><GrMail></GrMail></a>
               <a className={!theme?"f-icon1-d":"f-icon1"} href="tel:9061202920"><BsTelephoneFill></BsTelephoneFill></a>
            </div>
            <Link className="top-i" to="top" smooth={true} offset={-255.26}><BsFillArrowUpCircleFill></BsFillArrowUpCircleFill></Link>
        </div>
    )
}