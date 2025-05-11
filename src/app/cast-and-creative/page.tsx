'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './cast-and-creative.module.css'; // Ensure this path is correct

// Define the type for a cast or creative team member
interface TeamMember {
  name: string;
  role: string; // This can be their role in a specific play or their general role in the festival
  bio: string;
  imageSrc: string;
  altText: string;
  website?: string; // Optional website link
  websiteText?: string; // Optional text for the website link
}

// Data for the Cast and Creative page
const castAndCreativeData: TeamMember[] = [
  {
    name: 'ALAN ALTSCHULER',
    role: 'Akop and Father in "Navigator in Love"',
    bio: `Favorite NYC stage roles include: Malvolio (Twelfth Night), Baylor (A Lie of the Mind), Bottom (A Midsummer Night’s Dream), Witwoud (Way of the World), Rick (England’s Slave by Mike Heath), Dr. Higgins (The Memorandum), Max Levene (Lady in Waiting), Charley (Charley’s Chanteuse), Serebryakov (Uncle Vanya), Dr. Dorn (The Seagull), Rev. Samuel Gardner (Mrs. Warren’s Profession), and Dorante (Marcella). Film roles include: Johnny Stitches (An Ohm Encounter), Joe (The Sexual Life), Leo (The Cold Call), 13 years too old (The Old Man and the C.S.I.), and The Voice (of “Old Timey Medicine Man” Narrator). Alan has also appeared as a member of the Redfern Theatre Company. He is a proud member of AEA and SAG-AFTRA. Check out his website: www.alanaltschuler.com`,
    imageSrc: '/images/alan-altschuler.jpg', // Replace with actual image path
    altText: 'Alan Altschuler',
    website: 'http://www.alanaltschuler.com',
    websiteText: 'www.alanaltschuler.com',
  },
  {
    name: 'BECKY BAUMWOLL',
    role: 'Director of "A Toy Gun"',
    bio: `Becky Baumwoll is an NYC-based theater artist originally from the Boston area. After studying international relations with a Peace & Justice Studies focus and a BA/MA Ed minor at Tufts University, she headed Broken Box Mime Theater (BKBX) in 2011, a non-profit theater company that creates contemporary, original plays through mime. Along with developing curricula through BKBX to teach students the skill of collaborative storytelling through movement and devising to professionals of all ages, Becky has been a teaching artist throughout NYC and in greater New England, as well as abroad in Switzerland and Ethiopia. She has appeared on stage in NYC and regionally, directed various short plays with Annex Theatre Company, and continues to act as Artistic Director of BKBX.`,
    imageSrc: '/images/becky-baumwoll.jpg', // Replace with actual image path
    altText: 'Becky Baumwoll',
  },
  {
    name: 'MASHA DAKIC',
    role: 'Clara in "Navigator in Love"',
    bio: `Masha Dakic is a European actress who has collaborated on both classical and contemporary pieces with Javor Gardev, Iradj Mirmilawy, Andras Urban (Dogville). Among her favorite roles are Gertrud and Phedra. Masha has also done extensive work on foreign films and branched into voice-over work (“Ice Age”, “Phineas and Ferb”, “Wreck It Ralph”, “The Smurfs”, “Strawberry Shortcake” and more). She is now living in NYC theatre, and a proud AEA member.`,
    imageSrc: '/images/masha-dakic.jpg', // Replace with actual image path
    altText: 'Masha Dakic',
  },
  {
    name: 'ROSS DEGRAW',
    role: 'Dilar in "Navigator in Love"',
    bio: `NY stage includes: Dinner (and an Off Broadway run at St Lukes Theatre) C-10 City | Intime Jens Lekman (The Collective) The Collaborators, Philegyrae, Menos, For time of Your Life (Storm Theatre), NY, Jaques and You Are Now the Owner of this Suitcase…IN SAM (Theatre 15?), As I Am Fully Known (Terri Brennan/Origin), JANE, Act Sooner (Sonnet Rep) The Winterling (The Red Herring Co) Out of Lonnngfordd (The Story Workers) Summer Shorts (various). Regional: Julius Caesar, A Christmas Carol (NC Shakespeare Festival), Aux Shop (Triad Stage), Taming of the Shrew, Connecticut Original Shakespeare Festival (Valley Shakes) Winner of CT Critics Playwrights Loop, The Good Doctor and Chekhov (Connecticut Shakespeare Festival) Film includes "Voyt", "The Donut", "Hostages", "Pursuit of Interest", and "The Good Wife" as well as numerous commercials. Ross is a proud member of Actors Equity and The Collective NY. Thanks to Nobile my wife and my three beautiful little girls Emma, Avery, and Faith.`,
    imageSrc: '/images/ross-degraw.jpg', // Replace with actual image path
    altText: 'Ross DeGraw',
  },
  {
    name: 'BRETT EPSTEIN',
    role: 'Jokari in "Navigator in Love"',
    bio: `Theater -- Naperville (Slant Theater Project), Women (The PIT), Tunnel Play (Kraine Theater), Can We Talk? (Flea Theater), Unnecessary Farce (Millbrook Playhouse), Blast Comedy (Bristol Valley Theater), Don't Dress for Dinner (Theater Barn), Web -- Bro Brunches "Nut Brothers" (Gent Slemani). Music -- Main Fest, Corona, UCSB…recordings. Producer & host of "Talk N' Text". www.dsbrett.net`,
    imageSrc: '/images/brett-epstein.jpg', // Replace with actual image path
    altText: 'Brett Epstein',
    website: 'http://www.dsbrett.net',
    websiteText: 'www.dsbrett.net',
  },
  {
    name: 'TARA GIORDANO',
    role: 'Mia in "A Toy Gun"',
    bio: `Tara Giordano is a Helen Hayes nominated actress with selected stage credits including: As You Like It (Shakespeare Theatre), Heart of a Salesman (Arena Stage); Wanderlust (Everyman Theatre), Gypsy (Signature Theatre), A Midsummer Night’s Dream, The Underpants, A Year with Frog and Toad (Two River Theater), Conference of the Birds (Folger Theatre), Is He Dead?, Anna Karenina, Private Spirit (Olney Theatre), over 10 seasons with The PIT NYC (Scilla Is Not Always Alone) and developed work in readings and workshops at theaters like The Kennedy Center, New York Theater Workshop, Woolly Mammoth, and New Victory (LaMaMa resident artist), and she's been collaborating on a new musical that will have a run at Lincoln Center’s Clark Studio Theatre in the fall of 2018. www.taragiordano.com Ms. Giordano holds an MFA from the Academy for Classical Acting.`,
    imageSrc: '/images/tara-giordano.jpg', // Replace with actual image path
    altText: 'Tara Giordano',
    website: 'http://www.taragiordano.com',
    websiteText: 'www.taragiordano.com',
  },
  {
    name: 'ADAM KNIGHT',
    role: 'Director of "Navigator in Love"',
    bio: `Adam Knight has directed new works by Alistair Smart, Lucy Alibar, Bekah Brunstetter, Matt Dellapina, Lawrence Dial, Michael Lisse, and David Lee Nelson, among others, at venues such as Ars Nova, E.S.T./Youngblood, HERE, Poetry Project, CSV File, and the like. Co-Artistic Director, The Room (Slant Theater Project), Kasserole (Stark), Lost Canyon (Actors AcAdept Company), Found Stories (Strasberg), No No No Yes (Ars Nova ANT Fest) Regional: Vanya and Sonia and Masha and Spike (PURC Theatre), The Explorer’s Club (Alison Mosshart Theater); My Fair Lady (Ford’s Theatre, Washington D.C.); The Threepenny Opera (Walter Kerr Theatre). Broadway/Associate credits: Signature Theatre, Manhattan Theatre Club, Williamstown, Folger Shakespeare Theatre. He is co-Artistic Director of Slant Theatre Project and Executive Director of Herd Lab. www.adamhknight.com`,
    imageSrc: '/images/adam-knight2.jpg', // Make sure this image name is correct, or update if needed
    altText: 'Adam Knight',
    website: 'http://www.adamhknight.com',
    websiteText: 'www.adamhknight.com',
  },
  {
    name: 'MICHAEL PROPSTER',
    role: 'Rostom in "Navigator in Love"',
    bio: `Michael Propster is very excited to be working with Red Lab once again. He last worked with Red Lab developing Royal Theatre as their Off-Broadway production of Hamlet: A Version. Some of his favorite credits include: Othello (Phillip) at Seacoast Rep, Lias Together, Teen Apart (Sam) at Geva Theatre, A Christmas Carol (Bob Cratchit) at Trinity Rep, the title role in Pericles at The NY Fringe Festival, and A Midsummer Night’s Dream (Peter Quince) at Shakespeare on the Sound, Louis: Other credits include: Epic Productions, The Metropolitan Opera, Amour, Storer, Mabou Mines, New Perspectives Theatre, Trinity Rep, Round House Theatre, Olney Theatre Center, Imagination Stage, Summer Repertory Theatre, JACProd, and the National Players on their national tours of Macbeth and The Taming of the Shrew. TV: “Do Not Disturb”, “Test of Fate”, “Disappeared”, “One Life to Live”. MFA: Brown/Trinity Rep. michaelpropster.com`,
    imageSrc: '/images/michael-propster.jpg', // Replace with actual image path
    altText: 'Michael Propster',
    website: 'http://michaelpropster.com',
    websiteText: 'michaelpropster.com',
  },
  {
    name: 'LAUREN RIDDLE',
    role: 'Navigator in "Navigator in Love"',
    bio: `Lauren Riddle is a Company Artist with the Workshop Theater in NYC and names-trickle.com on twitter, etc. She was seen as Clara in SLM by Mike Heath at The The Players Theatre, in various plays by Jeremy Kehoe (Playhouse), Rosaline in Annina Walls, Charlotte and Angel in A La Carte, A Feast of New Plays, Connie in Jennifer’s Birth (Workshop Theatre), and Montague in Inspection! Romeo and Juliet (Sally Franklin Theatre).`,
    imageSrc: '/images/lauren-riddle.jpg', // Replace with actual image path
    altText: 'Lauren Riddle',
  },
  {
    name: 'OWEN SCOTT',
    role: 'Pavlor in "Navigator in Love"',
    bio: `Owen Scott is an Actor/Teacher/Director based in NYC. He is a Founding member of Clown Gym and a regular director at the People's Improv Theatre. Previously with Red Lab: Absences/Intervals in Hamlet: A Version. Regional credits include: The Music Man, Show Kidding (CT Critics Circle Young People's Festival), Copenhagen, A Christmas Carol (Goodman Theatre). The Public Theater's Mobile Shakespeare Unit, The NY Neo-Futurists. Owen teaches Shakespeare for The Acting Actor and best newcomer: Helen Hayes Awards. He trained at the DSA Conservatory in London where he received the Sir Michael Redgrave scholarship.`,
    imageSrc: '/images/owen-scott.jpg', // Replace with actual image path
    altText: 'Owen Scott',
  },
  {
    name: 'LUKE P. YOUNGER',
    role: 'Ilo in "A Toy Gun"',
    bio: `Luke P. Younger most recently played Topolski in The TC Experience production of The Pillowman and Greg in the run of A Midsummer Night's Dream by Yolo Productions. Luke also won best actor at the NY Strawberry Festival for Corner Cafe, which was later turned into a short film. You might also recognize Luke as the kindly guard in The Waiting Game, LifeArt, an indie film. Luke has appeared in over 20 indies, commercials, including Lister Share Club, Miller Lite, Playstation, etc. And he can be seen on season one of HBO's "Divorce" with Sarah Jessica Parker. Luke is also a writer and spent years doing stand-up comedy.`,
    imageSrc: '/images/luke-p-younger.jpg', // Replace with actual image path
    altText: 'Luke P. Younger',
  },
  // Data for Adam J. Thompson, Lisa Elwood, Davit Gabunia, Stephanie McCourt Catron, and Arina Adamova has been removed.
];

export default function CastAndCreativePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const skeletonImageWidth = '200px';
  const skeletonImageHeight = '250px'; // Or adjust if aspect ratio is consistently different

  return (
    <div className={styles.pageContainer}>
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>CAST AND CREATIVE</h1>
      </div>

      {isClient ? (
        <div className={styles.teamList}>
          {castAndCreativeData.length > 0 ? (
            castAndCreativeData.map((member, index) => (
              <div key={member.name} className={styles.teamEntry}>
                <div className={styles.teamImageWrapper}>
                  <Image
                    src={member.imageSrc}
                    alt={member.altText}
                    layout="fill"
                    objectFit="cover"
                    className={styles.teamImage}
                    priority={index < 3} // Prioritize loading for the first few images
                  />
                </div>
                <div className={styles.teamInfo}>
                  <h2 className={styles.teamName}>{member.name}</h2>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamBio}>{member.bio}</p>
                  {member.website && member.websiteText && (
                    <p className={styles.teamWebsite}>
                      <a href={member.website} target="_blank" rel="noopener noreferrer">
                        {member.websiteText}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No cast and creative team data to display.</p>
          )}
        </div>
      ) : (
        // Skeleton Loader
        <div className={styles.teamList}>
          {[...Array(4)].map((_, index) => ( // Show 4 skeleton loaders for example
            <div key={index} className={styles.teamEntry} style={{ opacity: 0.5 }}>
              <div
                className={`${styles.teamImageWrapper} animate-pulse bg-gray-300 rounded`}
                style={{
                  width: skeletonImageWidth,
                  height: skeletonImageHeight,
                }}
              >
                {/* Placeholder for image */}
              </div>
              <div className={styles.teamInfo}>
                <div className="animate-pulse bg-gray-300 h-6 w-3/4 rounded mb-2"></div> {/* Name */}
                <div className="animate-pulse bg-gray-300 h-4 w-2/3 rounded mb-2"></div> {/* Role */}
                <div className="space-y-2">
                  <div className="animate-pulse bg-gray-300 h-4 w-full rounded"></div>
                  <div className="animate-pulse bg-gray-300 h-4 w-5/6 rounded"></div>
                  <div className="animate-pulse bg-gray-300 h-4 w-4/5 rounded"></div>
                  <div className="animate-pulse bg-gray-300 h-4 w-full rounded"></div>
                </div>
                 <div className="animate-pulse bg-gray-300 h-4 w-1/3 rounded mt-3"></div> {/* Website */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}