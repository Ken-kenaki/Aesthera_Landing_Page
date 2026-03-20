'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Monitor, Terminal, RefreshCw, Palette, Grid, MousePointerClick, Brain, Cloud, Shield } from 'lucide-react'
export default function Services() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary/60 font-label tracking-[0.4em] uppercase text-xs mb-6 block">Our Expertise</span>
            <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-white leading-[0.9] max-w-4xl mb-12">
              Digital Solutions <span className="block text-primary/40">& Infrastructure</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
              We construct high-velocity digital ecosystems through architectural precision and intentional design. Aesthera Limited delivers the kinetic power required for modern global operations.
            </p>
          </motion.div>
        </div>
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent"></div>
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        </div>
      </section>
      {/* Service 01: Web Design */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <motion.div
              className="md:col-span-5 order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="text-4xl font-headline font-black text-outline-variant/30">01</span>
                <div className="h-px w-12 bg-outline-variant/30"></div>
              </div>
              <h2 className="font-headline text-4xl font-bold text-white mb-6">Web Design & Development</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Editorial layouts with high-performance animations and architectural precision. We build more than websites; we create digital landmarks that capture the kinetic energy of your brand.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-surface-container-highest rounded-lg">
                  <span className="block text-2xl font-headline font-bold text-white">100%</span>
                  <span className="text-xs uppercase tracking-widest text-primary/60">Digital Fluidity</span>
                </div>
                <div className="p-6 bg-surface-container-highest rounded-lg">
                  <span className="block text-2xl font-headline font-bold text-white">&lt;200ms</span>
                  <span className="text-xs uppercase tracking-widest text-primary/60">Response Latency</span>
                </div>
              </div>
              <Link href="#" className="inline-flex items-center gap-2 text-white font-bold group">
                Explore Capability
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              className="md:col-span-7 order-1 md:order-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video relative rounded-xl overflow-hidden group">
                <Image
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOOHRab02bRqMn9WK-G3-TAj3fBeyS_ZVUKILYzS0G6XF5pZldnPS7FyC4ivQZRqIoFEbuq6sYu88hFoefTD174nwg5FbYnS3MLIghpUUlLUapB3ptO_U39M-coUCr41VETRuosAwR3VrYHYlIvUwK4-9Y7ISm2OB2u9-2Dy1bttcRuKQSRJ287PKQRdTob_Dbn9NYIbzmdAKHi4t4vURUdBfij5hwfnGaPX_Sh_ZhviMHhg9Gy75t6KyCiYw9WJBbU6QHzJ9wq0k"
                  alt="Web Design"
                  width={800}
                  height={450}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-surface-dim to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8">
                  <div className="glass-card p-4 rounded-lg flex items-center gap-4 border border-white/5">
                    <Monitor className="text-white" />
                    <span className="text-sm font-label text-white/80">Dynamic Viewport Logic</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Service 02: Mobile Apps */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <motion.div
              className="md:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden mt-12">
                  <Image
                    className="w-full h-full object-cover opacity-50 grayscale"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTK5eTahgKnML0NgZ8-LWClDrHR08wDjaaN8Wo1oHnxFx1CfQrcvaWmvZyLTGBvzHo64pUZTTIr4bIIyyXg9JnuVhAesz043k3czTUjG27zxjBC9c4m1sjlp1JBpyGSv1Iedp-f_BbyGUULQTSO9gVFL2YkPj2jH5PaelGV5cLn26grkCYXyjH1m5ZZZIk3Q2aAKfHCvvZOn1UfObqvCyhYcMHhPhC-CPnaRSfpQ9jMiwLWedCHD1e10zAz_vQ_NjNimqFobHoUZg"
                    alt="Mobile App Dark"
                    width={400}
                    height={500}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="aspect-[4/5] bg-surface-container-highest rounded-xl overflow-hidden">
                  <Image
                    className="w-full h-full object-cover opacity-50 grayscale"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl_hN1GY_WCncVCHMpofHcGrMjjXLxNkTIIKa3PzCY0G868xpt7On_YXy1bkFLEYR1NTRyNCPaDy5WcUlccTVX-Fbr67NQfmGh6G0rU4uKsQ95Pp9hj9zyNH1mcZTEoVXYHfnaxOhR7aph9krHGg3ADiW-dpPaOMUDyevNtB6c2s3ys1nrlf7rMnviA9fEBtkhHVn4Snp-SdKpSWqKlmAOw0jL-Llv0U2o-RKMMUxzXof7gP3_s861vFV2NVPm7XnwUl_S3wgTSgE"
                    alt="Mobile App Light"
                    width={400}
                    height={500}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="text-4xl font-headline font-black text-outline-variant/30">02</span>
                <div className="h-px w-12 bg-outline-variant/30"></div>
              </div>
              <h2 className="font-headline text-4xl font-bold text-white mb-6">Android & iOS App Development</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Cross-platform mobile applications engineered for the modern user ecosystem. We leverage native-level performance with unified codebases for maximum market velocity.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 p-4 border border-white/5 rounded-lg bg-surface-container-low">
                  <Terminal className="text-primary" />
                  <span className="text-sm font-medium">Native Performance Optimization</span>
                </div>
                <div className="flex items-center gap-4 p-4 border border-white/5 rounded-lg bg-surface-container-low">
                  <RefreshCw className="text-primary" />
                  <span className="text-sm font-medium">Unified Cross-Platform Logic</span>
                </div>
              </div>
              <Link href="#" className="inline-flex items-center gap-2 text-white font-bold group">
                View Ecosystems
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Service 03: UI/UX Bento Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="text-4xl font-headline font-black text-outline-variant/30">03</span>
                <div className="h-px w-12 bg-outline-variant/30"></div>
              </div>
              <h2 className="font-headline text-5xl font-bold text-white mb-4">UI/UX Design</h2>
              <p className="text-on-surface-variant">User-centric design systems that balance aesthetic beauty with functional logic.</p>
            </div>
            <div className="bg-primary/5 p-8 rounded-xl border border-white/5">
              <span className="block text-4xl font-headline font-black text-white">98%</span>
              <span className="text-xs uppercase tracking-widest text-primary/60">User Retention Rate</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass-card p-12 rounded-xl border border-white/5 relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-white mb-4">Visual Language Systems</h3>
                <p className="text-on-surface-variant max-w-md">Developing atomic design principles that scale across global digital touchpoints without losing brand integrity.</p>
                <div className="mt-12 flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <Palette className="text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <Grid className="text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>
            </div>
            <div className="bg-surface-container-highest p-12 rounded-xl border border-white/5">
              <MousePointerClick className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Behavioral Science</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Mapping cognitive friction to create seamless navigational flows that guide users toward conversion effortlessly.</p>
            </div>
            <div className="bg-surface-container-highest p-12 rounded-xl border border-white/5">
              <Brain className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Experience Audits</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Deep-dive analysis of existing platforms to identify and eliminate structural inefficiencies.</p>
            </div>
            <div className="md:col-span-2 bg-gradient-to-br from-surface-container-highest to-surface-dim p-12 rounded-xl border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Kinetic Motion Design</h3>
                <p className="text-on-surface-variant">Adding the dimension of time to your interfaces.</p>
              </div>
              <button className="px-8 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-colors font-bold text-sm">Review Showreel</button>
            </div>
          </div>
        </div>
      </section>
      {/* Service 04: SaaS Solutions */}
      <section className="py-32 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="mb-16 flex items-center gap-4">
            <span className="text-4xl font-headline font-black text-outline-variant/30">04</span>
            <div className="h-px w-12 bg-outline-variant/30"></div>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-headline text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">SaaS Solutions</h2>
              <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
                Scalable cloud architectures designed to handle high-velocity digital operations. We build robust, multi-tenant environments that thrive under heavy load and complex logic.
              </p>
              <div className="space-y-6">
                <div className="flex gap-6 group">
                  <div className="shrink-0 w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Cloud className="text-primary group-hover:text-on-primary transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Infrastructure Scaling</h4>
                    <p className="text-on-surface-variant text-sm">Automated horizontal and vertical scaling for zero-downtime growth.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="shrink-0 w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Shield className="text-primary group-hover:text-on-primary transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Architectural Security</h4>
                    <p className="text-on-surface-variant text-sm">Hardened data environments using industry-leading encryption and protocols.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 glass-card p-2 rounded-2xl border border-white/5">
                <div className="bg-surface-container-lowest rounded-xl p-8">
                  <div className="flex justify-between items-center mb-12">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-error/40"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary/40"></div>
                      <div className="w-3 h-3 rounded-full bg-primary/40"></div>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">Cloud Dashboard v2.0</span>
                  </div>
                  <div className="space-y-6">
                    <div className="h-4 bg-primary/10 rounded w-3/4"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 bg-surface-container-high rounded-lg border border-white/5"></div>
                      <div className="h-24 bg-surface-container-high rounded-lg border border-white/5"></div>
                      <div className="h-24 bg-primary/5 rounded-lg border border-primary/20"></div>
                    </div>
                    <div className="h-32 bg-surface-container-high rounded-lg border border-white/5"></div>
                  </div>
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 blur-[100px]"></div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto glass-card p-16 rounded-[2rem] border border-white/5 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6">Ready to build the monolith?</h2>
            <p className="text-on-surface-variant mb-10 text-lg max-w-xl mx-auto">Join the ecosystem of forward-thinking brands leveraging Aesthera's kinetic digital infrastructure.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="kinetic-gradient text-on-primary px-10 py-4 font-bold rounded-lg hover:scale-105 transition-transform duration-300">
                Start Your Project
              </button>
              <button className="px-10 py-4 border border-white/10 text-white font-bold rounded-lg hover:bg-white/5 transition-colors">
                Technical Documentation
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        </div>
      </section>
    </div>
  )
}
