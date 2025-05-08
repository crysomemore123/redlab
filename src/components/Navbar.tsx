"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import './navbar-global.css'; // Add a global CSS file to override any conflicting styles

export default function Navbar() {
  // Track which dropdown is currently active
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Define menu structure with paths and their first dropdown items
  const menuItems = {
    'georgian-american-theatrical-feast': '/about-the-festival',
    'hamlet-a-version': '/hamlet-about',
    'past-productions': '/don-giovanni'
  };

  // Handle click on a top-level menu item with dropdown
  const handleDropdownClick = (event: React.MouseEvent, path: string) => {
    event.preventDefault(); // Prevent default link behavior
    event.stopPropagation(); // Stop event bubbling
    
    // Toggle active dropdown
    if (activeDropdown === path) {
      setActiveDropdown(null);
    } else {
      // Close any open dropdown first
      setActiveDropdown(null);
      
      // Use setTimeout to ensure the DOM updates before opening the new dropdown
      setTimeout(() => {
        setActiveDropdown(path);
        
        // Navigate to the first item in the dropdown
        const firstItemPath = menuItems[path as keyof typeof menuItems];
        if (firstItemPath) {
          router.push(firstItemPath);
        }
      }, 10);
    }
  };
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside any dropdown
      const dropdowns = document.querySelectorAll(`.${styles.hasDropdown}`);
      let clickedInside = false;
      
      dropdowns.forEach((dropdown) => {
        if (dropdown.contains(event.target as Node)) {
          clickedInside = true;
        }
      });
      
      if (!clickedInside) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Check if a given path is active based on the current pathname
  const isPathActive = (basePath: string) => {
    return pathname?.startsWith(basePath);
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
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
              <li className={`${styles.hasDropdown} ${activeDropdown === 'georgian-american-theatrical-feast' ? styles.active : ''}`}>
                <a 
                  href="/georgian-american-theatrical-feast" 
                  onClick={(e) => handleDropdownClick(e, 'georgian-american-theatrical-feast')}
                  className={isPathActive('/about-the-festival') || 
                            isPathActive('/press') || 
                            isPathActive('/gallery') ||
                            isPathActive('/full-productions') ||
                            isPathActive('/readings') ||
                            isPathActive('/special-events') ||
                            isPathActive('/playwrights') ||
                            isPathActive('/cast-and-creative') ||
                            isPathActive('/about-georgia') ||
                            isPathActive('/donate') ? styles.active : ''}
                >
                  GEORGIAN-AMERICAN THEATRICAL FEAST
                </a>
                {activeDropdown === 'georgian-american-theatrical-feast' && (
                  <div className={`${styles.dropdownMenu} ${styles.show}`}>
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
                )}
              </li>
              <li className={`${styles.hasDropdown} ${activeDropdown === 'hamlet-a-version' ? styles.active : ''}`}>
                <a 
                  href="/hamlet-a-version" 
                  onClick={(e) => handleDropdownClick(e, 'hamlet-a-version')}
                  className={isPathActive('/hamlet-about') || 
                            isPathActive('/hamlet-press') || 
                            isPathActive('/hamlet-gallery') ? styles.active : ''}
                >
                  HAMLET A VERSION
                </a>
                {activeDropdown === 'hamlet-a-version' && (
                  <div className={`${styles.dropdownMenu} ${styles.show}`}>
                    <Link href="/hamlet-about">ABOUT</Link>
                    <Link href="/hamlet-press">PRESS</Link>
                    <Link href="/hamlet-gallery">GALLERY</Link>
                  </div>
                )}
              </li>
              <li className={`${styles.hasDropdown} ${activeDropdown === 'past-productions' ? styles.active : ''}`}>
                <a 
                  href="/past-productions" 
                  onClick={(e) => handleDropdownClick(e, 'past-productions')}
                  className={isPathActive('/don-giovanni') || 
                            isPathActive('/eugene-onegin') || 
                            isPathActive('/the-seagull') ||
                            isPathActive('/three-sound-sculptures') ||
                            isPathActive('/rut') ? styles.active : ''}
                >
                  PAST PRODUCTIONS
                </a>
                {activeDropdown === 'past-productions' && (
                  <div className={`${styles.dropdownMenu} ${styles.show}`}>
                    <Link href="/don-giovanni">DON GIOVANNI</Link>
                    <Link href="/eugene-onegin">EUGENE ONEGIN</Link>
                    <Link href="/the-seagull">THE SEAGULL</Link>
                    <Link href="/three-sound-sculptures">THREE SOUND SCULPTURES</Link>
                    <Link href="/rut">RUT</Link>
                  </div>
                )}
              </li>
              <li><Link href="/contact">CONTACT</Link></li>
              <li><Link href="/about">ABOUT</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}