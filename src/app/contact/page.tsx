// src/app/contact/page.tsx
import React from 'react';
import ContactSection from '@/components/ContactSection'; // Adjust path if necessary

export default function ContactPage() {
  return (
    // Add padding around the ContactSection if needed,
    // or let the ContactSection's container handle it.
    // The py-8 gives space from header/footer.
    <main className="py-8">
      <ContactSection />
    </main>
  );
}