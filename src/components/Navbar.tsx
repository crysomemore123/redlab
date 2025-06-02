"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import './navbar-global.css'; // Assuming this contains necessary global styles

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
    'past-productions': '/past-productions', // <--- MODIFIED HERE
  };

  // Click handler for dropdown parent items
  const handleDropdownParentClick = (event: React.MouseEvent, menuName: string) => {
    event.preventDefault(); // Prevent default <a> tag behavior
    event.stopPropagation();

    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }

    // Navigate to the default child path (which is now the overview page for past-productions)
    const targetPath = defaultChildPaths[menuName];
    if (targetPath) {
      router.push(targetPath);
    }

    // Ensure the dropdown menu is shown when its parent is clicked
    // You might want to reconsider if clicking the parent should *always* open the dropdown
    // or if it should only navigate if it's a direct link.
    // For now, it navigates AND sets the dropdown active.
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
    }, 150); // Adjust delay as needed
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

    if (subPaths.length > 0) { // This is for dropdown parents
      // Check if current path is the basePath of the dropdown parent itself
      if (currentPath === basePath) { // <--- MODIFIED HERE
        return true;
      }
      // Check if current path starts with any of the subPaths
      if (subPaths.some(subPath => currentPath.startsWith(subPath))) {
        return true;
      }
    } else {
      // Non-dropdown links:
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
    // Check if any sub-path is active OR if the base path itself is active OR if the dropdown is hovered/clicked
    const isActivePath = isPathActive(basePath, subPaths);
    return (isActivePath || activeDropdown === menuName)
      ? styles.activeLink // Or a more specific class like styles.activeDropdownParentLink
      : styles.navLink;
  };

  return (
    <div className={styles.siteHeaderWrapper}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/images/red-lab-logo.png" // Ensure this path is correct
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
            className={`${styles.hasDropdown} ${(isPathActive('/georgian-american-theatrical-feast', [
                '/about-the-festival', '/press', '/gallery', '/full-productions', '/readings',
                '/special-events', '/playwrights', '/cast-and-creative', '/about-georgia', '/donate'
              ]) || activeDropdown === 'georgian-american-theatrical-feast') ? styles.activeDropdownParent : ''}`}
            onMouseEnter={() => handleMouseEnter('georgian-american-theatrical-feast')}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#" // Navigates via onClick
              onClick={(e) => handleDropdownParentClick(e, 'georgian-american-theatrical-feast')}
              className={getDropdownParentLinkClass('/about-the-festival', 'georgian-american-theatrical-feast', [ // Base path for active state logic
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
            className={`${styles.hasDropdown} ${(isPathActive('/hamlet-a-version', ['/hamlet-about', '/hamlet-press', '/hamlet-gallery']) || activeDropdown === 'hamlet-a-version') ? styles.activeDropdownParent : ''}`}
            onMouseEnter={() => handleMouseEnter('hamlet-a-version')}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#" // Navigates via onClick
              onClick={(e) => handleDropdownParentClick(e, 'hamlet-a-version')}
              className={getDropdownParentLinkClass('/hamlet-about', 'hamlet-a-version', ['/hamlet-about', '/hamlet-press', '/hamlet-gallery'])} // Base path for active state
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
            className={`${styles.hasDropdown} ${(isPathActive('/past-productions', [ // Check against the overview page itself
                '/don-giovanni', '/eugene-onegin', '/the-seagull', '/three-sound-sculptures', '/rut'
              ]) || activeDropdown === 'past-productions') ? styles.activeDropdownParent : ''}`}
            onMouseEnter={() => handleMouseEnter('past-productions')}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#" // Navigates via onClick
              onClick={(e) => handleDropdownParentClick(e, 'past-productions')}
              className={getDropdownParentLinkClass('/past-productions', 'past-productions', [ // Base path for active state
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
          <li><Link href="/about" className={isPathActive('/about') ? styles.activeLink : styles.navLink}>ABOUT</Link></li>
        </ul>
      </nav>
    </div>
  );
}
