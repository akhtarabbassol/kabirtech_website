import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';

const LOGO = 'https://horizons-cdn.hostinger.com/b01990a9-0b3d-4660-9a5b-7fcbea39cb56/3ec973cacc742f86a2b43fe64ae98ee0.jpg';

// Hrefs are absolute (`/#services`) rather than bare (`#services`) because
// Header/Footer render on every page, not just the home page — a bare anchor
// would silently no-op on a route that has no matching id, e.g. /privacy-policy.
const NAV = [{
  label: 'Services',
  href: '/#services'
}, {
  label: 'Products',
  href: '/#products'
}, {
  label: 'Work',
  href: '/#work'
}, {
  label: 'Company',
  href: '/#company'
}, {
  label: 'Contact',
  href: '/#contact'
}];

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

// Scroll-spy: only lights up nav links to sections that actually exist on the
// current page (the home page) — a no-op elsewhere, e.g. /privacy-policy.
function useActiveSection() {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const sections = NAV.map(n => document.getElementById(n.href.replace('/#', ''))).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  return active;
}

function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const activeSection = useActiveSection();

  return <header className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'bg-[hsl(var(--ink))]/95 shadow-lg shadow-black/20' : 'bg-[hsl(var(--ink))]/85'}`}>
            <div className={`mx-auto flex max-w-[90rem] items-center justify-between px-5 transition-all duration-300 sm:px-8 ${scrolled ? 'h-[60px]' : 'h-[72px]'}`}>
                <a href="/" className="group flex items-center gap-3">
                    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400 to-violet-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40" aria-hidden="true" />
                        <img src={LOGO} alt="KabirTech Solutions logo" className="relative h-11 w-11 rounded-xl object-cover object-left ring-1 ring-white/10 transition-all duration-300 group-hover:ring-sky-400/40" />
                    </span>
                    <span className="font-display text-lg font-bold tracking-tight text-white">
                        Kabir<span className="text-sky-400">Tech</span>
                    </span>
                </a>

                <nav className="hidden items-center gap-9 md:flex">
                    {NAV.map(n => {
          const isActive = activeSection === n.href.replace('/#', '');
          return <a key={n.href} href={n.href} aria-current={isActive ? 'true' : undefined} className={`relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-gradient-to-r after:from-sky-400 after:to-violet-400 after:transition-all after:duration-300 ${isActive ? 'text-white after:w-full' : 'text-slate-300 after:w-0 hover:text-white hover:after:w-full'}`}>
                                {n.label}
                            </a>;
        })}
                </nav>

                <div className="hidden items-center gap-5 md:flex">
                    <a href="tel:+15551240188" className="flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-white">
                        <Phone className="h-3.5 w-3.5" strokeWidth={1.75} /> +9 (232) 148-29814
                    </a>
                    <a href="/#contact" className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400 hover:shadow-sky-400/40 active:scale-[0.98]">
                        Book a call
                    </a>
                </div>

                <button type="button" onClick={() => setOpen(v => !v)} aria-label="Toggle menu" aria-expanded={open} className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/5 md:hidden">
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            <AnimatePresence>
                {open && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }} className="overflow-hidden border-t border-white/10 bg-[hsl(var(--ink))] md:hidden">
                        <div className="px-5 py-4">
                            {NAV.map((n, i) => <motion.a key={n.href} href={n.href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04, duration: 0.2 }} className={`block py-3 text-base font-medium ${activeSection === n.href.replace('/#', '') ? 'text-sky-400' : 'text-slate-200'}`}>
                                    {n.label}
                                </motion.a>)}
                            <a href="/#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-sky-500 py-3 text-center text-base font-semibold text-white shadow-lg shadow-sky-500/20">
                                Book a call
                            </a>
                        </div>
                    </motion.div>}
            </AnimatePresence>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" aria-hidden="true" />
        </header>;
}

export default Header;

export { Header, LOGO, NAV };
