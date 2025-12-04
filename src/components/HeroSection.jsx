import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return(
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-4 md:px-8"
        >
            <div className="container max-w-7xl mx-auto z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

                    {/* النص عاليسار */}
                    <div className="text-center md:text-left space-y-8">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight"> 
                            <span className="opacity-0 animate-fade-in">Hi, I'm</span>  
                            <span 
                                className="text-primary opacity-0 animate-fade-in-delay-1"
                            >
                                {" "}
                                Jihad 
                            </span> 
                            <span 
                                className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"
                            >
                                {" "}
                                Alibrahim 
                            </span> 
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-4 max-w-xl">
                            I Create stellar web experiences with modern technologies.
                            Specializing in front-end development, I build interfaces that are 
                            both beautiful and functional.
                        </p>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <a 
                                href="#projects"
                                className="cosmic-button"
                            >
                                View My Work
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end opacity-0 animate-fade-in-delay-4">
                        <div className="bg-white/70 dark:bg-transparent p-4 md:p-6 rounded-2xl ">
                            <img 
                                src="projects/personal-bgRemoved.png" 
                                alt="Jihad photo" 
                                className="w-[320px] md:w-[450px] rounded-xl animate-float"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
            >
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    )
}
