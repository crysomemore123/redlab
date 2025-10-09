// src/app/hamlet-press/page.tsx
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
                &quot;Full of intrigue... lush and fantastical.&quot; - <a href="https://www.nytimes.com/2017/04/26/theater/review-to-be-or-not-to-be-oh-who-cares-a-different-hamlet.html" className={styles.source} target="_blank" rel="noopener noreferrer">The New York Times</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                &quot;Probably the most intriguing version of Hamlet I have ever seen!&quot; - <a href="https://t2conline.com/hamlet-a-version-should-be-the-only-version-of-hamlet/" className={styles.source} target="_blank" rel="noopener noreferrer">Times Square Chronicles</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                &quot;Akunin&apos;s script is dazzling, and his new (or should we say alternate) Hamlet is a breathtaking journey: full of wit, humor, tragedy, and twists.&quot; - <a href="https://stagebuddy.com/theater/theater-review/review-hamlet-version" className={styles.source} target="_blank" rel="noopener noreferrer">Stage Buddy</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                &quot;A fresh interpretation of Hamlet has hit the NY stage... Solidly directed with clever stylistic choices by Irina Gachechiladze and led by a powerhouse cast&quot; - <a href="https://www.viabroadway.com" className={styles.source} target="_blank" rel="noopener noreferrer">Via Broadway</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                &quot;Shakespeare&apos;s Hamlet, made into a detective story, investigates international political intrigues and flirts with the dichotomy between fiction and reality&quot; - <a href="https://www.theatreiseasy.com" className={styles.source} target="_blank" rel="noopener noreferrer">Theatre is Easy</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                &quot;Striking presentational elements, terrific direction, fine performances and an interesting concept&quot; - <a href="https://www.theatrescene.com" className={styles.source} target="_blank" rel="noopener noreferrer">Theatrescene</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                &quot;Akunin is brilliant&quot; - <a href="https://www.justoffbj.com" className={styles.source} target="_blank" rel="noopener noreferrer">JustOffBj.com</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                &quot;Scenes are made more spectacular by Giya Kancheli&apos;s sound score which feels light, like pinpricks on the skin.&quot; - <a href="https://www.offoffonline.com" className={styles.source} target="_blank" rel="noopener noreferrer">OffOffOnline</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                &quot;Witty and sharp language... from a writer particularly sensitive to political upheavals and crime&quot; - <a href="https://www.theknockturnal.com" className={styles.source} target="_blank" rel="noopener noreferrer">The Knockturnal</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                &quot;One of &apos;the Best Off-Off Broadway&apos; shows!&quot; - <a href="https://www.timeoutny.com" className={styles.source} target="_blank" rel="noopener noreferrer">TimeOutNY</a>
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.quote}>
                &quot;Not to miss! Akunin&apos;s adaptation illuminates a contemporary international political issue: how to eradicate the old to make way for the new.&quot; - <a href="https://www.playbill.com" className={styles.source} target="_blank" rel="noopener noreferrer">Playbill.com</a>
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