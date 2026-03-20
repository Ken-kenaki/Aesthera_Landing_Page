'use client'
import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function MouseGlow() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth springs for the glow position
    const springConfig = { damping: 25, stiffness: 150 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 100) // offset for half of glow width
            mouseY.set(e.clientY - 100)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <motion.div
            style={{
                x,
                y,
            }}
            className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none z-[9999] opacity-90 dark:opacity-60 blur-[60px]"
            animate={{
                background: [
                    'radial-gradient(circle, rgba(56, 189, 248, 0.7) 0%, transparent 70%)',
                    'radial-gradient(circle, rgba(168, 85, 247, 0.7) 0%, transparent 70%)',
                    'radial-gradient(circle, rgba(56, 189, 248, 0.7) 0%, transparent 70%)',
                ],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    )
}
