'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
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
                        Privacy Policy
                    </h1>
                    <p className="text-secondary uppercase tracking-[0.2em] text-xs font-bold mb-16">
                        Last Updated: {lastUpdated}
                    </p>

                    <div className="prose prose-invert prose-neutral max-w-none space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">1. Information We Collect</h2>
                            <p className="text-on-surface-variant leading-relaxed">
                                We may collect personal information such as your name, email address, and contact details when you interact with our services or contact us directly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">2. How We Use Information</h2>
                            <p className="text-on-surface-variant leading-relaxed">
                                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users and Aesthera.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">3. Data Security</h2>
                            <p className="text-on-surface-variant leading-relaxed">
                                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">4. Third-Party Services</h2>
                            <p className="text-on-surface-variant leading-relaxed">
                                Our services may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">5. Changes to This Policy</h2>
                            <p className="text-on-surface-variant leading-relaxed">
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                            </p>
                        </section>

                        <section className="pt-12 border-t border-outline/5">
                            <p className="text-on-surface-variant italic text-sm">
                                If you have any questions regarding this Privacy Policy, please contact us at <a href="mailto:hello@aesthera.tech" className="text-primary hover:underline">hello@aesthera.tech</a>.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
