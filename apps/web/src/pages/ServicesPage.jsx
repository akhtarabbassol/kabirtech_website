import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BrainCircuit, Check, Cloud, Code2, ClipboardList, Layers, LifeBuoy, Repeat2, Rocket, ShieldCheck, Smartphone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

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
  points: ['React / Node / Python', 'AI-assisted development', 'Legacy system modernization']
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

const SERVICE_SCHEMAS = SERVICES.map(s => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.title,
  description: s.copy,
  provider: { '@id': 'https://kabirtechsolutions.com/#organization' },
  areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'United Kingdom' }, { '@type': 'Country', name: 'Australia' }]
}));

const PROCESS = [{
  icon: ClipboardList,
  step: '01',
  title: 'Scope',
  copy: 'A fixed-price discovery sprint turns a rough idea into a costed plan — you see the scope and the number before committing to anything bigger.'
}, {
  icon: Repeat2,
  step: '02',
  title: 'Sprint',
  copy: 'Two-week sprints, demoed live. Every sprint ships something you can click through, not a status update in a meeting.'
}, {
  icon: Rocket,
  step: '03',
  title: 'Ship',
  copy: 'Code you own outright, deployed to your infrastructure, with tests and documentation written in from day one — not bolted on at the end.'
}, {
  icon: LifeBuoy,
  step: '04',
  title: 'Support',
  copy: 'Runbooks and training handed over at launch, with optional ongoing support and SLAs for the teams that want us to stay close.'
}];

const FAQS = [{
  q: 'How do you price a project?',
  a: 'Most engagements start with a fixed-price discovery sprint that scopes the build and gives you a number before you commit further. Typical project budgets range from under $25k for a focused build to $200k+ for larger platforms, and dedicated teams are billed on flexible monthly contracts.'
}, {
  q: 'How long does a typical engagement take?',
  a: 'We work in two-week sprints with a demo at the end of each one, so you see progress continuously rather than at the end. First releases have gone live in as little as nine weeks, though larger platforms run longer — the discovery sprint gives you a real timeline, not a guess.'
}, {
  q: 'Who owns the code and the intellectual property?',
  a: 'You do, outright. Code is delivered to your own repositories and infrastructure, with no vendor lock-in and no licensing surprises after launch.'
}, {
  q: 'Can your engineers work inside our existing team?',
  a: 'Yes — our Dedicated Teams service embeds senior engineers directly into your process, tooling and timezone overlap, reporting to your leads rather than running as a separate workstream.'
}, {
  q: 'Do you work with companies outside the United States?',
  a: 'Yes — we serve clients across the US, UK, Australia and beyond, with engineering coverage built around each client’s working hours.'
}, {
  q: 'What happens after launch?',
  a: 'We hand over runbooks and train your team to operate what we built, and offer optional ongoing support, monitoring and SLAs for teams that want us to stay involved rather than disappear after go-live.'
}];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
};

export default function ServicesPage() {
  return <div className="bg-background">
            {/* Static source-text target for tools/generate-llms.js — see HomePage.jsx for why. */}
            <Helmet>
                <title>Services | KabirTech Solutions</title>
                <meta name="description" content="AI-native engineering across the whole product lifecycle — custom software, AI & ML, mobile apps, cloud & DevOps, product design and dedicated teams." />
            </Helmet>
            <Seo
                title="Services | KabirTech Solutions"
                description="AI-native engineering across the whole product lifecycle — custom software, AI & ML, mobile apps, cloud & DevOps, product design and dedicated teams, for clients across the US, UK, Australia and beyond."
                url="https://kabirtechsolutions.com/services"
                siteName="KabirTech Solutions"
                jsonLd={[...SERVICE_SCHEMAS, FAQ_SCHEMA]}
            />

            <Header />
            <main className="pt-[72px]">
                <section className="mx-auto max-w-[80rem] px-5 py-24 sm:px-8 lg:py-32">
                    <Reveal>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What we do</p>
                        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                            <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                                AI-native engineering across the whole product lifecycle
                            </h1>
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
                                    <h2 className={`relative mt-6 font-display font-semibold tracking-tight ${s.featured ? 'text-2xl' : 'text-xl'}`}>{s.title}</h2>
                                    <p className="relative mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                                    <ul className="relative mt-6 space-y-2 border-t border-border pt-5">
                                        {s.points.map(p => <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                                                <Check className="h-4 w-4 shrink-0 text-primary" /> {p}
                                            </li>)}
                                    </ul>
                                </div>
                            </Reveal>)}
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[hsl(var(--ink))] py-24 lg:py-32">
                    <div className="absolute inset-0 circuit-grid opacity-30" aria-hidden="true" />
                    <div className="relative mx-auto max-w-[80rem] px-5 sm:px-8">
                        <Reveal>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">How we work</p>
                            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                                From scope to sprint to support
                            </h2>
                        </Reveal>

                        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {PROCESS.map((p, i) => <Reveal key={p.title} delay={i * 0.06}>
                                    <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                        <span className="font-display text-xs font-semibold text-sky-400">{p.step}</span>
                                        <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                                            <p.icon className="h-5.5 w-5.5" strokeWidth={1.75} />
                                        </div>
                                        <h3 className="mt-5 font-display text-lg font-semibold text-white">{p.title}</h3>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-300">{p.copy}</p>
                                    </div>
                                </Reveal>)}
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-[64rem] px-5 py-24 sm:px-8 lg:py-32">
                    <Reveal>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">FAQ</p>
                        <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                            Questions we hear before kickoff
                        </h2>
                    </Reveal>

                    <div className="mt-14 divide-y divide-border border-t border-border">
                        {FAQS.map((f, i) => <Reveal key={f.q} delay={i * 0.04}>
                                <div className="py-7">
                                    <h3 className="font-display text-lg font-semibold">{f.q}</h3>
                                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                                </div>
                            </Reveal>)}
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[hsl(var(--ink))] py-24 lg:py-32">
                    <div className="absolute inset-0 circuit-grid opacity-40" aria-hidden="true" />
                    <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[140px]" aria-hidden="true" />
                    <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
                        <Reveal>
                            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                                Not sure which service fits?
                            </h2>
                            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300">
                                Tell us what you're building. A principal engineer will scope it with you on the first call — free, and no
                                sales team in between.
                            </p>
                            <Link to="/contact" className="mt-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-sky-500 px-8 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400 hover:shadow-sky-400/40 active:scale-[0.98]">
                                Start a project <ArrowUpRight className="h-5 w-5" />
                            </Link>
                        </Reveal>
                    </div>
                </section>
            </main>
            <Footer />
        </div>;
}
