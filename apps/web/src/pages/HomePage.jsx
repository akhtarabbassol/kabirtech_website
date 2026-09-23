import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, BrainCircuit, Cloud, Code2, Layers, ShieldCheck, Smartphone, Sparkles, Cpu, Send } from 'lucide-react';
import CountUp from '@/components/CountUp';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import Header, { LOGO } from '@/components/Header';
import Footer from '@/components/Footer';

const BANNER = 'https://horizons-cdn.hostinger.com/b01990a9-0b3d-4660-9a5b-7fcbea39cb56/dbffa1f63f69611038171b3068a16cbe.jpg';
const SERVICES_TEASER = [{
  icon: BrainCircuit,
  title: 'AI & Machine Learning'
}, {
  icon: Code2,
  title: 'Custom Software Engineering'
}, {
  icon: Smartphone,
  title: 'Mobile Applications'
}, {
  icon: Cloud,
  title: 'Cloud & DevOps'
}, {
  icon: Layers,
  title: 'Product Design'
}, {
  icon: ShieldCheck,
  title: 'Dedicated Teams'
}];
const PRODUCTS_TEASER = [{
  name: 'Postora AI',
  tag: 'Social media AI platform',
  tagline: 'Open any tool — content, images, strategy, analytics, competitors, and more.'
}, {
  name: 'Callora AI',
  tag: 'Campaign calling & lead generation',
  tagline: 'AI and human agents, calling from the same campaign.'
}, {
  name: 'Mediora AI',
  tag: 'Intelligent digital healthcare',
  tagline: 'Connecting patients and clinicians through appointments, virtual care, and AI assistance.'
}];
const WORK_TEASER = [{
  tag: 'AI Platform',
  client: 'Meridian Capital Partners',
  title: 'Document intelligence for a 40-analyst investment desk',
  metric: ['74%', 'faster diligence']
}, {
  tag: 'Logistics',
  client: 'Northbay Freight',
  title: 'Route and yard operations rebuilt around live telemetry',
  metric: ['31%', 'fewer late loads']
}, {
  tag: 'Healthcare',
  client: 'Aurora Clinics Group',
  title: 'A compliant patient data platform across 18 clinics',
  metric: ['18', 'clinics migrated']
}];
const STACK = ['React', 'TypeScript', 'Node.js', 'Python', 'PyTorch', 'LangChain', 'PostgreSQL', 'Kubernetes', 'Terraform', 'AWS', 'Azure', 'Flutter', 'Go', 'Snowflake'];
const DEMO_PRODUCTS = [{
  key: 'postora',
  name: 'Postora AI',
  subtitle: 'Social AI Assistant',
  greeting: 'Good morning. What should we create today?',
  placeholder: 'Ask Postora AI to draft, plan or analyze...',
  fallback: "Got it — I'd generate that from your brand voice and connected channels. This is a demo; talk to us to see Postora AI running on your real accounts.",
  prompts: [{
    q: 'Draft a LinkedIn post about our new feature',
    a: "Drafted 3 variations in your brand voice — hook, value, CTA. Want me to schedule the best one for Tuesday at 9am, your highest-engagement slot?"
  }, {
    q: 'What are competitors posting this week',
    a: "Tracked 4 competitors — 2 are running a Black Friday angle, none have posted about AI features yet. That's a gap you could own."
  }, {
    q: "Show this month's engagement",
    a: 'Engagement is up 24% this month. Reels are outperforming static posts 3:1 — your top post drove most of the new follows.',
    metrics: [['+24%', 'Engagement', 'This month'], ['3:1', 'Reels vs static', 'Format mix'], ['68%', 'New follows', 'From top post']]
  }, {
    q: 'Generate hashtags for a SaaS launch post',
    a: '12 hashtags ready — a mix of high-volume, mid-competition and niche tags, so you get reach without getting lost in the noise.'
  }]
}, {
  key: 'callora',
  name: 'Callora AI',
  subtitle: 'Calling & Leads',
  greeting: 'Good morning. Who should we reach out to?',
  placeholder: 'Ask Callora AI about leads or calls...',
  fallback: "Got it — I'd pull that from your campaign and contact data. This is a demo; talk to us to see Callora AI running on your real leads.",
  prompts: [{
    q: "Call today's new leads",
    a: "Queued 14 new leads for AI outbound calling. I'll flag anyone who asks for a human and hand off live."
  }, {
    q: "Which leads haven't been called yet",
    a: '23 leads in the Fall Promo campaign are still uncalled, 9 tagged high-intent. Want AI to start dialing, or assign them to the team?'
  }, {
    q: 'Find new leads matching our ideal customer profile',
    a: 'Found 41 leads matching your ICP this week — 12 already have verified phone numbers and are ready to queue.'
  }, {
    q: "How did yesterday's calling campaign go",
    a: '312 calls placed — 267 by AI, 45 by your team. 38 conversations booked a follow-up.',
    metrics: [['312', 'Calls placed', 'Yesterday'], ['267', 'By AI', ''], ['38', 'Follow-ups booked', '']]
  }]
}, {
  key: 'mediora',
  name: 'Mediora AI',
  subtitle: 'AI Health Assistant',
  greeting: 'Good morning. How can I help today?',
  placeholder: 'Ask Mediora AI about patients, bookings or care...',
  fallback: "Got it — I'd pull that from your patient and appointment data. This is a demo; talk to us to see Mediora AI running on your real practice.",
  prompts: [{
    q: 'Find me a cardiologist available this week',
    a: '3 cardiologists have online slots this week. Dr. Sarah Khan is rated highest and has a 9:00 AM slot tomorrow — want me to book it?'
  }, {
    q: 'Summarize my last consultation',
    a: 'Your last visit with Dr. Sarah Khan: occasional palpitations reported, ECG advised, continue current medication.'
  }, {
    q: "Show today's practice overview",
    a: '4 upcoming visits, 15 completed this month, 0 no-shows. A payout of $168 is waiting to be sent to you.',
    metrics: [['4', 'Upcoming', ''], ['15', 'Completed', 'This month'], ['0', 'No-shows', '']]
  }, {
    q: 'What are my symptoms telling you',
    a: "Based on what you've described, this is worth a same-week visit with a gastroenterologist. I can't diagnose, but I can get you booked with one."
  }]
}];
function AiCommandDemo() {
  const [productKey, setProductKey] = useState(DEMO_PRODUCTS[0].key);
  const product = DEMO_PRODUCTS.find(p => p.key === productKey);
  const [active, setActive] = useState(null);
  const [stage, setStage] = useState('idle');
  const [input, setInput] = useState('');
  const timeoutRef = useRef(null);
  const runPrompt = entry => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive(entry);
    setStage('thinking');
    timeoutRef.current = setTimeout(() => setStage('answered'), 900);
  };
  const switchProduct = key => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setProductKey(key);
    setActive(null);
    setStage('idle');
    setInput('');
  };
  const submit = e => {
    e.preventDefault();
    if (!input.trim() || stage === 'thinking') return;
    runPrompt({
      q: input,
      a: product.fallback
    });
    setInput('');
  };
  const reset = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive(null);
    setStage('idle');
  };
  return <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-sky-300">Live demo</span>
            </div>

            <div className="mt-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 p-1" role="tablist" aria-label="Switch product demo">
                {DEMO_PRODUCTS.map(p => <button key={p.key} type="button" role="tab" aria-selected={p.key === productKey} onClick={() => switchProduct(p.key)} className={`flex-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${p.key === productKey ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'}`}>
                        {p.name}
                    </button>)}
            </div>
            <p className="mt-2 text-xs font-medium text-slate-500">{product.name} · {product.subtitle}</p>

            <div className="mt-4 flex-1">
                {!active ? <>
                        <p className="font-display text-lg font-semibold text-white">{product.greeting}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {product.prompts.map(p => <button key={p.q} type="button" onClick={() => runPrompt(p)} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-left text-xs font-medium text-slate-200 transition-colors hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white">
                                    {p.q}
                                </button>)}
                        </div>
                    </> : <div>
                        <div className="flex justify-end">
                            <p className="max-w-[85%] rounded-2xl rounded-tr-sm bg-sky-500 px-4 py-2.5 text-sm text-white">{active.q}</p>
                        </div>

                        <div className="mt-3 flex items-start gap-2.5">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400/15 text-sky-400">
                                <Sparkles className="h-3.5 w-3.5" strokeWidth={1.75} />
                            </div>
                            {stage === 'thinking' ? <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3">
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                                </div> : <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2.5 text-sm leading-relaxed text-slate-200">
                                    {active.a}
                                </div>}
                        </div>

                        {stage === 'answered' && active.metrics && <div className="mt-4 grid grid-cols-3 gap-2.5">
                                {active.metrics.map(([v, l, d]) => <div key={l} className="rounded-xl border border-white/10 bg-white/5 p-3">
                                        <p className="font-display text-base font-bold text-white">{v}</p>
                                        <p className="mt-0.5 text-[11px] text-slate-400">{l}</p>
                                        <p className="mt-0.5 text-[11px] font-medium text-emerald-400">{d}</p>
                                    </div>)}
                            </div>}

                        {stage === 'answered' && <button type="button" onClick={reset} className="mt-4 text-xs font-medium text-sky-400 hover:text-sky-300">
                                ← Ask something else
                            </button>}
                    </div>}
            </div>

            <form onSubmit={submit} className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4">
                <input value={input} onChange={e => setInput(e.target.value)} placeholder={product.placeholder} className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 outline-none" />
                <button type="submit" aria-label="Send" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white transition-colors hover:bg-sky-400">
                    <Send className="h-4 w-4" />
                </button>
            </form>
        </div>;
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
                        <Cpu className="h-3.5 w-3.5" /> AI engineering studio
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
                        AI-native software,
                        <span className="relative ml-2 inline-block bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                            engineered to ship.
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
                        KabirTech Solutions is an AI engineering studio — equal parts product company and project partner. We
                        build our own AI products, and we design, build and operate production AI systems for clients across
                        the US, UK, Australia and beyond. Senior engineers, fixed sprints, code you own outright.
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
                        <a href="/contact" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-sky-500 px-8 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400 hover:shadow-sky-400/40 active:scale-[0.98]">
                            Start a project <ArrowUpRight className="h-5 w-5" />
                        </a>
                        <a href="/work" className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/20 px-8 text-base font-semibold text-white transition-colors hover:bg-white/10">
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
      }} className="relative shadow-2xl shadow-blue-950/60">
                    <AiCommandDemo />
                </motion.div>
            </div>
        </section>;
}
function Marquee() {
  return <div className="relative overflow-hidden border-y border-white/10 bg-[hsl(var(--ink))] py-5">
            <div className="absolute inset-0 circuit-grid opacity-20" aria-hidden="true" />
            <div className="relative mx-auto flex max-w-[90rem] items-center gap-6 px-5 sm:px-8">
                <span className="hidden shrink-0 font-display text-xs font-semibold uppercase tracking-[0.22em] text-sky-400 sm:block">Our stack</span>
                <span className="hidden h-4 w-px shrink-0 bg-white/15 sm:block" aria-hidden="true" />
                <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                    <div className="kt-marquee-track flex w-max gap-10 whitespace-nowrap">
                        {[...STACK, ...STACK].map((s, i) => <span key={`${s}-${i}`} className="flex items-center gap-10 font-display text-sm font-medium uppercase tracking-[0.22em] text-slate-400 transition-colors hover:text-white">
                                {s}
                                <span className="h-1 w-1 rounded-full bg-sky-400/50" aria-hidden="true" />
                            </span>)}
                    </div>
                </div>
            </div>
        </div>;
}
function ServicesTeaser() {
  return <section className="mx-auto max-w-[80rem] px-5 py-24 sm:px-8 lg:py-32">
            <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What we do</p>
                        <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                            Six ways we help you ship
                        </h2>
                    </div>
                    <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                        See all services <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </Reveal>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES_TEASER.map((s, i) => <Reveal key={s.title} delay={i * 0.05}>
                        <Link to="/services" className="group flex h-full items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.03]">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <s.icon className="h-5 w-5" strokeWidth={1.75} />
                            </div>
                            <h3 className="text-sm font-semibold leading-snug">{s.title}</h3>
                        </Link>
                    </Reveal>)}
            </div>
        </section>;
}
function ProductsTeaser() {
  return <section className="relative overflow-hidden bg-[hsl(var(--ink))] py-24 lg:py-32">
            <div className="absolute inset-0 circuit-grid opacity-30" aria-hidden="true" />
            <div className="relative mx-auto max-w-[80rem] px-5 sm:px-8">
                <Reveal>
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Our products</p>
                            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                                AI products we build, run, and stand behind
                            </h2>
                        </div>
                        <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:underline">
                            Explore our products <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                </Reveal>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {PRODUCTS_TEASER.map((p, i) => <Reveal key={p.name} delay={i * 0.06}>
                            <Link to="/products" className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-sky-400/30 hover:bg-white/[0.05]">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                                    <Sparkles className="h-4.5 w-4.5" strokeWidth={1.75} />
                                </div>
                                <h3 className="mt-5 font-display text-xl font-semibold text-white">{p.name}</h3>
                                <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.14em] text-sky-400">{p.tag}</p>
                                <p className="mt-4 text-sm leading-relaxed text-slate-300">{p.tagline}</p>
                            </Link>
                        </Reveal>)}
                </div>
            </div>
        </section>;
}
function WorkTeaser() {
  return <section className="mx-auto max-w-[80rem] px-5 py-24 sm:px-8 lg:py-32">
            <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Selected work</p>
                        <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                            Proof, not promises
                        </h2>
                    </div>
                    <Link to="/work" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                        See all our work <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </Reveal>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
                {WORK_TEASER.map((w, i) => <Reveal key={w.client} delay={i * 0.06}>
                        <Link to="/work" className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/30">
                            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-primary">
                                <span>{w.tag}</span><span className="h-px w-6 bg-primary/40" /><span className="text-muted-foreground">{w.client}</span>
                            </div>
                            <h3 className="mt-4 flex-1 font-display text-lg font-semibold leading-snug">{w.title}</h3>
                            <div className="mt-6 border-t border-border pt-5">
                                <p className="font-display text-3xl font-bold text-primary">{w.metric[0]}</p>
                                <p className="mt-1 text-sm text-muted-foreground">{w.metric[1]}</p>
                            </div>
                        </Link>
                    </Reveal>)}
            </div>
        </section>;
}
function FinalCta() {
  return <section className="relative overflow-hidden bg-[hsl(var(--ink))] py-24 lg:py-32">
            <div className="absolute inset-0 circuit-grid opacity-40" aria-hidden="true" />
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[140px]" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
                <Reveal>
                    <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                        Ready to build something real?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300">
                        Send a few lines about the problem. A principal engineer replies within one business day, and the first
                        scoping call is free.
                    </p>
                    <Link to="/contact" className="mt-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-sky-500 px-8 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400 hover:shadow-sky-400/40 active:scale-[0.98]">
                        Start a project <ArrowUpRight className="h-5 w-5" />
                    </Link>
                </Reveal>
            </div>
        </section>;
}
const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://kabirtechsolutions.com/#organization',
  name: 'KabirTech Solutions',
  url: 'https://kabirtechsolutions.com/',
  logo: LOGO,
  image: BANNER,
  description: 'KabirTech Solutions is an AI engineering studio and software product company, building AI systems, custom software, mobile apps and cloud platforms for companies in finance, healthcare and logistics — serving clients across the US, UK, Australia and worldwide.',
  email: 'info@kabirtechsolutions.com',
  telephone: '+9 (232) 148-29814',
  foundingDate: '2014',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1200 Congress Ave, Suite 460',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US'
  },
  areaServed: [{
    '@type': 'Country',
    name: 'United States'
  }, {
    '@type': 'Country',
    name: 'United Kingdom'
  }, {
    '@type': 'Country',
    name: 'Australia'
  }]
};
const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://kabirtechsolutions.com/#website',
  name: 'KabirTech Solutions',
  url: 'https://kabirtechsolutions.com/',
  publisher: { '@id': 'https://kabirtechsolutions.com/#organization' }
};
export default function HomePage() {
  return <div className="bg-background">
            {/* This block is a static source-text target for tools/generate-llms.js at
                build time, not a functioning head manager — <Seo> below does the real work. */}
            <Helmet>
                <title>KabirTech Solutions | AI Engineering Studio &amp; Custom Software</title>
                <meta name="description" content="KabirTech Solutions is an AI engineering studio and software product company, building AI systems, custom software, mobile apps and cloud platforms for companies in finance, healthcare and logistics — serving clients across the US, UK, Australia and worldwide." />
            </Helmet>
            <Seo
                title="KabirTech Solutions | AI Engineering Studio & Custom Software"
                description="AI-native software, engineered to ship — applied AI products and custom project delivery from senior engineers in two-week sprints, for clients across the US, UK, Australia and beyond."
                keywords="AI engineering studio, AI development company, software product company, custom software development company, machine learning consulting, mobile app development, cloud DevOps services, dedicated engineering teams, software development USA, software development UK, software development Australia, Postora AI, Callora AI, Mediora AI"
                image={BANNER}
                siteName="KabirTech Solutions"
                jsonLd={[ORGANIZATION_SCHEMA, WEBSITE_SCHEMA]}
            />

            <Header />
            <main>
                <Hero />
                <Marquee />
                <ServicesTeaser />
                <ProductsTeaser />
                <WorkTeaser />
                <FinalCta />
            </main>
            <Footer />
        </div>;
}
