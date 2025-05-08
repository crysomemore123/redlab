// src/app/readings/page.tsx

import styles from './readings.module.css';

export default function Page() {
  return (
    <main className={styles.readingsContainer}>
      {/* Banner Title */}
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>READINGS</h1>
      </div>

      {/* Content Section */}
      <div className={styles.contentWrapper}>
        <div className={styles.readingsList}>
          <div className={styles.reading}>
            <h2 className={styles.readingTitle}>War Mother</h2>
            <p className={styles.readingInfo}>
              Written by Dato Turashvili<br />
              Directed by David Girard<br />
              Monday, July 17 @ 4pm
            </p>
            <p className={styles.castInfo}>
              Featuring Mary Ellen Toomey, Lori Vega, Conor Wright, Nicole M. Out, and W'Tre Davis
            </p>
            <p className={styles.description}>
              A family finds themselves watching war on their living room tv return home, but the home itself is a shelter for the conflict residing within each character in this dark exploration of human nature.
            </p>
          </div>

          <div className={styles.reading}>
            <h2 className={styles.readingTitle}>Friends</h2>
            <p className={styles.readingInfo}>
              Written by Nestan Kvinikasze<br />
              Directed by Liz Thaler<br />
              Monday, July 17 @ 6pm
            </p>
            <p className={styles.castInfo}>
              Featuring Therese Plaehn, Nicole M. Out, Natalie Hegg, and Owen Scott
            </p>
            <p className={styles.description}>
              Nana and Nene look old pets as things for which it only they're stuck taking care of a bedridden woman together, both with buried hurts hoping showing up and a beach offers a chance for a playboy -- what are two friends to do?
            </p>
          </div>

          <div className={styles.reading}>
            <h2 className={styles.readingTitle}>On The Latch</h2>
            <p className={styles.readingInfo}>
              Written by Basa Janikashvili<br />
              Directed by Justin Yorio<br />
              Tuesday, August 1 @ 4pm
            </p>
            <p className={styles.castInfo}>
              Featuring Chase Coleman-Rice, Phil Estrera, Jacqueline Jarrold, Katie Rose Krueger, Natalie Rich, and Richard Taddeukhnam
            </p>
            <p className={styles.description}>
              A convicted murderer and successful children's tale & prison trustee is demanding to be considered for having committed no crime. A satirical look at guilt and suspicion when living in a police state as freedom its own prison?
            </p>
          </div>

          <div className={styles.reading}>
            <h2 className={styles.readingTitle}>Pilion</h2>
            <p className={styles.readingInfo}>
              Written by Rezo Kldiashvili<br />
              Directed by Adam Knight<br />
              Wednesday, July 26 @ 4pm
            </p>
            <p className={styles.castInfo}>
              Featuring Roger Casey, Kevin Delano, Ariel Estrada, Lauren Lubow, Tiffany May McRae, and Natalie Rich
            </p>
            <p className={styles.description}>
              A graveyard in suburban California holds a secret of a soldier's past – one that demands a pilgrimage to the Caucasus. A new interpretation of George Saunders's novel Tenth of December, seen through the prism of magical realism.
            </p>
          </div>

          <div className={styles.reading}>
            <h2 className={styles.readingTitle}>On The Eagle's Wings</h2>
            <p className={styles.readingInfo}>
              Written by Guram Batiashvili<br />
              Monday, July 31 @ 4pm
            </p>
            <p className={styles.description}>
              The Promised Land (Israel) is beset on all sides by enemies. With war looming and allied commitments faltering, a long sought-after Nazi war criminal is smuggled to Israel for a trial. Will this bring justice – or open fresh wounds?
            </p>
          </div>

          <div className={styles.reading}>
            <h2 className={styles.readingTitle}>Liv Stein</h2>
            <p className={styles.readingInfo}>
              Written by Nino Haratischvili<br />
              Directed by Kathryn Markey<br />
              Tuesday, August 1 @ 6pm
            </p>
            <p className={styles.castInfo}>
              Featuring Elizabeth Bays, Rebecca Comtois, Ross DeGraw, Sarah Nedwek, and Monica Wyche
            </p>
            <p className={styles.description}>
              Caught between different passions consume in this taut, shadow-driven play about a renowned, reclusive pianist and her new student.
            </p>
          </div>

          <div className={styles.reading}>
            <h2 className={styles.readingTitle}>The Iron Curtain</h2>
            <p className={styles.readingInfo}>
              Written by Dato Turashvili<br />
              Directed by Adam Knight<br />
              Thursday, August 3 @ 5pm
            </p>
            <p className={styles.description}>
              The border of two countries at war. A volleyball match played between soldiers determines the fate of a captured spy. Enemies become friends – and sparks a romance. Can love between neighbors exist beyond the barbed wire?
            </p>
          </div>

          <div className={styles.venueInfo}>
            <p className={styles.freeAdmission}>All readings FREE to the public.</p>
            <p className={styles.venueDetails}>
              Readings will take place at Teatro Circulo, 64 East 4th Street (between 2nd and Bowery).
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 