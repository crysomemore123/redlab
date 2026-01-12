// src/app/about/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';

// 1. Import the image from assets
// Make sure the file is moved to: src/assets/irina-gachechiladze.jpg
import irinaImg from '../../assets/irina-gachechiladze.jpg';

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
            // 2. Use the imported object (replaces string path)
            src={irinaImg}
            alt="Irina Gachechiladze"
            
            // Note: width={400} and height={400} are removed! 
            // Next.js now calculates them automatically from the file.
            
            className={styles.profileImageTag}
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 300px"
            
            // 3. Add placeholder="blur" for the nice loading effect
            placeholder="blur" 
          />
        </div>
        <div className={styles.profileInfo}>
          <h2>IRINA GACHECHILADZE | Artistic Director and Founder</h2>
          <p>
            Is a New York-based stage and opera director and choreographer. Recent productions include the world premiere of Boris Akunin's Hamlet. A Version (Red Lab), The Seagull (TheatreLab); The Breadbaker’s Apprentice, Nicholas and Alexandra, and High Above the City (all with Amios at the Kraine Theatre); and the operas Suor Angelica by Puccini and L’enfant et les sortilèges by Ravel at Westminter Choir College. International productions include Mozart’s Don Giovanni (National Armenian Opera in Yerevan); Eugene Onegin, after the novel in verse by Alexander Pushkin (Marjanishvili Theater, Tbilisi, Georgia), and Gian Carlo Menotti’s The Telephone (Salon Opera, London). A native of the Republic of Georgia, she holds a master’s degree in stage directing from the Russian Academy of Performing Arts (GITIS, Moscow). She is a member of the Lincoln Center Theater Directors Lab, and also has extensive film and visual arts credits. Her films An Apple and Stigma received awards at the Kinoshok Film Festival in Anapa, Russia.
          </p>
        </div>
      </div>
    </div>
  );
}