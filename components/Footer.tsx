import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="w-full border-t border-black/5 dark:border-white/5 pt-20 pb-10 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="flex flex-col items-center w-full px-12 max-w-7xl mx-auto">
        <div className="text-4xl font-black text-black dark:text-white mb-8 font-headline uppercase tracking-tighter">Aesthera</div>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Blog', href: '/blog' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aesthera-limited/' },
            { label: 'Dribbble', href: '#' }
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-neutral-500 hover:text-black dark:text-neutral-500 dark:hover:text-white transition-colors duration-300 font-label text-sm uppercase tracking-widest hover:translate-x-1"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-neutral-500 dark:text-neutral-600 font-body text-xs uppercase tracking-widest text-center">
          © 2026 Aesthera Limited.
        </p>
      </div>
    </footer>
  )
}
