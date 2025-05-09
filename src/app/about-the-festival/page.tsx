// src/app/theatrical-feast/page.tsx

import styles from './festival.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    <main className={styles.festivalContainer}>
      {/* Banner Title */}
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>A FESTIVAL OF NEW WORKS</h1>
      </div>

      {/* Content Section */}
      <div className={styles.contentWrapper}>
        {/* Festival Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/festival-poster.jpg"
            alt="Georgian-American Theatrical Feast Poster featuring playwrights"
            width={500}
            height={600}
            className={styles.festivalImage}
          />
        </div>

        {/* Description Text */}
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
    </main>
  );
}