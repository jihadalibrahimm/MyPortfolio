import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return(
        <footer 
            className="py-8 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            {" "}
            &copy; {new Date().getFullYear()} 
            <p className="text-sm text-muted-foreground">
                {" "}
                &copy; {new Date().getFullYear()}  Jihadtech.co.All rights reserved.
            </p>
            <a 
                href="#hero"
                className="p-2 rounded-full lg-primary/10 hover:bg-primary/20 text-primary transition-colors "
            >
                <ArrowUp size={28}/>
            </a>
        </footer>
        
    )
}
