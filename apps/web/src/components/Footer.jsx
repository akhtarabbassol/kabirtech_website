import React from 'react';
import { LOGO, NAV } from '@/components/Header';

function Footer() {
  return <footer className="border-t border-white/10 bg-[hsl(var(--ink))] py-12">
            <div className="mx-auto flex max-w-[80rem] flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-2">
                    <img src={LOGO} alt="Kabir AI" className="h-7 w-auto" />
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">AI engineering studio</p>
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
