import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const SITE_URL = "https://anamqatar.com";

// Helper to slugify item names
function serviceItemToSlug(item) {
  return item
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// 1. Static Pages with image annotations for Google Images
const staticPages = [
  {
    path: "", priority: "1.0", changefreq: "daily",
    images: [
      { loc: `${SITE_URL}/og.png`, title: "ANAM Trading & Contracting — Premium Interior Solutions Qatar", caption: "Best flooring, wall panels, doors, curtains and landscaping in Doha, Qatar" }
    ]
  },
  { path: "products", priority: "0.9", changefreq: "weekly" },
  {
    path: "flooring", priority: "1.0", changefreq: "weekly",
    images: [
      { loc: `${SITE_URL}/assets/flooring-banner-vrcdnXx0.jpg`, title: "Best Flooring in Qatar — ANAM Qatar", caption: "Premium parquet, SPC, vinyl and carpet flooring in Doha Qatar" }
    ]
  },
  {
    path: "wall-panels", priority: "1.0", changefreq: "weekly",
    images: [
      { loc: `${SITE_URL}/og.png`, title: "Wall Panels Qatar — ANAM Trading & Contracting", caption: "Premium SPC wall panels, wooden panels, UV panels in Qatar" }
    ]
  },
  { path: "doors", priority: "0.9", changefreq: "weekly" },
  { path: "windows", priority: "0.9", changefreq: "weekly" },
  { path: "partitions", priority: "0.9", changefreq: "weekly" },
  { path: "ceiling-solutions", priority: "0.9", changefreq: "weekly" },
  { path: "kitchen-wardrobe", priority: "0.9", changefreq: "weekly" },
  { path: "profile-accessories", priority: "0.9", changefreq: "weekly" },
  { path: "products/curtains-and-blinds", priority: "0.9", changefreq: "weekly" },
  { path: "products/solid-surface-for-interior", priority: "0.9", changefreq: "weekly" },
  { path: "products/wood-materials", priority: "0.9", changefreq: "weekly" },
  { path: "products/shades", priority: "0.9", changefreq: "weekly" },
  { path: "products/fencing", priority: "0.9", changefreq: "weekly" },
  { path: "upvc", priority: "0.9", changefreq: "weekly" },
  { path: "aluminum", priority: "0.9", changefreq: "weekly" },
  { path: "stainless-steel", priority: "0.9", changefreq: "weekly" },
  { path: "about", priority: "0.8", changefreq: "weekly" },
  { path: "projects", priority: "0.8", changefreq: "weekly" },
  { path: "contact", priority: "0.8", changefreq: "weekly" },
  { path: "gallery", priority: "0.7", changefreq: "weekly" },
  { path: "blog", priority: "0.7", changefreq: "weekly" },
  { path: "careers", priority: "0.6", changefreq: "monthly" }
];

// 2. Read Services
let services = [];
try {
  const serviceDataContent = fs.readFileSync(path.join(projectRoot, "src/data/serviceData.js"), "utf8");
  const itemsRegex = /items:\s*\[([^\]]+)\]/g;
  let match;
  const itemsSet = new Set();
  while ((match = itemsRegex.exec(serviceDataContent)) !== null) {
    const rawItems = match[1].split(",");
    rawItems.forEach(item => {
      const cleanItem = item.trim().replace(/['"]/g, "");
      if (cleanItem && cleanItem !== "Interior & Exterior Solutions") {
        itemsSet.add(cleanItem);
      }
    });
  }
  itemsSet.add("Interior & Exterior Solutions");
  services = Array.from(itemsSet).map(item => ({
    path: `services/${serviceItemToSlug(item)}`,
    priority: "0.7",
    changefreq: "weekly"
  }));
} catch (e) {
  console.error("Failed to parse services dynamic urls:", e);
}

// 3. Read Blogs
let blogs = [];
try {
  const blogDataContent = fs.readFileSync(path.join(projectRoot, "src/data/blogs.js"), "utf8");
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = slugRegex.exec(blogDataContent)) !== null) {
    blogs.push({
      path: `blog/${match[1]}`,
      priority: "0.6",
      changefreq: "weekly"
    });
  }
} catch (e) {
  console.error("Failed to parse blogs dynamic urls:", e);
}

// 4. Read Products recursively
let products = [];
try {
  const productDataPath = path.join(projectRoot, "src/data/productData.js");
  let productCode = fs.readFileSync(productDataPath, "utf8");
  productCode = productCode.replace(/import\s+[\s\S]*?\s+from\s+['"].*?['"];?/g, "");
  productCode = productCode.replace(/image:\s*[a-zA-Z0-9_]+,/g, "");
  productCode = productCode.replace(/thickness:\s*[a-zA-Z0-9_ -.]+,/g, "");
  productCode = productCode.replace(/wearLayer:\s*[a-zA-Z0-9_ -.]+,/g, "");
  productCode = productCode.replace(/warranty:\s*[a-zA-Z0-9_ -.]+,/g, "");
  const allImports = [...productCode.matchAll(/import\s+(\w+)/g)].map(m => m[1]);
  let declarationHeader = allImports.map(name => `const ${name} = "";`).join("\n");
  const finalEvalCode = `
    ${declarationHeader}
    ${productCode.replace("export const productData", "const productData")}
    globalThis.__products = productData;
  `;
  const runContext = new Function(finalEvalCode);
  runContext();
  const rawProducts = globalThis.__products;

  function walk(nodes, currentPath = []) {
    nodes.forEach(node => {
      if (!node.slug) return;
      const nextPath = [...currentPath, node.slug];
      products.push({
        path: `products/${nextPath.join("/")}`,
        priority: currentPath.length === 0 ? "0.8" : "0.7",
        changefreq: "weekly"
      });
      if (node.categories && Array.isArray(node.categories)) {
        walk(node.categories, nextPath);
      }
    });
  }

  if (rawProducts && Array.isArray(rawProducts)) {
    walk(rawProducts);
  }
} catch (e) {
  console.error("Failed to parse products dynamic urls:", e);
}

// 5. Build XML Sitemap with image:image extensions
const allPages = [...staticPages, ...services, ...blogs, ...products];
const currentDate = new Date().toISOString().split("T")[0];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

allPages.forEach(p => {
  const url = p.path ? `${SITE_URL}/${p.path}` : `${SITE_URL}/`;
  let imageBlock = "";
  if (p.images && p.images.length > 0) {
    imageBlock = p.images.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join("");
  }
  sitemapXml += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>${imageBlock}
  </url>
`;
});

sitemapXml += `</urlset>\n`;

// 6. Enhanced Robots.txt (preserve custom content)
const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /api/

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: AdsBot-Google
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

// 7. Write to public/ and dist/
const publicDir = path.join(projectRoot, "public");
const distDir = path.join(projectRoot, "dist");

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8");
console.log("Successfully generated sitemap.xml in public/");

fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsTxt, "utf8");
console.log("Successfully generated robots.txt in public/");

if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf8");
  fs.writeFileSync(path.join(distDir, "robots.txt"), robotsTxt, "utf8");
  console.log("Successfully sync'd sitemap & robots files to dist/");
}
