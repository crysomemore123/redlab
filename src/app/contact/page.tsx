// src/app/contact/page.tsx
import React from 'react';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  return (
    // Change <main> to <div> to avoid nesting <main> tags
    <div className="py-8">
      <ContactSection />
    </div>
  );
}