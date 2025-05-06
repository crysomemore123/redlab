// src/app/press/page.tsx

import styles from './press.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    <main className={styles.pressContainer}>
      {/* Banner Title */}
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>PRESS/REVIEWS</h1>
      </div>

      {/* Content Section */}
      <div className={styles.contentWrapper}>
        {/* Festival Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/festival-poster.png"
            alt="Georgian-American Theatrical Feast Poster featuring playwrights"
            width={500}
            height={600}
            className={styles.festivalImage}
          />
        </div>

        {/* Reviews Section */}
        <div className={styles.reviewsBlock}>
          <div className={styles.review}>
            <p className={styles.quote}>
              &quot;Red Lab Productions keeps Georgia on our minds with a festival of works by playwrights from the small Caucasian nation!&quot; (<a href="https://www.timeout.com/newyork/theater/the-georgian-american-theatrical-feast" className={styles.textLink}>TimeOutNY</a>)
            </p>
          </div>

          <div className={styles.review}>
            <p className={styles.reviewTitle}>PRAISE FOR &quot;NAVIGATOR IN LOVE&quot;...</p>
            <p className={styles.quote}>
              &quot;[T]he story takes place in Georgia—the country, not the state. Not only that, it was written by Lasha Bugadze, a Georgian playwright, so the perspective from which the story is told is really refreshing. By that I mean that there is political and social context surrounding Rostom's micro-level story it that makes it compelling in ways you don't often see in American theatre. I'll admit it was definitely outside of my theater box, but that is what made me enjoy the play so much.&quot; (<a href="https://www.usedyorkcity.com/" className={styles.textLink}>Used New York</a>)
            </p>
            <p className={styles.quote}>
              &quot;Adam Knight directs the show with marvelous precision, subtlety and humor... The play is a genuine wonder on a small scale. With the bulk of playwrights over-writing their plays, it's great to find one like Ms. Bugadze who says so much in a slight play.&quot; (<a href="https://newyorktheatre.blogspot.com/2017/07/a-toy-gun.html?m=1" className={styles.textLink}>New York Critic</a>)
            </p>
            <p className={styles.quote}>
              &quot;There are a lot of comedic moments...counterbalanced with Kafkaesque anxiety.&quot; (<a href="http://www.theasy.com/Reviews/2017/N/navigatorinlove.php" className={styles.textLink}>Theatre Is Easy</a>)
            </p>
          </div>

          <div className={styles.review}>
            <p className={styles.reviewTitle}>PRAISE FOR &quot;A TOY GUN&quot;...</p>
            <p className={styles.quote}>
              &quot;Sometimes you wonder if, at the end of your days, you'll look back and pin point the moment that altered the entire trajectory of your life. If you'll realize that one defining moment of truth that made it all make sense. Georgian playwright Tamar Bartaia's A Toy Gun tackles with that very question in a most tender and profound way.&quot; (<a href="http://www.theasy.com/Reviews/2017/T/atoygun.php" className={styles.textLink}>Theatre Is Easy</a>)
            </p>
            <p className={styles.quote}>
              &quot;The solid structure and depth of [Tamar Bartaia's] play are apparent from the start when society and class lines are insinuated by the tiniest mention, but astounding detail lies just beneath the surface at every turn.&quot; (<a href="https://drtomstevens.blogspot.com/2017/08/applause-applause-review-of-tamar.html?m=1" className={styles.textLink}>Applause Applause</a>)
            </p>
            <p className={styles.quote}>
              &quot;What's noteworthy about the script is Ms. Bartaia's deft dialogue technique... The production is directed very creatively by Becky Baumwoll.&quot; (<a href="https://newyorktheatre.blogspot.com/2017/07/a-toy-gun.html?m=1" className={styles.textLink}>New York Critic</a>)
            </p>
          </div>

          <div className={styles.review}>
            <p className={styles.reviewTitle}>OTHER PRESS</p>
            <p className={styles.otherPress}>
              New York festival introduces prominent Georgian playwrights to US audience" (<a href="http://agenda.ge/news/83877/eng" className={styles.textLink}>Agenda.ge</a>)
            </p>
            <p className={styles.otherPress}>
              Interview with "A Toy Gun" director Becky Baumwoll (<a href="https://www.hollywoodsoapbox.com/interview-georgian-american-theatrical-feast-opens-with-a-toy-gun/" className={styles.textLink}>Hollywood Soapbox</a>)
            </p>
            <p className={styles.otherPress}>
              "Georgian-American Theatrical Feast" (<a href="http://georgiatosee.com/2017/10/georgian-american-theatrical-feast/" className={styles.textLink}>Georgia To See</a>)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}