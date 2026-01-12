'use client';

import { useState, useEffect } from 'react';
import styles from './productions.module.css';

export default function FullProductionsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Skeleton/Loading State
  if (!isClient) {
    return (
      <div className={styles.productionsContainer}>
        <div className={styles.header}>
          <h1 className={styles.skeletonPulse}>LOADING...</h1>
        </div>
        <div className={styles.playwrightsList}>
           <div className={styles.skeletonPulse} style={{ height: '300px', width: '100%', marginBottom: '20px' }}></div>
           <div className={styles.skeletonPulse} style={{ height: '300px', width: '100%' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.productionsContainer}>
      <div className={styles.header}>
        <h1 className={styles.bannerText}>FULL PRODUCTIONS</h1>
      </div>

      {/* Production 1: Navigator in Love */}
      <section className={styles.production}>
        <h2 className={styles.productionTitle}>Navigator in Love</h2>
        <p className={styles.premiereType}>World Premiere</p>
        <p className={styles.creativeTeam}>Written by Lasha Bugadze, Directed by Adam Knight</p>
        <p className={styles.dates}>July 13 - August 6</p>
        <p className={styles.productionDescription}>
          Rostom just got a promotion – and a company car equipped with the latest GPS technology. 
          But when the automated directions veer off the map and into the holes in Rostom&apos;s personal life, 
          he must choose between stark reality and virtual intimacy. A love story – for tomorrow. 
          Winner of the 2012 BBC World Drama Award for Best International Play. 
          Directed by Adam Knight (Naperville with Slant Theatre Project; Lawrence Dial&apos;s In The Room).
        </p>
        <p className={styles.castCrew}>
          <strong>Featuring:</strong> Alan Altschuler*, Masha Dakic*, Ross DeGraw*, Brett Epstein, Lauren Riddle, and Owen Scott* (AEA Member).
          <br />
          <strong>Design/Staff:</strong> Adam Knight (Set), Irina Gachechiladze (Costumes), Lauren Duffie (Lights), Toby Algya (Sound), Gianni Onori (Stage Manager).
        </p>
      </section>

      {/* Production 2: A Toy Gun */}
      <section className={styles.production}>
        <h2 className={styles.productionTitle}>A Toy Gun</h2>
        <p className={styles.premiereType}>American Premiere</p>
        <p className={styles.creativeTeam}>Written by Tamar Bartaia, Directed by Becky Baumwoll</p>
        <p className={styles.dates}>July 20 - August 3</p>
        <p className={styles.productionDescription}>
          Two lives, one encounter that changes both irrevocably. An intimately theatrical tale of 
          a famous actor and a promising singer as they grow up and grow old in a country haunted 
          by a war and held down by history. A story of parallel lives – and of a desire that transcends time and space.
          Directed by Becky Baumwoll (See Reverse with Broken Box Mime).
        </p>
        <p className={styles.castCrew}>
          <strong>Featuring:</strong> Tara Giordano* and Luke P. Younger*. 
          <br />
          <strong>Design/Staff:</strong> Becky Baumwoll (Costumes), Lauren Duffie (Lights), Toby Algya (Sound), Esti Bernstein* (Stage Manager, AEA Member).
        </p>
      </section>

      <div className={styles.venueInfo}>
        <p>All performances at <strong>Teatro Circulo</strong>, 64 East 4th Street (between 2nd and Bowery).</p>
      </div>
    </div>
  );
}