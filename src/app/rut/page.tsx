'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './rut.module.css'; // CSS module for RUT page

interface GalleryImageItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Placeholder image data for RUT - REPLACE with your actual images and dimensions
// Store your images in public/images/rut/
// The target site shows 4 images for RUT.
const rutGalleryImages: GalleryImageItem[] = [
  { id: 'rut_img1', src: '/images/rut/rut_01.jpg', alt: 'Scene from RUT', width: 800, height: 533 },
  { id: 'rut_img2', src: '/images/rut/rut_02.jpg', alt: 'Scene from RUT', width: 800, height: 533 },
  { id: 'rut_img3', src: '/images/rut/rut_03.jpg', alt: 'Scene from RUT', width: 800, height: 533 },
  // Add more images if you have them, up to 4 are shown on the target.
];

export default function RutPage() {
  const [isClient, setIsClient] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImageItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const productionDetails = [
    "A play by Adam Knight",
    "Commissioned by ArtSeed En event \"Presence Betzavta\" | New York, NY (2014)",
    "Directed by Irina Gachechiladze"
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
    const nextIndex = (currentIndex + 1) % rutGalleryImages.length;
    setSelectedImage(rutGalleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + rutGalleryImages.length) % rutGalleryImages.length;
    setSelectedImage(rutGalleryImages[prevIndex]);
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
        <h1 className={styles.mainTitle}>RUT</h1>
        <div className={styles.productionInfo}>
          {productionDetails.map((line, index) => (
            <p key={index}>
              {line.split('\n').map((subLine, subIndex) => (
                <span key={subIndex}>
                  {subLine}
                  {subIndex < line.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          ))}
        </div>
      </header>

      {isClient ? (
        <main className={styles.galleryGrid}>
          {rutGalleryImages.map((image, index) => (
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
                priority={index < 4} // Prioritize loading for these 4 images
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw" // Adjust if needed
              />
            </div>
          ))}
        </main>
      ) : (
        <div className={styles.galleryGrid}>
          {[...Array(rutGalleryImages.length || 4)].map((_, index) => ( // Skeleton for 4 items
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
            disabled={rutGalleryImages.length <= 1}
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
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
            {/* <p id="lightbox-image-title" className={styles.lightboxCaption}>{selectedImage.alt}</p> */}
          </div>
          <button
            className={`${styles.lightboxButton} ${styles.lightboxNextButton}`}
            onClick={showNextImage}
            aria-label="Next image"
            disabled={rutGalleryImages.length <= 1}
          >
            &rsaquo;
          </button>
        </div>
      )}
    </div>
  );
}