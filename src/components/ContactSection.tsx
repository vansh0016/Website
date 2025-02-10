
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen py-16 bg-[rgb(12,0,64)] relative">
      <div className="absolute inset-0 bg-fixed" style={{ backgroundImage: 'url("/path-to-your-background.jpg")', opacity: 0.1 }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Contact Me</h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6 bg-primary/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-white/10">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <Button className="w-full bg-blue-500 hover:bg-blue-600">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
