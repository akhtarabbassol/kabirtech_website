import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowUpRight, Check, Loader2, Mail, MapPin, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import pb from '@/lib/pocketbaseClient';

const PROJECT_TYPES = ['Custom software', 'AI / machine learning', 'Mobile app', 'Cloud & DevOps', 'Dedicated team', 'Not sure yet'];
const BUDGETS = ['Under $25k', '$25k – $75k', '$75k – $200k', '$200k+'];

const CONTACT_PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://kabirtechsolutions.com/contact#page',
  url: 'https://kabirtechsolutions.com/contact',
  name: 'Contact | KabirTech Solutions',
  mainEntity: {
    '@id': 'https://kabirtechsolutions.com/#organization',
    '@type': 'ProfessionalService',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'info@kabirtechsolutions.com',
      telephone: '+9 (232) 148-29814',
      areaServed: ['US', 'GB', 'AU']
    }
  }
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    project_type: PROJECT_TYPES[0],
    budget: BUDGETS[1],
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const submit = async e => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      await pb.collection('contact_submissions').create(form);
      setStatus('done');
    } catch (err) {
      setError(err?.message || 'Something went wrong. Please email us directly.');
      setStatus('idle');
    }
  };
  const field = 'w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30';
  return <div className="bg-background">
            {/* Static source-text target for tools/generate-llms.js — see HomePage.jsx for why. */}
            <Helmet>
                <title>Contact | KabirTech Solutions</title>
                <meta name="description" content="Tell KabirTech Solutions what you're building. A principal engineer replies within one business day, and the first scoping call is free." />
            </Helmet>
            <Seo
                title="Contact | KabirTech Solutions"
                description="Tell KabirTech Solutions what you're building. A principal engineer replies within one business day, and the first scoping call is free — no sales team in between."
                url="https://kabirtechsolutions.com/contact"
                siteName="KabirTech Solutions"
                jsonLd={[CONTACT_PAGE_SCHEMA]}
            />

            <Header />
            <main className="pt-[72px]">
                <section className="relative overflow-hidden bg-[hsl(var(--ink))] py-24 lg:py-32">
                    <div className="absolute inset-0 circuit-grid opacity-60" aria-hidden="true" />
                    <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[130px]" aria-hidden="true" />

                    <div className="relative mx-auto grid max-w-[80rem] gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Get in touch</p>
                            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                                Tell us what you are building
                            </h1>
                            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
                                Send a few lines about the problem. A principal engineer replies within one business day, and the first
                                scoping call is free — no sales team in between.
                            </p>

                            <ul className="mt-10 space-y-5 text-slate-300">
                                <li className="flex items-center gap-4"><Mail className="h-5 w-5 text-sky-400" /><a href="mailto:hello@kabirtech.solutions" className="hover:text-white">info@kabirtechsolutions.com</a></li>
                                <li className="flex items-center gap-4"><Phone className="h-5 w-5 text-sky-400" /><a href="tel:+15551240188" className="hover:text-white">+9 (232) 148-29814</a></li>
                                <li className="flex items-center gap-4"><MapPin className="h-5 w-5 text-sky-400" />1200 Congress Ave, Suite 460, Austin, TX</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-9">
                            {status === 'done' ? <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/20"><Check className="h-7 w-7 text-sky-400" /></div>
                                    <h2 className="mt-6 font-display text-2xl font-semibold text-white">Message received</h2>
                                    <p className="mt-3 max-w-sm text-slate-300">Thanks {form.name.split(' ')[0]} — we have your brief and will come back within one business day.</p>
                                </div> : <form onSubmit={submit} className="space-y-5">
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="name" className="text-sm font-medium text-slate-200">Full name</label>
                                            <input id="name" required value={form.name} onChange={set('name')} className={field} placeholder="Your name" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="email" className="text-sm font-medium text-slate-200">Work email</label>
                                            <input id="email" type="email" required value={form.email} onChange={set('email')} className={field} placeholder="you@company.com" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="company" className="text-sm font-medium text-slate-200">Company</label>
                                        <input id="company" value={form.company} onChange={set('company')} className={field} placeholder="Company name" />
                                    </div>

                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="project_type" className="text-sm font-medium text-slate-200">Project type</label>
                                            <select id="project_type" value={form.project_type} onChange={set('project_type')} className={`${field} text-white`}>
                                                {PROJECT_TYPES.map(p => <option key={p} value={p} className="bg-slate-900">{p}</option>)}
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="budget" className="text-sm font-medium text-slate-200">Budget range (USD)</label>
                                            <select id="budget" value={form.budget} onChange={set('budget')} className={`${field} text-white`}>
                                                {BUDGETS.map(b => <option key={b} value={b} className="bg-slate-900">{b}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="message" className="text-sm font-medium text-slate-200">What are you building?</label>
                                        <textarea id="message" required rows={5} value={form.message} onChange={set('message')} className={field} placeholder="A short description of the problem, timeline and any systems it must integrate with." />
                                    </div>

                                    {error && <p className="text-sm text-red-400">{error}</p>}

                                    <button type="submit" disabled={status === 'loading'} className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-8 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400 hover:shadow-sky-400/40 active:scale-[0.98] disabled:opacity-60">
                                        {status === 'loading' ? <><Loader2 className="h-5 w-5 animate-spin" /> Sending</> : <>Send project brief <ArrowUpRight className="h-5 w-5" /></>}
                                    </button>
                                    <p className="text-center text-xs text-slate-500">
                                        By submitting, you agree to our <a href="/terms-and-conditions" className="underline hover:text-slate-300">Terms &amp; Conditions</a> and <a href="/privacy-policy" className="underline hover:text-slate-300">Privacy Policy</a>.
                                    </p>
                                </form>}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>;
}
