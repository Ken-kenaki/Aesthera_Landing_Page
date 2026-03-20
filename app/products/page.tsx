'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { saasProducts } from '@/data/products'
import Link from 'next/link'

export default function Products() {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBDfKL9Z0RojYOF1ChKccM7m9HR_5tzJanhm2E79SbNv7L8lHW4xb8IhOA9YcuJENWRxm6-Fv4sxnbv5K0UpfBlK-VupJYb1XMeowUcDFn6jJWKuI4V6zOcieQeTDEEu5gdCiJbuzE_C--HshF7RV82dsCqATwYv4IVMOJHfTazTe6Ow4F7Pq4370wbEVW1sAHVQzLB1-XqdBsPv-L6lztqUjAF6oKNquURWuscqEgjkZ3izIU4CFGje0GrdcbFd3V-I4sriCsRgRQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDtkawZMjaYt-mjFaUMU_Faz7nOD_VGn00LRyFgjVySigMMAgSjTWWn00KTrcZFo9SwNMLBSoBxxtJbMqOAzBsVZ9IAQ_77ANf0CBdJ_5-T9J0peHejxSBvO5gKx6-Z24EdQdF2DLidiTHPQ5Mi3lFJATPFzwH60DqDbsVs5M6nWJQFKhN6d5BHE-L2NiUd7VjAewaRd4MPpuH43hPPYCim8KJCXfzqtza0bUNCiMcSVLBhjyN1Y1A1oysO5uzWqevN9_ab03Atnd8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_bi537TZuV_qLgrvy4aWLGAWIt_AD77Y-sbM0W_-e5ssCbzOuEwq2ilWc3Q7fv8ai2zFzXL-GdZwCleOSn-N1BpZI_dn41bGDkTBUY3nAi6Re5gVWFnBkHLaylrtj_ggCAv0M2S3mw6u0_x_rIbBqbZbcZz5qko2vav6WtZ2-9rj0DkNSPyZdZNikA0QZL06aNsLZMncIzSKnOFRzXoZHohnybc80Tmwt-XmWgLbpGoejBL3Id6Wf_QKkSeuoOhaYdf8B3VvKuDE",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCFfOHg63IS1zQgKhcXx2AynXjdQmmZJeTak3Cpl1VgMNSD1tXkvEBWLMy88DZ6J65IaregS9tb1g5SERB2P9UqRy80_OHwce-Y-w4qy5fZ47bAd16HfLQORNr7MG5UDWHgll44TeNamukFqHN8zddKFAEKvUSRfRyQ353rhAHzpLMSA6Zvjm59JkgAfC4bTK1RsUQbOo9ZoODysqI7TpAPPq6yymb4xG27aI0w8r4GxQYHVxtaif0xBvAHWCguYvonMQmvd9H2Onc"
  ]

  return (
    <div className="bg-transparent text-on-background font-body selection:bg-primary selection:text-on-primary min-h-screen">
      <section className="pt-48 pb-32 px-8 max-w-screen-2xl mx-auto">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary uppercase tracking-[0.4em] font-bold text-xs mb-6 block">Proprietary Innovations</span>
          <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-on-background uppercase mb-8">
            Our Products
          </h1>
          <div className="flex flex-wrap justify-center gap-4 font-headline uppercase">
            <button className="px-6 py-2 rounded-full border border-on-surface bg-on-surface text-surface font-bold text-xs uppercase tracking-widest">All Products</button>
            <button className="px-6 py-2 rounded-full border border-outline text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:border-on-surface hover:text-on-surface transition-colors">SaaS</button>
            <button className="px-6 py-2 rounded-full border border-outline text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:border-on-surface hover:text-on-surface transition-colors">Gaming</button>
            <button className="px-6 py-2 rounded-full border border-outline text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:border-on-surface hover:text-on-surface transition-colors">Education</button>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {saasProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative group aspect-square overflow-hidden bg-black border border-white/5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={images[index % images.length]}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 z-10">
                <span className="text-xs uppercase tracking-widest text-primary/60 mb-2 font-headline">{product.category}</span>
                <h4 className="text-2xl font-bold text-on-primary uppercase tracking-tighter font-headline">{product.name}</h4>
                <p className="text-on-primary/60 text-xs mt-2 line-clamp-2">{product.description}</p>
                <Link href={product.url} target="_blank" className="text-[10px] text-primary font-bold uppercase tracking-widest mt-4 hover:underline">Explore Product</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
