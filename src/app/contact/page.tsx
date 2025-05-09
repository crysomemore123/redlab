// src/app/contact/page.tsx (or app/contact/page.tsx)

import React from 'react';
import ContactSection from '@/components/ContactSection'; // Adjust path if your components folder is elsewhere

export default function ContactPage() {
  return (
    <main className="py-8">
      {/*
        The overall page background (like the light grey or dotted pattern)
        should ideally be handled by your RootLayout or globals.css.
        If you want a specific background JUST for the contact page's main area,
        you can add a class to this <main> tag, e.g., className="bg-gray-100 py-8"
      */}
      <ContactSection />
    </main>
  );
}