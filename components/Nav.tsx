'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/app/providers/ThemeProvider'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
const links = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Products', href: '/products' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]
export default function Nav() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              key={link.name}
              href={link.href}
              className={`font-medium transition-all duration-300 uppercase tracking-widest text-xs ${pathname === link.href
                ? 'text-primary font-bold border-b-2 border-primary pb-1'
                : 'text-on-surface-variant hover:text-primary'
                }`}
            >
              {link.name}
            </Link>
          ))}
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
            className="hidden md:block kinetic-gradient text-on-primary px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm active:scale-95 duration-200 ease-out neon-glow-primary transition-all"
          >
            Start Project
          </Link>

          <button
            className="md:hidden p-2 text-on-surface hover:bg-on-surface/5 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-xl border-t border-on-surface/10 shadow-2xl transition-all duration-300 ease-in-out">
          <div className="flex flex-col p-6 space-y-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-bold tracking-widest uppercase transition-colors ${
                  pathname === link.href ? 'text-primary' : 'text-on-surface hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="kinetic-gradient text-on-primary px-6 py-3 text-center text-sm font-bold uppercase tracking-widest rounded-sm neon-glow-primary"
            >
              Start Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
