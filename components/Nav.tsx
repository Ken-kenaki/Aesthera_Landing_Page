'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/app/providers/ThemeProvider'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/projects', label: 'Projects' },
]
export default function Nav() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'backdrop-blur-2xl bg-surface/60 shadow-2xl py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="flex justify-between items-center w-full px-8 max-w-screen-2xl mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-on-surface uppercase font-headline">
          Aesthera
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-medium transition-all duration-300 uppercase tracking-widest text-xs ${pathname === link.href
                ? 'text-primary font-bold border-b-2 border-primary pb-1'
                : 'text-on-surface-variant hover:text-primary'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={`font-medium transition-all duration-300 uppercase tracking-widest text-xs ${pathname === '/contact'
            ? 'text-primary font-bold border-b-2 border-primary pb-1'
            : 'text-on-surface-variant hover:text-primary'
            }`}>
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-on-surface/5 transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted && (theme === 'dark' ? <Sun size={20} className="text-on-surface" /> : <Moon size={20} className="text-on-surface" />)}
          </button>
          <Link
            href="/contact"
            className="kinetic-gradient text-on-primary px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm active:scale-95 duration-200 ease-out neon-glow-primary transition-all"
          >
            Start Project
          </Link>
        </div>
      </div>
    </nav>
  )
}
