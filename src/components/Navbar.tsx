"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import './navbar-global.css';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Define the default child path for each dropdown parent
  const defaultChildPaths: Record<string, string> = {
    'georgian-american-theatrical-feast': '/about-the-festival',
    'hamlet-a-version': '/hamlet-about',
    'past-productions': '/don-giovanni', // Assuming '/don-giovanni' is the default for Past Productions
  };

  // Click handler for dropdown parent items
  const handleDropdownParentClick = (event: React.MouseEvent, menuName: string) => {
    event.preventDefault(); // Prevent default <a> tag behavior (since href="#")
    event.stopPropagation();

    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }

    // Navigate to the default child path
    const targetPath = defaultChildPaths[menuName];
    if (targetPath) {
      router.push(targetPath);
    }

    // Ensure the dropdown menu is shown when its parent is clicked
    setActiveDropdown(menuName);
  };

  const handleMouseEnter = (path: string) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    setActiveDropdown(path);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
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

  // Updated isPathActive logic
  const isPathActive = (basePath: string, subPaths: string[] = []) => {
    const currentPath = pathname || '';

    // 1. Dropdown parent links: active if current path starts with one of their subPaths.
    if (subPaths.length > 0) {
      if (subPaths.some(subPath => currentPath.startsWith(subPath))) {
        return true;
      }
    } else {
      // 2. Non-dropdown links:
      //    - Exact match for most simple links (e.g., /about, /contact).
      //    - For section links (e.g., /opera-in-regions), active if current path is exact or starts with basePath + '/'.
      if (currentPath === basePath) {
        return true;
      }
      // Explicitly define simple links that are also section heads
      const sectionHeadPaths = ['/opera-in-regions']; // Add other such paths if any
      if (sectionHeadPaths.includes(basePath) && currentPath.startsWith(basePath + '/')) {
        return true;
      }
    }
    return false;
  };

  const getDropdownParentLinkClass = (basePath: string, menuName: string, subPaths: string[] = []) => {
    return (isPathActive(basePath, subPaths) || activeDropdown === menuName)
      ? styles.activeLink
      : styles.navLink;
  };

  return (
    <div className={styles.siteHeaderWrapper}>
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
      <nav className={styles.mainNav} ref={navRef}>
        <ul>
          <li><Link href="/" className={isPathActive('/') ? styles.activeLink : styles.navLink}>HOME</Link></li>
          <li><Link href="/opera-in-regions" className={isPathActive('/opera-in-regions') ? styles.activeLink : styles.navLink}>OPERA IN REGIONS</Link></li>

          <li
            className={`${styles.hasDropdown} ${activeDropdown === 'georgian-american-theatrical-feast' ? styles.activeDropdownParent : ''}`}
            onMouseEnter={() => handleMouseEnter('georgian-american-theatrical-feast')}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#" // href can remain "#" as navigation is handled by onClick
              onClick={(e) => handleDropdownParentClick(e, 'georgian-american-theatrical-feast')}
              className={getDropdownParentLinkClass('/georgian-american-theatrical-feast', 'georgian-american-theatrical-feast', [
                '/about-the-festival', '/press', '/gallery', '/full-productions', '/readings',
                '/special-events', '/playwrights', '/cast-and-creative', '/about-georgia', '/donate'
              ])}
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

          <li
            className={`${styles.hasDropdown} ${activeDropdown === 'hamlet-a-version' ? styles.activeDropdownParent : ''}`}
            onMouseEnter={() => handleMouseEnter('hamlet-a-version')}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#"
              onClick={(e) => handleDropdownParentClick(e, 'hamlet-a-version')}
              className={getDropdownParentLinkClass('/hamlet-a-version', 'hamlet-a-version', ['/hamlet-about', '/hamlet-press', '/hamlet-gallery'])}
            >
              HAMLET. A VERSION
            </a>
            {activeDropdown === 'hamlet-a-version' && (
              <div className={`${styles.dropdownMenu} ${styles.show}`}>
                <Link href="/hamlet-about">ABOUT</Link>
                <Link href="/hamlet-press">PRESS</Link>
                <Link href="/hamlet-gallery">GALLERY</Link>
              </div>
            )}
          </li>

          <li
            className={`${styles.hasDropdown} ${activeDropdown === 'past-productions' ? styles.activeDropdownParent : ''}`}
            onMouseEnter={() => handleMouseEnter('past-productions')}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#"
              onClick={(e) => handleDropdownParentClick(e, 'past-productions')}
              className={getDropdownParentLinkClass('/past-productions', 'past-productions', [
                '/don-giovanni', '/eugene-onegin', '/the-seagull', '/three-sound-sculptures', '/rut'
              ])}
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

          <li><Link href="/contact" className={isPathActive('/contact') ? styles.activeLink : styles.navLink}>CONTACT</Link></li>
          {/* The /about link will now use the stricter matching from isPathActive */}
          <li><Link href="/about" className={isPathActive('/about') ? styles.activeLink : styles.navLink}>ABOUT</Link></li>
        </ul>
      </nav>
    </div>
  );
}