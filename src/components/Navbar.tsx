"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

// Define type interfaces for navigation links
interface NavLink {
  label: string;
  href: string;
}

interface NavLinkWithDropdown {
  label: string;
  href: string;
  dropdownItems?: NavLink[];
}

// Define navigation data with clean URLs
const navigationLinks: (NavLink | NavLinkWithDropdown)[] = [
  { label: 'HOME', href: '/' },
  { label: 'OPERA IN REGIONS', href: '/opera-in-regions' },
  
  // OPTION 1: WITH DROPDOWN MENUS - Comment out if not using
  {
    label: 'GEORGIAN-AMERICAN THEATRICAL FEAST',
    href: '#',
    dropdownItems: [
      { label: 'ABOUT THE FESTIVAL', href: '/georgian-american-theatrical-feast/01_about-the-festival' },
      { label: 'PRESS', href: '/georgian-american-theatrical-feast/02_press' },
      { label: 'GALLERY', href: '/georgian-american-theatrical-feast/03_gallery' },
      { label: 'FULL PRODUCTIONS', href: '/georgian-american-theatrical-feast/04_full-productions' },
      { label: 'READINGS', href: '/georgian-american-theatrical-feast/05_readings' },
      { label: 'SPECIAL EVENTS', href: '/georgian-american-theatrical-feast/06_special-events' },
      { label: 'PLAYWRIGHTS', href: '/georgian-american-theatrical-feast/07_playwrights' },
      { label: 'CAST AND CREATIVE', href: '/georgian-american-theatrical-feast/08_cast-and-creative' },
      { label: 'ABOUT GEORGIA', href: '/georgian-american-theatrical-feast/09_about-georgia' },
      { label: 'DONATE', href: '/georgian-american-theatrical-feast/10_donate' },
    ]
  },
  {
    label: 'HAMLET. A VERSION',
    href: '#',
    dropdownItems: [
      { label: 'ABOUT', href: '/hamlet-a-version/01_about' },
      { label: 'PRESS', href: '/hamlet-a-version/02_press' },
      { label: 'GALLERY', href: '/hamlet-a-version/03_gallery' },
    ]
  },
  {
    label: 'PAST PRODUCTIONS',
    href: '#',
    dropdownItems: [
      { label: 'DON GIOVANNI', href: '/past-productions/01_don-giovanni' },
      { label: 'EUGENE ONEGIN', href: '/past-productions/02_eugene-onegin' },
      { label: 'THE SEAGULL', href: '/past-productions/03_the-seagull' },
      { label: 'THREE SOUND SCULPTURES', href: '/past-productions/04_three-sound-sculptures' },
      { label: 'RUT', href: '/past-productions/05_rut' },
    ]
  },
  
  // OPTION 2: WITHOUT DROPDOWN MENUS - Uncomment if removing dropdown menus
  // { label: 'GEORGIAN-AMERICAN THEATRICAL FEAST', href: '/georgian-american-theatrical-feast' },
  // { label: 'HAMLET. A VERSION', href: '/hamlet-a-version' },
  // { label: 'PAST PRODUCTIONS', href: '/past-productions' },
  
  { label: 'CONTACT', href: '/contact' },
  { label: 'ABOUT', href: '/about' },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.mainNav}>
      <div className={styles.navContainer}>
        {navigationLinks.map((link, index) => {
          const isActive = 
            pathname === link.href || 
            ('dropdownItems' in link && link.dropdownItems?.some(item => pathname === item.href));

          if ('dropdownItems' in link && link.dropdownItems) {
            return (
              <div
                key={index}
                className={styles.navItem}
              >
                <span className={`${styles.navLink} ${isActive ? styles.active : ''}`}>
                  {link.label}
                </span>
                <div className={styles.dropdownMenu}>
                  {link.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <Link key={dropdownIndex} href={dropdownItem.href}>
                      <span className={styles.dropdownLink}>{dropdownItem.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div key={index} className={styles.navItem}>
              <Link href={link.href}>
                <span className={`${styles.navLink} ${isActive ? styles.active : ''}`}>
                  {link.label}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;