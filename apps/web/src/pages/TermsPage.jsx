import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const EFFECTIVE_DATE = 'August 27, 2026';

const SECTIONS = [{
  title: '1. Acceptance of these terms',
  body: [
    'These Terms of Use govern your use of kabirtechsolutions.com, operated by KabirTech Solutions ("KabirTech", "we", "us"), 1200 Congress Ave, Suite 460, Austin, TX. By browsing this website or submitting the contact form, you agree to these terms. If you don’t agree, please don’t use the site.'
  ]
}, {
  title: '2. What this website is',
  body: [
    'This site is informational: it describes KabirTech’s services and products (including Postora and AIBOS) and lets you get in touch about a project. Nothing on this site is an offer to contract, and browsing it doesn’t create a client relationship, engagement, or subscription with KabirTech.',
    'Feature walkthroughs for Postora and AIBOS on this site — including the interactive "AI Command Center" demo — use illustrative, simulated responses to show how the product works. They are not connected to a live AI backend or your real business data.'
  ]
}, {
  title: '3. Permitted use',
  body: [
    'You may use this website for its intended purpose: learning about our services and products, and contacting us about a project. You agree not to misuse the site — including attempting to access it in a way that could damage, disable, or overburden it, scraping or automating access outside of normal browsing, or submitting the contact form with false information or for spam.'
  ]
}, {
  title: '4. Intellectual property',
  body: [
    'The text, design, graphics, and code that make up this website, and the KabirTech, Postora, and AIBOS names and logos, belong to KabirTech Solutions unless otherwise noted. You may view and share pages of this site for personal, non-commercial reference, but you may not copy, republish, or reuse our content, branding, or product names without our written permission.'
  ]
}, {
  title: '5. Contact form submissions',
  body: [
    'Submitting the contact form sends us your name, work email, company, project type, budget range, and message so we can respond about a potential project. That’s a normal inquiry, not a binding order or contract. See our Privacy Policy for how that information is handled.'
  ]
}, {
  title: '6. Client engagements',
  body: [
    'If a project moves forward after you contact us, the scope, pricing, timeline, and other commercial terms are set out in a separate, signed agreement between KabirTech and the client — not by this website. These Terms of Use apply only to your use of the website itself.'
  ]
}, {
  title: '7. Third-party services',
  body: [
    'This site loads fonts from Google Fonts and images from Hostinger’s CDN. Those providers operate under their own terms and privacy policies, which we don’t control.'
  ]
}, {
  title: '8. No warranties',
  body: [
    'This website and its content are provided "as is." We work to keep it accurate and available, but we don’t guarantee it will be error-free, uninterrupted, or perfectly up to date — case studies, figures, and product feature lists are illustrative of our work and capabilities rather than guarantees of results for any specific engagement.'
  ]
}, {
  title: '9. Limitation of liability',
  body: [
    'To the extent permitted by law, KabirTech isn’t liable for indirect, incidental, or consequential damages arising from your use of, or inability to use, this website. Nothing here limits liability that can’t be limited under applicable law.'
  ]
}, {
  title: '10. Links to other sites',
  body: [
    'Where this site links out to third-party destinations, we aren’t responsible for their content, terms, or privacy practices.'
  ]
}, {
  title: '11. Governing law',
  body: [
    'These terms are governed by the laws of the State of Texas, without regard to its conflict-of-laws principles.'
  ]
}, {
  title: '12. Changes to these terms',
  body: [
    'We may update these terms as the site or our practices change. The date at the top reflects the most recent revision.'
  ]
}, {
  title: '13. Contact us',
  body: [
    'Questions about these terms: info@kabirtechsolutions.com, or write to KabirTech Solutions, 1200 Congress Ave, Suite 460, Austin, TX.'
  ]
}];

export default function TermsPage() {
  return <div className="bg-background">
            {/* Static source-text target for tools/generate-llms.js — see HomePage.jsx for why. */}
            <Helmet>
                <title>Terms &amp; Conditions | KabirTech Solutions</title>
                <meta name="description" content="The terms that govern your use of kabirtechsolutions.com." />
            </Helmet>
            <Seo
                title="Terms & Conditions | KabirTech Solutions"
                description="The terms that govern your use of kabirtechsolutions.com."
                url="https://kabirtechsolutions.com/terms-and-conditions"
                siteName="KabirTech Solutions"
            />

            <Header />
            <main>
                <section className="relative overflow-hidden bg-[hsl(var(--ink))] pb-16 pt-[calc(72px+3.5rem)]">
                    <div className="absolute inset-0 circuit-grid opacity-50" aria-hidden="true" />
                    <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Legal</p>
                        <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                            Terms &amp; Conditions
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
