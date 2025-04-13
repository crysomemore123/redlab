"use client"; // Add this to mark as a client component

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Changed from useRouter
import { NavLink, NavLinkWithDropdown } from './navLink';
import styles from './Navbar.module.css';

// Define navigation data
const navigationLinks: (NavLink | NavLinkWithDropdown)[] = [
  { label: 'HOME', href: '/' },
  { label: 'OPERA IN REGIONS', href: '/opera-in-regions' },
  {
    label: 'GEORGIAN-AMERICAN THEATRICAL FEAST',
    href: '/georgian-american-theatrical-feast',
    dropdownItems: [
      { label: 'ABOUT THE FESTIVAL', href: '/georgian-american-theatrical-feast/about' },
      { label: 'PRESS', href: '/georgian-american-theatrical-feast/press' },
      { label: 'GALLERY', href: '/georgian-american-theatrical-feast/gallery' },
      { label: 'FULL PRODUCTIONS', href: '/georgian-american-theatrical-feast/full-productions' },
      { label: 'READINGS', href: '/georgian-american-theatrical-feast/readings' },
      { label: 'SPECIAL EVENTS', href: '/georgian-american-theatrical-feast/special-events' },
      { label: 'PLAYWRIGHTS', href: '/georgian-american-theatrical-feast/playwrights' },
      { label: 'CAST AND CREATIVE', href: '/georgian-american-theatrical-feast/cast-and-creative' },
      { label: 'ABOUT GEORGIA', href: '/georgian-american-theatrical-feast/about-georgia' },
      { label: 'DONATE', href: '/georgian-american-theatrical-feast/donate' },
    ]
  },
  {
    label: 'HAMLET. A VERSION',
    href: '/hamlet-a-version',
    dropdownItems: [
      { label: 'ABOUT', href: '/hamlet-a-version/about' },
      { label: 'PRESS', href: '/hamlet-a-version/press' },
      { label: 'GALLERY', href: '/hamlet-a-version/gallery' },
    ]
  },
  {
    label: 'PAST PRODUCTIONS',
    href: '/past-productions',
    dropdownItems: [
      { label: 'DON GIOVANNI', href: '/past-productions/don-giovanni' },
      { label: 'EUGENE ONEGIN', href: '/past-productions/eugene-onegin' },
      { label: 'THE SEAGULL', href: '/past-productions/the-seagull' },
      { label: 'THREE SOUND SCULPTURES', href: '/past-productions/three-sound-sculptures' },
      { label: 'RUT', href: '/past-productions/rut' },
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