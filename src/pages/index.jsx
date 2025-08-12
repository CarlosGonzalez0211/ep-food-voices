import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header import */}
      <Header />

      {/* Page Content */}
      <div className={`${styles.page}`}>
        <main className={styles.main}>
          <div className={styles.imageContainer}>
            <Image
              src="/home_images/epfv_home_img.jpg" // <-- replace with your image path in /public
              alt="Descriptive alt text"
              fill
              priority
              className={styles.image}
            />
            <div className={styles.textOverlay}>
              <h2>Your Text Here</h2>
              <p>Some supporting text or tagline</p>
            </div>
          </div>
                              
        </main>
      </div>

      {/* Footer import */}
      <Footer/>
    </>
  );
}