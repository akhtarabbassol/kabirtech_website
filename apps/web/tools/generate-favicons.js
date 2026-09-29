#!/usr/bin/env node
// One-off raster export of public/icon.svg (the square standalone mark, not
// the wordmark logo) into the PNG sizes the manifest and apple-touch-icon
// need (neither reliably accepts SVG). Not wired into the build — rerun
// manually if icon.svg changes.
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const svg = fs.readFileSync(path.join(PUBLIC_DIR, 'icon.svg'), 'utf8');

const SIZES = [
	{ file: 'apple-touch-icon.png', size: 180 },
	{ file: 'icon-512.png', size: 512 },
	{ file: 'favicon-32.png', size: 32 },
];

async function main() {
	const browser = await puppeteer.launch({ headless: true });
	try {
		for (const { file, size } of SIZES) {
			const page = await browser.newPage();
			await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
			await page.setContent(`<!doctype html><html><head><style>html,body{margin:0;padding:0;}svg{display:block;width:${size}px;height:${size}px;}</style></head><body>${svg}</body></html>`);
			await page.screenshot({ path: path.join(PUBLIC_DIR, file), omitBackground: false });
			await page.close();
			console.log(`✓ ${file} (${size}x${size})`);
		}
	} finally {
		await browser.close();
	}
}

main();
