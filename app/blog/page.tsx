'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { blogPosts } from '@/data/blog'
import { ArrowRight, Calendar, User } from 'lucide-react'

export default function Blog() {
    return (
        <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-48 pb-20 px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary/60 font-label tracking-[0.4em] uppercase text-xs mb-6 block">Deep Insights</span>
                        <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] max-w-4xl mb-12">
                            The Kinetic <br /><span className="text-primary/40">Chronicle</span>
                        </h1>
                        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed opacity-80">
                            Architectural blueprints, tech trends, and the philosophy of digital permanence. Exploring the future of engineering from a Himalayan perspective.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="pb-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogPosts.map((post, idx) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex flex-col h-full bg-surface-container-low rounded-2xl border border-outline/5 overflow-hidden transition-all duration-500 hover:bg-surface-variant hover:border-primary/20"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-background/80 backdrop-blur-md text-primary text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full font-bold border border-white/10">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60 mb-6 font-bold">
                                        <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                                        <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> {post.author.name}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors font-headline leading-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-on-surface-variant text-sm leading-relaxed mb-8 opacity-70 flex-grow line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] group/link"
                                    >
                                        Read Transmission
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
