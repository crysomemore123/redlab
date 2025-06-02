// src/app/eugene-onegin/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './eugene-onegin.module.css';

interface GalleryImageItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Placeholder image data - REPLACE with your actual images and their dimensions
// Store your images in the public folder, e.g., public/images/eugene-onegin/
// The target site shows 8 images.
const eugeneOneginGalleryImages: GalleryImageItem[] = [
  { id: 'eo_img1', src: '/images/eugene-onegin/eugene_onegin_01.jpg', alt: 'Scene from Eugene Onegin', width: 800, height: 1200 }, // Portrait
  { id: 'eo_img2', src: '/images/eugene-onegin/eugene_onegin_02.jpg', alt: 'Scene from Eugene Onegin', width: 800, height: 533 },  // Landscape
  { id: 'eo_img3', src: '/images/eugene-onegin/eugene_onegin_03.jpg', alt: 'Scene from Eugene Onegin', width: 800, height: 533 },  // Landscape
  { id: 'eo_img4', src: '/images/eugene-onegin/eugene_onegin_04.jpg', alt: 'Scene from Eugene Onegin', width: 800, height: 533 },  // Landscape
  { id: 'eo_img5', src: '/images/eugene-onegin/eugene_onegin_05.jpg', alt: 'Scene from Eugene Onegin', width: 800, height: 533 },  // Landscape
  { id: 'eo_img6', src: '/images/eugene-onegin/eugene_onegin_06.jpg', alt: 'Scene from Eugene Onegin', width: 800, height: 1200 }, // Portrait
  { id: 'eo_img7', src: '/images/eugene-onegin/eugene_onegin_07.jpg', alt: 'Scene from Eugene Onegin', width: 800, height: 533 },  // Landscape
  { id: 'eo_img8', src: '/images/eugene-onegin/eugene_onegin_08.jpg', alt: 'Scene from Eugene Onegin', width: 800, height: 1200 }, // Portrait
  // Add more images if you have them.
];

export default function EugeneOneginPage() {
  const [isClient, setIsClient] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImageItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const productionDetails = [
    "A play after Alexander Pushkin (in Russian and Georgian) (2010)",
    "Marjanishvili Dramatic Theatre, Tbilisi, Georgia",
    "Direction, Choreography, and Production design by Irina Gachechiladze"
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
    const nextIndex = (currentIndex + 1) % eugeneOneginGalleryImages.length;
    setSelectedImage(eugeneOneginGalleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + eugeneOneginGalleryImages.length) % eugeneOneginGalleryImages.length;
    setSelectedImage(eugeneOneginGalleryImages[prevIndex]);
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
        <h1 className={styles.mainTitle}>EUGENE ONEGIN</h1>
        <div className={styles.productionInfo}>
          {productionDetails.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </header>

      {isClient ? (
        <main className={styles.galleryGrid}>
          {eugeneOneginGalleryImages.map((image, index) => (
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
