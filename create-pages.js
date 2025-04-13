const fs = require("fs");
const path = require("path");

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
  fs.mkdirSync(fullDir, { recursive: true });

  const filePath = path.join(fullDir, "page.tsx");

  const content = `export default function Page() {
  return (
    <main className="p-8 sm:p-20 text-black">
      <h1 className="text-3xl font-bold mb-4">${pagePath.replace(/-/g, " ")}</h1>
      <p>Page content coming soon...</p>
    </main>
  );
}
`;

  fs.writeFileSync(filePath, content, "utf8");
});

console.log("✅ All page.tsx files created!");
