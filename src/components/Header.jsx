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
        <Link href="/about">Stories</Link>
        <Link href="/services">Recipes</Link>
        <Link href="/portfolio">Podcasts</Link>
        <Link href="/blog">Resources</Link>
        <Link href="/contact">About</Link>
        <Link href="/faq">Epicureans</Link>
      </nav>
    </header>
  );
};

export default Header;
