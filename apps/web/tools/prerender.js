#!/usr/bin/env node
// Prerenders each route of the built SPA into static HTML, so crawlers (and
// anything else that doesn't execute JavaScript) see the real title, meta
// tags, and visible content immediately — not the empty <title></title>
// shell that Vite ships by default for a client-only render. React still
// hydrates over this markup client-side; it's a build-time snapshot, not a
// server.
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const OUT_DIR = path.join(process.cwd(), '..', '..', 'dist', 'apps', 'web');
const PORT = 4321;
const BASE_URL = `http://localhost:${PORT}`;

// route -> output file, relative to OUT_DIR
const ROUTES = {
	'/': 'index.html',
	'/services': 'services/index.html',
	'/products': 'products/index.html',
	'/work': 'work/index.html',
	'/company': 'company/index.html',
	'/partnerships': 'partnerships/index.html',
	'/contact': 'contact/index.html',
	'/privacy-policy': 'privacy-policy/index.html',
	'/terms-and-conditions': 'terms-and-conditions/index.html',
	'/information-security-policy': 'information-security-policy/index.html',
};

function waitForServer(url, timeoutMs = 15000) {
	const start = Date.now();
	return new Promise((resolve, reject) => {
		const attempt = async () => {
			try {
				const res = await fetch(url);
				if (res.ok) return resolve();
			} catch {}
			if (Date.now() - start > timeoutMs) return reject(new Error('Preview server did not start in time'));
			setTimeout(attempt, 250);
		};
		attempt();
	});
}

async function main() {
	if (!fs.existsSync(OUT_DIR)) {
		console.error(`❌ ${OUT_DIR} does not exist — run the build before prerendering.`);
		process.exit(1);
	}

	// A single command string (not an argv array) with shell:true — the
	// supported way to run this cross-platform: argv+shell:true is what
	// triggers Node's escaping-deprecation warning, and spawning `npx.cmd`
	// directly (no shell) fails on Windows with EINVAL since .cmd isn't a
	// real executable.
	const command = `npx vite preview --outDir "${OUT_DIR}" --port ${PORT} --strictPort`;
	const server = spawn(command, {
		cwd: process.cwd(),
		stdio: 'pipe',
		shell: true,
	});

	let serverOutput = '';
	server.stdout.on('data', d => { serverOutput += d.toString(); });
	server.stderr.on('data', d => { serverOutput += d.toString(); });

	try {
		await waitForServer(BASE_URL);

		const browser = await puppeteer.launch({ headless: true });
		try {
			for (const [route, outFile] of Object.entries(ROUTES)) {
				const page = await browser.newPage();
				await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
				// The Seo component applies title/meta/JSON-LD via a useEffect —
				// give React a tick past networkidle to make sure that's committed.
				await new Promise(r => setTimeout(r, 300));
				const html = await page.content();
				await page.close();

				const outPath = path.join(OUT_DIR, outFile);
				fs.mkdirSync(path.dirname(outPath), { recursive: true });
				fs.writeFileSync(outPath, html, 'utf8');
				console.log(`✓ Prerendered ${route} -> ${outFile}`);
			}
		} finally {
			await browser.close();
		}
	} catch (err) {
		console.error('❌ Prerender failed:', err.message);
		console.error(serverOutput);
		process.exitCode = 1;
	} finally {
		server.kill();
	}
}

main();
