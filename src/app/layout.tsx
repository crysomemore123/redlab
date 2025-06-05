// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from 'next'; // Import Metadata type

export const metadata: Metadata = { // Ensure you're using the Metadata type
  title: "Red Lab Productions",
  description: "Opera and Theatre in Cultural Collaboration",
  icons: {
    icon: '/images/redlab-favicon.png', // <--- CORRECTED PATH
    // You can also add other types of icons here if needed:
    // apple: '/apple-touch-icon.png', // For Apple devices
    // shortcut: '/shortcut-icon.png' // For older browsers or specific needs
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans relative min-h-screen flex flex-col">
        <div className="fixed inset-0 bg-dotted-pattern bg-repeat z-[-1]" />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
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