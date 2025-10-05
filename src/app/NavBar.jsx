"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav id="main-nav">
      <div className="nav-container">
        <div className="nav-brand">
          <Link href="/">TJ Sohn</Link>
        </div>
        <div
          className={`nav-menu${menuOpen ? " open" : ""}`}
          id="nav-menu"
        >
          <Link href="/" className={`nav-link${pathname === "/" ? " active" : ""}`}>Home</Link>
          <Link href="/about" className={`nav-link${pathname.startsWith("/about") ? " active" : ""}`}>About</Link>
          <Link href="/projects" className={`nav-link${pathname.startsWith("/projects") ? " active" : ""}`}>Projects</Link>
          <Link href="/contact" className={`nav-link${pathname.startsWith("/contact") ? " active" : ""}`}>Contact</Link>
        </div>
        <div className="nav-actions">
          <Link href="/contact" className="cta-button">Get In Touch</Link>
          <div
            className={`hamburger${menuOpen ? " active" : ""}`}
            id="hamburger"
            onClick={handleHamburgerClick}
            aria-label="Toggle navigation menu"
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleHamburgerClick();
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
