import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
} from "lucide-react"
import { cn } from "../lib/utils"

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:jihadalibrahimm@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jihadalibrahimm@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+905349279249"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +90 534 927 9249
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-muted-foreground">
                    Turkey, Şanlıurfa
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100092865439805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition"
                >
                  <Facebook className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/jihad-alibrahimm-a2712a195/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              Send a message
            </h3>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
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
                  placeholder="Jihad Alibrahim"
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
                  placeholder="example@email.com"
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

              <button
                type="submit"
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

    {/* WhatsApp Floating Button */}
    <div className="fixed bottom-12 right-12 z-50 group animate-bounce">
    {/* Ripple Effect */}
    <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></span>

    <a
        href="https://wa.me/905349279249"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
        relative
        flex items-center justify-center
        w-16 h-16
        rounded-full
        bg-green-500
        text-white
        shadow-2xl
        transition-all
        duration-300
        hover:bg-green-600
        hover:scale-110
        "
    >
        <MessageCircle className="w-8 h-8" />
    </a>

    {/* Tooltip */}
    <div
        className="
        absolute right-20 top-1/2 -translate-y-1/2
        bg-gray-900 text-white text-sm
        px-4 py-2 rounded-lg
        opacity-0 scale-95
        group-hover:opacity-100 group-hover:scale-100
        transition-all duration-300
        whitespace-nowrap
        shadow-lg
        "
    >
        💬 Contact me on WhatsApp
    </div>
    </div>

    </section>
  )
}
