import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const EFFECTIVE_DATE = 'September 24, 2026';

const SECTIONS = [{
  title: '1. Purpose and scope',
  body: [
    'This policy describes the security principles KabirTech Solutions ("KabirTech", "we", "us") applies to kabirtechsolutions.com and to the software engagements we deliver for clients. It is a public summary of our approach, not an exhaustive technical specification.'
  ]
}, {
  title: '2. Data we handle',
  body: [
    'On this website, the only personal information we actively collect is what you submit through the contact form: your name, work email, company, project type, budget range, and message. See our Privacy Policy for the full detail on what we collect and why.',
    'For client engagements, the data we handle is defined by that engagement’s scope and governed by the client’s own agreement with us, not by this website.'
  ]
}, {
  title: '3. Data in transit and at rest',
  body: [
    'This site is served over HTTPS/TLS, so information submitted through the contact form is encrypted in transit. Submissions are stored in our own PocketBase database on infrastructure we operate directly, not passed through a third-party CRM or marketing platform.'
  ]
}, {
  title: '4. Access control',
  body: [
    'Access to systems holding client or prospect data is restricted to the KabirTech staff who need it to do their job, on a least-privilege basis. Access is revoked promptly when someone’s role changes or their engagement with us ends.'
  ]
}, {
  title: '5. Secure development practices',
  body: [
    'Client software we build follows the practices we’d want applied to our own systems: code review before merge, dependency and vulnerability scanning, environment separation between development and production, and secrets kept out of source control. Specific controls are agreed per engagement based on the sensitivity of the system being built.'
  ]
}, {
  title: '6. Third-party services',
  body: [
    'This website loads a small number of external services: Google Fonts (fonts.googleapis.com / fonts.gstatic.com) for typefaces, and Hostinger CDN (images.hostinger.com, horizons-cdn.hostinger.com) for images. We don’t embed third-party analytics, chat widgets, or advertising pixels on this site.',
    'For client engagements, any third-party infrastructure or subprocessor is disclosed and agreed as part of that engagement.'
  ]
}, {
  title: '7. Employee and contractor practices',
  body: [
    'Everyone who works on client engagements, including engineers placed on dedicated teams, is bound by confidentiality obligations and is granted access to client systems on a need-to-know basis for the duration of the engagement.'
  ]
}, {
  title: '8. Incident response',
  body: [
    'If we become aware of a security incident affecting personal data collected through this website, we will investigate promptly, take reasonable steps to contain and remediate it, and notify affected individuals or clients where required by law or by contract.'
  ]
}, {
  title: '9. Responsible disclosure',
  body: [
    'If you believe you’ve found a security vulnerability affecting kabirtechsolutions.com, please report it to us at the email below before disclosing it publicly. Give us a reasonable amount of time to investigate and respond before sharing details with anyone else.'
  ]
}, {
  title: '10. Changes to this policy',
  body: [
    'We may update this policy as our practices change. The date at the top reflects the most recent revision.'
  ]
}, {
  title: '11. Contact us',
  body: [
    'Security questions or vulnerability reports: info@kabirtechsolutions.com, or write to KabirTech Solutions, 1200 Congress Ave, Suite 460, Austin, TX.'
  ]
}];

const SECURITY_POLICY_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://kabirtechsolutions.com/information-security-policy#page',
  url: 'https://kabirtechsolutions.com/information-security-policy',
  name: 'Information Security Policy | KabirTech Solutions',
  about: { '@id': 'https://kabirtechsolutions.com/#organization' }
};

export default function InformationSecurityPolicyPage() {
  return <div className="bg-background">
            {/* Static source-text target for tools/generate-llms.js — see HomePage.jsx for why. */}
            <Helmet>
                <title>Information Security Policy | KabirTech Solutions</title>
                <meta name="description" content="The security principles KabirTech Solutions applies to kabirtechsolutions.com and to client software engagements." />
            </Helmet>
            <Seo
                title="Information Security Policy | KabirTech Solutions"
                description="The security principles KabirTech Solutions applies to kabirtechsolutions.com and to client software engagements, including data handling, access control and incident response."
                url="https://kabirtechsolutions.com/information-security-policy"
                siteName="KabirTech Solutions"
                jsonLd={[SECURITY_POLICY_SCHEMA]}
            />

            <Header />
            <main>
                <section className="relative overflow-hidden bg-[hsl(var(--ink))] pb-16 pt-[calc(72px+3.5rem)]">
                    <div className="absolute inset-0 circuit-grid opacity-50" aria-hidden="true" />
                    <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Legal</p>
                        <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                            Information Security Policy
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
                                </div>
                            </div>)}
                    </div>
                </section>
            </main>
            <Footer />
        </div>;
}
