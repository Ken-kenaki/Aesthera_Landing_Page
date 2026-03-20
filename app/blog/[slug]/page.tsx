'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { blogPosts } from '@/data/blog'
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react'

export default function BlogPost() {
    const { slug } = useParams()
    const post = blogPosts.find(p => p.slug === slug)

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-white">
                <h1 className="text-4xl font-headline font-black">Post Not Found</h1>
            </div>
        )
    }

    return (
        <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary min-h-screen">
            {/* Hero Header */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover grayscale opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col justify-end pb-20 px-8">
                    <div className="max-w-4xl mx-auto w-full">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px] mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-300" />
                            Portal Access
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">
                                {post.category}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-headline font-black text-white tracking-tighter leading-[0.9] mb-8">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {post.date}</span>
                                <span className="flex items-center gap-2"><User className="w-4 h-4 text-primary" /> {post.author.name}</span>
                                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> 5 Min Read</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-8">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Author Sidebar */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit order-2 lg:order-1">
                        <div className="glass-card p-10 rounded-2xl border border-outline/5 bg-surface-container-low">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                                    <Image src={post.author.image} alt={post.author.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{post.author.name}</h4>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">{post.author.role}</p>
                                </div>
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed opacity-70 mb-8 font-body">
                                Engineering digital monoliths and exploring the kinetic potential of regional tech hubs.
                            </p>
                            <div className="flex gap-4 pt-8 border-t border-outline/10">
                                <button className="text-white hover:text-primary transition-colors"><Share2 className="w-5 h-5" /></button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 order-1 lg:order-2">
                        <div
                            className="prose prose-invert prose-lg max-w-none prose-headings:font-headline prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-p:text-on-surface-variant prose-p:leading-relaxed prose-p:opacity-80 prose-blockquote:border-primary prose-blockquote:bg-surface-container-low prose-blockquote:p-8 prose-blockquote:rounded-r-xl"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
