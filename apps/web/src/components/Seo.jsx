import { useEffect } from 'react';

// Direct DOM head management. react-helmet's commit mechanism does not
// reliably flush under this app's Vite/React 18 setup (confirmed: it silently
// no-ops even across a clean dev-server restart), so this manages <head>
// itself instead of trusting it. The page's own <Helmet><title>/<meta
// name="description"> block must stay in place regardless — the llms.txt
// build step statically greps that literal source text, it never runs this.
function upsertMeta(attr, key, content) {
    if (content == null) return;
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function upsertLink(rel, href) {
    if (href == null) return;
    let el = document.head.querySelector(`link[rel="${rel}"]`);
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
}

function setJsonLd(schemas) {
    document.head.querySelectorAll('script[data-seo-jsonld]').forEach(el => el.remove());
    (schemas || []).forEach(schema => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.dataset.seoJsonld = 'true';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    });
}

const Seo = ({ title, description, keywords, image, url, siteName, type = 'website', locale = 'en_US', robots = 'index, follow', jsonLd }) => {
    useEffect(() => {
        const canonical = url || window.location.origin + window.location.pathname;

        if (title) document.title = title;
        upsertMeta('name', 'description', description);
        upsertMeta('name', 'keywords', keywords);
        upsertMeta('name', 'robots', robots);
        upsertLink('canonical', canonical);
        upsertMeta('property', 'og:url', canonical);
        upsertMeta('property', 'og:type', type);
        upsertMeta('property', 'og:locale', locale);
        upsertMeta('property', 'og:site_name', siteName);
        upsertMeta('property', 'og:title', title);
        upsertMeta('property', 'og:description', description);
        upsertMeta('property', 'og:image', image);
        upsertMeta('name', 'twitter:card', image ? 'summary_large_image' : 'summary');
        upsertMeta('name', 'twitter:title', title);
        upsertMeta('name', 'twitter:description', description);
        upsertMeta('name', 'twitter:image', image);
        if (jsonLd) setJsonLd(jsonLd);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title, description, keywords, image, url, siteName, type, locale, robots, jsonLd]);

    return null;
}

export default Seo;

export { Seo };
