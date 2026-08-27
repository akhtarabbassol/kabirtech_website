import React from 'react';
import { LOGO, NAV } from '@/components/Header';

function Footer() {
  return <footer className="border-t border-white/10 bg-[hsl(var(--ink))] py-12">
            <div className="mx-auto flex max-w-[80rem] flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                    <img src={LOGO} alt="KabirTech Solutions" className="h-10 w-10 rounded-lg object-cover object-left" />
                    <div>
                        <p className="font-display font-bold text-white">Kabir<span className="text-sky-400">Tech</span> Solutions</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Innovating technology</p>
                    </div>
                </div>
                <nav className="flex flex-wrap gap-x-8 gap-y-3">
                    {NAV.map(n => <a key={n.href} href={n.href} className="text-sm text-slate-400 transition-colors hover:text-white">{n.label}</a>)}
                </nav>
                <div className="flex flex-col items-start gap-2 md:items-end">
                    <div className="flex gap-4">
                        <a href="/privacy-policy" className="text-sm text-slate-400 transition-colors hover:text-white">Privacy Policy</a>
                        <a href="/terms-and-conditions" className="text-sm text-slate-400 transition-colors hover:text-white">Terms &amp; Conditions</a>
                    </div>
                    <p className="text-sm text-slate-500">© {new Date().getFullYear()} KabirTech Solutions</p>
                </div>
            </div>
        </footer>;
}

export default Footer;

export { Footer };
