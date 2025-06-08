"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import './navbar-global.css'; // Assuming this contains necessary global styles

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const router = useRouter();
  const pathname = usePathname();
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Define the default child path for each dropdown parent
  const defaultChildPaths: Record<string, string> = {
    'georgian-american-theatrical-feast': '/about-the-festival',
    'hamlet-a-version': '/hamlet-about',
    'past-productions': '/past-productions',
  };

  const handleDropdownParentClick = (event: React.MouseEvent, menuName: string) => {
    event.preventDefault();
    event.stopPropagation();
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    const targetPath = defaultChildPaths[menuName];
    if (targetPath) {
      router.push(targetPath);
    }
    setActiveDropdown(activeDropdown === menuName ? null : menuName); // Toggle dropdown on click
  };

  const handleMouseEnter = (path: string) => {
    if (window.innerWidth > 1024) { // Only use mouse enter on desktop
        if (leaveTimeoutRef.current) {
          clearTimeout(leaveTimeoutRef.current);
        }
        setActiveDropdown(path);
    }
  };

  const handleMouseLeave = () => {
     if (window.innerWidth > 1024) { // Only use mouse leave on desktop
        leaveTimeoutRef.current = setTimeout(() => {
          setActiveDropdown(null);
        }, 150);
     }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false); // Close mobile menu too
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

  const isPathActive = (basePath: string, subPaths: string[] = []) => {
    const currentPath = pathname || '';
    if (subPaths.length > 0) {
      if (currentPath === basePath) return true;
      if (subPaths.some(subPath => currentPath.startsWith(subPath))) return true;
    } else {
      if (currentPath === basePath) return true;
      const sectionHeadPaths = ['/opera-in-regions'];
      if (sectionHeadPaths.includes(basePath) && currentPath.startsWith(basePath + '/')) return true;
    }
    return false;
  };

  const getDropdownParentLinkClass = (basePath: string, menuName: string, subPaths: string[] = []) => {
    const isActivePath = isPathActive(basePath, subPaths);
    return (isActivePath || activeDropdown === menuName)
      ? styles.activeLink
      : styles.navLink;
  };

  return (
    <header className={styles.siteHeaderWrapper} ref={navRef}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/images/red-lab-logo.png"
            alt="Red Lab Logo"
            width={280}
            height={140}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <button
        className={styles.mobileMenuButton}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        {/* Simple hamburger icon using spans */}
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation - now with classes to handle mobile view */}
      <nav className={`${styles.mainNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <ul>
          <li><Link href="/" className={isPathActive('/') ? styles.activeLink : styles.navLink}>HOME</Link></li>
          <li><Link href="/opera-in-regions" className={isPathActive('/opera-in-regions') ? styles.activeLink : styles.navLink}>OPERA IN REGIONS</Link></li>

          {/* Georgian-American Theatrical Feast */}
          <li
            className={`${styles.hasDropdown} ${(isPathActive('/georgian-american-theatrical-feast', ['/about-the-festival', '/press', '/gallery', '/full-productions', '/readings', '/special-events', '/playwrights', '/cast-and-creative', '/about-georgia', '/donate']) || activeDropdown === 'georgian-american-theatrical-feast') ? styles.activeDropdownParent : ''}`}
            onMouseEnter={() => handleMouseEnter('georgian-american-theatrical-feast')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" onClick={(e) => handleDropdownParentClick(e, 'georgian-american-theatrical-feast')} className={getDropdownParentLinkClass('/about-the-festival', 'georgian-american-theatrical-feast', ['/about-the-festival', '/press', '/gallery', '/full-productions', '/readings', '/special-events', '/playwrights', '/cast-and-creative', '/about-georgia', '/donate'])}>
              GEORGIAN-AMERICAN THEATRICAL FEAST
            </a>
            <div className={`${styles.dropdownMenu} ${activeDropdown === 'georgian-american-theatrical-feast' ? styles.show : ''}`}>
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

          {/* Hamlet */}
          <li
            className={`${styles.hasDropdown} ${(isPathActive('/hamlet-a-version', ['/hamlet-about', '/hamlet-press', '/hamlet-gallery']) || activeDropdown === 'hamlet-a-version') ? styles.activeDropdownParent : ''}`}
            onMouseEnter={() => handleMouseEnter('hamlet-a-version')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" onClick={(e) => handleDropdownParentClick(e, 'hamlet-a-version')} className={getDropdownParentLinkClass('/hamlet-about', 'hamlet-a-version', ['/hamlet-about', '/hamlet-press', '/hamlet-gallery'])}>
              HAMLET. A VERSION
            </a>
            <div className={`${styles.dropdownMenu} ${activeDropdown === 'hamlet-a-version' ? styles.show : ''}`}>
              <Link href="/hamlet-about">ABOUT</Link>
              <Link href="/hamlet-press">PRESS</Link>
              <Link href="/hamlet-gallery">GALLERY</Link>
            </div>
          </li>

          {/* Past Productions */}
          <li
            className={`${styles.hasDropdown} ${(isPathActive('/past-productions', ['/don-giovanni', '/eugene-onegin', '/the-seagull', '/three-sound-sculptures', '/rut']) || activeDropdown === 'past-productions') ? styles.activeDropdownParent : ''}`}
            onMouseEnter={() => handleMouseEnter('past-productions')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" onClick={(e) => handleDropdownParentClick(e, 'past-productions')} className={getDropdownParentLinkClass('/past-productions', 'past-productions', ['/don-giovanni', '/eugene-onegin', '/the-seagull', '/three-sound-sculptures', '/rut'])}>
              PAST PRODUCTIONS
            </a>
            <div className={`${styles.dropdownMenu} ${activeDropdown === 'past-productions' ? styles.show : ''}`}>
              <Link href="/don-giovanni">DON GIOVANNI</Link>
              <Link href="/eugene-onegin">EUGENE ONEGIN</Link>
              <Link href="/the-seagull">THE SEAGULL</Link>
              <Link href="/three-sound-sculptures">THREE SOUND SCULPTURES</Link>
              <Link href="/rut">RUT</Link>
            </div>
          </li>

          <li><Link href="/contact" className={isPathActive('/contact') ? styles.activeLink : styles.navLink}>CONTACT</Link></li>
          <li><Link href="/about" className={isPathActive('/about') ? styles.activeLink : styles.navLink}>ABOUT</Link></li>
        </ul>
      </nav>
    </header>
  );
}
