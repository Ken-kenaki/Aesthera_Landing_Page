'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { clientProjects } from '@/data/projects'
import Link from 'next/link'
import { useState } from 'react'
import { clsx } from 'clsx'

export default function Projects() {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBHZddpKP0VE3Qit7zARzlc2n82AkFyJxTnSdmBFYb8ZWGWdS3v23VhF1Qt1-dEEiXH5QKRH289-rfWu-IfvR4j9BEg-Cz6_C23rB0qd-h8MKeoh7aTNRPVyZbXEkTHSuLbs6gWhguSZG0kt2gmDETpoRen_fpgyiLnGKbU_zrEpEWHiHucM4wQ6Myjb0wViFLl77yrdyioWYIP1A_9DRHA07XJ_1TC3OcWIlvXoDlqEyGKa2zl-Wu8_nxRRoTZ1cdZOyK58HI7bIY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBloiNsdYNdrfzl7FOs2ILBRL4YWIkonAooRLfas5Oil2HtQidBXjs7hfUnQKaFSvVMgc9r29EMYNANmW0-XPhbErL-TucPwWd20KlodqO3znD7UkXAQxpnhlUFINR_ABGKHc_BgMxVkFsvMnnmkIM-5W9pp1N_dE0syAMahK9tjSoox5ih6LHKZ6fHPYB5GhrxcUNAqvoCjS_I-hAbqpFrkR8vJQMmXUqIlFQQqiY7GvgC1GeUqRj7SaquE1MhfiyBHRpgHUxsIwE",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBNrdNnBu_2T0SW3E7R38m-rnuMPyqsyiK8SG5vKp3mN9aoJhVKk7XmL6Jqa6SFKtOv-DKApCkXd_weIdgExGlBjOPI4aERUsb2-RnT-Ds7lOVry1jfVmLDXRN4jJkC_bNiTYlsTtNOhnBc3yLpIqTJspdD4NaisUdoVRsLpR1-7oHlgeIvOLFy02YqBpLe07kQCWDDAi5sz_1JWOEwPF4RcM_vYxKFCc06BLBpTlUhwOlcVjZK8lMEqsVIOgGp9FT4HWVjuVr6CLU",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDtkawZMjaYt-mjFaUMU_Faz7nOD_VGn00LRyFgjVySigMMAgSjTWWn00KTrcZFo9SwNMLBSoBxxtJbMqOAzBsVZ9IAQ_77ANf0CBdJ_5-T9J0peHejxSBvO5gKx6-Z24EdQdF2DLidiTHPQ5Mi3lFJATPFzwH60DqDbsVs5M6nWJQFKhN6d5BHE-L2NiUd7VjAewaRd4MPpuH43hPPYCim8KJCXfzqtza0bUNCiMcSVLBhjyN1Y1A1oysO5uzWqevN9_ab03Atnd8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_bi537TZuV_qLgrvy4aWLGAWIt_AD77Y-sbM0W_-e5ssCbzOuEwq2ilWc3Q7fv8ai2zFzXL-GdZwCleOSn-N1BpZI_dn41bGDkTBUY3nAi6Re5gVWFnBkHLaylrtj_ggCAv0M2S3mw6u0_x_rIbBqbZbcZz5qko2vav6WtZ2-9rj0DkNSPyZdZNikA0QZL06aNsLZMncIzSKnOFRzXoZHohnybc80Tmwt-XmWgLbpGoejBL3Id6Wf_QKkSeuoOhaYdf8B3VvKuDE",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCFfOHg63IS1zQgKhcXx2AynXjdQmmZJeTak3Cpl1VgMNSD1tXkvEBWLMy88DZ6J65IaregS9tb1g5SERB2P9UqRy80_OHwce-Y-w4qy5fZ47bAd16HfLQORNr7MG5UDWHgll44TeNamukFqHN8zddKFAEKvUSRfRyQ353rhAHzpLMSA6Zvjm59JkgAfC4bTK1RsUQbOo9ZoODysqI7TpAPPq6yymb4xG27aI0w8r4GxQYHVxtaif0xBvAHWCguYvonMQmvd9H2Onc"
  ]

  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All'
    ? clientProjects
    : clientProjects.filter(project => project.category === filter || (filter === 'Web' && project.category === 'E-commerce') || (filter === 'SaaS' && project.category === 'CRM/Business'))

  // Extract unique categories from data or define standard ones
  const categories = ['All', 'Education', 'Finance', 'SaaS', 'Web']

  return (
    <div className="bg-transparent text-on-background font-body selection:bg-primary selection:text-on-primary min-h-screen">
      <section className="pt-48 pb-32 px-8 max-w-screen-2xl mx-auto">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary uppercase tracking-[0.4em] font-bold text-xs mb-6 block">Our Portfolio</span>
          <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-on-background uppercase mb-8">
            Selected Works
          </h1>
          <div className="flex flex-wrap justify-center gap-4 font-headline uppercase">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={clsx(
                  "px-6 py-2 rounded-full border font-bold text-xs uppercase tracking-widest transition-colors",
                  filter === cat
                    ? "border-on-surface bg-on-surface text-surface"
                    : "border-outline text-on-surface-variant hover:border-on-surface hover:text-on-surface"
                )}
              >
                {cat === 'All' ? 'All Work' : cat}
              </button>
            ))}
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group aspect-square overflow-hidden bg-black border border-white/5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={images[index % images.length]}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 z-10">
                <span className="text-xs uppercase tracking-widest text-primary/60 mb-2 font-headline">{project.category}</span>
                <h4 className="text-2xl font-bold text-on-primary uppercase tracking-tighter font-headline">{project.name}</h4>
                <p className="text-on-primary/60 text-xs mt-2 line-clamp-2">{project.description}</p>
                <Link href={project.url} target="_blank" className="text-[10px] text-primary font-bold uppercase tracking-widest mt-4 hover:underline">Launch Project</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
