"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo or brand name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              RedLab Productions
            </Link>
          </div>

          {/* Navigation links */}
          <div className="flex space-x-4 items-center">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-red-600 font-semibold" : "text-gray-700"
              } hover:text-red-600`}
            >
              HOME
            </Link>

            <Link
              href="/opera-in-regions"
              className={`${
                pathname === "/opera-in-regions"
                  ? "text-red-600 font-semibold"
                  : "text-gray-700"
              } hover:text-red-600`}
            >
              OPERA IN REGIONS
            </Link>

            <Dropdown
              label="GEORGIAN-AMERICAN THEATRICAL FEAST"
              items={[
                { label: "ABOUT THE FESTIVAL", href: "/georgian-american-theatrical-feast/01_about-the-festival" },
                { label: "PRESS", href: "/georgian-american-theatrical-feast/02_press" },
                { label: "GALLERY", href: "/georgian-american-theatrical-feast/03_gallery" },
                { label: "FULL PRODUCTIONS", href: "/georgian-american-theatrical-feast/04_full-productions" },
                { label: "READINGS", href: "/georgian-american-theatrical-feast/05_readings" },
                { label: "SPECIAL EVENTS", href: "/georgian-american-theatrical-feast/06_special-events" },
                { label: "PLAYWRIGHTS", href: "/georgian-american-theatrical-feast/07_playwrights" },
                { label: "CAST AND CREATIVE", href: "/georgian-american-theatrical-feast/08_cast-and-creative" },
                { label: "ABOUT GEORGIA", href: "/georgian-american-theatrical-feast/09_about-georgia" },
                { label: "DONATE", href: "/georgian-american-theatrical-feast/10_donate" },
              ]}
            />

            <Dropdown
              label="HAMLET. A VERSION"
              items={[
                { label: "ABOUT", href: "/hamlet-a-version/01_about" },
                { label: "PRESS", href: "/hamlet-a-version/02_press" },
                { label: "GALLERY", href: "/hamlet-a-version/03_gallery" },
              ]}
            />

            <Dropdown
              label="PAST PRODUCTIONS"
              items={[
                { label: "DON GIOVANNI", href: "/past-productions/01_don-giovanni" },
                { label: "EUGENE ONEGIN", href: "/past-productions/02_eugene-onegin" },
                { label: "THE SEAGULL", href: "/past-productions/03_the-seagull" },
                { label: "THREE SOUND SCULPTURES", href: "/past-productions/04_three-sound-sculptures" },
                { label: "RUT", href: "/past-productions/05_rut" },
              ]}
            />

            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "text-red-600 font-semibold" : "text-gray-700"
              } hover:text-red-600`}
            >
              CONTACT
            </Link>

            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "text-red-600 font-semibold" : "text-gray-700"
              } hover:text-red-600`}
            >
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
