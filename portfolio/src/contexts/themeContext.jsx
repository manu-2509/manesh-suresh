import {createContext,useState} from "react";

export const ThemeContext = createContext();
export const ThemeContextProvider=({children})=>{
    const [theme,setTheme]= useState(true)
    const handleChange=(e)=>{
        setTheme(!theme)
    }
    return <ThemeContext.Provider value={{theme,setTheme,handleChange}}>
        {children}
        </ThemeContext.Provider>
}