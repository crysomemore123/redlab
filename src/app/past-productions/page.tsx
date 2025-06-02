// app/past-productions/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './past-productions.module.css'; // We'll update this CSS
import { useEffect, useState } from 'react';

interface PastProduction {
  id: string;
  title: string;
  subtitle: string; // e.g., "by Mozart", "after the novel by Pushkin"
  imageUrl: string; // Path to an image for the production
  slug: string; // The URL path to the production's page (e.g., '/don-giovanni')
}

// Example data for past productions - REPLACE WITH YOUR ACTUAL DATA AND IMAGE PATHS
const pastProductionsData: PastProduction[] = [
  {
    id: 'don-giovanni',
    title: 'DON GIOVANNI',
    subtitle: 'by Mozart',
    imageUrl: '/images/productions/don_giovanni_past_prod.jpg', // Replace with actual image
    slug: '/don-giovanni',
  },
  {
    id: 'eugene-onegin',
    title: 'EUGENE ONEGIN',
    subtitle: 'after the novel by Pushkin',
    imageUrl: '/images/productions/eugene_onegin_past_prod.jpg', // Replace with actual image
    slug: '/eugene-onegin',
  },
  {
    id: 'the-seagull',
    title: 'THE SEAGULL',
    subtitle: 'by Anton Chekhov',
    imageUrl: '/images/productions/the_seagull_past_prod.jpg', // Replace with actual image
    slug: '/the-seagull',
  },
  {
    id: 'rut',
    title: 'RUT',
    subtitle: 'by Adam Knight',
    imageUrl: '/images/productions/rut_past_prod.jpg', // Replace with actual image
    slug: '/rut',
  },
  {
    id: 'three-sound-sculptures',
    title: 'THREE SOUND SCULPTURES',
    subtitle: 'by Irina Gachechiladze',
    imageUrl: '/images/productions/three_sound_sculptures_past_prod.jpg', // Replace with actual image
    slug: '/three-sound-sculptures',
  },
  // Add more productions as needed
];

export default function PastProductionsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>PAST PRODUCTIONS</h1>
      </div>

      {isClient ? (
        <div className={styles.productionsList}>
          {pastProductionsData.length > 0 ? (
            pastProductionsData.map((production) => (
              <Link href={production.slug} key={production.id} className={styles.productionItem}>
                <div className={styles.itemImageWrapper}>
                  <Image
                    src={production.imageUrl}
                    alt={`Image for ${production.title}`}
                    width={280} // Adjust width as per your design, original seems around this
                    height={180} // Adjust height to maintain aspect ratio, original seems around this
                    className={styles.productionImage}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/${280}x${180}/cccccc/ffffff?text=Image+Not+Found`;
                      target.alt = `Placeholder for ${production.title}`;
                    }}
                  />
                </div>
                <div className={styles.itemTextContent}>
                  <h2 className={styles.productionTitle}>{production.title}</h2>
                  <p className={styles.productionSubtitle}>{production.subtitle}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className={styles.noProductionsText}>No past productions to display at the moment.</p>
          )}
        </div>
      ) : (
        // Basic Skeleton Loader for the list style
        <div className={styles.productionsList}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className={`${styles.productionItem} ${styles.skeletonItem}`}>
              <div className={`${styles.itemImageWrapper} ${styles.skeletonImageWrapper}`}>
                <div className="animate-pulse bg-gray-300 h-full w-full"></div>
              </div>
              <div className={styles.itemTextContent}>
                <div className="animate-pulse bg-gray-300 h-7 w-3/4 rounded mb-3"></div>
                <div className="animate-pulse bg-gray-300 h-5 w-1/2 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
