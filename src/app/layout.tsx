// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata, Viewport } from 'next'; // <-- Make sure Viewport is imported

// --- UPDATED METADATA ---
// The viewport property has been removed from here.
export const metadata: Metadata = {
  title: "Red Lab Productions",
  description: "Opera and Theatre in Cultural Collaboration",
  // The 'icons' property is commented out for the failsafe test.
  // This forces Next.js to look for the default /app/favicon.ico file.
  // icons: {
  //   icon: '/images/redlab-favicon.png',
  // },
};

// --- NEW VIEWPORT EXPORT ---
// This is the new, correct way to define viewport settings.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* The <head> tag is correctly removed. Next.js builds it from metadata. */}
      <body className="font-sans relative min-h-screen flex flex-col">
        <div className="fixed inset-0 bg-dotted-pattern bg-repeat z-[-1]" />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* This debug script can stay if you find it useful */}
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
