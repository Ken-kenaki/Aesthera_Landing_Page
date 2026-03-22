'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { services } from '@/data/services'
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'

export default function ServicePage() {
  const params = useParams()
  const slug = params.slug
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-on-background">
        <h1 className="text-4xl font-headline font-black mb-4">Service Not Found</h1>
        <Link href="/services" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Services
        </Link>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <div className="bg-background text-on-background min-h-screen font-body selection:bg-primary selection:text-on-primary">
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-headline font-black text-outline-variant/30">{service.id}</span>
              <div className="h-px w-12 bg-outline-variant/30"></div>
              <span className="text-primary/60 font-label tracking-[0.2em] uppercase text-xs">Service Detail</span>
            </div>

            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-background leading-[1.1] max-w-4xl mb-8">
              {service.title}
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
              {service.fullDescription}
            </p>
          </motion.div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
           <Icon className="w-full h-full text-primary opacity-20 absolute -right-1/4 -top-1/4" />
        </div>
      </section>

      {/* Features & Stats */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-8">Key Capabilities</h2>
              <div className="grid grid-cols-1 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-surface-container rounded-lg border border-white/5">
                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                    <span className="text-on-surface font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats or Additional Info */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="flex flex-col justify-center"
            >
               {service.stats && service.stats.length > 0 ? (
                 <div className="grid grid-cols-2 gap-6 mb-12">
                   {service.stats.map((stat, idx) => (
                     <div key={idx} className="p-8 bg-surface-container-highest rounded-xl border border-white/5">
                       <span className="block text-4xl font-headline font-bold text-on-surface mb-2">{stat.value}</span>
                       <span className="text-sm uppercase tracking-widest text-primary/60">{stat.label}</span>
                     </div>
                   ))}
                 </div>
               ) : (
                  <div className="p-8 bg-surface-container-test rounded-xl border border-white/5 mb-12">
                     <Icon className="w-16 h-16 text-primary mb-6" />
                     <h3 className="text-xl font-bold text-on-surface mb-2">Ready to Deploy?</h3>
                     <p className="text-on-surface-variant">
                        Our team is ready to integrate this service into your digital ecosystem. 
                        Let's discuss how {service.title} can drive your business forward.
                     </p>
                  </div>
               )}

               <div className="glass-card p-8 rounded-xl border border-primary/20 bg-primary/5">
                 <h3 className="text-xl font-bold text-on-surface mb-4">Start Your {service.title} Project</h3>
                 <p className="text-on-surface-variant mb-6 text-sm">
                   Partner with Aesthera to build high-velocity digital infrastructure.
                 </p>
                 <Link 
                   href="/contact" 
                   className="inline-flex items-center justify-center w-full py-4 bg-primary text-on-primary font-bold uppercase tracking-widest rounded hover:bg-primary-container hover:text-on-primary-container transition-colors"
                 >
                   Initiate Contact <ArrowRight className="ml-2" size={16} />
                 </Link>
               </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

