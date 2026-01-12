// src/app/about/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';

// 1. Import the image from assets
import irinaImg from '../../assets/irina-gachechiladze.jpg';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      {/* Page title */}
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
            src={irinaImg}
            alt="Irina Gachechiladze"
            className={styles.profileImageTag}
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 300px"
            placeholder="blur" 
          />
        </div>
        <div className={styles.profileInfo}>
          <h2>IRINA GACHECHILADZE | Artistic Director and Founder</h2>
          <p>
            Is a New York-based stage and opera director and choreographer. Recent productions include the world premiere of 
            Boris Akunin&apos;s <em>Hamlet. A Version</em> (Red Lab), <em>The Seagull</em> (TheatreLab); <em>The Breadbaker’s Apprentice, 
            Nicholas and Alexandra,</em> and <em>High Above the City</em> (all with Amios at the Kraine Theatre); and the operas <em>Suor 
            Angelica</em> by Puccini and <em>L’enfant et les sortilèges</em> by Ravel at Westminter Choir College. International 
            productions include Mozart’s <em>Don Giovanni</em> (National Armenian Opera in Yerevan); <em>Eugene Onegin, after the novel 
            in verse by Alexander Pushkin</em> (Marjanishvili Theater, Tbilisi, Georgia), and Gian Carlo Menotti’s <em>The Telephone</em> (Salon 
            Opera, London). A native of the Republic of Georgia, she holds a master’s degree in stage directing from the Russian 
            Academy of Performing Arts (GITIS, Moscow). She is a member of the Lincoln Center Theater Directors Lab, and also has 
            extensive film and visual arts credits. Her films <em>An Apple</em> and <em>Stigma</em> received awards at the Kinoshok 
            Film Festival in Anapa, Russia.
          </p>
        </div>
      </div>
    </div>
  );
}