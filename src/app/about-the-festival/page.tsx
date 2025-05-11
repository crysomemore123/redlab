'use client';

import { useState, useEffect } from 'react';
import styles from './festival.module.css';
import Image from 'next/image';

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.festivalContainer}> {/* Changed from <main> to <div> */}
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>A FESTIVAL OF NEW WORKS</h1>
      </div>

      {isClient ? (
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/festival-poster.jpg"
              alt="Georgian-American Theatrical Feast Poster featuring playwrights"
              width={500}
              height={600}
              className={styles.festivalImage}
              priority
            />
          </div>

          <div className={styles.textBlock}>
            <p>
              Georgia (the country, not the state) is a small Republic on the crossroads of Europe, Asia, and the Middle East. Already becoming known in America for its culture, cuisine, and wine, Georgia is also home to a thriving and innovative theatre community. The <strong>Georgian-American Theatrical Feast</strong> aims to introduce American audiences to nine playwrights from this unique corner of the world. Featuring <strong><a href="/full-productions" className={styles.textLink}>two full productions</a></strong> and <strong><a href="/readings" className={styles.textLink}>seven free readings</a></strong>, all never-before-seen in America, along with <strong><a href="/special-events" className={styles.textLink}>special events</a></strong>, wine, and music, this festival promises rich, intense, funny, and strikingly relevant flavors to spice up the theatrical summer.
            </p>
            
            <p>
              Produced by Red Lab Productions with generous support from Otar Margania.
            </p>
            
            <p>
              For more information about Georgia, <a href="/about-georgia" className={styles.textLink}>click here</a>.
            </p>
            
            <div className={styles.credits}>
              <p>
                Curated by Irina Gachechiladze<br />
                Publicist: Emily Owens PR<br />
                Artwork: Sophia Tabatadze<br />
                Design: Marina Balavadze
              </p>
            </div>
            
            <div className={styles.funding}>
              <p>
                The Georgian-American Theatrical Feast is made possible in part with public funds from Creative Engagement, supported by the New York City Department of Cultural Affairs in partnership with the City Council and administered by Lower Manhattan Cultural Council. <a href="https://lmcc.net" className={styles.textLink}>LMCC.net</a>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <div className="animate-pulse bg-gray-200 rounded w-full h-96"></div>
          </div>
          
          <div className={styles.textBlock}>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-full rounded"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-5/6 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-full rounded"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-4/5 rounded"></div>
              </div>
              
              <div className="pt-2">
                <div className="animate-pulse bg-gray-200 h-4 w-2/3 rounded"></div>
              </div>
              
              <div className="pt-2">
                <div className="animate-pulse bg-gray-200 h-4 w-1/2 rounded"></div>
              </div>
              
              <div className="pt-4 space-y-2">
                <div className="animate-pulse bg-gray-200 h-4 w-1/3 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-1/4 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-1/3 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-1/4 rounded"></div>
              </div>
              
              <div className="pt-4 space-y-2">
                <div className="animate-pulse bg-gray-200 h-4 w-full rounded"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-5/6 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-full rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}