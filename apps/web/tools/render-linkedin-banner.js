#!/usr/bin/env node
// One-off: rasterizes the LinkedIn banner SVG (kept in the session scratchpad)
// into a high-res PNG at LinkedIn's recommended 1584x396 (4:1), rendered at
// 2x device scale for crispness. Not wired into the site build.
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const DIR = 'C:\\Users\\akhtar.Abbas\\.claude\\projects\\D--Akhtar-AKHTAR-KT-Projects-kabirtech-website\\6aadba20-7e17-4a1d-8d6c-9b14017dd602\\scratchpad';
const WIDTH = 1584;
const HEIGHT = 396;

async function main() {
	const svgContent = fs.readFileSync(path.join(DIR, 'kabir-ai-linkedin-banner.svg'), 'utf8');
	const browser = await puppeteer.launch({ headless: true });
	try {
		const page = await browser.newPage();
		await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 2 });
		await page.setContent(`<!doctype html><html><head><style>html,body{margin:0;padding:0;}svg{display:block;width:${WIDTH}px;height:${HEIGHT}px;}</style></head><body>${svgContent}</body></html>`);
		await page.screenshot({ path: path.join(DIR, 'kabir-ai-linkedin-banner.png') });
		await page.close();
		console.log(`✓ kabir-ai-linkedin-banner.png (${WIDTH * 2}x${HEIGHT * 2})`);
	} finally {
		await browser.close();
	}
}

main();
