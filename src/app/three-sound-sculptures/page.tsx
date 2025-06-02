'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './three-sound-sculptures.module.css'; // Ensure this path is correct

interface GalleryImageItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Placeholder image data for THREE SOUND SCULPTURES - REPLACE with your actual images
// Store your images in the public folder, e.g., public/images/three-sound-sculptures/
// Assuming 8 images based on the Eugene Onegin example layout.
const threeSoundSculpturesGalleryImages: GalleryImageItem[] = [
  { id: 'tss_img1', src: '/images/three-sound-sculptures/placeholder_01.jpg', alt: 'Image from Three Sound Sculptures', width: 800, height: 533 },
  { id: 'tss_img2', src: '/images/three-sound-sculptures/placeholder_02.jpg', alt: 'Image from Three Sound Sculptures', width: 800, height: 1200 },
  { id: 'tss_img3', src: '/images/three-sound-sculptures/placeholder_03.jpg', alt: 'Image from Three Sound Sculptures', width: 800, height: 533 },
  { id: 'tss_img4', src: '/images/three-sound-sculptures/placeholder_04.jpg', alt: 'Image from Three Sound Sculptures', width: 800, height: 533 },
  { id: 'tss_img5', src: '/images/three-sound-sculptures/placeholder_05.jpg', alt: 'Image from Three Sound Sculptures', width: 800, height: 1200 },
  { id: 'tss_img6', src: '/images/three-sound-sculptures/placeholder_06.jpg', alt: 'Image from Three Sound Sculptures', width: 800, height: 533 },
  { id: 'tss_img7', src: '/images/three-sound-sculptures/placeholder_07.jpg', alt: 'Image from Three Sound Sculptures', width: 800, height: 533 },
  { id: 'tss_img8', src: '/images/three-sound-sculptures/placeholder_08.jpg', alt: 'Image from Three Sound Sculptures', width: 800, height: 1200 },
  // Add more images if you have them.
];

export default function ThreeSoundSculpturesPage() {
  const [isClient, setIsClient] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImageItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Updated productionDetails
  const productionDetails = [
    "Installations and sculptures by Irina Gachechiladze.",
    "At Tbilisi Historical Museum, Tbilisi, Georgia. (2011)"
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
    const nextIndex = (currentIndex + 1) % threeSoundSculpturesGalleryImages.length;
    setSelectedImage(threeSoundSculpturesGalleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + threeSoundSculpturesGalleryImages.length) % threeSoundSculpturesGalleryImages.length;
    setSelectedImage(threeSoundSculpturesGalleryImages[prevIndex]);
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
        <h1 className={styles.mainTitle}>THREE SOUND SCULPTURES</h1>
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
          {threeSoundSculpturesGalleryImages.map((image, index) => (
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
                priority={index < 4}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </main>
      ) : (
        <div className={styles.galleryGrid}>
          {[...Array(threeSoundSculpturesGalleryImages.length || 8)].map((_, index) => (
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
            disabled={threeSoundSculpturesGalleryImages.length <= 1}
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
            disabled={threeSoundSculpturesGalleryImages.length <= 1}
          >
            &rsaquo;
          </button>
        </div>
      )}
    </div>
  );
}