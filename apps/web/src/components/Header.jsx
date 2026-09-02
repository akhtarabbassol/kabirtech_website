import React, { useState } from 'react';
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

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 bg-[hsl(var(--ink))]/85 backdrop-blur-xl">
            <div className="mx-auto flex h-[72px] max-w-[90rem] items-center justify-between px-5 sm:px-8">
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
                    {NAV.map(n => <a key={n.href} href={n.href} className="relative py-1 text-sm font-medium text-slate-300 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-sky-400 after:to-violet-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full">
                            {n.label}
                        </a>)}
                </nav>

                <div className="hidden items-center gap-5 md:flex">
                    <a href="tel:+15551240188" className="flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-white">
                        <Phone className="h-3.5 w-3.5" strokeWidth={1.75} /> +9 (232) 148-29814
                    </a>
                    <a href="/#contact" className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400 hover:shadow-sky-400/40 active:scale-[0.98]">
                        Book a call
                    </a>
                </div>

                <button type="button" onClick={() => setOpen(v => !v)} aria-label="Toggle menu" className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/5 md:hidden">
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {open && <div className="border-t border-white/10 bg-[hsl(var(--ink))] px-5 py-4 md:hidden">
                    {NAV.map(n => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-slate-200">
                            {n.label}
                        </a>)}
                    <a href="/#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-sky-500 py-3 text-center text-base font-semibold text-white shadow-lg shadow-sky-500/20">
                        Book a call
                    </a>
                </div>}

            <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" aria-hidden="true" />
        </header>;
}

export default Header;

export { Header, LOGO, NAV };
