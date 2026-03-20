'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Building2, Send } from 'lucide-react'
export default function Contact() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-8 mb-24 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.div
            className="md:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Initialization</span>
            <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-white leading-[0.9]">
              Start a <br />Project.
            </h1>
          </motion.div>
          <motion.div
            className="md:col-span-4 pb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xs">
              Synthesizing vision into kinetic reality. Reach out to initiate the architectural blueprint of your next digital monolith.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Main Interaction Area (Asymmetric Bento) */}
      <section className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Contact Form Module */}
        <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold font-headline text-white mb-12">Transmission Brief</h2>
            <form className="space-y-12">
              <div className="relative">
                <input className="peer w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-all duration-500 py-4 px-0 text-white placeholder-transparent focus:outline-none" id="full_name" placeholder=" " type="text" />
                <label className="absolute left-0 -top-1 text-xs text-secondary uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-on-surface-variant peer-focus:-top-1 peer-focus:text-xs peer-focus:text-primary pointer-events-none" htmlFor="full_name">Full name</label>
              </div>
              <div className="relative">
                <input className="peer w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-all duration-500 py-4 px-0 text-white placeholder-transparent focus:outline-none" id="email" placeholder=" " type="email" />
                <label className="absolute left-0 -top-1 text-xs text-secondary uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-on-surface-variant peer-focus:-top-1 peer-focus:text-xs peer-focus:text-primary pointer-events-none" htmlFor="email">Email address</label>
              </div>
              <div className="relative">
                <textarea className="peer w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-all duration-500 py-4 px-0 text-white placeholder-transparent resize-none focus:outline-none" id="message" placeholder=" " rows={4}></textarea>
                <label className="absolute left-0 -top-1 text-xs text-secondary uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-on-surface-variant peer-focus:-top-1 peer-focus:text-xs peer-focus:text-primary pointer-events-none" htmlFor="message">Message field</label>
              </div>
              <button className="group/btn flex items-center justify-between w-full md:w-auto md:min-w-[240px] bg-primary text-on-primary px-8 py-5 font-bold uppercase tracking-widest text-xs hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300" type="submit">
                Send Transmission
                <Send className="ml-4 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </button>
            </form>
          </div>
          {/* Subtle Gradient Accent */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-colors duration-700"></div>
        </div>
        {/* Sidebar Info Stack */}
        <div className="lg:col-span-5 space-y-4">
          {/* Inquiry Module */}
          <div className="bg-surface-container-highest p-8 md:p-10 flex flex-col justify-between h-auto">
            <div>
              <span className="text-secondary text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">Direct Channel</span>
              <h3 className="text-xl font-bold font-headline text-white mb-6 uppercase tracking-tight">Inquiries</h3>
            </div>
            <a className="text-3xl md:text-4xl font-light font-headline text-white hover:text-secondary transition-colors duration-300 break-all" href="mailto:hello@aesthera.tech">
              hello@aesthera.tech
            </a>
          </div>
          {/* Locations Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-8 border border-white/5">
              <MapPin className="text-secondary mb-6 w-6 h-6" />
              <h4 className="font-headline font-bold text-white mb-2">Kathmandu</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Bakhundole, Lalitpur<br />
                Bagmati 44600, Nepal
              </p>
            </div>
            <div className="bg-surface-container-low p-8 border border-white/5">
              <Building2 className="text-secondary mb-6 w-6 h-6" />
              <h4 className="font-headline font-bold text-white mb-2">United Kingdom</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                71-75 Shelton Street<br />
                London, WC2H 9JQ
              </p>
            </div>
          </div>
          {/* Small Map Placeholder Style */}
          <div className="h-48 bg-surface-container-highest overflow-hidden relative grayscale opacity-50 hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest to-transparent z-10"></div>
            <Image
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM9kTCbycHzEUG1Tim6llffSRUUQOSuV5JZm4xfVisPC62geO_QaytgWaZ_fNd0WiEns1vwn0ysGSilX-pdjL9QWOTriqaQcz8FgGCGYg_IImYp3uPNKkqUC-Oh_htoJVSmrJ6Uaymvw8bKUqqLDnFT-1zr7xXSoLGIDTfUMCGBOWi9XFNNVrNg_OXTSW2QECmQVkKE3RGeQ4qIVM6l54W5lIWfpFDUfWjOMnWB8pN1yaKCik4xnPFvHVpc3EcKglmXkfJfQXxQss"
              alt="Kathmandu Map"
              width={600}
              height={300}
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <div className="flex items-center space-x-2 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Live Node</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="max-w-screen-2xl mx-auto px-8 mt-32 mb-24">
        <div className="flex flex-col md:flex-row md:items-start gap-12 lg:gap-32">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-black font-headline text-on-surface tracking-tighter uppercase mb-6">FAQ</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
              Common operational protocols for project initiation and collaborative workflows.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { q: "Project Timelines?", a: "Most monolith-scale projects require a 12-16 week cycle from blueprint to kinetic launch." },
              { q: "Tech Stack?", a: "We specialize in high-performance digital architectures using modern scalable frameworks." },
              { q: "Global Delivery?", a: "Our Kathmandu and UK nodes operate synchronously to provide 24-hour development cycles." },
              { q: "Next Steps?", a: "After transmission, our lead architect will reach out within 24 hours for a discovery sync." }
            ].map((faq) => (
              <div key={faq.q}>
                <h4 className="text-on-surface font-bold mb-3 font-headline text-lg">{faq.q}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
