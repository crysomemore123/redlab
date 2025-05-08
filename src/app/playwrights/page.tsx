import React from 'react';
import styles from './playwrights.module.css';

// Import playwright images
import lashaBugadze from '../images/lasha-bugadze.jpg';
import tamarBartaia from '../images/tamar-bartaia.jpg';
import guramBatiashvili from '../images/guram-batiashvili.jpg';
import ninoHaratischwili from '../images/nino-haratischwili.jpg';
import basaJanikashvili from '../images/basa-janikashvili.jpg';
import rezoKlidiashvili from '../images/rezo-klidiashvili.png'; // Only this one is PNG
import nestanKvinikadze from '../images/nestan-kvinikadze.jpg';
import dataTavadze from '../images/data-tavadze.jpg';
import datoTurashvili from '../images/dato-turashvili.jpg';

const PlaywrightsPage: React.FC = () => {
  return (
    <main className={styles.playwrightsContainer}>
      <div className={styles.header}>
        <h1>PLAYWRIGHTS</h1>
      </div>

      <section className={styles.playwright}>
        <div className={styles.playwrightProfile}>
          <div className={styles.imageContainer}>
            <img 
              src={lashaBugadze} 
              alt="Lasha Bugadze" 
              className={styles.playwrightImage} 
            />
          </div>
          <div className={styles.playwrightInfo}>
            <h2 className={styles.playwrightName}>LASHA BUGADZE</h2>
            <p className={styles.playTitle}>"Navigator in Love" and "Putin's Mother"</p>
            <div className={styles.playwrightBio}>
              <p>
                Lasha Bugadze is a novelist and playwright. His works have been translated into English and 
                French. He won the Russia and Caucasus Region category of the BBC International Radio 
                Playwriting Competition in 2007 and one of the two top places in 2012 for his play "The Navigator". 
                Currently Bugadze hosts a radio program about arts and literature and works as an editor for 
                Georgian Public Broadcasting. He lives and works in Tbilisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.playwright}>
        <div className={styles.playwrightProfile}>
          <div className={styles.imageContainer}>
            <img 
              src={tamarBartaia} 
              alt="Tamar Bartaia" 
              className={styles.playwrightImage} 
            />
          </div>
          <div className={styles.playwrightInfo}>
            <h2 className={styles.playwrightName}>TAMAR BARTAIA</h2>
            <p className={styles.playTitle}>"A Toy Gun" and "Diary of a Dress"</p>
            <div className={styles.playwrightBio}>
              <p>
                Tamar Bartaia is a playwright and screenwriter living in Tbilisi, Georgia. She co-wrote the 
                documentaries "Bakhmaro" (2011) and "Machine which makes everything disappear" which won multiple 
                accolades in 2016. Her play "Diary of a Dress" performed in London, Edinburgh, Kiev, Baku, 
                and Moscow. Her plays have been part of numerous international theatre festivals and have been 
                translated to English, Russian, German, Armenian, Lithuanian, Turkish, and Italian. "A Toy Gun" 
                was performed in London, Lithuania, and Tbilisi, and will receive its American premiere as part of 
                this festival.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.playwright}>
        <div className={styles.playwrightProfile}>
          <div className={styles.imageContainer}>
            <img 
              src={guramBatiashvili} 
              alt="Guram Batiashvili" 
              className={styles.playwrightImage} 
            />
          </div>
          <div className={styles.playwrightInfo}>
            <h2 className={styles.playwrightName}>GURAM BATIASHVILI</h2>
            <p className={styles.playTitle}>"On The Eagle's Wings"</p>
            <div className={styles.playwrightBio}>
              <p>
                Guram Batiashvili is the author of several plays focusing on the Jewish experience – "The Debt," 
                "Land of Hopelessness," "On the Eagle's Wings," and "The Beginning" – as well as the new novel 
                "Hope and Eligio". He graduated from the Ivane Javakhishvili University of Oriental Languages 
                and Literature. Since 1996, he has been the literary manager of the Batozar Toidze National 
                Hebrew Theater and Union. His works are translated into Russian and Hebrew and have been 
                published in the Jeru Press Literary Magazine, "Menora," which he co-founded. From February 
                2003 and from 2003-2012, he was co-chairman of the World Congress of Georgian Jews. 
                He founded the magazine "Menora" in Jewish, Arabic, Hebrew, and Georgian. From 1963, he has been publishing the semi-monthly newspaper "Menora" on Jewish 
                topics. Some of his accolades include the diploma of the Georgian Ministry of Culture (2011), the 
                prose classic David Baazashvili (2013) Prize, and the certificate of honor of President of Israel 
                ("Theslal O'Karr"). The collection of his "Selected Works" in four volumes has been published this 
                year. In 2013 he was elected Vice-President of the Executive Committee of the World Jewish 
                Congress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.playwright}>
        <div className={styles.playwrightProfile}>
          <div className={styles.imageContainer}>
            <img 
              src={ninoHaratischwili} 
              alt="Nino Haratischwili" 
              className={styles.playwrightImage} 
            />
          </div>
          <div className={styles.playwrightInfo}>
            <h2 className={styles.playwrightName}>NINO HARATISCHWILI</h2>
            <p className={styles.playTitle}>"Liv Stein"</p>
            <div className={styles.playwrightBio}>
              <p>
                Nino Haratischwili is a Georgian novelist, playwright, and theater director, living and working in 
                Germany. She has received numerous awards, including the Adelbert von Chamisso Prize, the 
                Kranichsteiner Literaturpreis, and the Literaturpreis des Kulturkreises der deutschen Wirtschaft.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.playwright}>
        <div className={styles.playwrightProfile}>
          <div className={styles.imageContainer}>
            <img 
              src={basaJanikashvili} 
              alt="Basa Janikashvili" 
              className={styles.playwrightImage} 
            />
          </div>
          <div className={styles.playwrightInfo}>
            <h2 className={styles.playwrightName}>BASA JANIKASHVILI</h2>
            <p className={styles.playTitle}>"On The Latch"</p>
            <div className={styles.playwrightBio}>
              <p>
                Basa Janikashvili is a playwright, prose writer and one of Georgia's most successful television and 
                radio producers. In 1999 his first collection of short stories and plays A Mosquito was published. 
                Since then, he has written numerous plays that have been regularly performed at theatres in 
                Georgia. Some have also been staged in Great Britain, France, Germany and Russia. In 2004 he 
                founded a Radio Station "Green" and is currently the Head of its Broadcasting Council. Awards 
                include the 2009 SABA literary prize for best play, the 2008 BBC International Radio Playwriting 
                Competition, and the 2014 "Talk About Boundaries" international playwriting competition. His play 
                "Angry Bird" was performed in the Nuremberg State Theatre, Paris's Amolf Theatre, and Rostfest 
                (Austria). Janikashvili's novels and plays have been translated and published in Georgia, 
                Austria, Italy, Germany and Ukraine. He graduated from Tbilisi State University of Theatre and 
                Cinema.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.playwright}>
        <div className={styles.playwrightProfile}>
          <div className={styles.imageContainer}>
            <img 
              src={rezoKlidiashvili} 
              alt="Rezo Klidiashvili" 
              className={styles.playwrightImage} 
            />
          </div>
          <div className={styles.playwrightInfo}>
            <h2 className={styles.playwrightName}>REZO KLIDIASHVILI</h2>
            <p className={styles.playTitle}>"Pshav"</p>
            <div className={styles.playwrightBio}>
              <p>
                Rezo Klidiashvili is the author of several plays and short stories. His works have received numerous 
                awards, including the Georgian State Prize in Literature and the Georgian Theatrical Workers 
                Union's Prize. His play "Pshav," inspired by George Steinbeck's "Tortilla Flat" was first staged in 
                2007. He is also a scientist in chemistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.playwright}>
        <div className={styles.playwrightProfile}>
          <div className={styles.imageContainer}>
            <img 
              src={nestanKvinikadze} 
              alt="Nestan Kvinikadze" 
              className={styles.playwrightImage} 
            />
          </div>
          <div className={styles.playwrightInfo}>
            <h2 className={styles.playwrightName}>NESTAN KVINIKADZE</h2>
            <p className={styles.playTitle}>"Friends"</p>
            <div className={styles.playwrightBio}>
              <p>
                Nestan Kvinikadze is a Georgian writer, scriptwriter and journalist. She has published numerous 
                collections of prose fiction and one novel "Iagahan Nightingales." Since 2006 she has been editor-
                in-chief of the monthly bilingual (Georgian/English) magazine "Focus". Her articles and essays have 
                been published in Arabesque magazine. She is also a producer for the Georgian TV channel 
                Rustavi 2. (Photo: Nata Sopromadze)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.playwright}>
        <div className={styles.playwrightProfile}>
          <div className={styles.imageContainer}>
            {/* Placeholder for Data Tavadze's image */}
            <div className={styles.playwrightImage}></div>
          </div>
          <div className={styles.playwrightInfo}>
            <h2 className={styles.playwrightName}>DATA TAVADZE</h2>
            <p className={styles.playTitle}>"War Mother"</p>
            <div className={styles.playwrightBio}>
              <p>
                Data Tavadze is a Georgian playwright and director, and frequent collaborator with playwright and 
                translator David Gabunia and the ensemble of Royal District Theatre in Tbilisi. His work as a director 
                includes Shakespeare, Strindberg, Bruscher, Euripides, Aeschylus and Karahana, along with 
                contemporary and devised work. He was an international guest at Schaubühnesommer in 2013 
                where he premiered his "Women of Troy", a devised play based on interviews with women war-
                survivors, Euripides and other literary sources. For the same production he was awarded with 
                Georgian theatre award Duruji. In 2015 he won the prize of Festival of Young European Directors – 
                "Fast Forward" (Germany). His play "The Crime" was awarded with Tanamedrove Award in 2009. 
                "War Mother," written in collaboration with the Royal Court Theatre London, won first prize in the 
                Austrian drama competition "Talking About Boundaries". It is translated into English, German, 
                Hungarian, Ukrainian and Polish. "War Mother" had its world-premiere at Gerhart-Hauptmann-
                Theater Görlitz-Zittau in February 2015.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.playwright}>
        <div className={styles.playwrightProfile}>
          <div className={styles.imageContainer}>
            {/* Placeholder for Dato Turashvili's image */}
            <div className={styles.playwrightImage}></div>
          </div>
          <div className={styles.playwrightInfo}>
            <h2 className={styles.playwrightName}>DATO TURASHVILI</h2>
            <p className={styles.playTitle}>"Iron Curtain"</p>
            <div className={styles.playwrightBio}>
              <p>
                David (Dato) Turashvili is a Georgian author of novels, movie scripts and plays. He studied 
                literature, film and art history at the universities of Tbilisi, London and Madrid. His first collection of 
                short stories was published in 1988. His well-known Flight from USSR described the events of Soviet 
                Union. Before the liberation, Dato Turashvili was one of the leaders of the student protest 
                movement against the soviet regime in Georgia. He has published 17 books, including his 
                autobiographical novel Another Amsterdam which has been translated into multiple languages. He has 
                written plays for such famous directors as Robert Sturua, Einar Shleef and Gela Babluani. He 
                has also translated prose and verse from the Russian, Spanish and English languages. Dato 
                Turashvili has a PhD in the History of Art. He is married to the Georgian painter Nino 
                Kalandadze and has three daughters - Anna-Mariam, Liza and Sofo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlaywrightsPage;