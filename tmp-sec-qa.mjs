import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
await page.locator('#security').scrollIntoViewIfNeeded();
await page.waitForTimeout(400);

const pixel = await page.evaluate(() => {
  const sec = document.getElementById('security');
  const cards = [...sec.querySelectorAll('article')];
  const titleBlock = sec.querySelector('h2')?.parentElement;
  const grid = sec.querySelector('ul');
  const r = (el) => el.getBoundingClientRect();
  const cs = (el) => getComputedStyle(el);
  const c0 = cards[0];
  const c1 = cards[1];
  const icon = c0.querySelector('img');
  const h3 = c0.querySelector('h3');
  const body = c0.querySelector('p');
  const tt = document.getElementById('trade-tracking');
  const lastTt = [...tt.querySelectorAll('article')].at(-1);
  const eyebrow = titleBlock.querySelector('p');
  return {
    gapTtToEyebrow: +(r(eyebrow).top - r(lastTt).bottom).toFixed(2),
    titleToGrid: +(r(grid).top - r(titleBlock).bottom).toFixed(2),
    card0: {
      w: +r(c0).width.toFixed(2),
      h: +r(c0).height.toFixed(2),
      pad: cs(c0).padding,
      radius: cs(c0).borderRadius,
      borderW: cs(c0).borderWidth,
      borderC: cs(c0).borderColor,
      bg: cs(c0).backgroundColor,
      shadow: cs(c0).boxShadow,
      gradient: cs(c0).backgroundImage,
    },
    gap: +(r(c1).left - r(c0).right).toFixed(2),
    heights: cards.map((c) => +r(c).height.toFixed(2)),
    equal: cards.every((c) => Math.abs(r(c).height - r(c0).height) <= 1),
    icon: { w: +r(icon).width.toFixed(2), h: +r(icon).height.toFixed(2) },
    title: {
      fs: cs(h3).fontSize,
      lh: cs(h3).lineHeight,
      pt: cs(h3).paddingTop,
      color: cs(h3).color,
    },
    body: {
      fs: cs(body).fontSize,
      lh: cs(body).lineHeight,
      mt: cs(body).marginTop,
      color: cs(body).color,
      w: +r(body).width.toFixed(2),
    },
    h2: {
      fs: cs(sec.querySelector('h2')).fontSize,
      lh: cs(sec.querySelector('h2')).lineHeight,
      w: +r(sec.querySelector('h2')).width.toFixed(2),
    },
    a11y: {
      landmark: sec.tagName,
      labelledBy: sec.getAttribute('aria-labelledby'),
      headingParent: document.getElementById('security-heading')?.parentElement
        ?.tagName,
      focusables: [
        ...sec.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ].length,
      iconsHidden: [...sec.querySelectorAll('img')].every(
        (i) => i.getAttribute('aria-hidden') === 'true',
      ),
      labels: cards.map((c) => c.getAttribute('aria-label')),
    },
  };
});

const figma = {
  gapTt: 80.3,
  titleToCards: 40,
  cardW: 428,
  cardH: 300,
  gap: 28,
  icon: 29.313,
  pad: 30.29,
  radius: 33.221,
  titleFs: 24.427,
  bodyFs: 19.542,
  titlePt: 39.084,
  bodyMt: 14.656,
  h2Fs: 58.626,
  h2W: 752,
};

const deltas = {
  gapTt: +(pixel.gapTtToEyebrow - figma.gapTt).toFixed(2),
  titleToGrid: +(pixel.titleToGrid - figma.titleToCards).toFixed(2),
  cardW: +(pixel.card0.w - figma.cardW).toFixed(2),
  cardH: +(pixel.card0.h - figma.cardH).toFixed(2),
  gap: +(pixel.gap - figma.gap).toFixed(2),
  icon: +(pixel.icon.w - figma.icon).toFixed(2),
  titleFs: +(parseFloat(pixel.title.fs) - figma.titleFs).toFixed(2),
  bodyFs: +(parseFloat(pixel.body.fs) - figma.bodyFs).toFixed(2),
  titlePt: +(parseFloat(pixel.title.pt) - figma.titlePt).toFixed(2),
  bodyMt: +(parseFloat(pixel.body.mt) - figma.bodyMt).toFixed(2),
  h2Fs: +(parseFloat(pixel.h2.fs) - figma.h2Fs).toFixed(2),
  radius: +(parseFloat(pixel.card0.radius) - figma.radius).toFixed(2),
};

console.log('PIXEL', JSON.stringify(pixel, null, 2));
console.log('DELTAS', JSON.stringify(deltas, null, 2));

const widths = [320, 360, 390, 430, 768, 1024, 1280, 1440];
const responsive = [];
for (const w of widths) {
  await page.setViewportSize({ width: w, height: 900 });
  await page.locator('#security').scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  const info = await page.evaluate(() => {
    const doc = document.documentElement;
    const cards = [...document.querySelectorAll('#security article')];
    const hs = cards.map((c) => c.getBoundingClientRect().height);
    return {
      overflow: doc.scrollWidth > doc.clientWidth + 1,
      equal: hs.every((h) => Math.abs(h - hs[0]) <= 1),
      visible: cards.every((c) => {
        const p = c.querySelector('p');
        return (
          p.getBoundingClientRect().bottom <=
          c.getBoundingClientRect().bottom + 1
        );
      }),
      iconSquare: cards.every((c) => {
        const i = c.querySelector('img').getBoundingClientRect();
        return Math.abs(i.width - i.height) < 0.5;
      }),
    };
  });
  responsive.push({ w, ...info });
}
console.log('RESPONSIVE', JSON.stringify(responsive, null, 2));

const regression = await page.evaluate(() =>
  [
    'header',
    'hero',
    'feature-strip',
    'features',
    'pricing',
    'bot-engine',
    'trading',
    'statistics',
    'trade-tracking',
    'security',
  ].map((id) => ({ id, ok: !!document.getElementById(id) })),
);
console.log('REGRESSION', regression);

await browser.close();
