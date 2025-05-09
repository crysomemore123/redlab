'use client';
import { useEffect } from 'react';

export default function DonatePage() {
  useEffect(() => {
    window.open(
      'https://www.indiegogo.com/projects/georgian-american-theatrical-feast#/',
      '_blank'
    );
  }, []);

  return null; // Shows nothing
}
