#!/usr/bin/env node
// Removes the Hostinger Horizons editor-integration scripts that
// vite.config.js's addTransformIndexHtml plugin injects into every build
// (dev AND production) unconditionally — runtime/console/vite-overlay error
// reporting back to a parent Horizons editor frame, plus a global
// window.fetch monkey-patch tied to Horizons' own platform API responses.
// All of it no-ops when the site isn't embedded in the Horizons editor
// iframe, but it's dead weight and internal platform plumbing (API paths,
// "Insufficient credits" strings) to ship to a plain static host. This is a
// separate, opt-in pass over the already-built HTML — it does not touch
// vite.config.js, so the normal dev/Horizons-publish build path is untouched.
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.join(process.cwd(), '..', '..', 'dist', 'apps', 'web');

const MARKERS = [
	'horizons-runtime-error',
	'horizons-vite-error',
	'horizons-console-error',
	'horizons-navigation-error',
	'BENIGN_FETCH_ERRORS',
];

function findHtmlFiles(dir) {
	const out = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) out.push(...findHtmlFiles(full));
		else if (entry.name.endsWith('.html')) out.push(full);
	}
	return out;
}

function stripScripts(html) {
	let removed = 0;
	const cleaned = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, block => {
		if (MARKERS.some(marker => block.includes(marker))) {
			removed += 1;
			return '';
		}
		return block;
	});
	return { cleaned, removed };
}

function main() {
	if (!fs.existsSync(OUT_DIR)) {
		console.error(`❌ ${OUT_DIR} does not exist — run the build (and prerender) first.`);
		process.exit(1);
	}

	const files = findHtmlFiles(OUT_DIR);
	let total = 0;

	for (const file of files) {
		const html = fs.readFileSync(file, 'utf8');
		const { cleaned, removed } = stripScripts(html);
		if (removed > 0) {
			fs.writeFileSync(file, cleaned, 'utf8');
			total += removed;
			console.log(`✓ Stripped ${removed} platform script(s) from ${path.relative(OUT_DIR, file) || 'index.html'}`);
		}
	}

	console.log(`Done — ${total} script block(s) removed across ${files.length} file(s).`);
}

main();
