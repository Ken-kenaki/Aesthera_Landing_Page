'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { DraftingCompass, Globe, Waves } from 'lucide-react'
export default function About() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full"></div>
        </div>
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-12 items-end pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-8"
          >
            <span className="block text-secondary uppercase tracking-[0.4em] mb-6 font-medium text-sm">Founded in Nepal & UK</span>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-[10rem] font-extrabold leading-[0.85] tracking-tighter text-on-background mb-12">
              Architecture <br /> of the Future
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 lg:col-span-4 lg:pl-12"
          >
            <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light">
              Founded in the principle of Kinetic Monolithism, Aesthera Limited delivers digital infrastructures that remain unshakeable while adapting to the rapid currents of technological change.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Our Mission */}
      <section className="py-32 bg-surface px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-headline text-4xl md:text-6xl font-bold text-on-surface mb-8">Our Mission</h2>
              <div className="h-1 w-24 bg-primary mb-8"></div>
            </div>
            <div>
              <p className="text-3xl text-on-surface font-headline leading-tight mb-6 italic">
                "Digital Experiences That Scale"
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                We believe that digital architecture shouldn't just exist; it should evolve. Our mission is to engineer modular systems that provide the bedrock for global enterprises to grow without friction.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Core Values: Bento Grid */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-20">
            <h2 className="font-headline text-5xl font-bold text-on-background mb-4">Core Principles</h2>
            <p className="text-secondary tracking-widest uppercase text-sm">The Kinetic Monolith DNA</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="glass-card p-12 flex flex-col justify-between min-h-[400px] hover:bg-surface transition-all duration-500 group border border-outline/5">
              <DraftingCompass className="w-12 h-12 text-primary mb-8" strokeWidth={1.5} />
              <div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Precision-First Engineering</h3>
                <p className="text-on-surface-variant">Uncompromising technical standards. Every line of code is a structural load-bearing element of your digital future.</p>
              </div>
            </div>
            {/* Value 2 */}
            <div className="glass-card p-12 flex flex-col justify-between min-h-[400px] hover:bg-surface transition-all duration-500 border border-outline/5">
              <Globe className="w-12 h-12 text-primary mb-8" strokeWidth={1.5} />
              <div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Global Delivery Standards</h3>
                <p className="text-on-surface-variant">Bridging the creative energy of Nepal with the strategic rigor of the UK to serve partners worldwide.</p>
              </div>
            </div>
            {/* Value 3 */}
            <div className="glass-card p-12 flex flex-col justify-between min-h-[400px] hover:bg-surface transition-all duration-500 border border-outline/5">
              <Waves className="w-12 h-12 text-primary mb-8" strokeWidth={1.5} />
              <div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Digital Fluidity</h3>
                <p className="text-on-surface-variant">We build for movement. Our infrastructures adapt seamlessly to market shifts and technological revolutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Timeline */}
      <section className="py-32 bg-surface px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl font-bold text-on-surface mb-20 text-center">Our Journey</h2>
          <div className="space-y-24 relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-outline/20 transform md:-translate-x-1/2"></div>
            {/* Milestone 1 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-[45%] mb-8 md:mb-0 text-left md:text-right">
                <h4 className="font-headline text-3xl font-bold text-on-surface">The Founding</h4>
                <p className="text-on-surface-variant">Inception of the Kinetic Monolith philosophy in Kathmandu and London.</p>
              </div>
              <div className="absolute left-[-4px] md:left-1/2 w-2 h-2 bg-primary rounded-full transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.8)]"></div>
              <div className="md:w-[45%] font-headline text-5xl font-black text-outline/20 md:text-left">2018</div>
            </div>
            {/* Milestone 2 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between">
              <div className="md:w-[45%] mb-8 md:mb-0">
                <h4 className="font-headline text-3xl font-bold text-on-surface">Global Expansion</h4>
                <p className="text-on-surface-variant">Standardizing delivery protocols for international scale.</p>
              </div>
              <div className="absolute left-[-4px] md:left-1/2 w-2 h-2 bg-primary rounded-full transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.8)]"></div>
              <div className="md:w-[45%] font-headline text-5xl font-black text-outline/20 text-right">2021</div>
            </div>
            {/* Milestone 3 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-[45%] mb-8 md:mb-0 text-left md:text-right">
                <h4 className="font-headline text-3xl font-bold text-on-surface">Aesthera 2.0</h4>
                <p className="text-on-surface-variant">Rebranding to reflect architectural permanence and digital agility.</p>
              </div>
              <div className="absolute left-[-4px] md:left-1/2 w-2 h-2 bg-primary rounded-full transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.8)]"></div>
              <div className="md:w-[45%] font-headline text-5xl font-black text-outline/20 md:text-left">2024</div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="font-headline text-5xl font-bold text-on-background mb-4">The Visionaries</h2>
            <p className="text-secondary tracking-widest uppercase text-sm">Leading innovation at Aesthera</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Member 1: Laxman */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-8 aspect-[3/4] bg-surface">
                <Image
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="/laxman.jpeg"
                  alt="Laxman Dhungel"
                  width={400}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <h4 className="font-headline font-bold text-on-background text-3xl mb-2">Laxman Dhungel</h4>
              <p className="text-primary text-lg font-medium mb-4 uppercase tracking-widest">CEO & Full Stack Developer</p>
              <p className="text-on-surface-variant leading-relaxed text-base">
                Visionary leader with deep expertise in full-stack development and architectural design. Laxman drives Aesthera's technological strategy and innovation initiatives across all product lines. His commitment to precision-first engineering and scalable architecture forms the foundation of Aesthera's approach to digital infrastructure.
              </p>
            </motion.div>
            {/* Member 2: Prasna */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-8 aspect-[3/4] bg-surface">
                <Image
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="/prasna.jpeg"
                  alt="Prasna Maharjan"
                  width={400}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <h4 className="font-headline font-bold text-on-background text-3xl mb-2">Prasna Maharjan</h4>
              <p className="text-primary text-lg font-medium mb-4 uppercase tracking-widest">Marketing Lead & Customer Support</p>
              <p className="text-on-surface-variant leading-relaxed text-base">
                Strategic marketing professional and passionate customer advocate. Prasna ensures every client experience reflects Aesthera's commitment to excellence and innovation. Her dedication to building lasting relationships with partners and her keen understanding of market dynamics drive Aesthera's growth and client success initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
