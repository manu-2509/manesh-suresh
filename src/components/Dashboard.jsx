import "./Dashboard.css";
import React from 'react';
import { ThemeContext } from "../contexts/themeContext"
import { useContext } from "react"
import {BsFillMoonFill,BsFillSunFill} from "react-icons/bs"


export const Toggle=(props)=> {
  const {theme,handleChange} = useContext(ThemeContext);

  return (
    <div className="container1">

<label className={!theme?"switch-d":"switch"}>
  
  <input type="checkbox" onClick={(e)=>handleChange(e)} className="toggleClass" value={!theme}/>
  
  <span className="slider round" id={!theme?"round-d":"round"}><BsFillSunFill className="DarkMode icon-d1"></BsFillSunFill><BsFillMoonFill className="icon-d1 a"></BsFillMoonFill></span>
</label>
    </div>
  );
}