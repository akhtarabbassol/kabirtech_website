import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Cloud, Handshake, Users } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const PARTNER_TYPES = [{
  icon: Cloud,
  title: 'Technology Partners',
  copy: 'We build and deploy on the platforms our clients already run — AWS, Azure, GCP, and the AI model providers behind production systems — so a joint deployment is a configuration, not a rebuild.',
  points: ['Cloud & infrastructure providers', 'AI model & tooling vendors', 'Joint solution architecture']
}, {
  icon: Handshake,
  title: 'Referral Partners',
  copy: 'Agencies, consultancies and independent advisors who introduce us to client work stay looped in through delivery, with a transparent referral arrangement agreed up front.',
  points: ['Transparent commission terms', 'Visibility through delivery', 'No conflict with your own services']
}, {
  icon: Users,
  title: 'Delivery Partners',
  copy: 'Software vendors and systems integrators who need senior AI and engineering capacity without hiring can bring our teams in under your client relationship.',
  points: ['White-labeled delivery capacity', 'You own the client relationship', 'Scales up or down per engagement']
}];

const WHY_PARTNER = ['Senior engineers only — no bench of juniors learning on your client’s time', 'Fixed two-week sprints with a live demo, so partners always have something current to show', 'A single accountable point of contact for every partnership, not a rotating account team', 'Engagements scoped through a fixed-price discovery sprint before any commercial commitment'];

const PARTNERSHIPS_PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://kabirtechsolutions.com/partnerships#page',
  url: 'https://kabirtechsolutions.com/partnerships',
  name: 'Partnerships | KabirTech Solutions',
  about: { '@id': 'https://kabirtechsolutions.com/#organization' }
};

export default function PartnershipsPage() {
  return <div className="bg-background">
            {/* Static source-text target for tools/generate-llms.js — see HomePage.jsx for why. */}
            <Helmet>
                <title>Partnerships | KabirTech Solutions</title>
                <meta name="description" content="Technology, referral and delivery partnerships with KabirTech Solutions — an AI engineering studio serving clients across the US, UK, Australia and beyond." />
            </Helmet>
            <Seo
                title="Partnerships | KabirTech Solutions"
                description="Technology, referral and delivery partnerships with KabirTech Solutions — an AI engineering studio serving clients across the US, UK, Australia and beyond."
                url="https://kabirtechsolutions.com/partnerships"
                siteName="KabirTech Solutions"
                jsonLd={[PARTNERSHIPS_PAGE_SCHEMA]}
            />

            <Header />
            <main className="pt-[72px]">
                <section className="relative overflow-hidden bg-[hsl(var(--ink))] py-24 lg:py-32">
                    <div className="absolute inset-0 circuit-grid opacity-40" aria-hidden="true" />
                    <div className="relative mx-auto max-w-[80rem] px-5 sm:px-8">
                        <Reveal>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Work with us</p>
                            <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                                Build and grow with KabirTech
                            </h1>
                            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
                                We partner with technology platforms, referral partners and delivery partners who want senior AI and
                                software engineering behind their own client relationships — across the US, UK, Australia and beyond.
                            </p>
                        </Reveal>
                    </div>
                </section>

                <section className="mx-auto max-w-[80rem] px-5 py-24 sm:px-8 lg:py-32">
                    <Reveal>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Partnership types</p>
                        <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                            Three ways to work together
                        </h2>
                    </Reveal>

                    <div className="mt-14 grid gap-5 lg:grid-cols-3">
                        {PARTNER_TYPES.map((p, i) => <Reveal key={p.title} delay={i * 0.06}>
                                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                        <p.icon className="h-6 w-6" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{p.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                                    <ul className="mt-6 space-y-2 border-t border-border pt-5">
                                        {p.points.map(pt => <li key={pt} className="flex items-center gap-2 text-sm text-foreground/80">
                                                <Check className="h-4 w-4 shrink-0 text-primary" /> {pt}
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
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Why partner with us</p>
                            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                                The same discipline we sell to clients
                            </h2>
                        </Reveal>

                        <div className="mt-14 grid gap-4 sm:grid-cols-2">
                            {WHY_PARTNER.map((w, i) => <Reveal key={w} delay={i * 0.05}>
                                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
                                        <p className="text-sm leading-relaxed text-slate-300">{w}</p>
                                    </div>
                                </Reveal>)}
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 lg:py-32">
                    <Reveal>
                        <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                            Ready to talk partnership?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                            Tell us about your platform, agency or client base and what a partnership would look like. A principal
                            engineer will reply within one business day.
                        </p>
                        <Link to="/contact" className="mt-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-sky-500 px-8 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400 hover:shadow-sky-400/40 active:scale-[0.98]">
                            Start the conversation <ArrowUpRight className="h-5 w-5" />
                        </Link>
                    </Reveal>
                </section>
            </main>
            <Footer />
        </div>;
}
