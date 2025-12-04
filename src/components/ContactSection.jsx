import { Facebook, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"

export const ContactSection = () => {
    return(
        <section 
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a Project in mind or want to collabrate? Feel free to reach out.
                    I'm always open to discussing new opprtunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div >
                                    <h4 className="font-medium"> Email</h4>
                                    <a 
                                        href="mailto:jihadalibrahimm@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        jihadalibrahimm@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div className="a">
                                    <h4 className="font-medium"> Phone</h4>
                                    <a 
                                        href="tel:+905349279249" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        0534 927 9249
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div className="a">
                                    <h4 className="font-medium"> Address</h4>
                                    <a 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Turkey, Sanliurfa
                                    </a>
                                </div>
                            </div>
                            <div className="pt-8">
                                <h4 className="font-medium mb-4"> Connect With Me</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a href="https://www.linkedin.com/in/jihad-alibrahimm-a2712a195/" target="_blank">
                                        <Linkedin/>
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=100092865439805" target="_blank">
                                        <Facebook/>
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
                        <form 
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="space-y-6"
                        >
                            {/* Web3Forms Access Key */}
                            <input 
                                type="hidden" 
                                name="access_key" 
                                value="d0b2cc3c-b372-4098-9098-a2891e072240" 
                            />

                            {/* Name */}
                            <div>
                                <label 
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Name
                                </label>
                                <input 
                                    type="text" 
                                    name="name"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Jihad Alibrahim..."
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label 
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Email
                                </label>
                                <input 
                                    type="email" 
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="jihadalibrahimm@gmail.com..."
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label 
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Message
                                </label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit"
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                Send Message
                                <Send size={16}/>
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}