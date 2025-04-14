"use client"; // Add this to mark as a client component

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Changed from useRouter
import { NavLink, NavLinkWithDropdown } from './navLink';
import styles from './Navbar.module.css';

// Define navigation data with paths matching your actual folder structure
const navigationLinks: (NavLink | NavLinkWithDropdown)[] = [
  { label: 'HOME', href: '/' },
  { label: 'OPERA IN REGIONS', href: '/opera-in-regions' },
  {
    label: 'GEORGIAN-AMERICAN THEATRICAL FEAST',
    href: '/georgian-american-theatrical-feast',
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
    href: '/hamlet-a-version',
    dropdownItems: [
      { label: 'ABOUT', href: '/hamlet-a-version/01_about' },
      { label: 'PRESS', href: '/hamlet-a-version/02_press' },
      { label: 'GALLERY', href: '/hamlet-a-version/03_gallery' },
    ]
  },
  {
    label: 'PAST PRODUCTIONS',
    href: '/past-productions',
    dropdownItems: [
      { label: 'DON GIOVANNI', href: '/past-productions/01_don-giovanni' },
      { label: 'EUGENE ONEGIN', href: '/past-productions/02_eugene-onegin' },
      { label: 'THE SEAGULL', href: '/past-productions/03_the-seagull' },
      { label: 'THREE SOUND SCULPTURES', href: '/past-productions/04_three-sound-sculptures' },
      { label: 'RUT', href: '/past-productions/05_rut' },
    ]
  },
  { label: 'CONTACT', href: '/contact' },
  { label: 'ABOUT', href: '/about' },
];

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Changed from useRouter

  return (
    <nav className={styles.mainNav}>
      <div className={styles.navContainer}>
        {navigationLinks.map((link, index) => {
          // Updated isActive to match numbered paths
          const isActive = pathname === link.href || 
                          (link.dropdownItems && link.dropdownItems.some(item => pathname === item.href));

          // Check if this link has dropdown items
          if ('dropdownItems' in link && link.dropdownItems) {
            return (
              <div key={index} className={styles.navItem}>
                <Link href={link.href}>
                  <span className={`${styles.navLink} ${isActive ? styles.active : ''}`}>
                    {link.label}
                  </span>
                </Link>
                <div className={styles.dropdownMenu}>
                  {link.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <Link key={dropdownIndex} href={dropdownItem.href}>
                      <span className={styles.dropdownLink}>
                        {dropdownItem.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          // Regular link without dropdown
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