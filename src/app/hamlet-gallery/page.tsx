// src/app/hamlet-gallery/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
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
const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/hamlet/hamlet_image_01.jpg', alt: 'Scene from Hamlet - A Version (Image 1)', width: 800, height: 533 },
  { id: 2, src: '/images/hamlet/hamlet_image_02.jpg', alt: 'Scene from Hamlet - A Version (Image 2)', width: 800, height: 1200 },
  { id: 3, src: '/images/hamlet/hamlet_image_03.jpg', alt: 'Scene from Hamlet - A Version (Image 3)', width: 800, height: 533 },
  { id: 4, src: '/images/hamlet/hamlet_image_04.jpg', alt: 'Scene from Hamlet - A Version (Image 4)', width: 800, height: 533 },
  { id: 5, src: '/images/hamlet/hamlet_image_05.jpg', alt: 'Scene from Hamlet - A Version (Image 5)', width: 800, height: 1200 },
  { id: 6, src: '/images/hamlet/hamlet_image_06.jpg', alt: 'Scene from Hamlet - A Version (Image 6)', width: 800, height: 533 },
  { id: 7, src: '/images/hamlet/hamlet_image_07.jpg', alt: 'Scene from Hamlet - A Version (Image 7)', width: 800, height: 533 },
  { id: 8, src: '/images/hamlet/hamlet_image_08.jpg', alt: 'Scene from Hamlet - A Version (Image 8)', width: 800, height: 1200 },
  { id: 9, src: '/images/hamlet/hamlet_image_09.jpg', alt: 'Scene from Hamlet - A Version (Image 9)', width: 800, height: 533 },
  { id: 10, src: '/images/hamlet/hamlet_image_10.jpg', alt: 'Scene from Hamlet - A Version (Image 10)', width: 800, height: 533 },
  { id: 11, src: '/images/hamlet/hamlet_image_11.jpg', alt: 'Scene from Hamlet - A Version (Image 11)', width: 800, height: 1200 },
  { id: 12, src: '/images/hamlet/hamlet_image_12.jpg', alt: 'Scene from Hamlet - A Version (Image 12)', width: 800, height: 533 },
  { id: 13, src: '/images/hamlet/hamlet_image_13.jpg', alt: 'Scene from Hamlet - A Version (Image 13)', width: 800, height: 1200 },
  { id: 14, src: '/images/hamlet/hamlet_image_14.jpg', alt: 'Scene from Hamlet - A Version (Image 14)', width: 800, height: 533 },
  { id: 15, src: '/images/hamlet/hamlet_image_15.jpg', alt: 'Scene from Hamlet - A Version (Image 15)', width: 800, height: 1200 },
];

export default function HamletGalleryPage() {
  const [isClient, setIsClient] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const showNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return;
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowRight') {
        showNextImage();
      } else if (event.key === 'ArrowLeft') {
        showPrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (selectedImage) { // Only reset if lightbox was open
        document.body.style.overflow = 'auto';
      }
    };
  }, [selectedImage, currentIndex]); // Added selectedImage to dependency array for cleanup logic

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

      {isClient ? (
        <main className={styles.galleryContainer}>
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={styles.galleryItem}
              onClick={() => openLightbox(image, index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(image, index); }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                layout="responsive"
                className={styles.galleryImage}
                priority={index < 6}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://placehold.co/${image.width}x${image.height}/EFEFEF/AAAAAA&text=Image+Not+Found`;
                }}
              />
            </div>
          ))}
        </main>
      ) : (
        <div className={styles.galleryContainer}>
          {[...Array(9)].map((_, index) => (
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
          aria-labelledby="lightbox-image-alt" // Use alt text as accessible name
        >
          {/* Hidden p tag for screen readers to announce the image based on its alt text */}
          <p id="lightbox-image-alt" className={styles.srOnly}>{selectedImage.alt}</p>

          <button
            className={`${styles.lightboxButton} ${styles.lightboxCloseButton}`}
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <button
            className={`${styles.lightboxButton} ${styles.lightboxPrevButton}`}
            onClick={showPrevImage}
            aria-label="Previous image"
          >
            &lsaquo;
          </button>
          
          <div className={styles.lightboxImageContainer} onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt="" // Alt text is handled by aria-labelledby for the dialog
              width={selectedImage.width}
              height={selectedImage.height}
              className={styles.lightboxActualImage} // Apply this class for direct styling
              // No inline style for sizing; CSS handles it.
              // objectFit="contain" // This can also be set here, but CSS class is also doing it.
            />
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