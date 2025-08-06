// components/Header.jsx
import React from 'react';
import styles from '../components/styles.module.css';


const Header = () => {
  return (
    <header className={styles.navbar}>
      <img src="/logo.png" alt="Logo" />
      <nav className={styles.links}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a href="#">FAQ</a>
      </nav>
    </header>
  );
};

export default Header;
