// src/app/the-seagull/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './the-seagull.module.css';

interface GalleryImageItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Placeholder image data - REPLACE with your actual images and their dimensions
// Store your images in the public folder, e.g., public/images/the-seagull/
// The target site shows 8 images for The Seagull.
const theSeagullGalleryImages: GalleryImageItem[] = [
  { id: 'ts_img1', src: '/images/the-seagull/the_seagull_01.jpg', alt: 'Scene from The Seagull', width: 800, height: 533 }, // Landscape
  { id: 'ts_img2', src: '/images/the-seagull/the_seagull_02.jpg', alt: 'Scene from The Seagull', width: 800, height: 1200 },// Portrait
  { id: 'ts_img3', src: '/images/the-seagull/the_seagull_03.jpg', alt: 'Scene from The Seagull', width: 800, height: 533 }, // Landscape
  { id: 'ts_img4', src: '/images/the-seagull/the_seagull_04.jpg', alt: 'Scene from The Seagull', width: 800, height: 533 }, // Landscape
  { id: 'ts_img5', src: '/images/the-seagull/the_seagull_05.jpg', alt: 'Scene from The Seagull', width: 800, height: 1200 },// Portrait
  { id: 'ts_img6', src: '/images/the-seagull/the_seagull_06.jpg', alt: 'Scene from The Seagull', width: 800, height: 533 }, // Landscape
  { id: 'ts_img7', src: '/images/the-seagull/the_seagull_07.jpg', alt: 'Scene from The Seagull', width: 800, height: 533 }, // Landscape
  { id: 'ts_img8', src: '/images/the-seagull/the_seagull_08.jpg', alt: 'Scene from The Seagull', width: 800, height: 1200 },// Portrait
];

export default function TheSeagullPage() {
  const [isClient, setIsClient] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImageItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const productionDetails = [
    "A play by Anton Chekhov",
    "at TheaterLab, New York, NY (2013)",
    "Direction and Production design by Irina Gachechiladze"
  ];

  const openLightbox = (image: GalleryImageItem, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % theSeagullGalleryImages.length;
    setSelectedImage(theSeagullGalleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + theSeagullGalleryImages.length) % theSeagullGalleryImages.length;
    setSelectedImage(theSeagullGalleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return;
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowRight') {
        showNextImage({ stopPropagation: () => {} } as React.MouseEvent);
      } else if (event.key === 'ArrowLeft') {
        showPrevImage({ stopPropagation: () => {} } as React.MouseEvent);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage, currentIndex]);

  return (
    <div className={styles.pageContainer}>
      <header className={styles.headerSection}>
        <h1 className={styles.mainTitle}>THE SEAGULL</h1>
        <div className={styles.productionInfo}>
          {productionDetails.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </header>

      {isClient ? (
        <main className={styles.galleryGrid}>
          {theSeagullGalleryImages.map((image, index) => (
            <div
              key={image.id}
              className={styles.galleryItem}
              onClick={() => openLightbox(image, index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(image, index)}}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={styles.galleryImage}
                priority={index < 4} // Prioritize loading for the first few images
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw" // Example sizes, adjust
              />
            </div>
          ))}
        </main>
      ) : (
        <div className={styles.galleryGrid}>
          {[...Array(8)].map((_, index) => ( // Skeleton for 8 items
            <div key={index} className={styles.galleryItem}>
              <div className={`${styles.skeletonImage} ${styles.animatePulse}`}></div>
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div
          className={styles.lightboxOverlay}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-image-title"
        >
          <button className={`${styles.lightboxButton} ${styles.lightboxCloseButton}`} onClick={closeLightbox} aria-label="Close lightbox">
            &times;
          </button>
          <button
            className={`${styles.lightboxButton} ${styles.lightboxPrevButton}`}
            onClick={showPrevImage}
            aria-label="Previous image"
          >
            &lsaquo;
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              id="lightbox-image"
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              style={{ maxWidth: '90vw', maxHeight: '85vh', width: 'auto', height: 'auto', objectFit: 'contain' }}
            />
            {/* <p id="lightbox-image-title" className={styles.lightboxCaption}>{selectedImage.alt}</p> */}
          </div>
          <button
            className={`${styles.lightboxButton} ${styles.lightboxNextButton}`}
            onClick={showNextImage}
            aria-label="Next image"
          >
            &rsaquo;
          </button>
        </div>
      )}
    </div>
  );
}
