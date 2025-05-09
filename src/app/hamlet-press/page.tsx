// src/app/hamlet-a-version-press/page.tsx

import styles from './hamlet-press.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    <main className={styles.pageContainer}>
      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Banner Title */}
        <div className={styles.banner}>
          <h1 className={styles.bannerText}>P R E S S</h1>
        </div>

        {/* Content Section */}
        <div className={styles.contentWrapper}>
          <div className={styles.posterContainer}>
            <Image
              src="/images/hamlet-poster.jpg"
              alt="Hamlet. A Version by Boris Akunin poster"
              width={600}
              height={840}
              className={styles.poster}
            />
          </div>

          <div className={styles.reviewsContainer}>
            <div className={styles.review}>
              <p className={styles.quote}>
                "Full of intrigue... lush and fantastical." - <a href="https://www.nytimes.com" className={styles.source} target="_blank" rel="noopener noreferrer">The New York Times</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                "Probably the most intriguing version of Hamlet I have ever seen!" - <a href="https://www.timessquarechronicles.com" className={styles.source} target="_blank" rel="noopener noreferrer">Times Square Chronicles</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                "Akunin's script is dazzling, and his new (or should we say alternate) Hamlet is a breathtaking journey: full of wit, humor, tragedy, and twists." - <a href="https://www.stagebuddy.com" className={styles.source} target="_blank" rel="noopener noreferrer">Stage Buddy</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                "A fresh interpretation of Hamlet has hit the NY stage... Solidly directed with clever stylistic choices by Irina Gachechiladze and led by a powerhouse cast" - <a href="https://www.viabroadway.com" className={styles.source} target="_blank" rel="noopener noreferrer">Via Broadway</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                "Shakespeare's Hamlet, made into a detective story, investigates international political intrigues and flirts with the dichotomy between fiction and reality" - <a href="https://www.theatreiseasy.com" className={styles.source} target="_blank" rel="noopener noreferrer">Theatre is Easy</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                "Striking presentational elements, terrific direction, fine performances and an interesting concept" - <a href="https://www.theatrescene.com" className={styles.source} target="_blank" rel="noopener noreferrer">Theatrescene</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                "Akunin is brilliant" - <a href="https://www.justoffbj.com" className={styles.source} target="_blank" rel="noopener noreferrer">JustOffBj.com</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                "Scenes are made more spectacular by Giya Kancheli's sound score which feels light, like pinpricks on the skin." - <a href="https://www.offoffonline.com" className={styles.source} target="_blank" rel="noopener noreferrer">OffOffOnline</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                "Witty and sharp language... from a writer particularly sensitive to political upheavals and crime" - <a href="https://www.theknockturnal.com" className={styles.source} target="_blank" rel="noopener noreferrer">The Knockturnal</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                "One of 'the Best Off-Off Broadway' shows!" - <a href="https://www.timeoutny.com" className={styles.source} target="_blank" rel="noopener noreferrer">TimeOutNY</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                "Not to miss! Akunin's adaptation illuminates a contemporary international political issue: how to eradicate the old to make way for the new." - <a href="https://www.playbill.com" className={styles.source} target="_blank" rel="noopener noreferrer">Playbill.com</a>
              </p>
            </div>
            
            <div className={styles.callToAction}>
              <a href="/hamlet-a-version/more-info" className={styles.moreInfoButton}>MORE INFO</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
