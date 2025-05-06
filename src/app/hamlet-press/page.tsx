// src/app/hamlet-a-version-press/page.tsx

import styles from './hamlet-press.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className={styles.pageContainer}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <Image
          src="/images/redlab-logo.png"
          alt="Red Lab Productions Logo"
          width={300}
          height={150}
          className={styles.logo}
        />
      </div>
      
      {/* Side Navigation */}
      <div className={styles.sideNavContainer}>
        <div className={styles.mainContent}>
          {/* Banner Title */}
          <div className={styles.banner}>
            <h1 className={styles.bannerText}>PRESS</h1>
          </div>

          {/* Content Section */}
          <div className={styles.contentWrapper}>
            <div className={styles.posterContainer}>
              <Image
                src="/images/hamlet-poster.jpg"
                alt="Hamlet. A Version by Boris Akunin poster"
                width={500}
                height={700}
                className={styles.poster}
              />
            </div>

            <div className={styles.reviewsContainer}>
              <div className={styles.review}>
                <p className={styles.quote}>
                  "Full of intrigue... lush and fantastical." - <Link href="https://www.nytimes.com" className={styles.source}>The New York Times</Link>
                </p>
              </div>

              <div className={styles.review}>
                <p className={styles.quote}>
                  "Probably the most intriguing version of Hamlet I have ever seen!" - <Link href="https://www.timessquarechronicles.com" className={styles.source}>Times Square Chronicles</Link>
                </p>
              </div>

              <div className={styles.review}>
                <p className={styles.quote}>
                  "Akunin's script is dazzling, and his new (or should we say alternate) Hamlet is a breathtaking journey: full of wit, humor, tragedy, and twists." - <Link href="https://www.stagebuddy.com" className={styles.source}>Stage Buddy</Link>
                </p>
              </div>

              <div className={styles.review}>
                <p className={styles.quote}>
                  "A fresh interpretation of Hamlet has hit the NY stage... Solidly directed with clever stylistic choices by Irina Gachechiladze and led by a powerhouse cast" - <Link href="https://www.viabroadway.com" className={styles.source}>Via Broadway</Link>
                </p>
              </div>

              <div className={styles.review}>
                <p className={styles.quote}>
                  "Shakespeare's Hamlet, made into a detective story, investigates international political intrigues and flirts with the dichotomy between fiction and reality" - <Link href="https://www.theatreiseasy.com" className={styles.source}>Theatre is Easy</Link>
                </p>
              </div>

              <div className={styles.review}>
                <p className={styles.quote}>
                  "Striking presentational elements, terrific direction, fine performances and an interesting concept" - <Link href="https://www.theatrescene.com" className={styles.source}>Theatrescene</Link>
                </p>
              </div>

              <div className={styles.review}>
                <p className={styles.quote}>
                  "Akunin is brilliant" - <Link href="https://www.justoffbj.com" className={styles.source}>JustOffBj.com</Link>
                </p>
              </div>

              <div className={styles.review}>
                <p className={styles.quote}>
                  "Scenes are made more spectacular by Giya Kancheli's sound score which feels light, like pinpricks on the skin." - <Link href="https://www.offoffonline.com" className={styles.source}>OffOffOnline</Link>
                </p>
              </div>

              <div className={styles.review}>
                <p className={styles.quote}>
                  "Witty and sharp language... from a writer particularly sensitive to political upheavals and crime" - <Link href="https://www.theknockturnal.com" className={styles.source}>The Knockturnal</Link>
                </p>
              </div>

              <div className={styles.review}>
                <p className={styles.quote}>
                  "One of 'the Best Off-Off Broadway' shows! - <Link href="https://www.timeoutny.com" className={styles.source}>TimeOutNY</Link>
                </p>
              </div>

              <div className={styles.review}>
                <p className={styles.quote}>
                  "Not to miss! Akunin's adaptation illuminates a contemporary international political issue: how to eradicate the old to make way for the new." - <Link href="https://www.playbill.com" className={styles.source}>Playbill.com</Link>
                </p>
              </div>
              
              <div className={styles.callToAction}>
                <Link href="/hamlet-a-version/more-info" className={styles.moreInfoButton}>MORE INFO</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.sideNav}>
          <Link href="/hamlet-a-version-press" className={`${styles.sideNavLink} ${styles.active}`}>PRESS</Link>
          <Link href="/hamlet-a-version-gallery" className={styles.sideNavLink}>GALLERY</Link>
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