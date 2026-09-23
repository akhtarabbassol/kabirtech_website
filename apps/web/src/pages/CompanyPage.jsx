import React from 'react';
import { Helmet } from 'react-helmet';
import Reveal from '@/components/Reveal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const TEAM_PHOTO = 'https://images.hostinger.com/80be64c8-babc-483d-b736-0c54e039c96b.png';
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

const ABOUT_PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://kabirtechsolutions.com/company#page',
  url: 'https://kabirtechsolutions.com/company',
  name: 'Company | KabirTech Solutions',
  mainEntity: { '@id': 'https://kabirtechsolutions.com/#organization' },
  about: {
    '@type': 'ProfessionalService',
    '@id': 'https://kabirtechsolutions.com/#organization',
    employee: TEAM.map(t => ({
      '@type': 'Person',
      name: t.name,
      jobTitle: t.role
    }))
  }
};

export default function CompanyPage() {
  return <div className="bg-background">
            {/* Static source-text target for tools/generate-llms.js — see HomePage.jsx for why. */}
            <Helmet>
                <title>Company | KabirTech Solutions</title>
                <meta name="description" content="KabirTech Solutions is an AI engineering studio built around senior people — our story, our process, and the team behind it." />
            </Helmet>
            <Seo
                title="Company | KabirTech Solutions"
                description="An AI engineering studio built around senior people. Our story, our four-step delivery process, and the team behind KabirTech Solutions."
                url="https://kabirtechsolutions.com/company"
                siteName="KabirTech Solutions"
                image={TEAM_PHOTO}
                jsonLd={[ABOUT_PAGE_SCHEMA]}
            />

            <Header />
            <main className="pt-[72px]">
                <section className="relative overflow-hidden py-24 lg:py-32">
                    <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-primary/[0.06] blur-[130px]" aria-hidden="true" />
                    <div className="absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/[0.08] blur-[130px]" aria-hidden="true" />

                    <div className="relative mx-auto max-w-[80rem] px-5 sm:px-8">
                        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
                            <Reveal>
                                <img src={TEAM_PHOTO} alt="The KabirTech Solutions engineering team at work" className="w-full rounded-2xl object-cover shadow-xl shadow-slate-900/10" loading="lazy" />
                            </Reveal>
                            <Reveal delay={0.08}>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">The company</p>
                                <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                                    An AI engineering studio built around senior people
                                </h1>
                                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                                    KabirTech Solutions started in 2014 with three engineers and one belief: clients deserve the people who
                                    scoped the project to be the ones who write it. Today we are thirty-eight engineers, applied AI
                                    specialists and data scientists working with scale-ups and established operators across finance,
                                    healthcare and logistics — primarily in the US, UK and Australia, with clients further afield too.
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
                </section>
            </main>
            <Footer />
        </div>;
}
