import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Activity, ArrowUpRight, BarChart3, BookUser, Brain, BrainCircuit, Building2, Captions, Clock, Cloud, Code2, Command, Cpu, Database, Factory, FileSearch, GitBranch, GraduationCap, Hash, Headset, Image as ImageIcon, Inbox, Languages, Layers, LineChart, ListChecks, Lock, Mail, Megaphone, MapPin, Mic, BookOpen, Phone, PhoneCall, PenLine, PieChart, Plug, Quote, Repeat, Rocket, CalendarDays, Search, Send, ShieldCheck, ShoppingCart, Smartphone, Sparkles, Star, Target, TrendingUp, UserCheck, UserPlus, Users, Video, Wallet, Workflow, Check, Loader2, Youtube, Zap } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
import Header, { LOGO } from '@/components/Header';
import Footer from '@/components/Footer';
import pb from '@/lib/pocketbaseClient';
const BANNER = 'https://horizons-cdn.hostinger.com/b01990a9-0b3d-4660-9a5b-7fcbea39cb56/dbffa1f63f69611038171b3068a16cbe.jpg';
const TEAM_PHOTO = 'https://images.hostinger.com/80be64c8-babc-483d-b736-0c54e039c96b.png';
const SERVICES = [{
  icon: BrainCircuit,
  featured: true,
  title: 'AI & Machine Learning',
  copy: 'From retrieval-augmented assistants to forecasting models and document intelligence — shipped with evaluation harnesses and human-in-the-loop approval, not demos.',
  points: ['LLM assistants & RAG', 'Predictive & vision models', 'MLOps and monitoring']
}, {
  icon: Code2,
  title: 'Custom Software Engineering',
  copy: 'Web platforms, internal tools and APIs built to your business logic, with AI features designed in from day one — not bolted on after launch.',
  points: ['React / Node / Python', 'AI-assisted development', 'Legacy system modernisation']
}, {
  icon: Smartphone,
  title: 'Mobile Applications',
  copy: 'Native-feeling iOS and Android products with on-device intelligence, an offline-first data layer, and release pipelines your team can actually operate.',
  points: ['React Native & Flutter', 'On-device AI & offline sync', 'App store delivery']
}, {
  icon: Cloud,
  title: 'Cloud & DevOps',
  copy: 'Infrastructure as code, CI/CD and AI-driven anomaly detection so releases stop being events. We hand over runbooks, not mysteries.',
  points: ['AWS / Azure / GCP', 'Kubernetes & Terraform', 'Predictive observability']
}, {
  icon: Layers,
  title: 'Product Design',
  copy: 'Discovery workshops and AI-accelerated prototyping that turn a rough idea into a costed scope your stakeholders can sign off on in days, not weeks.',
  points: ['Discovery sprints', 'Rapid AI prototyping', 'Usability testing']
}, {
  icon: ShieldCheck,
  title: 'Dedicated Teams',
  copy: 'Senior engineers fluent in modern AI tooling, embedded in your process and timezone overlap, reporting into your leads — scaled up or down quarterly.',
  points: ['Vetted senior talent', 'Your tooling & rituals', 'Flexible contracts']
}];
const PRODUCTS = [{
  name: 'Postora',
  url: 'https://postora.kabirtechsolutions.com/',
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
  url: null,
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
    copy: 'Tracks every ticket across WhatsApp, email, call and chat, triages by urgency and customer value, and links resolutions back to the CRM record — then flags anything sitting open too long before it becomes a churn problem.'
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
}, {
  name: 'Callora',
  url: 'https://callora.kabirtech.tech/',
  tag: 'Campaign calling & lead generation',
  tagline: 'AI and human agents, calling from the same campaign.',
  copy: "Callora runs your outbound calling and lead generation from one shared queue — an AI voice agent dials leads directly, your reps pick up wherever it left off, and new leads flow in from both AI sourcing and your team's own work. Currently in UAT.",
  features: [{
    icon: PhoneCall,
    title: 'AI Outbound Calling',
    copy: 'An AI voice agent calls connected contacts and leads directly from your campaign list — no manual dialing.'
  }, {
    icon: Headset,
    title: 'Human Agent Calling',
    copy: 'Your reps call from the exact same queue, picking up wherever the AI left off.'
  }, {
    icon: UserPlus,
    title: 'AI Lead Generation',
    copy: 'AI sources and qualifies new leads against your ideal customer profile, ready to call.'
  }, {
    icon: UserCheck,
    title: 'Human-Assisted Lead Generation',
    copy: 'Reps add, import or qualify leads by hand whenever it needs a human read.'
  }, {
    icon: ListChecks,
    title: 'Campaign Management',
    copy: "Organize contacts into calling campaigns, track who's been reached, and see what's working."
  }, {
    icon: BookUser,
    title: 'Shared Contact & Lead Directory',
    copy: 'One directory AI and human agents both call from — no duplicate outreach, no dropped leads.'
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
const DEMO_PRODUCTS = [{
  key: 'aibos',
  name: 'AIBOS',
  subtitle: 'AI Command Center',
  greeting: 'Good morning. What would you like me to do?',
  placeholder: 'Ask AIBOS anything about your business...',
  fallback: "Got it — I'd pull that from your connected systems and bring back an answer here. This is a demo; talk to us to see AIBOS running on your real data.",
  prompts: [{
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
    q: 'Summarize customer support',
    a: "1,243 tickets this month, up 8%. 3 have been open past 48 hours, mostly billing questions — including one flagged VIP customer who hasn't heard back. Want me to draft replies for review?"
  }]
}, {
  key: 'postora',
  name: 'Postora',
  subtitle: 'Social AI Assistant',
  greeting: 'Good morning. What should we create today?',
  placeholder: 'Ask Postora to draft, plan or analyze...',
  fallback: "Got it — I'd generate that from your brand voice and connected channels. This is a demo; talk to us to see Postora running on your real accounts.",
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
  name: 'Callora',
  subtitle: 'Calling & Leads',
  greeting: 'Good morning. Who should we reach out to?',
  placeholder: 'Ask Callora about leads or calls...',
  fallback: "Got it — I'd pull that from your campaign and contact data. This is a demo; talk to us to see Callora running on your real leads.",
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
                        KabirTech Solutions is an AI engineering studio — we design, build and operate production AI systems
                        and the software around them, for companies that need results, not demos. Senior engineers, fixed
                        sprints, code you own outright.
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
function Services() {
  return <section id="services" className="mx-auto max-w-[80rem] px-5 py-24 sm:px-8 lg:py-32">
            <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What we do</p>
                <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                        AI-native engineering across the whole product lifecycle
                    </h2>
                    <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
                        One accountable team — from model evaluation to the on-call rotation — so nothing falls between vendors.
                    </p>
                </div>
            </Reveal>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map((s, i) => <Reveal key={s.title} delay={i * 0.05} className={s.featured ? 'sm:col-span-2' : ''}>
                        <div className={`group relative h-full overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${s.featured ? 'border-primary/30 bg-gradient-to-br from-primary/[0.06] via-card to-violet-500/[0.06] hover:border-primary/50' : 'border-border bg-card hover:border-primary/40'}`}>
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-colors duration-300 group-hover:bg-primary/10" aria-hidden="true" />
                            {s.featured && <span className="absolute right-7 top-7 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">Core capability</span>}
                            <div className={`relative flex items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground ${s.featured ? 'h-14 w-14' : 'h-12 w-12'}`}>
                                <s.icon className={s.featured ? 'h-7 w-7' : 'h-6 w-6'} strokeWidth={1.5} />
                            </div>
                            <h3 className={`relative mt-6 font-display font-semibold tracking-tight ${s.featured ? 'text-2xl' : 'text-xl'}`}>{s.title}</h3>
                            <p className="relative mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
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
                            {p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full bg-sky-500 px-6 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400 hover:shadow-sky-400/40 active:scale-[0.98]">
                                    Visit {p.name} <ArrowUpRight className="h-4 w-4" />
                                </a> : <a href="#contact" className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                                    Talk to us about {p.name} <ArrowUpRight className="h-4 w-4" />
                                </a>}
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
                        An AI engineering studio built around senior people
                    </h2>
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                        KabirTech Solutions started in 2014 with three engineers and one belief: clients deserve the people who
                        scoped the project to be the ones who write it. Today we are thirty-eight engineers, applied AI
                        specialists and data scientists working with scale-ups and established operators across finance,
                        healthcare and logistics.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        We publish our estimates, our architecture decisions, our model evaluation results and our test
                        coverage. Every engagement ends with your team able to run the system without us — that is the
                        standard we hold.
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
                            <p className="text-center text-xs text-slate-500">
                                By submitting, you agree to our <a href="/terms-and-conditions" className="underline hover:text-slate-300">Terms &amp; Conditions</a> and <a href="/privacy-policy" className="underline hover:text-slate-300">Privacy Policy</a>.
                            </p>
                        </form>}
                </div>
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
  description: 'KabirTech Solutions is an AI engineering studio building AI systems, custom software, mobile apps and cloud platforms for companies in finance, healthcare and logistics.',
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
  ...(p.url ? { url: p.url } : {}),
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
                <title>KabirTech Solutions | AI Engineering Studio &amp; Custom Software</title>
                <meta name="description" content="KabirTech Solutions is an AI engineering studio building AI systems, custom software, mobile apps and cloud platforms for companies in finance, healthcare and logistics." />
            </Helmet>
            <Seo
                title="KabirTech Solutions | AI Engineering Studio & Custom Software"
                description="AI-native software, engineered to ship — applied AI and custom engineering delivered by senior engineers in two-week sprints."
                keywords="AI engineering studio, AI development company, machine learning consulting, custom software development, mobile app development, cloud DevOps services, dedicated engineering teams, Postora, AIBOS"
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