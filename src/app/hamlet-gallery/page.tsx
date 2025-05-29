// src/app/hamlet-gallery/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import styles from './hamlet-gallery.module.css';

// Define a type for your image data
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number; // Original width of the image
  height: number; // Original height of the image
}

// Placeholder image data - replace with your actual images and their dimensions
// Store your images in the public folder, e.g., public/images/hamlet/
const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/hamlet/hamlet_image_01.jpg', alt: 'Scene from Hamlet - A Version', width: 800, height: 533 },
  { id: 2, src: '/images/hamlet/hamlet_image_02.jpg', alt: 'Scene from Hamlet - A Version', width: 800, height: 1200 },
  { id: 3, src: '/images/hamlet/hamlet_image_03.jpg', alt: 'Scene from Hamlet - A Version', width: 800, height: 533 },
  { id: 4, src: '/images/hamlet/hamlet_image_04.jpg', alt: 'Scene from Hamlet - A Version', width: 800, height: 533 },
  { id: 5, src: '/images/hamlet/hamlet_image_05.jpg', alt: 'Scene from Hamlet - A Version', width: 800, height: 1200 },
  { id: 6, src: '/images/hamlet/hamlet_image_06.jpg', alt: 'Scene from Hamlet - A Version', width: 800, height: 533 },
  { id: 7, src: '/images/hamlet/hamlet_image_07.jpg', alt: 'Scene from Hamlet - A Version', width: 800, height: 533 },
  { id: 8, src: '/images/hamlet/hamlet_image_08.jpg', alt: 'Scene from Hamlet - A Version', width: 800, height: 1200 },
  { id: 9, src: '/images/hamlet/hamlet_image_09.jpg', alt: 'Scene from Hamlet - A Version', width: 800, height: 533 },
  { id: 10, src: '/images/hamlet/hamlet_image_10.jpg', alt: 'Scene from Hamlet - A Version', width: 800, height: 533 },
  { id: 11, src: '/images/hamlet/hamlet_image_11.jpg', alt: 'Scene from Hamlet - A Version', width: 800, height: 1200 }, // Added
  { id: 12, src: '/images/hamlet/hamlet_image_12.jpg', alt: 'Scene from Hamlet - A Version', width: 800, height: 533 },  // Added
  { id: 13, src: '/images/hamlet/hamlet_image_13.jpg', alt: 'Scene from Hamlet - A Version', width: 800, height: 1200 }, // Added
  { id: 14, src: '/images/hamlet/hamlet_image_14.jpg', alt: 'Scene from Hamlet - A Version', width: 800, height: 533 },  // Added
  { id: 15, src: '/images/hamlet/hamlet_image_15.jpg', alt: 'Scene from Hamlet - A Version', width: 800, height: 1200 }, // Added
  // Ensure you have images named hamlet_image_01.jpg through hamlet_image_15.jpg
  // in your public/images/hamlet/ folder, or update these src paths.
  // Also, update the width and height for each to match your actual images.
];

export default function HamletGalleryPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.headerSection}>
        <h1 className={styles.mainTitle}>HAMLET. A VERSION</h1>
        <div className={styles.productionInfo}>
          <p>World Premiere by Boris Akunin</p>
          <p>Direction, Production Design & Concept by Irina Gachechiladze</p>
          <p>Compositions by Giya Kancheli</p>
          <p>
            Produced by Red Lab Productions in association with Roust Theatre Company
            <br />
            and Executive Producer Mark Mullen
          </p>
          <p>Spring 2017, Theatre at St. Clements NYC</p>
        </div>
      </header>

      <main className={styles.galleryContainer}>
        {galleryImages.map((image) => (
          <div key={image.id} className={styles.galleryItem}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width} // Provide original width for better optimization
              height={image.height} // Provide original height for better optimization
              layout="responsive" // Makes image responsive within its container
              className={styles.galleryImage}
              onError={(e) => {
                // Fallback for broken images
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prevent infinite loop
                target.src = `https://placehold.co/${image.width}x${image.height}/EFEFEF/AAAAAA&text=Image+Not+Found`;
              }}
            />
          </div>
        ))}
      </main>
    </div>
  );
}
