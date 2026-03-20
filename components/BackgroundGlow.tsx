'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function BackgroundGlow() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background">
            {/* Primary Glow Blob - Cyan/Blue */}
            <motion.div
                className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.35, 0.6, 0.35],
                    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.8) 0%, transparent 60%)',
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Secondary Glow Blob - Purple */}
            <motion.div
                className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] rounded-full blur-[130px]"
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.25, 0.5, 0.25],
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.7) 0%, transparent 60%)',
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            {/* Accent Glow Blob - Pink/Rose */}
            <motion.div
                className="absolute top-[30%] right-[-15%] w-[40%] h-[40%] rounded-full blur-[100px]"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.2, 0.45, 0.2],
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, transparent 60%)',
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3
                }}
            />
        </div>
    )
}
