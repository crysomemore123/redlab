// src/app/about/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      {/* Namdvili gverdi Page title */}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>ABOUT</h1>
      </div>

      {/* Company description */}
      <div className={styles.description}>
        <p>
          Red Lab Productions is an international collective dedicated to cultural diplomacy through art and performance.
          We have performed in New York, Tbilisi, Yerevan, and London, in galleries, opera halls, black boxes and historic
          theatres. A company driven by a commitment to cultural cross-pollination of artists and audience.
        </p>
      </div>

      {/* Artistic Director Section */}
      <div className={styles.teamMember}>
        <div className={styles.profileImage}>
          <Image
            src="/images/irina-gachechiladze.avif"
            alt="Irina Gachechiladze"
            width={400} // This is used for the aspect ratio
            height={400} // This is used for the aspect ratio
            className={styles.profileImageTag} // Class for responsive styling
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 300px" // Helps Next.js serve the right image size
          />
        </div>
        <div className={styles.profileInfo}>
          <h2>IRINA GACHECHILADZE | Artistic Director and Founder</h2>
          <p>
            Is a New York-based stage and opera director and choreographer. Recent productions include the world
            premieres of Contemporary Georgian play <em>Stalin Lab, The Seagull</em> (TheatreLab), <em>The Brashworrier&apos;s Apprentice, Nicholas and
            Alexandra</em> and <em>Night About the City</em> (all with Amos at the Oracle Theater). <em>Hamlet A Version</em>, an adaptation of <em>Hamlet</em> in English and
            its anthology by Pavel at Westminster Choir College. International productions include Mozart&apos;s <em>Don
            Giovanni</em> co-produced with The Georgian State Opera, <em>Twilight After the lover</em> in co-op by Alexander Pushkin (Marjanishvili
            Theater, Tbilisi, Georgia), and Glen Cario Menotti&apos;s <em>The Telephone</em> which was produced in her native Tbilisi,
            Georgia. She holds a master&apos;s degree in stage directing from the Russian Academy of Performing Arts (GITIS, Moscow). She
            is a founding member of the League of Professional Theater and has extensive film and visual arts credentials. Her films <em>As
            Apple</em> and <em>Stigma</em> received awards at the Kinoshock Film Festival in Anapa, Russia.
          </p>
        </div>
      </div>
    </div>
  );
}
