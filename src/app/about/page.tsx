"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';

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
            src="/images/irina-gachechiladze.jpg" 
            alt="Irina Gachechiladze" 
            width={300} 
            height={350} 
            objectFit="cover"
          />
        </div>
        <div className={styles.profileInfo}>
          <h2>IRINA GACHECHILADZE | Artistic Director and Founder</h2>
          <p>
            Is a New York-based stage and opera director and choreographer. Recent productions include the world 
            premieres of Contemporary Georgian play <em>Stalin Lab, The Seagull</em> (TheatreLab), <em>The Brashworrier's Apprentice, Nicholas and 
            Alexandra</em> and <em>Night About the City</em> (all with Amos at the Oracle Theater). <em>Hamlet A Version</em>, an adaptation of <em>Hamlet</em> in English and 
            its anthology by Pavel at Westminster Choir College. International productions include Mozart's <em>Don 
            Giovanni</em> co-produced with The Georgian State Opera, <em>Twilight After the lover</em> in co-op by Alexander Pushkin (Marjanishvili 
            Theater, Tbilisi, Georgia), and Glen Cario Menotti's <em>The Telephone</em> which was produced in her native Tbilisi, 
            Georgia. She holds a master's degree in stage directing from the Russian Academy of Performing Arts (GITIS, Moscow). She 
            is a founding member of the League of Professional Theater and has extensive film and visual arts credentials. Her films <em>As 
            Apple</em> and <em>Stigma</em> received awards at the Kinoshock Film Festival in Anapa, Russia.
          </p>
        </div>
      </div>

      {/* Executive Director Section */}
      <div className={styles.teamMember}>
        <div className={styles.profileImage}>
          <Image 
            src="/images/adam-knight.jpg" 
            alt="Adam Knight" 
            width={300} 
            height={350} 
            objectFit="cover"
          />
        </div>
        <div className={styles.profileInfo}>
          <h2>ADAM KNIGHT | Executive Director</h2>
          <p>
            Is a director and producer. He has directed new works by Mat 
            Smart, Lucy Alibar, Bekah Brunstetter, Matt Dellapina, 
            Lawrence Dial, Michele Lowe, and David Lee Nelson, among 
            others, at venues such as Rattlestick, Cherry Lane, 59E59, 
            Poetry Project, PS 122, and The Tank. Recent credits: <em>Navigator 
            in Love</em> (Red Lab), Lark Theatre's Russia-US Exchange, <em>In The 
            Event You're Sinking</em> (Stable Cable), <em>Four Dogs and a Bone</em> 
            (Compost Heap, A Drilling Company), <em>Brief Candle, Pleasant 
            Stories</em> (Stonestreet), <em>We No We Is</em> (Art Nova, ATL Fest), 
            Regional: <em>Topdog/Underdog</em> (Kitchen Theatre), <em>PURE 
            Theatre</em>, <em>The Festival at My House</em> (Water Tower 
            Theatre), <em>Hamlet</em> (College of Charleston), <em>The 13th of 
            Paris</em> (Warehouse Theatre). Came from Austin's groundbreaking 
            Frontera, Assistant credits: ART, Pittsburgh Theatre, Manhattan 
            Theatre Club, Williamstown, Folger Shakespeare Theatre. He is 
            co-Artistic Director of Silent Theatre Project.
          </p>
        </div>
      </div>
    </div>
  );
}
