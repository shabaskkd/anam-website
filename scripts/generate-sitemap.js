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

// 1. Static Pages
const staticPages = [
  { path: "", priority: "1.0", changefreq: "daily" },
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
  // Find all service item names
  const itemsRegex = /items:\s*\[([^\]]+)\]/g;
  let match;
  const itemsSet = new Set();
  while ((match = itemsRegex.exec(serviceDataContent)) !== null) {
    const rawItems = match[1].split(",");
    rawItems.forEach(item => {
      const cleanItem = item.trim().replace(/['"]/g, "");
      if (cleanItem && cleanItem !== "Interior & Exterior Solutions") { // skip heading duplicate if any
        itemsSet.add(cleanItem);
      }
    });
  }
  // Add heading items explicitly
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

// 4. Read Products recursively by cleaning the file and executing it safely
let products = [];
try {
  const productDataPath = path.join(projectRoot, "src/data/productData.js");
  let productCode = fs.readFileSync(productDataPath, "utf8");
  
  // Clean imports
  productCode = productCode.replace(/import\s+[\s\S]*?\s+from\s+['"].*?['"];?/g, "");
  // Clean image attributes to avoid undefined references
  productCode = productCode.replace(/image:\s*[a-zA-Z0-9_]+,/g, "");
  productCode = productCode.replace(/thickness:\s*[a-zA-Z0-9_ -.]+,/g, "");
  productCode = productCode.replace(/wearLayer:\s*[a-zA-Z0-9_ -.]+,/g, "");
  productCode = productCode.replace(/warranty:\s*[a-zA-Z0-9_ -.]+,/g, "");

  // Create mock environment variables for any other unhandled image imports
  const context = {
    productData: []
  };

  // We will find categories, nested arrays, and construct nested paths.
  // To be safe, let's parse using basic regex/JSON-like extraction
  const evalCode = `
    const productData = [];
    \n${productCode}\n
    globalThis.__products = productData;
  `;
  
  const allImports = [...productCode.matchAll(/import\s+(\w+)/g)].map(m => m[1]);
  let declarationHeader = allImports.map(name => `const ${name} = "";`).join("\n");
  
  const finalEvalCode = `
    ${declarationHeader}
    ${productCode.replace("export const productData", "const productData")}
    globalThis.__products = productData;
  `;
  
  // Safely run the eval
  const runContext = new Function(finalEvalCode);
  runContext();
  
  const rawProducts = globalThis.__products;
  
  // Recursively collect paths
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

// 5. Build XML Sitemap content
const allPages = [...staticPages, ...services, ...blogs, ...products];

// Get current date in YYYY-MM-DD
const currentDate = new Date().toISOString().split("T")[0];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

allPages.forEach(p => {
  const url = p.path ? `${SITE_URL}/${p.path}` : `${SITE_URL}/`;
  sitemapXml += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>
`;
});

sitemapXml += `</urlset>\n`;

// 6. Robots.txt content
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

// 7. Write to public directory
const publicDir = path.join(projectRoot, "public");
const distDir = path.join(projectRoot, "dist");

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8");
console.log("Successfully generated sitemap.xml in public/");

fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsTxt, "utf8");
console.log("Successfully generated robots.txt in public/");

// Also write to dist if it exists (for immediate deployment sync)
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf8");
  fs.writeFileSync(path.join(distDir, "robots.txt"), robotsTxt, "utf8");
  console.log("Successfully sync'd sitemap & robots files to dist/");
}
