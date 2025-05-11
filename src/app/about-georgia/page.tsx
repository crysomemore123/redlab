// src/app/about-georgia/page.tsx

import styles from './about.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    // Root container, changed from <main> to <div>
    <div className={styles.aboutContainer}>
      {/* Banner Title */}
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>ABOUT GEORGIA</h1>
      </div>

      {/* Map Image */}
      <div className={styles.mapContainer}>
        <Image
          src="/images/georgia-map.jpg"
          alt="Map of Georgia"
          width={600}
          height={400}
          className={styles.mapImage}
          priority // Consider adding priority if this is an important LCP image
        />
      </div>

      {/* Description Text */}
      <div className={styles.textContent}>
        <p>
          <strong>Georgia</strong> is an ancient country at the crossroads of Europe and Asia, to the south of the Great Caucasus Mountains, with a population of about 4 million. Georgia borders Russia, Turkey, Armenia and Azerbaijan.
        </p>
        
        <p>
          Georgian culture goes back to ancient times. Ancient Greeks called the western part of the region bordering the Black Sea "Colchis," where according to legend Medea was from and where the Argonauts sought the Golden Fleece. (In fact, archeological excavations showed that gold was in abundance there.) Georgia is considered one of the oldest wine-producing lands in the world: archeologists have discovered wine-vessels there eight thousand years old.
        </p>
        
        <p>
          The Georgian language is one of the oldest in the world. Connected to neither Slavic (Russian), nor Turkic or Semitic languages, the language has used its own alphabet since at least 4th century A.D. with literature going back 16 centuries or more. Iakob Tsurtaveli's novel about Saint Shushanik was written in 476 and its text is still easily understood by modern Georgians.
        </p>

        <p>
          Georgian Polyphonic singing has been recognized by UNESCO on its list of Masterpieces of the Oral and Intangible Heritage of Humanity. This completely unique musical art form was even included by NASA in the Voyager golden record sent into the cosmos!
        </p>

        <p>
          Georgia is a majority Christian nation in a Muslim area of the world. The Kingdom of Georgia flourished especially in the 11th to 13th centuries. Later invasions by the Mongols, Turks, Persians caused a lot of turmoil, but Georgia retained its statehood until the early 19th century when the Russian Empire invaded and annexed it. Georgia restored independence as a republic in May 1918 to be again invaded and made part of the USSR until 1991.
        </p>

        <p>
          Since that time Georgia has been independent, maintaining a democratic, parliamentary government with free and fair elections. Georgia is a close ally of the United States and participates in military campaigns carried out by Western countries and NATO in the Middle East. In 2016 more than 6 million tourists visited Georgia, lured by marvelous historical monuments, beautiful landscapes, and sunny seashores.
        </p>
      </div> {/* Closing div for styles.textContent */}
    </div> /* Closing div for styles.aboutContainer */
  );
}
