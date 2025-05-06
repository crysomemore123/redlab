// src/app/hamlet-a-version-about/page.tsx

import styles from './hamlet-about.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className={styles.pageContainer}>
      {/* Banner Title */}
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>WORLD PREMIERE</h1>
      </div>

      {/* Content Section */}
      <div className={styles.contentWrapper}>
        <div className={styles.posterContainer}>
          <Image
            src="/images/hamlet-poster.png"
            alt="Hamlet. A Version by Boris Akunin poster"
            width={500}
            height={700}
            className={styles.poster}
          />
        </div>

        <div className={styles.infoContainer}>
          <h1 className={styles.title}>HAMLET. A VERSION</h1>
          <h2 className={styles.author}>by Boris Akunin</h2>
          
          <div className={styles.quotes}>
            <p className={styles.quote}>
              "Full of intrigue... lush and fantastical." - <span className={styles.source}>The New York Times</span>
            </p>
            <p className={styles.quote}>
              "Probably the most intriguing version of Hamlet I have ever seen!" - <span className={styles.source}>Times Square Chronicles</span>
            </p>
          </div>
          
          <div className={styles.description}>
            <p>
              Red Lab, in association with Roust Theatre Company and executive 
              producer Mark Mullen, presents Boris Akunin's HAMLET. A VERSION. 
              This world premiere by the celebrated Georgian-born writer and 
              dissident of Putin's Russia, internationally famous for the cycle of 
              fictional detective novels <span className={styles.italic}>The Adventures of Erast Fandorin</span>, re-
              engineers Shakespeare's classic tragedy in an ingeniously innovative 
              vein. Directed by Irina Gachechiladze, with compositions by Giya 
              Kancheli.
            </p>
            
            <p>
              Set in a crumbling hierarchical empire, HAMLET. A VERSION shifts 
              the usual focus from the iconic philosophical title character to the 
              intrigue, opportunism, and political scheming of a burgeoning 
              police state. This starkly realized new world order, insidiously 
              ushered in by murderous and destabilizing tactics, provides a whole 
              new meaning to the phrase "something is rotten in the state of 
              Denmark."
            </p>
            
            <p>
              From a curiously flat-footed Hamlet and a self-aggrandizing 
              "Polonius the First", to the questionable death of the old king and a 
              torrid affair between Gertrude and Claudius, Boris Akunin's 
              HAMLET. A VERSION provides a radically prescient perspective on a 
              contemporary political issue: how to eradicate the old to make way 
              for the new. But who gets caught in the crossfire?
            </p>
          </div>
          
          <div className={styles.callToAction}>
            <Link href="/hamlet-a-version/more-info" className={styles.moreInfoButton}>MORE INFO</Link>
          </div>
        </div>
      </div>

      {/* Footer with Copyright and Social */}
      <footer className={styles.footer}>
        <p className={styles.copyright}>© Red Lab Productions 2017 | ALL RIGHTS RESERVED</p>
        <div className={styles.socialIcons}>
          <Link href="https://facebook.com" className={styles.socialIcon}>
            <Image src="/images/facebook-icon.png" alt="Facebook" width={24} height={24} />
          </Link>
          <Link href="https://twitter.com" className={styles.socialIcon}>
            <Image src="/images/twitter-icon.png" alt="Twitter" width={24} height={24} />
          </Link>
          <Link href="https://instagram.com" className={styles.socialIcon}>
            <Image src="/images/instagram-icon.png" alt="Instagram" width={24} height={24} />
          </Link>
        </div>
      </footer>
    </main>
  );
}