import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
    id:1,
    title:"Creative Agency Website",
    description:"A modern and responsive website for a digital agency showcasing services, portfolio, and company values with smooth animations.",
    image:"projects/Creative.png",
    tags:["HTML","CSS","JavaScript"],
    demoUrl:"https://grand-meerkat-cc92b1.netlify.app",
    githubUrl:"https://github.com/jihadalibrahimm/CreativeAgency",
    },
    {
        id:2,
        title:"Restaurant Product Showcase",
        description:"A visually appealing website to display restaurant dishes with modern animations, smooth transitions, and clean UI.",
        image:"projects/FoodOrdering.png",
        tags:["HTML","CSS","JavaScript"],
        demoUrl:"https://jihadalibrahimm.github.io/Food-Ordering/",
        githubUrl:"https://github.com/jihadalibrahimm/Food-Ordering",
    },
    {
        id:3,
        title:"Criativo Website",
        description:"A creative multi-section website featuring hero, services, about, portfolio, testimonials, and contact sections.",
        image:"projects/Creativo.png",
        tags:["HTML","CSS","JavaScript"],
        demoUrl:"https://jihadalibrahimm.github.io/Creativo/",
        githubUrl:"https://github.com/jihadalibrahimm/Creativo",
    },
]
export const ProjectsSection = () => {
    return(
        <section 
            id="projects"
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Feautered <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefuly created with attention to detail, performance, and user experience.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div 
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-x5 card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag,key) => (
                                        <span 
                                        key={key}
                                            className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 
                                    className="text-xl font-semibold mb-1"
                                >
                                    {project.title}
                                </h3>
                                <p 
                                    className="text-muted-foreground text-sm mb-4"
                                >
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                            href={project.demoUrl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300 animate-fade-in-delay-4">
                                            <ExternalLink size={30}/>
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300 animate-fade-in-delay-4"
                                        >
                                            <Github size={30}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a 
                        href="https://github.com/jihadalibrahimm"
                        target="_blank"
                        className="cosmic-button w-fit flex items-center mx-auto">
                        Check My Github <ArrowRight size={20}/>
                    </a>
                </div>
            </div>
        </section>
    )
}