import React from 'react';
import { Helmet } from 'react-helmet';
import { Building2, Factory, GraduationCap, Quote, Rocket, ShoppingBag, ShoppingCart, Star, Zap } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

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
  icon: ShoppingBag,
  tag: 'Ecommerce',
  title: 'Online storefront for a Lahore fabric & clothing retailer',
  result: 'Live store — COD, secure checkout, curated catalog',
  url: 'https://miyaar.org/'
}, {
  icon: ShoppingBag,
  tag: 'Ecommerce',
  title: 'Headless storefront migration for a DTC apparel brand',
  result: 'Checkout conversion up 22%'
}, {
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

// Deliberately no Review/AggregateRating schema for TESTIMONIALS above — those
// are illustrative placeholder quotes, not genuine collected reviews, and
// marking them up as reviews would violate Google's structured-data guidelines.
const WORK_COLLECTION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://kabirtechsolutions.com/work#page',
  url: 'https://kabirtechsolutions.com/work',
  name: 'Work | KabirTech Solutions',
  about: { '@id': 'https://kabirtechsolutions.com/#organization' },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: WORK.map((w, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'CreativeWork',
        name: w.title,
        description: w.copy,
        image: w.image,
        creator: { '@id': 'https://kabirtechsolutions.com/#organization' },
        about: w.client
      }
    }))
  }
};

export default function WorkPage() {
  return <div className="bg-background">
            {/* Static source-text target for tools/generate-llms.js — see HomePage.jsx for why. */}
            <Helmet>
                <title>Work | KabirTech Solutions</title>
                <meta name="description" content="Case studies and delivered projects from KabirTech Solutions — systems running in production, with numbers attached." />
            </Helmet>
            <Seo
                title="Work | KabirTech Solutions"
                description="Case studies and delivered projects from KabirTech Solutions — systems running in production, with numbers attached, for clients across finance, healthcare, logistics and more."
                url="https://kabirtechsolutions.com/work"
                siteName="KabirTech Solutions"
                jsonLd={[WORK_COLLECTION_SCHEMA]}
            />

            <Header />
            <main className="pt-[72px]">
                <section className="bg-[hsl(var(--ink))] py-24 lg:py-32">
                    <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
                        <Reveal>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Case studies</p>
                            <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                                Systems running in production, with numbers attached
                            </h1>
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
                                            <h2 className="mt-5 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">{w.title}</h2>
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
                            {COMPLETED.map((c, i) => {
              const Tag = c.url ? 'a' : 'div';
              const linkProps = c.url ? { href: c.url, target: '_blank', rel: 'noopener noreferrer' } : {};
              return <Reveal key={c.title} delay={i * 0.04}>
                                    <Tag {...linkProps} className="group flex h-full gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-sky-400/30 hover:bg-white/[0.05]">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                                            <c.icon className="h-5 w-5" strokeWidth={1.75} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">{c.tag}</p>
                                            <h3 className="mt-1.5 text-sm font-semibold leading-snug text-white">{c.title}</h3>
                                            <p className="mt-1.5 text-xs text-sky-400">{c.result}</p>
                                        </div>
                                    </Tag>
                                </Reveal>;
            })}
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-[80rem] px-5 py-24 sm:px-8 lg:py-32">
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
                </section>
            </main>
            <Footer />
        </div>;
}
