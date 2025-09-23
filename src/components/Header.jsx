// components/Header.jsx
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.navbar}>
      {/* Logo linking to homepage */}
      <Link href="/">
        <img src="/header_images/header_logo_epfv.png" alt="Site Logo" className={styles.logo} />
      </Link>

      {/* Navigation links */}
      <nav className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/recipes">Recipes</Link>
        <Link href="/podcasts">Podcasts</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/about">About</Link>
        <Link href="/epicureans">Epicureans</Link>
      </nav>
    </header>
  );
};

export default Header;
