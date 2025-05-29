// src/app/festival-gallery/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css'; // Assumes this is your CSS module for this page

// Define your image data - REPLACE WITH YOUR ACTUAL IMAGE DATA AND PATHS
// Ensure width and height are correct for aspect ratio and Next/Image optimization
const galleryImagesData = [
  { id: 'img1', src: '/images/gallery/galleryimage1.jpg', alt: 'Gallery image 1', width: 800, height: 533 },
  { id: 'img2', src: '/images/gallery/galleryimage2.jpg', alt: 'Gallery image 2', width: 600, height: 900 },
  { id: 'img3', src: '/images/gallery/galleryimage3.jpg', alt: 'Gallery image 3', width: 800, height: 533 },
  { id: 'img4', src: '/images/gallery/galleryimage4.jpg', alt: 'Gallery image 4', width: 800, height: 533 },
  { id: 'img5', src: '/images/gallery/galleryimage5.jpg', alt: 'Gallery image 5', width: 600, height: 900 },
  { id: 'img6', src: '/images/gallery/galleryimage6.jpg', alt: 'Gallery image 6', width: 800, height: 533 },
  { id: 'img7', src: '/images/gallery/galleryimage7.jpg', alt: 'Gallery image 7', width: 800, height: 533 },
  { id: 'img8', src: '/images/gallery/galleryimage8.jpg', alt: 'Gallery image 8', width: 600, height: 900 },
  { id: 'img9', src: '/images/gallery/galleryimage9.jpg', alt: 'Gallery image 9', width: 800, height: 533 },
  { id: 'img10', src: '/images/gallery/galleryimage10.jpg', alt: 'Gallery image 10', width: 800, height: 533 },
  { id: 'img11', src: '/images/gallery/galleryimage11.jpg', alt: 'Gallery image 11', width: 600, height: 900 },
  { id: 'img12', src: '/images/gallery/galleryimage12.jpg', alt: 'Gallery image 12', width: 800, height: 533 },
  { id: 'img13', src: '/images/gallery/galleryimage13.jpg', alt: 'Gallery image 13', width: 600, height: 900 },
  { id: 'img14', src: '/images/gallery/galleryimage14.jpg', alt: 'Gallery image 14', width: 800, height: 533 },
  { id: 'img15', src: '/images/gallery/galleryimage15.jpg', alt: 'Gallery image 15', width: 800, height: 533 },
  // Add more images as needed. Ensure paths and dimensions are correct.
  // Example: { id: 'img16', src: '/images/gallery/galleryimage16.jpg', alt: 'Gallery image 16', width: 800, height: 600 },
];

interface GalleryImageItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function FestivalGalleryPage() {
  const [isClient, setIsClient] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImageItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const festivalInfo = `The Georgian-American Theatrical Feast
Full Productions: "Navigator in Love" by Lasha Bugadze directed by Adam Knight
and "A Toy Gun" by Tamar Bartaia directed by Becky Baumwoll
Readings by Data Tavadze, Rezo Klidiashvili, Nestan Kvinikadze, Guram Batiashvili, Basa Janikashvili, and Dato Turashvili
Produced by Red Lab Productions with generous support from Otar Margania
Summer 2017, Teatro Circulo NYC`;

  const openLightbox = (image: GalleryImageItem, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore background scrolling
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent closing lightbox when clicking arrows
    const nextIndex = (currentIndex + 1) % galleryImagesData.length;
    setSelectedImage(galleryImagesData[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent closing lightbox when clicking arrows
    const prevIndex = (currentIndex - 1 + galleryImagesData.length) % galleryImagesData.length;
    setSelectedImage(galleryImagesData[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return;
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowRight') {
        // Create a synthetic event or call directly
        showNextImage({ stopPropagation: () => {} } as React.MouseEvent);
      } else if (event.key === 'ArrowLeft') {
        showPrevImage({ stopPropagation: () => {} } as React.MouseEvent);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // Ensure scroll is restored on unmount
    };
  }, [selectedImage, currentIndex]);


  return (
    <div className={styles.pageContainer}>
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>FESTIVAL GALLERY</h1>
      </div>

      <div className={styles.introText}>
        {festivalInfo.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      {isClient ? (
        <div className={styles.galleryGrid}>
          {galleryImagesData.map((image, index) => (
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
                priority={index < 6} // Prioritize loading for the first few images
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw" // Example sizes, adjust as needed
              />
            </div>
          ))}
        </div>
      ) : (
        // Basic Skeleton Loader for Gallery
        <div className={styles.galleryGrid}>
          {[...Array(9)].map((_, index) => ( // Show a few skeleton items
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
          aria-labelledby="lightbox-image"
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
          <div className={styles.lightboxImageContainer} onClick={(e) => e.stopPropagation()}>
            <Image
              id="lightbox-image"
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width} // Use original width for quality
              height={selectedImage.height} // Use original height for quality
              style={{ maxWidth: '90vw', maxHeight: '85vh', width: 'auto', height: 'auto', objectFit: 'contain' }}
              // layout="intrinsic" // or "fixed" or "fill" depending on desired behavior within container
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
