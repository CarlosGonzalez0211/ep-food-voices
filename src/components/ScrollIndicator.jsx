import { useState, useEffect } from "react";
import styles from "./ScrollIndicator.module.css";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show indicator after 1 second
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Hide indicator on scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(showTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.scrollIndicator}>
      <div className={styles.arrowContainer}>
        <svg
          className={styles.arrow}
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </div>
  );
}
