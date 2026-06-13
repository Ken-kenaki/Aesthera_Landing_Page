import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="w-full border-t border-outline/10 pt-20 pb-10 bg-background transition-colors duration-300">
      <div className="flex flex-col items-center w-full px-12 max-w-7xl mx-auto">
        <div className="text-4xl font-black text-on-background mb-8 font-headline uppercase tracking-tighter">Aesthera</div>
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
              className="text-secondary hover:text-primary transition-colors duration-300 font-label text-sm uppercase tracking-widest"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-on-surface-variant/60 font-body text-xs uppercase tracking-widest text-center">
          © 2026 Aesthera Limited.
        </p>
      </div>
    </footer>
  )
}
