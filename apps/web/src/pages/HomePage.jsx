import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Activity, ArrowUpRight, BarChart3, Brain, BrainCircuit, Building2, Captions, Clock, Cloud, Code2, Command, Cpu, Database, Factory, FileSearch, GitBranch, GraduationCap, Hash, Headset, Image as ImageIcon, Inbox, Languages, Layers, LineChart, Lock, Mail, Megaphone, MapPin, Menu, Mic, BookOpen, Phone, PenLine, PieChart, Plug, Quote, Repeat, Rocket, CalendarDays, Search, Send, ShieldCheck, ShoppingCart, Smartphone, Sparkles, Star, Target, TrendingUp, Users, Video, Wallet, Workflow, X, Check, Loader2, Youtube, Zap } from 'lucide-react';
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
  label: 'Products',
  href: '#products'
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
const PRODUCTS = [{
  name: 'Postora',
  tag: 'Social media AI platform',
  tagline: 'Open any tool — content, images, strategy, analytics, competitors, and more.',
  copy: 'We built Postora to run our own social presence, then opened it up. Every AI feature below is in production, used daily, not a roadmap slide.',
  features: [{
    icon: PenLine,
    title: 'AI Content Generator',
    copy: 'Draft platform-ready posts in your brand voice from a short brief.'
  }, {
    icon: Captions,
    title: 'AI Caption Generator',
    copy: 'Upload an image — Vision describes it, then we write captions per platform.'
  }, {
    icon: Hash,
    title: 'AI Hashtag Generator',
    copy: 'Generate relevant and low-competition hashtags for your post and industry.'
  }, {
    icon: Repeat,
    title: 'AI Content Repurposing',
    copy: 'Turn one blog or transcript into LinkedIn, Instagram, YouTube, and more.'
  }, {
    icon: BarChart3,
    title: 'AI Content Analyzer',
    copy: 'Score hook, readability, engagement, CTA, and hashtags before you publish.'
  }, {
    icon: ImageIcon,
    title: 'AI Image Generator',
    copy: 'Create on-brand visuals sized for LinkedIn, Instagram, Facebook, and YouTube.'
  }, {
    icon: CalendarDays,
    title: 'AI Content Calendar',
    copy: 'Plan a week or month of slots with topics, captions, and image prompts.'
  }, {
    icon: Target,
    title: 'AI Social Strategy',
    copy: 'Build a channel mix, pillars, and ready-to-post content from your goals.'
  }, {
    icon: Mic,
    title: 'AI Brand Voice',
    copy: 'Set tone, personality, and audience once — every AI draft follows it.'
  }, {
    icon: Clock,
    title: 'AI Best Time to Post',
    copy: 'See when your audience is most active from engagement history.'
  }, {
    icon: LineChart,
    title: 'AI Analytics Assistant',
    copy: 'Ask why engagement moved — frequency, mix, timing, and content type.'
  }, {
    icon: Search,
    title: 'AI Competitor Analysis',
    copy: 'Track competitors and find topics, formats, gaps, and trending themes.'
  }, {
    icon: TrendingUp,
    title: 'AI Trend Detection',
    copy: 'Spot rising topics with growth signals, then generate a full campaign in one click.'
  }, {
    icon: Video,
    title: 'AI Video Generation',
    copy: 'Text → script → voice → scenes → subtitles → Reels, Shorts, TikTok, and Facebook Reels.'
  }, {
    icon: Youtube,
    title: 'AI YouTube',
    copy: 'Topic → research → script → title → description → tags → thumbnail, plus high-CTR title packs.'
  }, {
    icon: Languages,
    title: 'AI Content Translation',
    copy: 'Localize one post into English, Urdu, Arabic, French, Spanish, German, and Chinese — naturally, not literally.'
  }, {
    icon: Megaphone,
    title: 'AI Campaign Generator',
    copy: 'From a brief: multi-platform content + schedule — review and Approve Campaign to publish.'
  }, {
    icon: Inbox,
    title: 'AI Social Inbox',
    copy: 'One inbox for messages, comments, and mentions — AI detects sales leads, drafts replies, and queues CRM actions.'
  }]
}, {
  name: 'AIBOS',
  tag: 'AI business operating system',
  tagline: 'Your AI-powered operating system for running a business.',
  copy: "Instead of switching between your CRM, accounting software and marketing tools, you tell AIBOS what you need — \"prepare this month's business report\" — and it plans the work, pulls the data from every department, and executes it, with approval gates on anything that matters.",
  features: [{
    icon: Command,
    title: 'AI Command Center',
    copy: 'One conversational interface for the whole business — ask, and it plans and executes across every department.'
  }, {
    icon: Workflow,
    title: 'AI Orchestrator',
    copy: 'Every request runs through intent detection, planning, agent selection, and permission checks before anything executes.'
  }, {
    icon: Users,
    title: 'Sales Agent',
    copy: 'Finds high-value leads, drafts follow-ups, and moves opportunities through the pipeline on command.'
  }, {
    icon: Wallet,
    title: 'Finance Agent',
    copy: 'Surfaces overdue invoices, explains expense swings, and forecasts revenue from your connected accounting data.'
  }, {
    icon: Megaphone,
    title: 'Marketing Agent',
    copy: 'Builds a full campaign — audience, messaging, content calendar, images and schedule — from one brief.'
  }, {
    icon: Headset,
    title: 'Support Agent',
    copy: 'Reads a customer request, finds the account and order data, and resolves or routes it automatically.'
  }, {
    icon: BookOpen,
    title: 'AI Knowledge Base',
    copy: 'Upload your PDFs, policies and product docs — every agent answers from your own business knowledge, tenant-isolated.'
  }, {
    icon: FileSearch,
    title: 'Document Intelligence',
    copy: 'OCR and extraction turn invoices, contracts and purchase orders into structured, workflow-ready data.'
  }, {
    icon: GitBranch,
    title: 'AI Workflow Builder',
    copy: 'Describe a process in plain English and the AI generates the trigger-condition-action workflow for you.'
  }, {
    icon: PieChart,
    title: 'Business Intelligence',
    copy: 'A live dashboard of revenue, expenses and pipeline, with AI-written insights on what changed and why.'
  }, {
    icon: Brain,
    title: 'AI Business Analyst',
    copy: 'Ask for a full performance review — the AI investigates every department and returns an executive summary with risks and priorities.'
  }, {
    icon: ShieldCheck,
    title: 'Approval System',
    copy: 'Every AI action is risk-classified — low-risk runs automatically, high-risk always waits for your sign-off.'
  }, {
    icon: Database,
    title: 'AI Memory',
    copy: "Remembers your preferences and your organization's business rules across every conversation."
  }, {
    icon: Lock,
    title: 'Multi-Tenant Security',
    copy: 'Role-based permissions, tenant isolation and full audit logs on every AI action — built for enterprise from day one.'
  }, {
    icon: Plug,
    title: 'Integrations Platform',
    copy: 'Connect Gmail, HubSpot, QuickBooks, Stripe and your social channels — one framework, native to every agent.'
  }, {
    icon: Activity,
    title: 'AI Observability',
    copy: 'Track every AI call, tool use, token and cost — down to which agent did what and when.'
  }]
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
const COMPLETED = [{
  icon: ShoppingCart,
  tag: 'Retail',
  title: 'Inventory sync across 40 stores',
  result: 'Real-time stock, zero overselling'
}, {
  icon: GraduationCap,
  tag: 'EdTech',
  title: 'Adaptive assessment engine for a K-12 platform',
  result: '210k students onboarded'
}, {
  icon: Building2,
  tag: 'Real Estate',
  title: 'Lead-to-lease pipeline automation',
  result: '3x agent throughput'
}, {
  icon: Zap,
  tag: 'Energy',
  title: 'Grid anomaly detection model',
  result: '99.4% detection accuracy'
}, {
  icon: Factory,
  tag: 'Manufacturing',
  title: 'Predictive maintenance for plant floor sensors',
  result: '18% less unplanned downtime'
}, {
  icon: Rocket,
  tag: 'SaaS',
  title: 'Multi-tenant billing rebuild on Stripe',
  result: 'Migrated 6k accounts, zero downtime'
}];
const TESTIMONIALS = [{
  quote: "KabirTech didn't just build what we asked for — they questioned the scope in ways that saved us six figures in year one.",
  name: 'Priya Desai',
  role: 'VP Engineering',
  company: 'Meridian Capital Partners'
}, {
  quote: 'Every two weeks we had something to click through, not a status update. That alone changed how we planned the quarter.',
  name: 'Tom Reyes',
  role: 'COO',
  company: 'Northbay Freight'
}, {
  quote: 'They handed over runbooks and trained our team like they expected to leave — which is exactly what you want from a vendor.',
  name: 'Dr. Elena Cho',
  role: 'CIO',
  company: 'Aurora Clinics Group'
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
const AI_PROMPTS = [{
  q: "Prepare this month's business report",
  a: 'Revenue is $245,300, up 17% from last month. Profit is up 25%. Three enterprise customers represent 38% of revenue — worth diversifying.',
  metrics: [['$245.3k', 'Revenue', '+17%'], ['$91.2k', 'Expenses', '-4%'], ['$154.1k', 'Profit', '+25%']]
}, {
  q: 'Find unpaid invoices',
  a: '3 invoices are overdue, totaling $31,500. Northgate Supplies is 42 days past due — want me to draft a reminder?'
}, {
  q: 'Show sales performance',
  a: 'Revenue is $245,300, up 17% from last month. Product A generated $83,000 and is your top performer this quarter.'
}, {
  q: 'Create a social campaign for Product A',
  a: 'Drafted a 5-post LinkedIn + Instagram campaign — audience, captions and images ready, scheduled across the next two weeks.'
}];
function AiCommandDemo() {
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
  const submit = e => {
    e.preventDefault();
    if (!input.trim() || stage === 'thinking') return;
    runPrompt({
      q: input,
      a: "Got it — I'd pull that from your connected systems and bring back an answer here. This is a demo; talk to us to see AIBOS running on your real data."
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
                    <span className="ml-2 text-xs font-medium text-slate-400">AIBOS · AI Command Center</span>
                </div>
                <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-sky-300">Live demo</span>
            </div>

            <div className="mt-5 flex-1">
                {!active ? <>
                        <p className="font-display text-lg font-semibold text-white">Good morning. What would you like me to do?</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {AI_PROMPTS.map(p => <button key={p.q} type="button" onClick={() => runPrompt(p)} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-left text-xs font-medium text-slate-200 transition-colors hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white">
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
                <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask AIBOS anything about your business..." className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 outline-none" />
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
                        <a href="#contact" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-sky-500 px-8 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400 hover:shadow-sky-400/40 active:scale-[0.98]">
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
      }} className="relative shadow-2xl shadow-blue-950/60">
                    <AiCommandDemo />
                </motion.div>
            </div>
        </section>;
}
function Marquee() {
  return <div className="relative overflow-hidden border-y border-border bg-secondary py-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="kt-marquee-track flex w-max gap-12 whitespace-nowrap">
                {[...STACK, ...STACK].map((s, i) => <span key={`${s}-${i}`} className="flex items-center gap-12 font-display text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                        {s}
                        <span className="h-1 w-1 rounded-full bg-primary/40" aria-hidden="true" />
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

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map((s, i) => <Reveal key={s.title} delay={i * 0.05}>
                        <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-colors duration-300 group-hover:bg-primary/10" aria-hidden="true" />
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                <s.icon className="h-6 w-6" strokeWidth={1.5} />
                            </div>
                            <h3 className="relative mt-6 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                            <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                            <ul className="relative mt-6 space-y-2 border-t border-border pt-5">
                                {s.points.map(p => <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <Check className="h-4 w-4 shrink-0 text-primary" /> {p}
                                    </li>)}
                            </ul>
                        </div>
                    </Reveal>)}
            </div>
        </section>;
}
function Products() {
  const [active, setActive] = useState(0);
  const p = PRODUCTS[active];
  return <section id="products" className="relative overflow-hidden bg-[hsl(var(--ink))] py-24 lg:py-32">
            <div className="absolute inset-0 circuit-grid opacity-40" aria-hidden="true" />
            <div className="absolute -right-32 top-1/4 h-[440px] w-[440px] rounded-full bg-sky-500/15 blur-[140px]" aria-hidden="true" />

            <div className="relative mx-auto max-w-[80rem] px-5 sm:px-8">
                <Reveal>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Our products</p>
                    <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                        Software we build and run ourselves
                    </h2>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
                        We don't only ship for clients — we operate our own products in production, so every recommendation
                        we make is battle-tested on our own infrastructure first.
                    </p>
                </Reveal>

                <div className="mt-10 flex flex-wrap gap-3" role="tablist" aria-label="Our products">
                    {PRODUCTS.map((prod, i) => <button key={prod.name} type="button" role="tab" aria-selected={i === active} onClick={() => setActive(i)} className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${i === active ? 'border-sky-400/40 bg-sky-400/15 text-white' : 'border-white/15 bg-white/[0.03] text-slate-400 hover:border-white/30 hover:text-white'}`}>
                            {prod.name}
                        </button>)}
                </div>

                <div key={p.name} className="mt-8">
                    <Reveal>
                        <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-400">
                                    <Sparkles className="h-7 w-7" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-display text-2xl font-bold text-white">{p.name}</h3>
                                        <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-sky-300">{p.tag}</span>
                                    </div>
                                    <p className="mt-1 text-sm text-slate-400">{p.tagline}</p>
                                </div>
                            </div>
                            <a href="#contact" className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                                Talk to us about {p.name} <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                    </Reveal>

                    <p className="relative mt-8 max-w-2xl text-base leading-relaxed text-slate-300">{p.copy}</p>

                    <div className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {p.features.map((f, i) => <Reveal key={f.title} delay={i * 0.03}>
                                <div className="group h-full rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-sky-400/30 hover:bg-white/[0.05]">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                                        <f.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                                    </div>
                                    <h4 className="mt-4 text-sm font-semibold text-white">{f.title}</h4>
                                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{f.copy}</p>
                                </div>
                            </Reveal>)}
                    </div>
                </div>
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
                            <article className={`group grid items-center gap-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-sky-400/30 hover:bg-white/[0.05] lg:grid-cols-2 lg:p-10 ${i % 2 ? 'lg:[&>figure]:order-2' : ''}`}>
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

                <Reveal>
                    <p className="mt-20 text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Also shipped recently</p>
                </Reveal>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {COMPLETED.map((c, i) => <Reveal key={c.title} delay={i * 0.04}>
                            <div className="group flex h-full gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-sky-400/30 hover:bg-white/[0.05]">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                                    <c.icon className="h-5 w-5" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">{c.tag}</p>
                                    <h4 className="mt-1.5 text-sm font-semibold leading-snug text-white">{c.title}</h4>
                                    <p className="mt-1.5 text-xs text-sky-400">{c.result}</p>
                                </div>
                            </div>
                        </Reveal>)}
                </div>
            </div>
        </section>;
}
function Testimonials() {
  return <section className="mx-auto max-w-[80rem] px-5 py-24 sm:px-8 lg:py-32">
            <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What clients say</p>
                <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                    Feedback from the people who signed off on the invoice
                </h2>
            </Reveal>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
                {TESTIMONIALS.map((t, i) => <Reveal key={t.name} delay={i * 0.06}>
                        <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                            <Quote className="h-7 w-7 text-primary/40" strokeWidth={1.5} />
                            <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
                                "{t.quote}"
                            </blockquote>
                            <div className="mt-6 flex items-center gap-1 text-primary" aria-hidden="true">
                                {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-4 w-4 fill-current" />)}
                            </div>
                            <figcaption className="mt-3 border-t border-border pt-4">
                                <p className="font-display text-sm font-semibold">{t.name}</p>
                                <p className="text-sm text-muted-foreground">{t.role}, {t.company}</p>
                            </figcaption>
                        </figure>
                    </Reveal>)}
            </div>
        </section>;
}
function Company() {
  return <section id="company" className="relative overflow-hidden py-24 lg:py-32">
            <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-primary/[0.06] blur-[130px]" aria-hidden="true" />
            <div className="absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/[0.08] blur-[130px]" aria-hidden="true" />

            <div className="relative mx-auto max-w-[80rem] px-5 sm:px-8">
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
                            <div className="overflow-hidden rounded-xl">
                                <img src={t.img} alt={`${t.name}, ${t.role} at KabirTech Solutions`} className="aspect-[3/4] w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" loading="lazy" />
                            </div>
                            <h3 className="mt-4 font-display text-lg font-semibold">{t.name}</h3>
                            <p className="text-sm text-muted-foreground">{t.role}</p>
                        </div>
                    </Reveal>)}
            </div>
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

                            <button type="submit" disabled={status === 'loading'} className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-8 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400 hover:shadow-sky-400/40 active:scale-[0.98] disabled:opacity-60">
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
const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://kabirtechsolutions.com/#organization',
  name: 'KabirTech Solutions',
  url: 'https://kabirtechsolutions.com/',
  logo: LOGO,
  image: BANNER,
  description: 'KabirTech Solutions is a software house building custom software, AI systems, mobile apps and cloud platforms for companies in finance, healthcare and logistics.',
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
  areaServed: 'Worldwide',
  makesOffer: SERVICES.map(s => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: s.title,
      description: s.copy
    }
  }))
};
const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://kabirtechsolutions.com/#website',
  name: 'KabirTech Solutions',
  url: 'https://kabirtechsolutions.com/',
  publisher: { '@id': 'https://kabirtechsolutions.com/#organization' }
};
const PRODUCT_SCHEMAS = PRODUCTS.map(p => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: p.name,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: p.copy,
  publisher: { '@id': 'https://kabirtechsolutions.com/#organization' },
  featureList: p.features.map(f => f.title)
}));
export default function HomePage() {
  return <div className="bg-background">
            {/* This block is a static source-text target for tools/generate-llms.js at
                build time, not a functioning head manager — <Seo> below does the real work. */}
            <Helmet>
                <title>KabirTech Solutions | Custom Software &amp; AI Development Company</title>
                <meta name="description" content="KabirTech Solutions is a software house building custom software, AI systems, mobile apps and cloud platforms for companies in finance, healthcare and logistics." />
            </Helmet>
            <Seo
                title="KabirTech Solutions | Custom Software & AI Development Company"
                description="Custom software engineering and applied AI, delivered by senior engineers in two-week sprints."
                keywords="custom software development, AI development company, machine learning consulting, mobile app development, cloud DevOps services, dedicated engineering teams, Postora, AIBOS"
                image={BANNER}
                siteName="KabirTech Solutions"
                jsonLd={[ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, ...PRODUCT_SCHEMAS]}
            />

            <Header />
            <main>
                <Hero />
                <Marquee />
                <Services />
                <Products />
                <Work />
                <Testimonials />
                <Company />
                <Contact />
            </main>
            <Footer />
        </div>;
}