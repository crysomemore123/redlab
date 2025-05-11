'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css'; // We'll create this CSS file

// Define your image data - REPLACE WITH YOUR ACTUAL IMAGE DATA AND PATHS
const galleryImagesData = [
  // It's better to define actual width/height for layout stability
  // The layout in the screenshot is a bit complex (masonry-like).
  // For an exact replica, you might need a more complex grid system or define rows.
  // This example will use a simpler flexbox grid for now.
  { src: '/images/gallery/galleryimage1.jpg', alt: 'Gallery image 1', width: 400, height: 267 },
  { src: '/images/gallery/galleryimage2.jpg', alt: 'Gallery image 2', width: 250, height: 167 },
  { src: '/images/gallery/galleryimage3.jpg', alt: 'Gallery image 3', width: 250, height: 167 },
  { src: '/images/gallery/galleryimage4.jpg', alt: 'Gallery image 4', width: 250, height: 167 },
  { src: '/images/gallery/galleryimage5.jpg', alt: 'Gallery image 5', width: 250, height: 375 },
  { src: '/images/gallery/galleryimage6.jpg', alt: 'Gallery image 6', width: 400, height: 267 },
  { src: '/images/gallery/galleryimage7.jpg', alt: 'Gallery image 7', width: 400, height: 267 },
  { src: '/images/gallery/galleryimage8.jpg', alt: 'Gallery image 8', width: 400, height: 267 },
  { src: '/images/gallery/galleryimage9.jpg', alt: 'Gallery image 9', width: 400, height: 267 },
  { src: '/images/gallery/galleryimage10.jpg', alt: 'Gallery image 10', width: 250, height: 167 },
  { src: '/images/gallery/galleryimage11.jpg', alt: 'Gallery image 11', width: 250, height: 375 },
  { src: '/images/gallery/galleryimage12.jpg', alt: 'Gallery image 12', width: 400, height: 267 },
  { src: '/images/gallery/galleryimage13.jpg', alt: 'Gallery image 13', width: 400, height: 267 },
  { src: '/images/gallery/galleryimage14.jpg', alt: 'Gallery image 14', width: 400, height: 267 },
  { src: '/images/gallery/galleryimage15.jpg', alt: 'Gallery image 15', width: 400, height: 267 },
  { src: '/images/gallery/galleryimage16.jpg', alt: 'Gallery image 16', width: 400, height: 267 },
  { src: '/images/gallery/galleryimage17.jpg', alt: 'Gallery image 17', width: 400, height: 267 },
  { src: '/images/gallery/galleryimage18.jpg', alt: 'Gallery image 18', width: 400, height: 267 },
  // Add all your actual image paths, alt text, and dimensions
  // To match the example, you'll need about 12-15 images.
  // For example:
  // { src: '/images/your-actual-image-name-1.jpg', alt: 'Description of image 1', width: 600, height: 400 },
  // { src: '/images/your-actual-image-name-2.jpg', alt: 'Description of image 2', width: 280, height: 180 },
  // { src: '/images/your-actual-image-name-3.jpg', alt: 'Description of image 3', width: 280, height: 180 },
];


export default function GalleryPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const festivalInfo = `The Georgian-American Theatrical Feast
Full Productions: "Navigator in Love" by Lasha Bugadze directed by Adam Knight
and "A Toy Gun" by Tamar Bartaia directed by Becky Baumwoll
Readings by Data Tavadze, Rezo Klidiashvili, Nestan Kvinikadze, Guram Batiashvili, Basa Janikashvili, and Dato Turashvili
Produced by Red Lab Productions with generous support from Otar Margania
Summer 2017, Teatro Circulo NYC`;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>FESTIVAL GALLERY</h1>
      </div>

      <div className={styles.introText}>
        {festivalInfo.split('\\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      {isClient ? (
        <div className={styles.galleryGrid}>
          {galleryImagesData.map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}   // Use actual dimensions
                height={image.height} // Use actual dimensions
                className={styles.galleryImage}
                priority={index < 4} // Prioritize loading for the first few images
              />
            </div>
          ))}
        </div>
      ) : (
        // Basic Skeleton Loader for Gallery
        <div className={styles.galleryGrid}>
          {[...Array(6)].map((_, index) => ( // Show a few skeleton items
            <div key={index} className={styles.galleryItem}>
              <div className={`animate-pulse bg-gray-300 ${styles.skeletonImage}`}></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}