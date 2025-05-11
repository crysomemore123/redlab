// Ensure this component is treated as a Client Component
// If you are using Next.js App Router, this should be at the top of the file.
'use client';

import { useState, useEffect } from 'react';
import styles from './productions.module.css'; // Assuming this path is correct

export default function FullProductionsPage() {
  // State to track if the component has mounted on the client
  const [isClient, setIsClient] = useState(false);

  // useEffect hook to set isClient to true once the component mounts
  // The empty dependency array [] ensures this effect runs only once after initial render on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // If the component has not yet mounted on the client, return a skeleton/placeholder UI.
  // This provides a more consistent DOM structure for hydration.
  if (!isClient) {
    return (
      <main className={styles.productionsContainer}>
        <div className={styles.header}>
          {/* Use a generic loading text or a more structured skeleton */}
          <h1>Loading Productions...</h1>
        </div>
        {/* You can add more skeleton elements for the sections if needed,
            for example, a simplified version of a 'production' section:
        <section className={styles.production} aria-hidden="true">
          <h2 className={styles.productionTitle} style={{ backgroundColor: '#eee', color: '#eee', height: '1.25rem', marginBottom: '0.3rem' }}>Placeholder Title</h2>
          <p style={{ backgroundColor: '#eee', color: '#eee', height: '0.95rem', marginBottom: '0.2rem' }}>Placeholder</p>
          <p style={{ backgroundColor: '#eee', color: '#eee', height: '0.95rem', marginBottom: '1rem' }}>Placeholder</p>
          <p style={{ backgroundColor: '#eee', color: '#eee', height: '3rem', marginBottom: '1rem' }}>Placeholder description</p>
        </section>
        */}
      </main>
    );
  }

  // Once isClient is true, render the actual page content
  return (
    <main className={styles.productionsContainer}>
      <div className={styles.header}>
        <h1>FULL PRODUCTIONS</h1>
      </div>

      <section className={styles.production}>
        <h2 className={styles.productionTitle}>Navigator in Love</h2>
        <p className={styles.premiereType}>World Premiere</p>
        <p className={styles.creativeTeam}>Written by Lasha Bugadze, Directed by Adam Knight</p>
        <p className={styles.dates}>July 13 - August 6</p>
        <p className={styles.productionDescription}>
          Rostom just got a promotion – and a company car equipped with the latest GPS technology. But when the automated directions veer off the map and into the holes in Rostom's personal life, he must choose between stark reality and virtual intimacy. A love story – for tomorrow. Winner of the 2012 BBC World Drama Award for Best International Play. Directed by Adam Knight <em>Naperville</em> with Slant Theatre Project; Lawrence Dial's <em>In The Room</em>.
        </p>
        <p className={styles.castCrew}>
          Featuring Alan Altschuler*, Masha Dakic*, Ross DeGraw*, Brett Epstein, Lauren Riddle, and Owen Scott* (AEA Member).
          Set: Adam Knight, Costumes: Irina Gachechiladze, Lights: Lauren Duffie, Sound: Toby Algya, Stage Manager: Gianni Onori.
        </p>
      </section>

      <section className={styles.production}>
        <h2 className={styles.productionTitle}>A Toy Gun</h2>
        <p className={styles.premiereType}>American Premiere</p>
        <p className={styles.creativeTeam}>Written by Tamar Bartaia, Directed by Becky Baumwoll</p>
        <p className={styles.dates}>July 20 - August 3</p>
        <p className={styles.productionDescription}>
          Two lives, one encounter that changes both irrevocably. An intimately theatrical tale of a famous actor and a promising singer as they grow up and grow old in a country haunted by a war and held down by history. A story of parallel lives – and of a desire that transcends time and space.
          Directed by Becky Baumwoll (See <em>Reverse</em> with Broken Box Mime).
        </p>
        <p className={styles.castCrew}>
          Featuring Tara Giordano* and Luke P. Younger*. Costumes: Becky Baumwoll, Lights: Lauren Duffie, Sound: Toby Algya, Stage Manager: Esti Bernstein* (AEA Member)
        </p>
      </section>

      <div className={styles.venueInfo}>
        <p>All performances at <strong>Teatro Circulo</strong>, 64 East 4th Street (between 2nd and Bowery).</p>
      </div>
    </main>
  );
}
