'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
    const lastUpdated = "March 20, 2026"

    return (
        <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary min-h-screen">
            <section className="pt-48 pb-32 px-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-12 uppercase tracking-widest text-[10px] font-bold"
                    >
                        <ArrowLeft className="w-3 h-3" /> Back to Home
                    </Link>

                    <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-white uppercase mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-secondary uppercase tracking-[0.2em] text-xs font-bold mb-16">
                        Last Updated: {lastUpdated}
                    </p>

                    <div className="prose prose-invert prose-neutral max-w-none space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">1. Acceptance of Terms</h2>
                            <p className="text-on-surface-variant leading-relaxed">
                                By accessing and using the services provided by Aesthera ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">2. Description of Service</h2>
                            <p className="text-on-surface-variant leading-relaxed">
                                Aesthera is a digital solution provider specializing in custom software development, SaaS products, and architectural design. Our services are provided "as is" and are subject to change or termination at our discretion.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">3. User Obligations</h2>
                            <p className="text-on-surface-variant leading-relaxed">
                                Users are responsible for maintaining the confidentiality of any account information and for all activities that occur under their account. You agree to use our services only for lawful purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">4. Intellectual Property</h2>
                            <p className="text-on-surface-variant leading-relaxed">
                                All content, trademarks, and data on our website and through our services are the property of Aesthera or its licensors. Unauthorized use of any materials is strictly prohibited.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">5. Limitation of Liability</h2>
                            <p className="text-on-surface-variant leading-relaxed">
                                Aesthera shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">6. Governing Law</h2>
                            <p className="text-on-surface-variant leading-relaxed">
                                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Aesthera operates, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section className="pt-12 border-t border-outline/5">
                            <p className="text-on-surface-variant italic text-sm">
                                If you have any questions regarding these Terms of Service, please contact us at <a href="mailto:hello@aesthera.tech" className="text-primary hover:underline">hello@aesthera.tech</a>.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
