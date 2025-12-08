import { useEffect, useState } from "react"
import {Sun , Moon} from "lucide-react"
import {cn} from "../lib/utils" 

export const ThemeToggle = ({mobile = false})=>{
    const [isDarkMode,setIsDarkMode] = useState(true); // start dark by default

    useEffect(()=>{
        const storedItem = localStorage.getItem("theme");

        // if there is saved preference
        if(storedItem){
            if(storedItem === "dark"){
                setIsDarkMode(true);
                document.documentElement.classList.add("dark");
            }else{
                setIsDarkMode(false);
                document.documentElement.classList.remove("dark");
            }
        } else {
            // no stored item → default dark
            setIsDarkMode(true);
            localStorage.setItem("theme","dark")
            document.documentElement.classList.add("dark");
        }

    },[])

    const toggleTheme = ()=>{        
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light")
            setIsDarkMode(false)
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark")
            setIsDarkMode(true);
        }
    }

    return(
        <button 
            onClick={toggleTheme}
            className={cn(
                mobile 
                    ? "sm:hidden p-2 rounded-full transition-colors duration-300"
                    : "hidden sm:flex fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}
        > 
            {isDarkMode ? (
                <Sun className="animate-float h-6 w-6 text-yellow-300"/>
            ) : (
                <Moon className="animate-float h-6 w-6 text-blue-900"/>
            )} 
        </button>
    )
}
