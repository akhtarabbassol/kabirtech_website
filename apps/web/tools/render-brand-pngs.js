#!/usr/bin/env node
// One-off: rasterizes the white-bg/black-bg Kabir AI logo SVGs (kept outside
// the repo, in the session scratchpad) into high-res PNGs for external use
// (docs, decks, social). Not wired into the site build.
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const DIR = 'C:\\Users\\akhtar.Abbas\\.claude\\projects\\D--Akhtar-AKHTAR-KT-Projects-kabirtech-website\\6aadba20-7e17-4a1d-8d6c-9b14017dd602\\scratchpad';
const SCALE = 6; // 240x96 viewBox -> 1440x576 px

const FILES = [
	{ svg: 'kabir-ai-logo-white-bg.svg', png: 'kabir-ai-logo-white-bg.png' },
	{ svg: 'kabir-ai-logo-black-bg.svg', png: 'kabir-ai-logo-black-bg.png' },
];

const WIDTH = 240 * SCALE;
const HEIGHT = 96 * SCALE;

async function main() {
	const browser = await puppeteer.launch({ headless: true });
	try {
		for (const { svg, png } of FILES) {
			const svgContent = fs.readFileSync(path.join(DIR, svg), 'utf8');
			const page = await browser.newPage();
			await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });
			await page.setContent(`<!doctype html><html><head><style>html,body{margin:0;padding:0;}svg{display:block;width:${WIDTH}px;height:${HEIGHT}px;}</style></head><body>${svgContent}</body></html>`);
			await page.screenshot({ path: path.join(DIR, png) });
			await page.close();
			console.log(`✓ ${png} (${WIDTH}x${HEIGHT})`);
		}
	} finally {
		await browser.close();
	}
}

main();
