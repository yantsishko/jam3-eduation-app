const sm = require('sitemap');
const fs = require('fs');

const sitemap = sm.createSitemap({
  hostname: 'http://localhost',
  cacheTime: 600000,
  urls: [
    { url: '/', changefreq: 'monthly', priority: 0.8 },
  ],
});

fs.writeFileSync('app/sitemap.xml', sitemap.toString());
