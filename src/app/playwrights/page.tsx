'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './playwrights.module.css';

interface Playwright {
  name: string;
  quote: string;
  bio: string;
  imageSrc: string;
  altText: string;
}

const playwrightsData: Playwright[] = [
  {
    name: 'LASHA BUGADZE',
    quote: '"Navigator in Love" and "Putin\'s Mother"',
    bio: `Lasha Bugadze is a novelist and playwright. His works have been translated into English and French. He won the Russia and Caucasus Region category of the BBC International Radio Playwriting Competition in 2007 and one of the two top prizes in 2012 for his play “The Navigator” (now “Navigator in Love”, part of this festival). Bugadze is also a frequent contributor and writer for Georgian Public Broadcasting. He lives and works in Tbilisi.`,
    imageSrc: '/images/lasha-bugadze.jpg',
    altText: 'Lasha Bugadze',
  },
  {
    name: 'TAMAR BARTAIA',
    quote: '"A Toy Gun" and "Diary of a Dress"',
    bio: `Tamar Bartaia is a playwright and screenwriter living in Tbilisi, Georgia. She co-wrote the documentary "Prime Meridian of Wine," about Georgian viniculture, which won numerous awards and citations in 2016. Her play "Diary of a Dress" was performed in London, Edinburgh, Kiev, Baku, and Moscow. Her plays have been part of numerous international theatre festivals and have been translated into English, Russian, German, Armenian, Lithuanian, Turkish, and Italian. "A Toy Gun" was performed in London, Lithuania, and Tbilisi, and will receive its American premiere as part of this festival.`,
    imageSrc: '/images/tamar-bartaia.jpg',
    altText: 'Tamar Bartaia',
  },
  {
    name: 'GURAM BATIASHVILI',
    quote: '"On The Eagle\'s Wings"',
    bio: `Guram Batiashvili is the author of several plays focusing on the Jewish experience -- “The Debt,” “Land or Homeland,” “On the Eagle’s Wings,” and “The Beginning” -- as well as the new novel, "Hava and Eligula". He graduated from the Tbilisi State University, Faculty of Oriental Languages and Literature. Since 1985 G. Batiashvili has been editor-in-chief of the journal “Teatri da Tskhovreba” (”Theatre and Life”). His works are translated into Russian and Hebrew and have been published in Tel-Aviv and Moscow. He was elected Vice-President of the Georgia-Israel Friendship Organization, and from 2003-2012 he was co-chairman of the World Congress of Georgian Jews (Tel Aviv). Since 1993 he has been publishing the semi-monthly newspaper “Menora” on Jewish topics. Awards include the laureate of the Georgian State (1998), the Georgian dramaturgy and prose classic David Kldiashvili (2013) Prize, and the certificate of honor of President of Israel (“Theudat O Kara”). The collection of his “Selected Works” in four volumes has been published this year. In 2013 he was elected Vice-President of the Executive Committee of the World Jewish Congress.`,
    imageSrc: '/images/guram-batiashvili.jpg',
    altText: 'Guram Batiashvili',
  },
  {
    name: 'NINO HARATISCHWILI',
    quote: '"Liv Stein"',
    bio: `Nino Haratischwili is a Georgian novelist, playwright, and theater director, living and working in Germany. She has received numerous awards, including the Adelbert von Chamisso Prize, the Kranichsteiner Literaturpreis, and the Literaturpreis des Kulturkreises der deutschen Wirtschaft.`,
    imageSrc: '/images/nino-haratischwili.jpg',
    altText: 'Nino Haratischwili',
  },
  {
    name: 'BASA JANIKASHVILI',
    quote: '"On The Latch"',
    bio: `Basa Janikashvili is a playwright, prose writer and one of Georgia’s most successful television and radio producers. In 1998 his first collection of short stories and plays A Mosquito was published. Since then, he has written numerous plays that have been regularly performed at theatres in Georgia. Some have also been staged in Great Britain, France, Germany and Russia. In 2004 he founded a Radio Station “Ucnobi” and is currently the Head of its Broadcasting Council. Awards include the 2006 SABA literary prize for best play, the 2009 BBC International Radio Playwriting Competition, and the 2014 “Talk About Boundaries” international playwriting competition. His play Angry Bird was performed in the Nuremberg State Theatre, Paris’s Arnold Theatre, and Rustaveli National Theatre. Janikashvili’s novels and plays have been translated and published in Georgia, Austria, Italy, Germany and Ukraine. He graduated from Tbilisi State University of Theatre and Cinema.`,
    imageSrc: '/images/basa-janikashvili.jpg',
    altText: 'Basa Janikashvili',
  },
  {
    name: 'REZO KLIDIASHVILI',
    quote: '"Pilon"',
    bio: `Rezo Kldiashvili is the author of several plays and short stories. His works have received numerous awards, including the Georgian State Prize in Literature and the Georgian Theatrical Workers Union’s Prize. His play “Pilon,” inspired by George Steinbeck’s “Tortilla Flat” was first staged in 2007. He is also a scientist in chemistry.`,
    imageSrc: '/images/rezo-kldiashvili.png',
    altText: 'Rezo Kldiashvili',
  },
  {
    name: 'NESTAN KVINIKADZE',
    quote: '"Friends"',
    bio: `Nestan Kvinikadze is a Georgian writer, scriptwriter and journalist. She has published numerous collections of prose fiction and one novel, “Ispahan Nightingales.” Since 2006 she has been editor-in-chief of the monthly bilingual (Georgian/English) magazine "Focus". Her articles and essays have been published in Anabechdi magazine. She is also a producer for the Georgian TV channel Rustavi 2. (Photo: Nata Sopromadze)`,
    imageSrc: '/images/nestan-kvinikadze.jpg',
    altText: 'Nestan Kvinikadze',
  },
  {
    name: 'DATA TAVADZE',
    quote: '"War Mother"',
    bio: `Data Tavadze is a Georgian playwright and director, and frequent collaborator with playwright and translator Davit Gabunia and the ensemble of Royal District Theatre in Tbilisi. His work as a director includes Shakespeare, Strindberg, Bruckner, Euripides, Aeschylus and Kawabata, along with contemporary and devised work. He was an international guest at Scenkonstbiennalen in 2013 where he premiered his "Women of Troy", a devised play based on interviews with women war-survivors, Euripides and other literary sources. For the same production he was awarded with Georgian theatre award Duruji; in 2016 he won the prize of Festival of Young European Directors – "Fast Forward" (Germany). His play "The Crows" was awarded with Tumanishvili Award in 2009. "War Mother," written in collaboration with the Royal Court Theatre London, won first prize in the Austrian drama competition “Talking About Borders”; it is translated into English, German, Hungarian, Ukrainian and Polish. "War Mother" had its world-premiere at Gerhart-Hauptmann-Theater Görlitz-Zittau in February 2015.`,
    imageSrc: '/images/data-tavadze.jpg',
    altText: 'Data Tavadze',
  },
  {
    name: 'DATO TURASHVILI',
    quote: '"Iron Curtain"',
    bio: `David (Dato) Turashvili is a Georgian author of novels, movie scripts and plays. He studied literature, film and art history at the universities of Tbilisi, London and Madrid. His first collection of short stories was published in 1991 – in the year of the Georgian independence from the Soviet Union. Before the liberation, Dato Turashvili was one of the leaders of the student protest movement against the soviet regime in Georgia. He has published 17 books, including his bestselling novel “The Flight from the USSR” which has been translated into 14 languages. He has written plays for such famous directors as Robert Sturua, Eldar Shengelaia and Gela Babluani. He has also translated prose and verse from the Russian, Spanish and English languages. Dato Turashvili is a host of a popular TV show in Georgia about literature. He is married to Maka Kekelidze and has three daughters - Anna-Mariam, Liza and Sofio.`,
    imageSrc: '/images/dato-turashvili.jpg',
    altText: 'Dato Turashvili',
  }
];

export default function FestivalPlaywrightsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>PLAYWRIGHTS</h1>
      </div>

      {isClient ? (
        <div className={styles.playwrightsList}>
          {playwrightsData.map((playwright, index) => (
            <div key={playwright.name} className={styles.playwrightEntry}>
              <div className={styles.playwrightImageWrapper}>
                <Image
                  src={playwright.imageSrc}
                  alt={playwright.altText}
                  fill
                  sizes="200px"
                  className={styles.playwrightImage}
                  priority={index < 2}
                />
              </div>
              <div className={styles.playwrightInfo}>
                <h2 className={styles.playwrightName}>{playwright.name}</h2>
                <p className={styles.playwrightQuote}>{playwright.quote}</p>
                <p className={styles.playwrightBio}>{playwright.bio}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Skeleton Loader for initial SSR state */
        <div className={styles.playwrightsList}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className={styles.playwrightEntry} style={{ opacity: 0.5 }}>
              <div 
                className={`${styles.playwrightImageWrapper} ${styles.skeletonPulse}`} 
              />
              <div className={styles.playwrightInfo}>
                <div className={`${styles.skeletonPulse} ${styles.skeletonLine}`} style={{ width: '60%', height: '24px' }}></div>
                <div className={`${styles.skeletonPulse} ${styles.skeletonLine}`} style={{ width: '40%', height: '18px' }}></div>
                <div className={`${styles.skeletonPulse} ${styles.skeletonLine}`} style={{ width: '100%', height: '100px' }}></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}