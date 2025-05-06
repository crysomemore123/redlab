'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="redlab-home">
      <header>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <div className="logo-image">
                {/* Replace with your actual logo */}
                <div style={{ 
                  width: '300px', 
                  height: '150px', 
                  border: '3px solid #D22B2B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D22B2B',
                  fontSize: '32px',
                  fontWeight: 'bold'
                }}>
                  Red Lab
                </div>
              </div>
            </Link>
          </div>
          <nav>
            <ul>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/opera-in-regions">OPERA IN REGIONS</Link></li>
              <li className="has-dropdown">
                <Link href="/georgian-american">GEORGIAN-AMERICAN THEATRICAL FEAST</Link>
                <div className="dropdown-menu">
                  <Link href="/georgian-american/about">ABOUT THE FESTIVAL</Link>
                  <Link href="/georgian-american/program">2023 PROGRAM</Link>
                  <Link href="/georgian-american/artists">PARTICIPATING ARTISTS</Link>
                  <Link href="/georgian-american/past-festivals">PAST FESTIVALS</Link>
                  <Link href="/georgian-american/press">PRESS</Link>
                  <Link href="/georgian-american/sponsors">SPONSORS</Link>
                </div>
              </li>
              <li className="has-dropdown">
                <Link href="/hamlet">HAMLET A VERSION</Link>
                <div className="dropdown-menu">
                  <Link href="/hamlet/about">ABOUT THE PRODUCTION</Link>
                  <Link href="/hamlet/cast">CAST & CREW</Link>
                  <Link href="/hamlet/gallery">GALLERY</Link>
                  <Link href="/hamlet/history">PERFORMANCE HISTORY</Link>
                  <Link href="/hamlet/reviews">REVIEWS</Link>
                </div>
              </li>
              <li className="has-dropdown">
                <Link href="/past-productions">PAST PRODUCTIONS</Link>
                <div className="dropdown-menu">
                  <Link href="/past-productions/2022">2022 SEASON</Link>
                  <Link href="/past-productions/2021">2021 SEASON</Link>
                  <Link href="/past-productions/2020">2020 SEASON</Link>
                  <Link href="/past-productions/2019">2019 SEASON</Link>
                  <Link href="/past-productions/archive">ARCHIVE</Link>
                </div>
              </li>
              <li><Link href="/contact">CONTACT</Link></li>
              <li><Link href="/about">ABOUT</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container">
        <div className="slider">
          <div className="slide">
            {/* Replace with actual production images */}
            <div style={{ 
              width: '100%', 
              height: '400px', 
              backgroundColor: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              Performance Image 1
            </div>
          </div>
          <div className="slide">
            <div style={{ 
              width: '100%', 
              height: '400px', 
              backgroundColor: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              Performance Image 2
            </div>
          </div>
          <div className="slide">
            <div style={{ 
              width: '100%', 
              height: '400px', 
              backgroundColor: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              Performance Image 3
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="copyright">© Red Lab Productions 2017 | ALL RIGHTS RESERVED</div>
          <div className="social-links">
            <a href="#" className="social-icon facebook">F</a>
            <a href="#" className="social-icon twitter">T</a>
            <a href="#" className="social-icon instagram">I</a>
          </div>
        </div>
      </footer>
    </div>
  );
}