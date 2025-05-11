import styles from './specialevents.module.css'; // Assuming the path in Vercel log was special-events.module.css

export default function Page() {
  return (
    <main className={styles.pageContainer}>
      {/* Banner Title */}
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>SPECIAL EVENTS</h1>
      </div>

      {/* Content Section */}
      <div className={styles.contentWrapper}>
        <div className={styles.eventsList}>
          <div className={styles.event}>
            <h2 className={styles.eventTitle}>Launch Event: Georgian-American Theatrical Feast</h2>
            <p className={styles.eventDescription}>
              A special event, replete with Georgian wine and treats from Oda House! With a reading of Lasha
              Bugadze&apos;s short play &quot;Putin&apos;s Mother.&quot; Directed by Irina Gachechiladze, featuring actor Khris
              Lewin (&quot;Hamlet. A Version&quot;). What if the mother of Russia&apos;s most powerful man is simply a poor
              soul from the Caucasus? Putin&apos;s Mother is a solo piece about a forgotten woman with a
              remarkable claim. But can a mother unconditionally love a monster? Based on true events.
            </p>
            <p className={styles.eventFollowup}>
              Followed by a special concert by <span className={styles.boldText}>Ilusha Tsinadze</span>, along with <span className={styles.boldText}>Stephanie Hemstrot</span>, <span className={styles.boldText}>Lea Elisha</span>,
              <span className={styles.boldText}>Mariam Chutlashvili</span>, <span className={styles.boldText}>Matt Kanelos</span>, and <span className={styles.boldText}>Peter Hess</span>.
            </p>
            <p className={styles.eventDate}>
              Sunday, July 16 @ 7pm (Doors open at 6:30pm)
            </p>
          </div>

          <div className={styles.event}>
            <h2 className={styles.eventTitle}>Special Event: Diary of a Dress + Concert</h2>
            <p className={styles.eventDescription}>
              A special event, with Georgian wine and treats from Oda House! With a reading of Tamar
              Bartaia&apos;s short play &quot;Diary of a Dress,&quot; directed by Masha Dakic. The secret life of a beautiful
              object – revered and caressed, then tossed and left in the closet. A memoir filled with music and
              sensation propelled by the women who wear her. What remains, and what is gone with time?
            </p>
            <p className={styles.eventFollowup}>
              Followed by a special music performance by <span className={styles.boldText}>Nini Khvedeliani</span> and the Georgian choir <span className={styles.boldText}>Zakari</span>.
            </p>
            <p className={styles.eventDate}>
              Sunday, July 30 @ 7pm (Doors open at 6:30pm)
            </p>
          </div>

          <div className={styles.venueInfo}>
            <p className={styles.venueDetails}>
              All performances at <span className={styles.boldText}>Teatro Circulo</span>, 64 East 4th Street (between 2nd and Bowery).
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}