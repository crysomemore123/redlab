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
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>PRESS/REVIEWS</h1>
      </div>

      {isClient ? (
        <div className={styles.contentWrapper}>
          {/* Festival Image - Left Column */}
          <div className={styles.imageWrapper}>
            <Image
              src="/images/festival-poster.jpg"
              alt="Georgian-American Theatrical Feast Poster"
              width={500}
              height={700}
              className={styles.festivalImage}
              priority
            />
          </div>

          {/* Reviews Section - Right Column */}
          <div className={styles.reviewsBlock}>
            <div className={styles.reviewGroup}>
              <p className={styles.quote}>
                &quot;Red Lab Productions keeps Georgia on our minds with a festival of works by playwrights from the small Caucasian nation!&quot; (
                <a href="https://www.timeout.com/newyork/theater/the-georgian-american-theatrical-feast" target="_blank" className={styles.textLink}>TimeOutNY</a>)
              </p>
            </div>

            <div className={styles.reviewGroup}>
              <h2 className={styles.reviewTitle}>PRAISE FOR &quot;NAVIGATOR IN LOVE&quot;...</h2>
              
              <p className={styles.quote}>
                &quot;[T]he story takes place in Georgia—the country, not the state. Not only that, it was written by Lasha Bugadze, a Georgian playwright, 
                so the perspective from which the story is told is really quite unique. By that I mean that there is a political and social context 
                surrounding Rostom’s micro-level story it that makes it compelling in ways you don’t often see in American theater. Indeed, it was 
                definitely outside of my theater box, but that is what made me enjoy the play so much.&quot; (Used New York)
              </p>

              <p className={styles.quote}>
                &quot;Adam Knight directs the show with marvelous precision, subtlety and humor... The play is a genuine tragedy on a small scale. 
                With the bulk of playwrights over-writing their plays, it’s great to find one like Ms. Bugadze who says so much in a slight play.&quot; (
                <a href="https://newyorktheatre.blogspot.com/2017/07/a-toy-gun.html?m=1" target="_blank" className={styles.textLink}>New York Critic</a>)
              </p>

              <p className={styles.quote}>
                &quot;There are a lot of comedic moments...counterbalanced with Kafkaesque anxiety.&quot; (
                <a href="https://web.archive.org/web/20210512062305/http://www.theasy.com/Reviews/2017/N/navigatorinlove.php" target="_blank" className={styles.textLink}>Theatre Is Easy</a>)
              </p>
            </div>

            <div className={styles.reviewGroup}>
              <h2 className={styles.reviewTitle}>PRAISE FOR &quot;A TOY GUN&quot;...</h2>
              
              <p className={styles.quote}>
                &quot;Sometimes you wonder if, at the end of your days, you’ll look back and pin point the moment that altered the entire trajectory 
                of your life; if you’ll realize that one defining glimpse of time that made all the difference... Georgian playwright Tamar Bartaia’s 
                A Toy Gun tickles with that very question in a most tender and profound way.&quot; (
                <a href="https://web.archive.org/web/20210507013055/http://www.theasy.com/Reviews/2017/T/atoygun.php" target="_blank" className={styles.textLink}>Theatre Is Easy</a>)
              </p>

              <p className={styles.quote}>
                &quot;The solid structure and depth of [Tamar Bartaia&apos;s] play are apparent from the start when society and class lines are 
                insinuated by the briefest mention, but astounding detail lies just beneath the surface at every turn.&quot; (
                <a href="https://drtomstevens.blogspot.com/2017/08/applause-applause-review-of-tamar.html?m=1" target="_blank" className={styles.textLink}>Applause Applause</a>)
              </p>

              <p className={styles.quote}>
                &quot;What’s noteworthy about the script is Ms. Bartaia’s deft dialogue technique... The production is directed very creatively 
                by Becky Baumwoll.&quot; (
                <a href="https://newyorktheatre.blogspot.com/2017/07/a-toy-gun.html?m=1" target="_blank" className={styles.textLink}>New York Critic</a>)
              </p>
            </div>

            <div className={styles.reviewGroup}>
              <h2 className={styles.reviewTitle}>OTHER PRESS</h2>
              <p className={styles.otherPress}>
                &quot;New York festival introduces prominent Georgian playwrights to US audience&quot; (
                <a href="https://web.archive.org/web/20171127134317/http://agenda.ge/news/83877/eng" target="_blank" className={styles.textLink}>Agenda.ge</a>)
              </p>
              <p className={styles.otherPress}>
                Interview with &quot;A Toy Gun&quot; director Becky Baumwoll (
                <a href="https://www.hollywoodsoapbox.com/interview-georgian-american-theatrical-feast-opens-with-a-toy-gun/" target="_blank" className={styles.textLink}>Hollywood Soapbox</a>)
              </p>
              <p className={styles.otherPress}>
                &quot;Georgian-American Theatrical Feast&quot; (
                <a href="https://web.archive.org/web/20190626004034/http://georgiatosee.com/2017/10/georgian-american-theatrical-feast/" target="_blank" className={styles.textLink}>Georgia To See</a>)
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.contentWrapper}>
          <div className={`${styles.imageWrapper} ${styles.skeletonPulse}`} style={{ height: '600px' }}></div>
          <div className={styles.reviewsBlock}>
            <div className={styles.skeletonPulse} style={{ height: '100px', width: '100%', marginBottom: '20px' }}></div>
            <div className={styles.skeletonPulse} style={{ height: '200px', width: '100%' }}></div>
          </div>
        </div>
      )}
    </div>
  );
}