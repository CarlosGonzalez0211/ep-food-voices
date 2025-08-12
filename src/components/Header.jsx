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
        <Link href="/">Homepage</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/faq">FAQ</Link>
      </nav>
    </header>
  );
};

export default Header;
