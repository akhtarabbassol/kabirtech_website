import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const EFFECTIVE_DATE = 'August 27, 2026';

const SECTIONS = [{
  title: '1. Who we are',
  body: [
    'This policy covers kabirtechsolutions.com, operated by KabirTech Solutions ("KabirTech", "we", "us"), 1200 Congress Ave, Suite 460, Austin, TX. It explains what information we collect through this website, why, and what choices you have.'
  ]
}, {
  title: '2. Information we collect',
  body: [
    'The only personal information this website actively collects is what you submit through our contact form: your name, work email, company, project type, budget range, and the message you write.',
    "We don't run analytics or advertising trackers on this site, and we don't use cookies to profile visitors. Standard web server logs (IP address, browser type, pages requested) may be retained briefly by our hosting infrastructure for security and reliability purposes, in line with normal operation of any website."
  ]
}, {
  title: '3. How we use it',
  body: [
    'We use contact form submissions solely to respond to your inquiry — to understand the project you’re describing, scope it, and reply to the email address you provided. We do not use this information for advertising, and we do not sell or rent it to third parties.'
  ]
}, {
  title: '4. Where it’s stored',
  body: [
    'Contact form submissions are stored in our own PocketBase database, on infrastructure we operate. They are not passed through a third-party CRM or marketing platform.'
  ]
}, {
  title: '5. Third-party services',
  body: [
    'A small number of external services are used to deliver the pages themselves:',
  ],
  list: [
    'Google Fonts (fonts.googleapis.com / fonts.gstatic.com) — loads the typefaces used on this site. Google may log the requesting IP address as part of serving font files; see Google’s own privacy policy for details.',
    'Hostinger CDN (images.hostinger.com, horizons-cdn.hostinger.com) — hosts the images used on this site.'
  ],
  after: ['We don’t embed third-party analytics, chat widgets, or advertising pixels on this site.']
}, {
  title: '6. Cookies',
  body: [
    'This site does not set tracking or advertising cookies. Your browser may store minor local preferences (such as UI state) purely on your device; that data is never transmitted to us.'
  ]
}, {
  title: '7. Data retention',
  body: [
    'We keep contact form submissions for as long as reasonably needed to respond to your inquiry and maintain a record of prospective client conversations. If you’d like your submission deleted sooner, contact us using the details below and we’ll remove it.'
  ]
}, {
  title: '8. Your rights',
  body: [
    'Depending on where you’re located, you may have the right to request access to, correction of, or deletion of the personal information we hold about you, or to object to how it’s used. To exercise any of these, email us at the address below — we’ll respond within a reasonable time.'
  ]
}, {
  title: '9. Children’s privacy',
  body: [
    'This website is intended for businesses and professionals evaluating software services. It is not directed at children, and we do not knowingly collect information from anyone under 16.'
  ]
}, {
  title: '10. Changes to this policy',
  body: [
    `We may update this policy as the site or our practices change. The date at the top reflects the most recent revision. Material changes will be reflected here — we don't send separate notices for routine updates.`
  ]
}, {
  title: '11. Contact us',
  body: [
    'Questions about this policy or your data: info@kabirtechsolutions.com, or write to KabirTech Solutions, 1200 Congress Ave, Suite 460, Austin, TX.'
  ]
}];

export default function PrivacyPolicyPage() {
  return <div className="bg-background">
            {/* Static source-text target for tools/generate-llms.js — see HomePage.jsx for why. */}
            <Helmet>
                <title>Privacy Policy | KabirTech Solutions</title>
                <meta name="description" content="How KabirTech Solutions collects, uses and protects information submitted through kabirtechsolutions.com." />
            </Helmet>
            <Seo
                title="Privacy Policy | KabirTech Solutions"
                description="How KabirTech Solutions collects, uses and protects information submitted through kabirtechsolutions.com."
                url="https://kabirtechsolutions.com/privacy-policy"
                siteName="KabirTech Solutions"
            />

            <Header />
            <main>
                <section className="relative overflow-hidden bg-[hsl(var(--ink))] pb-16 pt-[calc(72px+3.5rem)]">
                    <div className="absolute inset-0 circuit-grid opacity-50" aria-hidden="true" />
                    <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Legal</p>
                        <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                            Privacy Policy
                        </h1>
                        <p className="mt-4 text-sm text-slate-400">Effective {EFFECTIVE_DATE}</p>
                    </div>
                </section>

                <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
                    <div className="space-y-12">
                        {SECTIONS.map(s => <div key={s.title}>
                                <h2 className="font-display text-xl font-semibold tracking-tight">{s.title}</h2>
                                <div className="mt-3 space-y-3">
                                    {s.body.map(p => <p key={p} className="text-base leading-relaxed text-muted-foreground">{p}</p>)}
                                    {s.list && <ul className="list-disc space-y-2 pl-5">
                                            {s.list.map(item => <li key={item} className="text-base leading-relaxed text-muted-foreground">{item}</li>)}
                                        </ul>}
                                    {s.after?.map(p => <p key={p} className="text-base leading-relaxed text-muted-foreground">{p}</p>)}
                                </div>
                            </div>)}
                    </div>
                </section>
            </main>
            <Footer />
        </div>;
}
