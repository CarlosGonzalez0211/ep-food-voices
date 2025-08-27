import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Epicureans() {
  return (
    <>
      <Head>
        <title>Epicureans</title>
        <meta name="description"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header import */}
      <Header />

      {/* Page Content */}
      <div className={`${styles.page}`}>
        <main className={styles.main}>
          <div className={styles.heroContainer}>
            <Image
              src="/about_images/about.jpg"
              alt="Background"
              className={styles.heroBg}
              width={1000}
              height={600}
            />
          </div>
          <div className={styles.textOverlayMiddle}>
              <h2>About</h2>
            </div>
        </main>
    </div>

      {/* Footer import */}
      <Footer/>
    </>
  );
}
