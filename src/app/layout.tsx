// src/app/layout.tsx
import "./globals.css"; // Correctly imported
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Red Lab Productions",
  description: "Opera and Theatre in Cultural Collaboration",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Ensure the viewport tag is present for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Keep your font links */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Add links to specific fonts if needed, e.g., Roboto, Oswald */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" /> */}
      </head>
      {/* Ensure font-sans is applied if you want Tailwind's default sans-serif stack */}
      <body className="font-sans relative min-h-screen flex flex-col">
        {/* Fixed background div using your custom pattern from tailwind.config.js */}
        {/* Ensure 'dotted-background.png' exists in your public/patterns/ directory */}
        <div className="fixed inset-0 bg-dotted-pattern bg-repeat z-[-1]" />

        <Navbar />
        {/* Let child pages/components manage their main container/padding */}
        {/* Removed px-4 sm:px-8 from main to avoid double padding */}
        {/* Added flex-grow to make main fill available space */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />

        {/* Your hydration debug script (keep if needed for development) */}
        {process.env.NODE_ENV === 'development' && (
          <script dangerouslySetInnerHTML={{
            __html: `
              console.log('Hydration complete');
              window.addEventListener('error', function(e) {
                if (e.message && e.message.includes('hydration')) {
                  console.error('Hydration error:', e);
                }
              });
            `
          }} />
        )}
      </body>
    </html>
  );
}