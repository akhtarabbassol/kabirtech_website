import React from 'react';
import { Facebook, Linkedin } from 'lucide-react';
import { LOGO, NAV } from '@/components/Header';

const SOCIAL_LINKS = [{
  label: 'LinkedIn',
  href: 'https://www.linkedin.com/company/kabirai',
  icon: Linkedin
}, {
  label: 'Facebook',
  href: 'https://www.facebook.com/people/KabirTech-Solutions/61593669463224/',
  icon: Facebook
}];

function Footer() {
  return <footer className="border-t border-white/10 bg-[hsl(var(--ink))] py-12">
            <div className="mx-auto flex max-w-[80rem] flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-3">
                    <img src={LOGO} alt="Kabir AI" className="h-7 w-auto" />
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">AI engineering studio</p>
                    <div className="flex items-center gap-2.5">
                        {SOCIAL_LINKS.map(s => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Kabir AI on ${s.label}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-sky-400/40 hover:text-sky-400">
                                <s.icon className="h-4 w-4" strokeWidth={1.75} />
                            </a>)}
                    </div>
                </div>
                <nav className="flex flex-wrap gap-x-8 gap-y-3">
                    {NAV.map(n => <a key={n.href} href={n.href} className="text-sm text-slate-400 transition-colors hover:text-white">{n.label}</a>)}
                </nav>
                <div className="flex flex-col items-start gap-2 md:items-end">
                    <div className="flex flex-wrap justify-start gap-4 md:justify-end">
                        <a href="/privacy-policy" className="text-sm text-slate-400 transition-colors hover:text-white">Privacy Policy</a>
                        <a href="/terms-and-conditions" className="text-sm text-slate-400 transition-colors hover:text-white">Terms &amp; Conditions</a>
                        <a href="/information-security-policy" className="text-sm text-slate-400 transition-colors hover:text-white">Information Security Policy</a>
                    </div>
                    <p className="text-sm text-slate-500">© {new Date().getFullYear()} Kabir AI</p>
                </div>
            </div>
        </footer>;
}

export default Footer;

export { Footer };
