'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './cast-and-creative.module.css';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  altText: string;
  width: number;
  height: number;
  website?: string;
  websiteText?: string;
}

const castAndCreativeData: TeamMember[] = [
  {
    name: 'ALAN ALTSCHULER',
    role: 'Akba and Father in "Navigator in Love"',
    bio: `Favorite NYC stage roles include Polonius (Hamlet): Baylor (A Lie of the Mind); Oberon (A Midsummer Night’s Dream); Pastor Manders (Ghosts); Rick (Bigfoot Stole My Wife); Helge (Festen); The President (Crazy Lady of Chaillot); Serebryakov (Uncle Vanya); Dr. Dorn (The Seagull); Rev. Samuel Gardner (Mrs. Warren’s Profession); and Duncan (Macbeth). Film roles include Performance; Off Hour; and The Devil’s Dolls. TV roles on "Law and Order: SVU" and "The Onion News Network". Alan is a founding member of the Bedlam Theatre Company. He is a proud member of AEA and SAG-AFTRA. Check out his website: www.alanaltschuler.com.`,
    imageSrc: '/images/alan-altschuler.jpg',
    altText: 'Alan Altschuler',
    width: 200, height: 267,
    website: 'http://www.alanaltschuler.com',
    websiteText: 'www.alanaltschuler.com',
  },
  {
    name: 'BECKY BAUMWOLL',
    role: 'Director of "A Toy Gun"',
    bio: `Becky Baumwoll is an NYC-based theater artist originally from the Boston area. After studying International Relations with a Peace & Justice Studies focus and a Studio Art minor at Tufts University, she founded Broken Box Mime Theater (BKBX) in 2011, a non-profit theater company that creates contemporary, original plays through mime. Along with developing curricula through BKBX to teach methods of silent storytelling and devised process to children and professionals of all ages, Becky has been a teaching artist throughout NYC and in greater New England, as well as abroad in Switzerland and Ethiopia. She has appeared on stage in NYC and regionally, directed various Shotz plays with Amios Theatre Company, and continues to act as Artistic Director of BKBX.`,
    imageSrc: '/images/becky-baumwoll.jpg',
    altText: 'Becky Baumwoll',
    width: 200, height: 267,
  },
  {
    name: 'MASHA DAKIC',
    role: 'Clara in "Navigator in Love"',
    bio: `Masha Dakic is a European actress who has collaborated on both classical and contemporary pieces with Anja Susa, Shira Milikowsky, Aleksandar Popovski, Adrian Dunbar, Brian Friel and Elfriede Jelinek. She also has extensive work on foreign films and franchised voice-over work (“Ice Age”, “Phineas and Ferb”, “Wreck It Ralph”, “The Smurfs”, “Strawberry Shortcake” and more). She is new to NYC theatre, and a proud AEA member.`,
    imageSrc: '/images/masha-dakic.jpg',
    altText: 'Masha Dakic',
    width: 200, height: 267,
  },
  {
    name: 'ROSS DeGRAW',
    role: 'Otar in "Navigator in Love"',
    bio: `NY stage includes: Honor Bound (Off Broadway at St Lukes Theatre) C:10 Play Festival Zero Effs (The Collective) The Collaborators, Antigone, Marius, The Time of Your Life (Storm Theatre), 167 Tongues and You Are Now the Owner of This Suitcase, JH 3AM (Theatre 167), As I am Fully Known (The 8 Oclocks/NYFringe), Joan of Arc and Julius Caesar (Gorilla Rep), The Real Thing (Out of Line Productions), Bar Story (Working Mans Clothes Theatre). Regional: Julius Caesar, A Christmas Carol (NC Shakespeare Festival), Bus Stop (Triad Stage), Taming of the Shrew, Coriolanus (Virginia Shakespeare Festival). Films include: Witches of Oz (with Christopher Lloyd), The Last Contract, and Cargo. TV includes: “Boardwalk Empire”, “The Leftovers”, “Veep”, “The Duece”,“Hostages”, “Person of Interest”, and “The Good Wife” as well as numerous commercials. Ross is a proud member of Actors Equity and The Collective NY. Thanks to Robin my wife and my three beautiful little girls Emma, Avery, and Perrin.`,
    imageSrc: '/images/ross-degraw.jpg',
    altText: 'Ross DeGraw',
    width: 200, height: 267,
  },
  {
    name: 'BRETT EPSTEIN',
    role: 'Jakeli in "Navigator in Love"',
    bio: `Theater-- Naperville (Slant Theater Project), Women (The PIT), Tunnel Play (Kraine Theater), Can We Talk? (Flea Theater), Unnecessary Farce (Millbrook Playhouse), Black Comedy (Bristol Valley Theater), Don't Dress for Dinner (Theater Barn). Web-- "Gay Divorce", "Not Brothers" (Best Dramedy: Miami Web Fest). Comedy-- UCB, Groundlings. Producer & Host of "Rule of 7x7". www.itsBrett.net.`,
    imageSrc: '/images/brett-epstein.jpg',
    altText: 'Brett Epstein',
    width: 200, height: 267,
    website: 'http://www.itsBrett.net',
    websiteText: 'www.itsBrett.net',
  },
  {
    name: 'TARA GIORDANO',
    role: 'Mea in "A Toy Gun"',
    bio: `Tara Giordano is a Helen Hayes nominated actress, with selected stage credits including: As You Like It (Shakespeare Theatre), Death of a Salesman, A View from the Bridge, Christmas Carol 1941 (Arena Stage), A Midsummer Night’s Dream, The Underpants, A Year with Frog and Toad (Two River Theater), Conference of the Birds (Folger Theatre), Is He Dead?, Anna Karenina, Blithe Spirit (Olney Theatre), and 10 seasons with PTP/NYC (Scilla in Serious Money, Alice in Vinegar Tom). She has participated in new play developments at theaters like The Kennedy Center, New York Theater Workshop, Woolly Mammoth, and New Victory (LabWorks resident artist), and she's been collaborating on a new musical that will have a run at Lincoln Center’s Clark Theater this fall. www.villageofvale.com Ms. Giordano holds an MFA from the Academy for Classical Acting.`,
    imageSrc: '/images/tara-giordano.jpg',
    altText: 'Tara Giordano',
    width: 200, height: 267,
    website: 'http://www.villageofvale.com',
    websiteText: 'www.villageofvale.com',
  },
  {
    name: 'ADAM KNIGHT',
    role: 'Director of "Navigator in Love"',
    bio: `Adam Knight has directed new works by Mat Smart, Lucy Alibar, Bekah Brunstetter, Matt Dellapina, Lawrence Dial, Michele Lowe, and David Lee Nelson, among others, at venues such as Ars Nova, E.S.T. Youngblood, HERE, Poetry Project, P.S.122, and The Tank. Recent credits: In The Room (Slant Theatre Project), Naperville (Slant), Exit Carolyn (Sans A/Drilling Company), Polaroid Stories (Strasberg), No No No Yes (Ars Nova ANT Fest). Regional: Vanya and Sonia and Masha and Spike (PURE Theatre), The Elephant in My Closet (WaterTower Theatre), The 13th of Paris (Warehouse Theatre), Come Blow Your Horn (Millbrook Playhouse). Assistant/Associate credits: Signature Theatre, Manhattan Theatre Club, Williamstown, Folger Shakespeare Theatre. He is co-Artistic Director of Slant Theatre Project and Executive Director of Red Lab. www.adamknightnyc.com`,
    imageSrc: '/images/adam-knight2.jpg',
    altText: 'Adam Knight',
    width: 200, height: 267,
    website: 'http://www.adamknightnyc.com',
    websiteText: 'www.adamknightnyc.com',
  },
  {
    name: 'MICHAEL PROPSTER',
    role: 'Rostom in "Navigator in Love"',
    bio: `Michael Propster is very excited to be working with Red Lab once again. He last worked with Red Lab alongside Roust Theatre in their Off-Broadway production of Hamlet. A Version. Some of his favorite credits include: Orphans (Phillip) at Seacoast Rep, Lips Together, Teeth Apart (Sam) at Bay Theatre, A Christmas Carol (Bob Cratchit) at Trinity Rep, the title role in Perceval in the NY Fringe Festival, and A Midsummer Night's Dream (Peter Quince) at Shakespeare Festival St. Louis. Other credits include: FIG Productions, The Metropolitan Opera, Amios' Shotz, Mabou Mines, New Perspectives Theatre, Trinity Rep, Round House Theatre, Olney Theatre Center, Imagination Stage, Summer Repertory Theatre, JAGFest, and the National Players. Michael is also a proud volunteer with the 52nd Street Project. TV: "Do Not Disturb", "Twist of Fate", "Disappeared", "One Life to Live". MFA: Brown/Trinity Rep - michaelpropster.com`,
    imageSrc: '/images/michael-propster.jpg',
    altText: 'Michael Propster',
    width: 200, height: 267,
    website: 'http://michaelpropster.com',
    websiteText: 'michaelpropster.com',
  },
  {
    name: 'LAUREN RIDDLE',
    role: 'Navigator in "Navigator in Love"',
    bio: `Lauren Riddle is a Company Artist with the Workshop Theater in NYC and comes from Greenville, SC. She was last seen as Clara in SEX by Mae West(The Dirty Blondes), Mary Meekly in Unnecessary Farce (Millbrook Playhouse), Rosaline in Verona Walls, Charlotte and Angel in A La Carte: A Feast of New Plays, Connie in Jennifer's Birth (Workshop Theater), and Montague in Inspection: Romeo and Juliet (Gene Frankel Theatre).`,
    imageSrc: '/images/lauren-riddle.jpg',
    altText: 'Lauren Riddle',
    width: 200, height: 267,
  },
  {
    name: 'OWEN SCOTT',
    role: 'Emzar in "Navigator in Love"',
    bio: `Owen Scott is an Actor/Teacher/Director based in NYC. He is a founding member of Clown Gym with regular shows at the People's Improv Theatre. Previously with Red Lab: Rosencrantz/Fortinbras in Hamlet. A Version. Regional credits include: The Rivals, Snow Falling on Cedars, Young Playwright's Festival (Centerstage), A Christmas Carol (Fords Theatre), The History Boys (Studio Theatre) where he was nominated for best supporting actor and best ensemble, Helen Hayes Awards. He trained at the GSA Conservatoire in London where he received the Sir Michael Redgrave scholarship.`,
    imageSrc: '/images/owen-scott.jpg',
    altText: 'Owen Scott',
    width: 200, height: 267,
  },
  {
    name: 'LUKE P. YOUNGER',
    role: 'Yo in "A Toy Gun"',
    bio: `Luke P. Younger most recently played Tupolski in theTC Experience production of The Pillowman and Greg in the run of A Kid Like Jake by Yolo Productions. Luke also won best actor in the NY Strawberry Festival for Corner Cafe, which was later turned into a short film. You might also recognize Luke as the security guard in the long running “Lifelock” commercial. Luke has appeared in over two dozen commercials, including Dollar Shave Club, Miller Lite, Playstation, etc. And he can be seen on season one of HBO’s “Divorce” with Sarah Jessica Parker. Luke is also a writer and spent years doing standup comedy.`,
    imageSrc: '/images/luke-p-younger.jpg',
    altText: 'Luke P. Younger',
    width: 200, height: 267,
  },
];

export default function CastAndCreativePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>CAST AND CREATIVE</h1>
      </div>

      {isClient ? (
        <div className={styles.teamList}>
          {castAndCreativeData.map((member, index) => (
            <div key={member.name} className={styles.teamEntry}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src={member.imageSrc}
                  alt={member.altText}
                  width={member.width}
                  height={member.height}
                  className={styles.teamImage}
                  priority={index < 3}
                  sizes="200px"
                />
              </div>
              <div className={styles.teamInfo}>
                <h2 className={styles.teamName}>{member.name}</h2>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamBio}>{member.bio}</p>
                {member.website && (
                  <p className={styles.teamWebsite}>
                    <a href={member.website} target="_blank" rel="noopener noreferrer">
                      {member.websiteText || member.website}
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.teamList}>
          {[...Array(4)].map((_, index) => (
            <div key={index} className={styles.teamEntry} style={{ opacity: 0.5 }}>
              <div
                className={`${styles.teamImageWrapper} ${styles.skeletonPulse}`}
                style={{ width: '200px', height: '267px', backgroundColor: '#ccc' }}
              />
              <div className={styles.teamInfo}>
                <div className={`${styles.skeletonPulse} ${styles.skeletonLine}`} style={{ height: '24px', width: '60%', marginBottom: '10px' }}></div>
                <div className={`${styles.skeletonPulse} ${styles.skeletonLine}`} style={{ height: '18px', width: '40%', marginBottom: '15px' }}></div>
                <div className={`${styles.skeletonPulse} ${styles.skeletonLine}`} style={{ height: '14px', width: '100%', marginBottom: '8px' }}></div>
                <div className={`${styles.skeletonPulse} ${styles.skeletonLine}`} style={{ height: '14px', width: '90%' }}></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}