import "./globals.css";
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
        {/* Add preconnect hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Meta viewport tag for proper responsive behavior */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="text-black font-sans relative min-h-screen">
        {/* Fixed background div with the dotted pattern */}
        <div className="fixed inset-0 bg-dotted-pattern bg-repeat z-[-1]" />
        
        <Navbar />
        <main className="px-4 sm:px-8">{children}</main>
        <Footer />
        
        {/* Add script for hydration debugging in development */}
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