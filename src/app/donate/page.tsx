'use client';
import { useEffect } from 'react';

export default function DonatePage() {
  useEffect(() => {
    window.open(
      'https://www.indiegogo.com/projects/georgian-american-theatrical-feast#/',
      '_blank'
    );
  }, []);

  return (
    <main className="p-10 text-center">
      <h1 className="text-2xl font-bold">Opening donation page...</h1>
      <p>If nothing happens, <a
        href="https://www.indiegogo.com/projects/georgian-american-theatrical-feast#/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >click here</a>.</p>
    </main>
  );
}
