import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Activity, ArrowUpRight, BarChart3, BookUser, Captions, CalendarDays, Clock, FileSearch, Hash, Headset, Image as ImageIcon, Inbox, Languages, LineChart, ListChecks, Lock, Megaphone, Mic, PenLine, PhoneCall, Repeat, Search, ShieldCheck, Sparkles, Stethoscope, Target, TrendingUp, UserCheck, UserPlus, Users, Video, Wallet, Youtube } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const PRODUCTS = [{
  name: 'Postora AI',
  url: 'https://postora.kabirtechsolutions.com/',
  tag: 'Social media AI platform',
  tagline: 'Open any tool — content, images, strategy, analytics, competitors, and more.',
  copy: 'We built Postora AI to run our own social presence, then opened it up. Every AI feature below is in production, used daily, not a roadmap slide.',
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
  name: 'Callora AI',
  url: 'https://callora.kabirtech.tech/',
  tag: 'Campaign calling & lead generation',
  tagline: 'AI and human agents, calling from the same campaign.',
  copy: "Callora AI runs your outbound calling and lead generation from one shared queue — an AI voice agent dials leads directly, your reps pick up wherever it left off, and new leads flow in from both AI sourcing and your team's own work. Currently in UAT.",
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
}, {
  name: 'Mediora AI',
  url: 'https://mediora.kabirtech.tech/',
  tag: 'Intelligent digital healthcare',
  tagline: 'Connecting patients and clinicians through appointments, virtual care, and AI assistance.',
  copy: "Mediora AI isn't just an app to book online doctors — it grows from booking into telemedicine, AI documentation, patient and doctor assistants, and healthcare intelligence, without ever pretending the AI is a doctor.",
  features: [{
    icon: CalendarDays,
    title: 'Doctor Booking & Search',
    copy: 'Patients filter by specialty, location, fee, language, rating and availability, then book straight into a doctor\'s live calendar.'
  }, {
    icon: Video,
    title: 'Virtual Care',
    copy: 'Appointments run as video consultations, confirmed the moment payment clears.'
  }, {
    icon: Stethoscope,
    title: 'AI Health Assistant',
    copy: "Guides patients through symptom intake and appointment questions and matches them to the right doctor from their history — it doesn't diagnose."
  }, {
    icon: FileSearch,
    title: 'AI Documentation',
    copy: 'Transcribes and summarizes consultations for physicians on the Premium plan, turning a visit into structured notes automatically.'
  }, {
    icon: BookUser,
    title: 'Doctor Assistant',
    copy: 'Physicians ask about patients they already treat — access is limited to their own authorized charts, and every query is audit-logged.'
  }, {
    icon: ShieldCheck,
    title: 'Credential Verification',
    copy: 'Doctors upload their license or PMC document for admin review before they can see patients.'
  }, {
    icon: Wallet,
    title: 'Multi-Gateway Payments',
    copy: 'JazzCash, EasyPaisa, bank transfer and cards, configured per country, with an automatic doctor/platform revenue split.'
  }, {
    icon: Users,
    title: 'Family Profiles',
    copy: 'Patients manage appointments and records for family members from one account.'
  }, {
    icon: Activity,
    title: 'AI Audit Log',
    copy: 'Every AI-assisted action, patient or physician, is logged for compliance and review.'
  }, {
    icon: LineChart,
    title: 'Platform Analytics',
    copy: 'Revenue, no-show rate, conversion and bookings by specialty, tracked for the whole platform in real time.'
  }, {
    icon: Lock,
    title: 'Patient Privacy Controls',
    copy: 'Patients can export their full record or delete their account, with visit history kept only where clinically required.'
  }, {
    icon: Headset,
    title: 'Support & Disputes',
    copy: 'Built-in ticketing and dispute handling for patients, doctors and admins.'
  }]
}];

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

export default function ProductsPage() {
  const [active, setActive] = useState(0);
  const p = PRODUCTS[active];
  return <div className="bg-background">
            {/* Static source-text target for tools/generate-llms.js — see HomePage.jsx for why. */}
            <Helmet>
                <title>Products | KabirTech Solutions</title>
                <meta name="description" content="Postora AI, Callora AI and Mediora AI — the AI products KabirTech Solutions builds and runs itself, in production." />
            </Helmet>
            <Seo
                title="Products | KabirTech Solutions"
                description="Postora AI, Callora AI and Mediora AI — the AI products KabirTech Solutions builds and runs itself, in production, not roadmap slides."
                url="https://kabirtechsolutions.com/products"
                siteName="KabirTech Solutions"
                jsonLd={PRODUCT_SCHEMAS}
            />

            <Header />
            <main className="pt-[72px]">
                <section className="relative overflow-hidden bg-[hsl(var(--ink))] py-24 lg:py-32">
                    <div className="absolute inset-0 circuit-grid opacity-40" aria-hidden="true" />
                    <div className="absolute -right-32 top-1/4 h-[440px] w-[440px] rounded-full bg-sky-500/15 blur-[140px]" aria-hidden="true" />

                    <div className="relative mx-auto max-w-[80rem] px-5 sm:px-8">
                        <Reveal>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Our products</p>
                            <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                                Software we build and run ourselves
                            </h1>
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
                                                <h2 className="font-display text-2xl font-bold text-white">{p.name}</h2>
                                                <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-sky-300">{p.tag}</span>
                                            </div>
                                            <p className="mt-1 text-sm text-slate-400">{p.tagline}</p>
                                        </div>
                                    </div>
                                    {p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full bg-sky-500 px-6 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400 hover:shadow-sky-400/40 active:scale-[0.98]">
                                            Visit {p.name} <ArrowUpRight className="h-4 w-4" />
                                        </a> : <a href="/contact" className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10">
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
                                            <h3 className="mt-4 text-sm font-semibold text-white">{f.title}</h3>
                                            <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{f.copy}</p>
                                        </div>
                                    </Reveal>)}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>;
}
