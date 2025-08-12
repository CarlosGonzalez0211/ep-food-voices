// components/Footer.jsx
import React from 'react';
import styles from '../components/styles.module.css';


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerLeft}>
            <p >
                Contact <br/>
                <br/>
                Carlos Gonzalez <br/>
                Professor of Food Studies and Literature <br/>
                Department of English <br/>
                The Univeristy of Texas at El Paso <br/>
                <a href="mailto:mabarca@utep.edu">mabarca@utep.edu</a> 
            </p>
        </div>
        <div className={styles.footerRight}>
            <img src="/footer_images/utep_logo_white.png" alt="UTEP Logo" className={styles.footerLogo}/>
            <img src="/footer_images/podbeans-logo.png" alt="Podbeans Logo" className={styles.footerLogo}/>
            <img src="/footer_images/human_logo.png" alt="The Humanities Collaborative Logo" className={styles.footerLogo}/>
            <img src="/footer_images/history_logo.png" alt="Institute of Oral History Logo" className={styles.footerLogo}/>
        </div>
        
    </footer>
  );
};

export default Footer;
