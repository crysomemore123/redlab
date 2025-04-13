// navLink.ts - Type definitions for navigation links

export interface NavLink {
    label: string;
    href: string;
  }
  
  export interface NavLinkWithDropdown {
    label: string;
    href: string;
    dropdownItems: NavLink[];
  }