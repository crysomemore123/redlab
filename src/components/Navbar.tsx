"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image 
              src="/images/red-lab-logo.png"
              alt="Red Lab Logo"
              width={300}
              height={150}
              style={{
                objectFit: 'contain'
              }}
            />
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/opera-in-regions">OPERA IN REGIONS</Link></li>
            <li className="has-dropdown">
              <Link href="/georgian-american-theatrical-feast">GEORGIAN-AMERICAN THEATRICAL FEAST</Link>
              <div className="dropdown-menu">
                <Link href="/about-the-festival">ABOUT THE FESTIVAL</Link>
                <Link href="/press">PRESS</Link>
                <Link href="/gallery">GALLERY</Link>
                <Link href="/full-productions">FULL PRODUCTIONS</Link>
                <Link href="/readings">READINGS</Link>
                <Link href="/special-events">SPECIAL EVENTS</Link>
                <Link href="/playwrights">PLAYWRIGHTS</Link>
                <Link href="/cast-and-creative">CAST AND CREATIVE</Link>
                <Link href="/about-georgia">ABOUT GEORGIA</Link>
                <Link href="/donate">DONATE</Link>
              </div>
            </li>
            <li className="has-dropdown">
              <Link href="/hamlet-a-version">HAMLET A VERSION</Link>
              <div className="dropdown-menu">
                <Link href="/hamlet-about">ABOUT</Link>
                <Link href="/hamlet-press">PRESS</Link>
                <Link href="/hamlet-gallery">GALLERY</Link>
              </div>
            </li>
            <li className="has-dropdown">
              <Link href="/past-productions">PAST PRODUCTIONS</Link>
              <div className="dropdown-menu">
                <Link href="/don-giovanni">DON GIOVANNI</Link>
                <Link href="/eugene-onegin">EUGENE ONEGIN</Link>
                <Link href="/the-seagull">THE SEAGULL</Link>
                <Link href="/three-sound-sculptures">THREE SOUND SCULPTURES</Link>
                <Link href="/rut">RUT</Link>
              </div>
            </li>
            <li><Link href="/contact">CONTACT</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
