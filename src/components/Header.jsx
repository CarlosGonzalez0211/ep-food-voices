// components/Header.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      {/* Logo linking to homepage */}
      <Link href="/">
        <img src="/header_images/header_logo_epfv.png" alt="Site Logo" className={styles.logo} />
      </Link>

      <button
        type="button"
        className={styles.menuButton}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={handleToggle}
      >
        <span className={styles.menuBar} />
        <span className={styles.menuBar} />
        <span className={styles.menuBar} />
      </button>

      {/* Navigation links */}
      <nav
        id="primary-navigation"
        className={`${styles.links} ${menuOpen ? styles.linksOpen : styles.linksClosed}`}
      >
        <Link href="/" onClick={handleLinkClick}>Home</Link>
        <Link href="/stories" onClick={handleLinkClick}>Stories</Link>
        <Link href="/recipes" onClick={handleLinkClick}>Recipes</Link>
        <Link href="/podcasts" onClick={handleLinkClick}>Podcasts</Link>
        <Link href="/resources" onClick={handleLinkClick}>Resources</Link>
        <Link href="/about" onClick={handleLinkClick}>About</Link>
        <Link href="/epicureans" onClick={handleLinkClick}>Epicureans</Link>
      </nav>
    </header>
  );
};

export default Header;
