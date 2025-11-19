// src/app/layout.tsx
import React from 'react';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata, Viewport } from 'next';
// 1. OPTIMIZATION: Import the font optimizer
import { Inter } from 'next/font/google';

// 2. OPTIMIZATION: Configure the font
// This downloads the font at build time so there is no network delay
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Ensures text is visible immediately
  variable: '--font-inter', // Optional: allows usage in Tailwind
});

export const metadata: Metadata = {
  title: "Red Lab Productions",
  description: "Opera and Theatre in Cultural Collaboration",
  // icons: {
  //   icon: '/images/redlab-favicon.png',
  // },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 3. OPTIMIZATION: Apply the font class here.
         ${inter.className} applies the optimized font.
         "font-sans" tells Tailwind to use it.
      */}
      <body className={`${inter.className} font-sans relative min-h-screen flex flex-col`}>
        
        {/* Background Pattern */}
        <div className="fixed inset-0 bg-dotted-pattern bg-repeat z-[-1]" />
        
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />

        {/* Debug script (Only runs in development, does not slow down production) */}
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