const fs = require('fs');
const path = require('path');

const appServerDir = path.join(process.cwd(), '.next', 'server', 'app');

function checkFile(relPath, tests) {
  const filePath = path.join(appServerDir, relPath);
  if (!fs.existsSync(filePath)) {
    console.log('[FAIL] File does not exist:', relPath);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`--- Checking: ${relPath} ---`);
  for (const [name, fn] of Object.entries(tests)) {
    const passed = fn(content);
    console.log(passed ? '  [PASS]' : '  [FAIL]', name);
  }
}

// 1. Homepage
checkFile('index.html', {
  'Canonical tag': (c) => c.includes('rel="canonical" href="https://firstmotorsbsr.com"'),
  'Favicon link': (c) => c.includes('/favicon.ico'),
  'InboxCrew attribution': (c) => c.includes('https://inboxcrew.in/'),
  'Instagram link': (c) => c.includes('first_motors_bulandshahr_'),
  'LocalBusiness Schema': (c) => c.includes('AutomotiveBusiness') && c.includes('10+ years'),
  'No fake SearchAction': (c) => !c.includes('SearchAction'),
  'No unverified geo tags': (c) => !c.includes('geo.position'),
});

// 2. Buy page
checkFile('buy.html', {
  'Canonical tag': (c) => c.includes('rel="canonical" href="https://firstmotorsbsr.com/buy"'),
  'Showroom stock distinction': (c) => c.includes('100+ vehicles'),
  'BreadcrumbList schema': (c) => c.includes('BreadcrumbList'),
});

// 3. Vehicle detail page
checkFile('car/maruti-suzuki-alto-k10-vxi-2017.html', {
  'Canonical tag': (c) => c.includes('rel="canonical" href="https://firstmotorsbsr.com/car/maruti-suzuki-alto-k10-vxi-2017"'),
  'Single H1 present': (c) => (c.match(/<h1/g) || []).length === 1,
  'Car Schema with SKU': (c) => c.includes('"@type":"Car"') && c.includes('FM-2017-ALTO'),
  'No fake VIN': (c) => !c.includes('vehicleIdentificationNumber'),
  'Bulandshahr location context': (c) => c.includes('Chandpur Road, Bulandshahr'),
});

// 4. FAQ page
checkFile('faq.html', {
  'Canonical tag': (c) => c.includes('rel="canonical" href="https://firstmotorsbsr.com/faq"'),
  'FAQ answers in initial HTML': (c) => c.includes('Chandpur Road, near Kalyan Singh Rajkiya Medical College') && c.includes('100+ vehicles physically available'),
  'FAQPage Schema': (c) => c.includes('"@type":"FAQPage"'),
});

// 5. Contact page
checkFile('contact.html', {
  'Canonical tag': (c) => c.includes('rel="canonical" href="https://firstmotorsbsr.com/contact"'),
  'Standardized NAP': (c) => c.includes('Chandpur Road, near Kalyan Singh Rajkiya Medical College'),
});

// 6. Service pages canonical check
const servicePages = ['sell', 'valuation', 'exchange', 'finance', 'test-drive', 'about', 'why-first-motors', 'inspection', 'privacy-policy', 'terms'];
for (const p of servicePages) {
  checkFile(`${p}.html`, {
    [`Canonical tag for ${p}`]: (c) => c.includes(`rel="canonical" href="https://firstmotorsbsr.com/${p}"`),
  });
}
