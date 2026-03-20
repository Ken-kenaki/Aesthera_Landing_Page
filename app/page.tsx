'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Brush, Terminal, Layers, Cloud, ChevronDown, CheckCircle } from 'lucide-react'
import { clientProjects } from '@/data/projects'
import { blogPosts } from '@/data/blog'
import TiltCard from '@/components/TiltCard'
// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
}
const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
}
export default function Home() {
  return (
    <div className="overflow-hidden bg-transparent text-on-background selection:bg-primary selection:text-on-primary font-body">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 opacity-10 dark:opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        </div>
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-8 text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-on-background mb-8 font-headline uppercase">
            We Build Digital <br /> <span className="text-secondary opacity-70">Experiences</span> <br /> That Scale
          </motion.h1>
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg text-on-surface-variant mb-12 font-body leading-relaxed opacity-90">
            Aesthera Limited bridges the gap between architectural stability and digital fluidity. We craft high-performance SaaS solutions and enterprise-grade interfaces for the global landscape.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="kinetic-gradient text-on-primary px-10 py-5 rounded-md font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300 neon-glow-primary">
              Get Started
            </Link>
            <Link href="/projects" className="bg-surface-variant border border-outline/10 text-on-surface px-10 py-5 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-on-surface hover:text-surface transition-all duration-300">
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-10 h-10 text-on-background opacity-40" />
        </motion.div>
      </section>
      {/* Core Services Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-on-surface mb-4 uppercase font-headline">Core Services</h2>
            <div className="w-24 h-1 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TiltCard className="group" glowColor="rgba(56, 189, 248, 0.3)">
              <div className="glass-card p-10 rounded-xl group-hover:bg-surface-variant transition-all duration-500 border border-outline/5 neon-glow-primary">
                <Brush className="w-12 h-12 text-primary mb-8" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-on-surface mb-4 font-headline uppercase">Web Design</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 opacity-70">Editorial layouts with high-performance animations and architectural precision.</p>
                <div className="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-500"></div>
              </div>
            </TiltCard>
            <TiltCard className="group" glowColor="rgba(56, 189, 248, 0.3)">
              <div className="glass-card p-10 rounded-xl group-hover:bg-surface-variant transition-all duration-500 border border-outline/5 neon-glow-primary">
                <Terminal className="w-12 h-12 text-primary mb-8" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-on-surface mb-4 font-headline uppercase">App Dev</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 opacity-70">Cross-platform mobile applications engineered for the modern user ecosystem.</p>
                <div className="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-500"></div>
              </div>
            </TiltCard>
            <TiltCard className="group" glowColor="rgba(56, 189, 248, 0.3)">
              <div className="glass-card p-10 rounded-xl group-hover:bg-surface-variant transition-all duration-500 border border-outline/5 neon-glow-primary">
                <Layers className="w-12 h-12 text-primary mb-8" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-on-surface mb-4 font-headline uppercase">UI/UX</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 opacity-70">User-centric design systems that balance aesthetic beauty with functional logic.</p>
                <div className="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-500"></div>
              </div>
            </TiltCard>
            <TiltCard className="group" glowColor="rgba(56, 189, 248, 0.3)">
              <div className="glass-card p-10 rounded-xl group-hover:bg-surface-variant transition-all duration-500 border border-outline/5 neon-glow-primary">
                <Cloud className="w-12 h-12 text-primary mb-8" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-on-surface mb-4 font-headline uppercase">SaaS Solutions</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 opacity-70">Scalable cloud architectures designed to handle high-velocity digital operations.</p>
                <div className="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-500"></div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>
      {/* Proprietary Products Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-on-background uppercase font-headline">Proprietary Products</h2>
            </div>
            <p className="max-w-md text-on-surface-variant opacity-80 font-body">Internal innovations developed to streamline workflows and fitness ecosystems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto">
            <TiltCard className="md:col-span-12 group h-[600px]" glowColor="rgba(56, 189, 248, 0.4)">
              <div className="relative h-full overflow-hidden bg-surface rounded-2xl p-12 border border-outline/5 transition-colors hover:bg-surface-variant flex flex-col justify-end">
                <div className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-all duration-1000">
                  <Image
                    src="/gymo.png"
                    alt="Fitness dashboard interface"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                </div>
                <div className="relative z-20">
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 block">Proprietary SaaS</span>
                  <h3 className="text-5xl font-black text-on-surface mb-4 font-headline uppercase leading-none">Gymo</h3>
                  <p className="text-on-surface-variant mb-8 opacity-80 max-w-xl">The ultimate fitness management platform for modern athletic facilities. Engineering excellence in fitness management.</p>
                  <Link href="/products" className="inline-block bg-on-surface text-surface px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-on-primary transition-colors font-headline">Launch Project</Link>
                </div>
              </div>
            </TiltCard>

            {/* Added a placeholder for third bento item to make it a true bento grid later if needed, or just 12 span the CRM too */}
            <TiltCard className="md:col-span-12 group h-[600px]" glowColor="rgba(168, 85, 247, 0.4)">
              <div className="relative h-full overflow-hidden bg-surface rounded-2xl p-12 border border-outline/5 transition-colors hover:bg-surface-variant flex flex-col justify-end">
                <div className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-all duration-1000">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtkawZMjaYt-mjFaUMU_Faz7nOD_VGn00LRyFgjVySigMMAgSjTWWn00KTrcZFo9SwNMLBSoBxxtJbMqOAzBsVZ9IAQ_77ANf0CBdJ_5-T9J0peHejxSBvO5gKx6-Z24EdQdF2DLidiTHPQ5Mi3lFJATPFzwH60DqDbsVs5M6nWJQFKhN6d5BHE-L2NiUd7VjAewaRd4MPpuH43hPPYCim8KJCXfzqtza0bUNCiMcSVLBhjyN1Y1A1oysO5uzWqevN9_ab03Atnd8"
                    alt="CRM analytics interface"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                </div>
                <div className="relative z-20">
                  <span className="text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-4 block">Enterprise Tool</span>
                  <h3 className="text-5xl font-black text-on-surface mb-4 font-headline uppercase leading-none">Aesthera CRM</h3>
                  <p className="text-on-surface-variant mb-8 opacity-80 max-w-xl">Intelligent client management with automated digital workflow fluidics. Scalable architecture for complex business logic.</p>
                  <Link href="/products" className="inline-block bg-on-surface text-surface px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-on-primary transition-colors font-headline">Launch Project</Link>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>
      {/* Selected Projects Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface uppercase mb-8 font-headline">Selected Projects</h2>
            <div className="flex flex-wrap justify-center gap-4 font-headline">
              <button className="px-6 py-2 rounded-full border border-on-surface bg-on-surface text-surface font-bold text-xs uppercase tracking-widest transition-all">All Work</button>
              <button className="px-6 py-2 rounded-full border border-outline text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:border-on-surface hover:text-on-surface transition-colors">Web</button>
              <button className="px-6 py-2 rounded-full border border-outline text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:border-on-surface hover:text-on-surface transition-colors">Apps</button>
              <button className="px-6 py-2 rounded-full border border-outline text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:border-on-surface hover:text-on-surface transition-colors">SaaS</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {clientProjects.slice(0, 3).map((project, idx) => (
              <TiltCard key={project.id} className="group" glowColor="rgba(56, 189, 248, 0.4)">
                <div className="relative aspect-square overflow-hidden bg-background border border-outline/5 hover:z-10 transition-all duration-300">
                  <Image
                    src={[
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHZddpKP0VE3Qit7zARzlc2n82AkFyJxTnSdmBFYb8ZWGWdS3v23VhF1Qt1-dEEiXH5QKRH289-rfWu-IfvR4j9BEg-Cz6_C23rB0qd-h8MKeoh7aTNRPVyZbXEkTHSuLbs6gWhguSZG0kt2gmDETpoRen_fpgyiLnGKbU_zrEpEWHiHucM4wQ6Myjb0wViFLl77yrdyioWYIP1A_9DRHA07XJ_1TC3OcWIlvXoDlqEyGKa2zl-Wu8_nxRRoTZ1cdZOyK58HI7bIY",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBloiNsdYNdrfzl7FOs2ILBRL4YWIkonAooRLfas5Oil2HtQidBXjs7hfUnQKaFSvVMgc9r29EMYNANmW0-XPhbErL-TucPwWd20KlodqO3znD7UkXAQxpnhlUFINR_ABGKHc_BgMxVkFsvMnnmkIM-5W9pp1N_dE0syAMahK9tjSoox5ih6LHKZ6fHPYB5GhrxcUNAqvoCjS_I-hAbqpFrkR8vJQMmXUqIlFQQqiY7GvgC1GeUqRj7SaquE1MhfiyBHRpgHUxsIwE",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNrdNnBu_2T0SW3E7R38m-rnuMPyqsyiK8SG5vKp3mN9aoJhVKk7XmL6Jqa6SFKtOv-DKApCkXd_weIdgExGlBjOPI4aERUsb2-RnT-Ds7lOVry1jfVmLDXRN4jJkC_bNiTYlsTtNOhnBc3yLpIqTJspdD4NaisUdoVRsLpR1-7oHlgeIvOLFy02YqBpLe07kQCWDDAi5sz_1JWOEwPF4RcM_vYxKFCc06BLBpTlUhwOlcVjZK8lMEqsVIOgGp9FT4HWVjuVr6CLU"
                    ][idx % 3]}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-background/80 dark:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 z-10 backdrop-blur-sm">
                    <span className="text-xs uppercase tracking-widest text-primary mb-2 font-headline">{project.category}</span>
                    <h4 className="text-2xl font-bold text-on-background uppercase tracking-tighter font-headline">{project.name}</h4>
                    <Link href="/projects" className="text-[10px] text-primary font-bold uppercase tracking-widest mt-4 hover:underline">View Project</Link>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      {/* Architecture of the Future Section */}
      <section className="py-32 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-6 block font-headline">Our Legacy</span>
              <h2 className="text-5xl font-black tracking-tighter text-on-background mb-8 leading-tight font-headline">Architecture of the <br /> <span className="opacity-40">Future.</span></h2>
              <p className="text-on-surface-variant leading-relaxed mb-10 opacity-90 text-lg">
                Founded on the principle of Kinetic Monolithism, Aesthera Limited delivers digital infrastructures that remain unshakeable while adapting to the rapid currents of technological change. We don't just build websites; we design legacy systems.
              </p>
              <div className="space-y-4 font-headline">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-on-background font-medium">Precision-First Engineering</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-on-background font-medium">Global Delivery Standards</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 font-headline">
              <div className="bg-surface p-12 rounded-xl border border-outline/5 shadow-sm">
                <span className="text-5xl font-black text-on-surface block mb-2">150+</span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant opacity-70">Projects Completed</span>
              </div>
              <div className="bg-surface p-12 rounded-xl border border-outline/5 shadow-sm mt-12">
                <span className="text-5xl font-black text-on-surface block mb-2">40+</span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant opacity-70">Global Clients</span>
              </div>
              <div className="bg-surface p-12 rounded-xl border border-outline/5 shadow-sm">
                <span className="text-5xl font-black text-on-surface block mb-2">12</span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant opacity-70">SaaS Products</span>
              </div>
              <div className="bg-surface p-12 rounded-xl border border-outline/5 shadow-sm mt-12">
                <span className="text-5xl font-black text-on-surface block mb-2">100%</span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant opacity-70">Digital Fluidity</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Insights Section */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter text-on-surface uppercase font-headline">Insights</h2>
            <Link href="#" className="text-on-surface font-bold text-xs uppercase tracking-widest border-b border-on-surface pb-1 font-headline">Read All Articles</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {blogPosts.map((insight, idx) => (
              <Link href={`/blog/${insight.slug}`} key={insight.title} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-6 bg-black aspect-[4/3] border border-white/5 relative">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3 block font-bold font-headline">{insight.category}</span>
                <h3 className="text-xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors font-headline">{insight.title}</h3>
                <p className="text-secondary text-sm opacity-60 leading-relaxed font-body line-clamp-2">{insight.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Start Project Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-6xl font-black tracking-tighter text-on-surface uppercase mb-8 font-headline">Start a <br /> <span className="text-outline">Project.</span></h2>
              <p className="text-secondary mb-12 opacity-60 text-lg font-body">Ready to build something unshakeable? Drop us a line and let's manifest your digital vision.</p>
              <div className="space-y-8 font-headline">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-2">Location</span>
                  <p className="text-on-surface text-xl font-bold">Kathmandu, Nepal</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-2">Inquiries</span>
                  <p className="text-on-surface text-xl font-bold">hello@aesthera.tech</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-high p-12 rounded-xl border border-white/5 font-body">
              <form className="space-y-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-secondary font-bold mb-2 font-headline">Full Name</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary text-on-surface transition-all placeholder:text-outline-variant focus:outline-none" placeholder="John Doe" type="text" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-secondary font-bold mb-2 font-headline">Email Address</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary text-on-surface transition-all placeholder:text-outline-variant focus:outline-none" placeholder="john@example.com" type="email" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-secondary font-bold mb-2 font-headline">Message</label>
                  <textarea className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary text-on-surface transition-all placeholder:text-outline-variant focus:outline-none" placeholder="Tell us about your mission..." rows={4}></textarea>
                </div>
                <button className="w-full kinetic-gradient text-on-primary py-5 font-bold uppercase tracking-[0.2em] text-xs hover:scale-[1.02] transition-transform duration-300 font-headline">
                  Send Transmission
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
