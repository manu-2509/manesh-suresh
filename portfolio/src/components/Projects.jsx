import img1  from "../outnet1.jpeg";
import img2  from "../west.jpeg";
import img3  from "../croma.jpeg";

import "../style.css"
import { Zoom } from "react-awesome-reveal";
import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"

export const Projects=()=>{
      const {theme} = useContext(ThemeContext);
    return(


      <div id="projects" className="pro-main">
            <Zoom>
            <h1 className={!theme?"color-d":"color"}>Projects</h1>
            <div className="project">

       <div className={!theme?"dark-div":"pro-div"}>
            <img className="pro-img" src={img1} alt="project" />
            <div className="pro-ddiv">
            <h3 className="project-head">The Outnet Clone</h3>
            <p>The Outnet is an e-commerce website for shopping fashionable cloths for men and women.</p>
            <p>This was a team project which consisted to 6 members and was completed in 5 days.</p>
            <p><span><b>Tech Stack:</b></span> HTML | CSS | JavaScript | Express | MongoDB | React | Redux</p><hr></hr>
            <a id="mar5" className={!theme?"btn-pro-d":"btn-pro"} href="https://github.com/kumarshivam01/OutNet-Clone" alt="github" target="_blank" rel="noopener noreferrer">Code</a>
            <a id="mar6" className={!theme?"btn-pro-d":"btn-pro"} href="https://outnet-clone.netlify.app/" alt="deployed" target="_blank" rel="noopener noreferrer" >Live</a>
            </div>
          
      </div>
      
       <div className={!theme?"dark-div":"pro-div"}>
            <img className="pro-img" src={img2} alt="project" />
            <div className="pro-ddiv">
            <h3 className="project-head">Westside Clone</h3>
            <p>Westside is an e-commerce website for shopping a wide variety of products like  cloths, furniture etc.</p>
           <p>This was a team project which consisted to 6 members and was completed in 5 days.</p>
            <p><span><b>Tech Stack:</b></span> HTML | CSS | JavaScript | MongoDB | Express | Node.js</p><hr></hr>
            <a id="mar3" className={!theme?"btn-pro-d":"btn-pro"} href="https://github.com/Omkaar1/westside-clone" alt="github"  target="_blank" rel="noopener noreferrer">Code</a>
            <a  id="mar4" className={!theme?"btn-pro-d":"btn-pro"} href=" https://westside-ecommerce-clone.vercel.app/" alt="live" target="_blank" rel="noopener noreferrer" >Live</a>
            </div>
      </div>
  
      <div className={!theme?"dark-div":"pro-div"}>
            <img className="pro-img" src={img3} alt="project" />
            <div className="pro-ddiv">
            <h3 className="project-head">Croma Clone</h3>
            <p>Croma is an e-commerce website that allows customers to shop electronic appliances such as laptops, mobile phones, television etc.</p>
            <p>This was a team project which consisted to 6 members and was completed in 5 days.</p>
            <p><span><b>Tech Stack:</b></span> HTML | CSS | JavaScript</p><hr></hr>
            <a id="mar1" className={!theme?"btn-pro-d":"btn-pro"} href="https://github.com/MadhanM282/croma1" alt="github" target="_blank" rel="noopener noreferrer">Code</a>
            <a id="mar2" className={!theme?"btn-pro-d":"btn-pro"} href="https://dazzling-ardinghelli-bb8d54.netlify.app/" alt="deployed" target="_blank" rel="noopener noreferrer" >Live</a>
            </div>
          
      </div>
    
    </div>
     </Zoom>  
      </div>
 
    )
}