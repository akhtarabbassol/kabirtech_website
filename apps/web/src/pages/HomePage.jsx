import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowUpRight, Boxes, BrainCircuit, Cloud, Code2, Cpu, Layers, Mail, MapPin, Menu, Phone, ShieldCheck, Smartphone, X, Check, Loader2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
import pb from '@/lib/pocketbaseClient';
const LOGO = 'https://horizons-cdn.hostinger.com/b01990a9-0b3d-4660-9a5b-7fcbea39cb56/3ec973cacc742f86a2b43fe64ae98ee0.jpg';
const BANNER = 'https://horizons-cdn.hostinger.com/b01990a9-0b3d-4660-9a5b-7fcbea39cb56/dbffa1f63f69611038171b3068a16cbe.jpg';
const TEAM_PHOTO = 'https://images.hostinger.com/80be64c8-babc-483d-b736-0c54e039c96b.png';
const NAV = [{
  label: 'Services',
  href: '#services'
}, {
  label: 'Work',
  href: '#work'
}, {
  label: 'Company',
  href: '#company'
}, {
  label: 'Contact',
  href: '#contact'
}];
const SERVICES = [{
  icon: Code2,
  title: 'Custom Software Engineering',
  copy: 'Web platforms, internal tools and APIs built to your business logic — architected for the load you will have in three years, not the one you have today.',
  points: ['React / Node / Python', 'Domain-driven architecture', 'Legacy system modernisation']
}, {
  icon: BrainCircuit,
  title: 'AI & Machine Learning',
  copy: 'From retrieval-augmented assistants to forecasting models and document intelligence — shipped with evaluation harnesses, not demos.',
  points: ['LLM assistants & RAG', 'Predictive & vision models', 'MLOps and monitoring']
}, {
  icon: Smartphone,
  title: 'Mobile Applications',
  copy: 'Native-feeling iOS and Android products with an offline-first data layer and release pipelines your team can actually operate.',
  points: ['React Native & Flutter', 'Offline sync', 'App store delivery']
}, {
  icon: Cloud,
  title: 'Cloud & DevOps',
  copy: 'Infrastructure as code, CI/CD and observability so releases stop being events. We hand over runbooks, not mysteries.',
  points: ['AWS / Azure / GCP', 'Kubernetes & Terraform', 'Cost optimisation']
}, {
  icon: Layers,
  title: 'Product Design',
  copy: 'Discovery workshops, prototypes and design systems that turn a rough idea into a scope your stakeholders can sign off on.',
  points: ['Discovery sprints', 'Design systems', 'Usability testing']
}, {
  icon: ShieldCheck,
  title: 'Dedicated Teams',
  copy: 'Senior engineers embedded in your process, in your timezone overlap, reporting into your leads — scaled up or down quarterly.',
  points: ['Vetted senior talent', 'Your tooling & rituals', 'Flexible contracts']
}];
const WORK = [{
  image: 'https://images.hostinger.com/94341abb-aeb6-466c-8de3-f1c6f2755954.png',
  tag: 'AI Platform',
  client: 'Meridian Capital Partners',
  title: 'Document intelligence for a 40-analyst investment desk',
  copy: 'A retrieval pipeline over 1.2M pages of filings with citation-grounded answers, cutting diligence prep from days to hours.',
  metrics: [['74%', 'faster diligence'], ['1.2M', 'documents indexed']]
}, {
  image: 'https://images.hostinger.com/d0f097f7-573c-4862-b0ef-faf7ac748045.png',
  tag: 'Logistics',
  client: 'Northbay Freight',
  title: 'Route and yard operations rebuilt around live telemetry',
  copy: 'Replaced spreadsheet dispatch with a mobile-first operations app and an ETA model trained on four years of trip history.',
  metrics: [['31%', 'fewer late loads'], ['9 wks', 'to first release']]
}, {
  image: 'https://images.hostinger.com/7e7f7813-3a5f-4fb2-ad61-673d4c041962.png',
  tag: 'Healthcare',
  client: 'Aurora Clinics Group',
  title: 'A compliant patient data platform across 18 clinics',
  copy: 'Unified scheduling, records and billing behind a HIPAA-aligned service layer, with audit trails built in from day one.',
  metrics: [['18', 'clinics migrated'], ['0', 'audit findings']]
}];
const PROCESS = [{
  n: '01',
  t: 'Discover',
  d: 'Two weeks of workshops, technical audit and a costed delivery plan you own — whether or not you continue with us.'
}, {
  n: '02',
  t: 'Architect',
  d: 'Data model, integrations and infrastructure decided and documented before the first production line of code.'
}, {
  n: '03',
  t: 'Build',
  d: 'Two-week sprints, a working demo at the end of each one, and a staging environment you can click through any time.'
}, {
  n: '04',
  t: 'Operate',
  d: 'Monitoring, SLAs and a handover that includes runbooks, training and your team pushing their own release.'
}];
const TEAM = [{
  img: 'https://images.hostinger.com/5f4c851d-92a9-4f16-a741-144ca4c115aa.png',
  name: 'Kabir Rahman',
  role: 'Founder & Principal Architect'
}, {
  img: 'https://images.hostinger.com/6055a391-d5cc-4627-99e8-f2a1d1f6505a.png',
  name: 'Lena Hartmann',
  role: 'Head of Applied AI'
}, {
  img: 'https://images.hostinger.com/a0361588-5200-47a1-96b1-a3ed85a3a5cd.png',
  name: 'Marcus Ellery',
  role: 'Director of Product Design'
}];
const STACK = ['React', 'TypeScript', 'Node.js', 'Python', 'PyTorch', 'LangChain', 'PostgreSQL', 'Kubernetes', 'Terraform', 'AWS', 'Azure', 'Flutter', 'Go', 'Snowflake'];
function Header() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[hsl(var(--ink))]/85 backdrop-blur-xl">
            <div className="mx-auto flex h-[72px] max-w-[90rem] items-center justify-between px-5 sm:px-8">
                <a href="#top" className="flex items-center gap-3">
                    <img src={LOGO} alt="KabirTech Solutions logo" className="h-11 w-11 rounded-xl object-cover object-left" />
                    <span className="font-display text-lg font-bold tracking-tight text-white">
                        Kabir<span className="text-sky-400">Tech</span>
                    </span>
                </a>

                <nav className="hidden items-center gap-9 md:flex">
                    {NAV.map(n => <a key={n.href} href={n.href} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
                            {n.label}
                        </a>)}
                </nav>

                <div className="hidden items-center gap-4 md:flex">
                    <a href="tel:+15551240188" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">+9 (232) 148-29814</a>
                    <a href="#contact" className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-sky-400 active:scale-[0.98]">
                        Book a call
                    </a>
                </div>

                <button type="button" onClick={() => setOpen(v => !v)} aria-label="Toggle menu" className="flex h-11 w-11 items-center justify-center rounded-lg text-white md:hidden">
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {open && <div className="border-t border-white/10 bg-[hsl(var(--ink))] px-5 py-4 md:hidden">
                    {NAV.map(n => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-slate-200">
                            {n.label}
                        </a>)}
                    <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-sky-500 py-3 text-center text-base font-semibold text-white">
                        Book a call
                    </a>
                </div>}
        </header>;
}
function Hero() {
  return <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[hsl(var(--ink))] pt-[72px]">
            <div className="absolute inset-0 circuit-grid opacity-70" aria-hidden="true" />
            <div className="absolute -right-24 top-10 h-[520px] w-[520px] rounded-full bg-sky-500/20 blur-[130px]" aria-hidden="true" />
            <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-700/25 blur-[140px]" aria-hidden="true" />

            <div className="relative mx-auto grid w-full max-w-[90rem] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                    <motion.div initial={{
          opacity: 0,
          y: 18
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          ease: 'easeOut'
        }} className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
                        <Cpu className="h-3.5 w-3.5" /> Software house · AI engineering
                    </motion.div>

                    <motion.h1 initial={{
          opacity: 0,
          y: 22
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.08,
          ease: 'easeOut'
        }} className="mt-7 font-display text-[2.7rem] font-bold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
                        Innovating technology.
                        <span className="relative ml-2 inline-block text-sky-400">
                            Empowering growth.
                            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none" aria-hidden="true">
                                <path d="M2 7C60 2 120 2 180 5C220 7 265 6 298 3" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className="text-sky-500" />
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.p initial={{
          opacity: 0,
          y: 18
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.16,
          ease: 'easeOut'
        }} className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">
                        KabirTech Solutions designs, builds and operates custom software and AI systems for companies that
                        need production results — not prototypes. Senior engineers, fixed sprints, code you own outright.
                    </motion.p>

                    <motion.div initial={{
          opacity: 0,
          y: 18
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.24,
          ease: 'easeOut'
        }} className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a href="#contact" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-sky-500 px-8 text-base font-semibold text-white transition-all hover:bg-sky-400 active:scale-[0.98]">
                            Start a project <ArrowUpRight className="h-5 w-5" />
                        </a>
                        <a href="#work" className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/20 px-8 text-base font-semibold text-white transition-colors hover:bg-white/10">
                            See our work
                        </a>
                    </motion.div>

                    <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
                        {[[120, '+', 'Projects delivered'], [11, '', 'Years building'], [38, '', 'Engineers on staff']].map(([v, s, l]) => <div key={l}>
                                <dt className="font-display text-3xl font-bold text-white">
                                    <CountUp value={v} suffix={s} />
                                </dt>
                                <dd className="mt-1 text-sm text-slate-400">{l}</dd>
                            </div>)}
                    </dl>
                </div>

                <motion.div initial={{
        opacity: 0,
        scale: 0.97
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.7,
        delay: 0.2,
        ease: 'easeOut'
      }} className="relative">
                    <img src={BANNER} alt="KabirTech Solutions — Innovating Technology. Empowering Growth." className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-blue-950/60" />
                    <div className="mt-5 grid grid-cols-2 gap-4">
                        {[{
            icon: BrainCircuit,
            k: 'AI systems in production',
            v: 'RAG, forecasting, vision'
          }, {
            icon: Boxes,
            k: 'Delivery model',
            v: 'Two-week sprints, demo each'
          }].map(c => <div key={c.k} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                                <c.icon className="h-5 w-5 text-sky-400" strokeWidth={1.75} />
                                <p className="mt-3 text-sm font-semibold text-white">{c.k}</p>
                                <p className="mt-1 text-xs text-slate-400">{c.v}</p>
                            </div>)}
                    </div>
                </motion.div>
            </div>
        </section>;
}
function Marquee() {
  return <div className="overflow-hidden border-y border-border bg-secondary py-5">
            <div className="kt-marquee-track flex w-max gap-12 whitespace-nowrap">
                {[...STACK, ...STACK].map((s, i) => <span key={`${s}-${i}`} className="font-display text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                        {s}
                    </span>)}
            </div>
        </div>;
}
function Services() {
  return <section id="services" className="mx-auto max-w-[80rem] px-5 py-24 sm:px-8 lg:py-32">
            <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What we do</p>
                <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                        Engineering capability across the whole product lifecycle
                    </h2>
                    <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
                        One accountable team from discovery through to the on-call rotation, so nothing falls between vendors.
                    </p>
                </div>
            </Reveal>

            <div className="mt-16 divide-y divide-border border-y border-border">
                {SERVICES.map((s, i) => <Reveal key={s.title} delay={i * 0.05}>
                        <div className="group grid gap-6 py-9 md:grid-cols-[3rem_1fr_1.1fr_auto] md:items-start md:gap-10">
                            <s.icon className="h-9 w-9 text-primary" strokeWidth={1.5} />
                            <h3 className="font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                            <p className="text-base leading-relaxed text-muted-foreground">{s.copy}</p>
                            <ul className="space-y-2">
                                {s.points.map(p => <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <Check className="h-4 w-4 shrink-0 text-primary" /> {p}
                                    </li>)}
                            </ul>
                        </div>
                    </Reveal>)}
            </div>
        </section>;
}
function Work() {
  return <section id="work" className="bg-[hsl(var(--ink))] py-24 lg:py-32">
            <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
                <Reveal>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Case studies</p>
                    <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                        Systems running in production, with numbers attached
                    </h2>
                </Reveal>

                <div className="mt-16 space-y-6">
                    {WORK.map((w, i) => <Reveal key={w.title} delay={i * 0.06}>
                            <article className={`grid items-center gap-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-2 lg:p-10 ${i % 2 ? 'lg:[&>figure]:order-2' : ''}`}>
                                <figure className="overflow-hidden rounded-xl">
                                    <img src={w.image} alt={w.title} className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]" loading="lazy" />
                                </figure>
                                <div>
                                    <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                                        <span>{w.tag}</span><span className="h-px w-8 bg-sky-400/50" /><span className="text-slate-400">{w.client}</span>
                                    </div>
                                    <h3 className="mt-5 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">{w.title}</h3>
                                    <p className="mt-4 text-base leading-relaxed text-slate-300">{w.copy}</p>
                                    <div className="mt-8 flex gap-10 border-t border-white/10 pt-6">
                                        {w.metrics.map(([v, l]) => <div key={l}>
                                                <p className="font-display text-3xl font-bold text-sky-400">{v}</p>
                                                <p className="mt-1 text-sm text-slate-400">{l}</p>
                                            </div>)}
                                    </div>
                                </div>
                            </article>
                        </Reveal>)}
                </div>
            </div>
        </section>;
}
function Company() {
  return <section id="company" className="mx-auto max-w-[80rem] px-5 py-24 sm:px-8 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
                <Reveal>
                    <img src={TEAM_PHOTO} alt="The KabirTech Solutions engineering team at work" className="w-full rounded-2xl object-cover shadow-xl shadow-slate-900/10" loading="lazy" />
                </Reveal>
                <Reveal delay={0.08}>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">The company</p>
                    <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                        A software house built around senior people
                    </h2>
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                        KabirTech Solutions started in 2014 with three engineers and one belief: clients deserve the people who
                        scoped the project to be the ones who write it. Today we are thirty-eight engineers, designers and data
                        scientists working with scale-ups and established operators across finance, healthcare and logistics.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        We publish our estimates, our architecture decisions and our test coverage. Every engagement ends with
                        your team able to run the system without us — that is the standard we hold.
                    </p>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        {PROCESS.map(p => <div key={p.n} className="rounded-xl border border-border bg-card p-5">
                                <span className="font-display text-sm font-bold text-primary">{p.n}</span>
                                <h3 className="mt-2 font-display text-lg font-semibold">{p.t}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                            </div>)}
                    </div>
                </Reveal>
            </div>

            <div className="mt-20 grid gap-8 sm:grid-cols-3">
                {TEAM.map((t, i) => <Reveal key={t.name} delay={i * 0.06}>
                        <div className="group">
                            <img src={t.img} alt={t.name} className="aspect-[3/4] w-full rounded-xl object-cover grayscale transition-all duration-500 group-hover:grayscale-0" loading="lazy" />
                            <h3 className="mt-4 font-display text-lg font-semibold">{t.name}</h3>
                            <p className="text-sm text-muted-foreground">{t.role}</p>
                        </div>
                    </Reveal>)}
            </div>
        </section>;
}
const PROJECT_TYPES = ['Custom software', 'AI / machine learning', 'Mobile app', 'Cloud & DevOps', 'Dedicated team', 'Not sure yet'];
const BUDGETS = ['Under $25k', '$25k – $75k', '$75k – $200k', '$200k+'];
function Contact() {
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
  return <section id="contact" className="relative overflow-hidden bg-[hsl(var(--ink))] py-24 lg:py-32">
            <div className="absolute inset-0 circuit-grid opacity-60" aria-hidden="true" />
            <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[130px]" aria-hidden="true" />

            <div className="relative mx-auto grid max-w-[80rem] gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Get in touch</p>
                    <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                        Tell us what you are building
                    </h2>
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
                            <h3 className="mt-6 font-display text-2xl font-semibold text-white">Message received</h3>
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
                                    <label htmlFor="budget" className="text-sm font-medium text-slate-200">Budget range</label>
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

                            <button type="submit" disabled={status === 'loading'} className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-8 text-base font-semibold text-white transition-all hover:bg-sky-400 active:scale-[0.98] disabled:opacity-60">
                                {status === 'loading' ? <><Loader2 className="h-5 w-5 animate-spin" /> Sending</> : <>Send project brief <ArrowUpRight className="h-5 w-5" /></>}
                            </button>
                        </form>}
                </div>
            </div>
        </section>;
}
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
                <p className="text-sm text-slate-500">© {new Date().getFullYear()} KabirTech Solutions</p>
            </div>
        </footer>;
}
export default function HomePage() {
  return <div className="bg-background">
            <Helmet>
                <title>KabirTech Solutions | Custom Software &amp; AI Development Company</title>
                <meta name="description" content="KabirTech Solutions is a software house building custom software, AI systems, mobile apps and cloud platforms for companies in finance, healthcare and logistics." />
            </Helmet>
            <Seo title="KabirTech Solutions | Custom Software & AI Development Company" description="Custom software engineering and applied AI, delivered by senior engineers in two-week sprints." image={BANNER} siteName="KabirTech Solutions" />

            <Header />
            <main>
                <Hero />
                <Marquee />
                <Services />
                <Work />
                <Company />
                <Contact />
            </main>
            <Footer />
        </div>;
}