import styles from './productions.module.css';

export default function FullProductionsPage() {
  return (
    <main className={styles.productionsContainer}>
      <div className={styles.header}>
        <h1>FULL PRODUCTIONS</h1>
      </div>

      <section className={styles.production}>
        <h2>Navigator in Love</h2>
        <p><strong>World Premiere</strong></p>
        <p>Written by Lasha Bugadze, Directed by Adam Knight</p>
        <p><em>July 13 - August 6</em></p>
        <p>
          Rostom just got a promotion – and a company car equipped with the latest GPS technology. But when the automated directions veer off the map and into the holes in Rostom’s personal life, he must choose between stark reality and virtual intimacy. A love story – for tomorrow. Winner of the 2012 BBC World Drama Award for Best International Play. Directed by Adam Knight <em>Naperville</em> with Slant Theatre Project; Lawrence Dial’s <em>In The Room</em>.
        </p>
        <p>
          Featuring Alan Altschuler*, Masha Dakic*, Ross DeGraw*, Brett Epstein, Lauren Riddle, and Owen Scott* (AEA Member).
          Set: Adam Knight, Costumes: Irina Gachechiladze, Lights: Lauren Duffie, Sound: Toby Algya, Stage Manager: Gianni Onori.
        </p>
      </section>

      <section className={styles.production}>
        <h2>A Toy Gun</h2>
        <p><strong>American Premiere</strong></p>
        <p>Written by Tamar Bartaia, Directed by Becky Baumwoll</p>
        <p><em>July 20 - August 3</em></p>
        <p>
          Two lives, one encounter that changes both irrevocably. An intimately theatrical tale of a famous actor and a promising singer as they grow up and grow old in a country haunted by a war and held down by history. A story of parallel lives – and of a desire that transcends time and space.
          Directed by Becky Baumwoll (See <em>Reverse</em> with Broken Box Mime).
        </p>
        <p>
          Featuring Tara Giordano* and Luke P. Younger*. Costumes: Becky Baumwoll, Lights: Lauren Duffie, Sound: Toby Algya, Stage Manager: Esti Bernstein* (AEA Member)
        </p>
      </section>

      <div className={styles.footerNote}>
        <p>All performances at <strong>Teatro Circulo</strong>, 64 East 4th Street (between 2nd and Bowery).</p>
      </div>
    </main>
  );
}
