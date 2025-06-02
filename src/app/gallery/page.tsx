// src/app/festival-gallery/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

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
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const showNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const nextIndex = (currentIndex + 1) % galleryImagesData.length;
    setSelectedImage(galleryImagesData[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const prevIndex = (currentIndex - 1 + galleryImagesData.length) % galleryImagesData.length;
    setSelectedImage(galleryImagesData[prevIndex]);
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
  }, [selectedImage, currentIndex]); // Added closeLightbox, showNextImage, showPrevImage to dependencies if they aren't stable


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
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(image, index); }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="contain" // This is for the thumbnail
                className={styles.galleryImage}
                priority={index < 6}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.galleryGrid}>
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
          aria-labelledby="lightbox-image-alt"
        >
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
              alt="" // Visually hidden alt, dialog is labelled by #lightbox-image-alt
              width={selectedImage.width}
              height={selectedImage.height}
              objectFit="contain" // <<< KEY CHANGE: Added objectFit prop
              className={styles.lightboxActualImage}
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