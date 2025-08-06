// components/Header.jsx
import React from 'react';
import styles from '../components/styles.module.css';


const Header = () => {
  return (
    <header className={styles.navbar}>
      <img
        src="/header_logo_epfv.png"
        alt="Site Logo"
        className={styles.logo}
        />
      <nav className={styles.links}>
        <a href="#">Home</a>
        <a href="#">Stories</a>
        <a href="#">Recipes</a>
        <a href="#">Podcasts</a>
        <a href="#">Resources</a>
        <a href="#">About</a>
        <a href="#">Epicureans</a>
      </nav>
    </header>
  );
};

export default Header;