import fs from "fs";
import path from "path";
import { fileURLToPath } from "url"; // Needed to replicate __dirname

// Replicate __dirname functionality in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  "opera-in-regions",
  "theatrical-feast/about",
  "theatrical-feast/press",
  "theatrical-feast/gallery",
  "theatrical-feast/productions",
  "theatrical-feast/readings",
  "theatrical-feast/events",
  "theatrical-feast/playwrights",
  "theatrical-feast/cast-creative",
  "theatrical-feast/about-georgia",
  "theatrical-feast/donate",
  "hamlet/about",
  "hamlet/press",
  "hamlet/gallery",
  "past-productions/don-giovanni",
  "past-productions/eugene-onegin",
  "past-productions/the-seagull",
  "past-productions/sound-sculptures",
  "past-productions/rut",
  "contact",
  "about"
];

const basePath = path.join(__dirname, "src", "app");

pages.forEach((pagePath) => {
  const fullDir = path.join(basePath, pagePath);
  // Use fs.mkdirSync from the imported fs module
  fs.mkdirSync(fullDir, { recursive: true });

  const filePath = path.join(fullDir, "01_page.tsx"); // Changed from "page.tsx" to "01_page.tsx" to match original logic

  // Sanitize pagePath for use in title if needed, or ensure it's appropriate
  const titleName = pagePath
    .split('/') // Split by slash
    .pop() // Get the last part
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize first letter of each word


  const content = `export default function Page() {
  return (
    <main className="p-8 sm:p-20 text-black">
      <h1 className="text-3xl font-bold mb-4">${titleName}</h1>
      <p>Page content coming soon...</p>
    </main>
  );
}
`;

  // Use fs.writeFileSync from the imported fs module
  fs.writeFileSync(filePath, content, "utf8");
});

console.log("✅ All 01_page.tsx files created!");