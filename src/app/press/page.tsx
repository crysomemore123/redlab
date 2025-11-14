'use client';

import { useState, useEffect } from 'react';
import styles from './press.module.css';
import Image from 'next/image';

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.pressContainer}>
      {/* Banner Title - static content, safe for both server and client */}
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>PRESS/REVIEWS</h1>
      </div>

      {/* Conditional rendering based on client-side mount */}
      {isClient ? (
        <div className={styles.contentWrapper}>
          {/* Festival Image */}
          <div className={styles.imageWrapper}>
            <Image
              src="/images/festival-poster.jpg"
              alt="Georgian-American Theatrical Feast Poster featuring playwrights"
              width={500}
              height={600}
              className={styles.festivalImage}
              priority
            />
          </div>

          {/* Reviews Section */}
          <div className={styles.reviewsBlock}>
            <div className={styles.review}>
              <p className={styles.quote}>
                &quot;Red Lab Productions keeps Georgia on our minds with a festival of works by playwrights from the small Caucasian nation!&quot; (
                <a
                  href="https://www.timeout.com/newyork/theater/the-georgian-american-theatrical-feast"
                  className={styles.textLink}
                >
                  TimeOutNY
                </a>
                )
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.reviewTitle}>PRAISE FOR &quot;NAVIGATOR IN LOVE&quot;...</p>
              <p className={styles.quote}>
                &quot;[T]he story takes place in Georgia—the country, not the state. Not only that, it was written by Lasha Bugadze, a Georgian playwright,
                so the perspective from which the story is told is really refreshing...&quot; (
                <a href="https://www.usedyorkcity.com/" className={styles.textLink}>Used New York</a>
                )
              </p>
              <p className={styles.quote}>
                &quot;Adam Knight directs the show with marvelous precision, subtlety and humor...&quot; (
                <a href="https://newyorktheatre.blogspot.com/2017/07/a-toy-gun.html?m=1" className={styles.textLink}>New York Critic</a>
                )
              </p>
              <p className={styles.quote}>
                &quot;There are a lot of comedic moments...counterbalanced with Kafkaesque anxiety.&quot; (
                <a href="https://web.archive.org/web/20210512062305/http://www.theasy.com/Reviews/2017/N/navigatorinlove.php" className={styles.textLink}>Theatre Is Easy</a>
                )
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.reviewTitle}>PRAISE FOR &quot;A TOY GUN&quot;...</p>
              <p className={styles.quote}>
                &quot;Sometimes you wonder if, at the end of your days, you&apos;ll look back and pin point the moment that altered the entire trajectory
                of your life...&quot; (
                <a href="https://web.archive.org/web/20210507013055/http://www.theasy.com/Reviews/2017/T/atoygun.php" className={styles.textLink}>Theatre Is Easy</a>
                )
              </p>
              <p className={styles.quote}>
                &quot;The solid structure and depth of [Tamar Bartaia&apos;s] play are apparent from the start...&quot; (
                <a href="https://drtomstevens.blogspot.com/2017/08/applause-applause-review-of-tamar.html?m=1" className={styles.textLink}>Applause Applause</a>
                )
              </p>
              <p className={styles.quote}>
                &quot;What&apos;s noteworthy about the script is Ms. Bartaia&apos;s deft dialogue technique...&quot; (
                <a href="https://newyorktheatre.blogspot.com/2017/07/a-toy-gun.html?m=1" className={styles.textLink}>New York Critic</a>
                )
              </p>
            </div>

            <div className={styles.review}>
              <p className={styles.reviewTitle}>OTHER PRESS</p>
              <p className={styles.otherPress}>
                &quot;New York festival introduces prominent Georgian playwrights to US audience&quot; (
                <a href="https://web.archive.org/web/20171127134317/http://agenda.ge/news/83877/eng" className={styles.textLink}>Agenda.ge</a>
                )
              </p>
              <p className={styles.otherPress}>
                Interview with &quot;A Toy Gun&quot; director Becky Baumwoll (
                <a href="https://www.hollywoodsoapbox.com/interview-georgian-american-theatrical-feast-opens-with-a-toy-gun/" className={styles.textLink}>
                  Hollywood Soapbox
                </a>
                )
              </p>
              <p className={styles.otherPress}>
                &quot;Georgian-American Theatrical Feast&quot; (
                <a href="https://web.archive.org/web/20190626004034/http://georgiatosee.com/2017/10/georgian-american-theatrical-feast/" className={styles.textLink}>Georgia To See</a>
                )
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            {/* Placeholder for Image */}
            <div
              style={{
                width: '500px',
                height: '600px',
                background: '#eee',
                border: '1px solid #ddd',
              }}
            />
          </div>
          <div className={styles.reviewsBlock}>
            {/* Placeholder for reviews */}
            <div style={{ height: '20px', width: '100%', background: '#eee', marginBottom: '10px' }} />
            <div style={{ height: '20px', width: '90%', background: '#eee', marginBottom: '10px' }} />
            <div style={{ height: '20px', width: '95%', background: '#eee', marginBottom: '10px' }} />
          </div>
        </div>
      )}
    </div>
  );
}
