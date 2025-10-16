import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Epicureans.module.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Epicureans() {
  return (
    <>
      <Head>
        <title>Epicureans</title>
        <meta
          name="description"
          content="Epicurus, Epicureanism, and the Epicureans — EPFV’s blog series."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      {/* Hero */}
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.heroContainer}>
            <Image
              src="/home_images/epfv_home_img.jpg"
              alt="Epicureans background"
              className={styles.heroBg}
              width={1600}
              height={600}
              priority
            />

            {/* EPFV logo (same placement as index) */}
            <Image
              src="/home_images/epfv-white-logo.png"
              alt="El Paso Food Voices"
              className={styles.heroOverlay}
              width={800}
              height={200}
              priority
            />

            {/* Overlay: Φ + title + definitions */}
            <div className={styles.epiOverlay}>
              <div className={styles.epiPhi}>Φ</div>

              <div className={styles.epiContent}>
                <h1 className={styles.epiTitle}>Epicureans</h1>
                <p className={styles.epiLine}>
                  <strong>Epicurus:</strong> The “belly-centered” ancient Greek philosopher.
                </p>
                <p className={styles.epiLine}>
                  <strong>Epicureanism:</strong> “The beginning and the root to all good is the
                  pleasure of the stomach; even wisdom and culture must be referred to this.”
                </p>
                <p className={styles.epiLine}>
                  <strong>Epicureans:</strong> Disciples of Epicurus.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Intro section below the hero */}
      <section className={styles.introSection}>
        <h3 className={styles.introHeading}>Epicureans is EPFV’s blog series.</h3>

        <p className={styles.introQuote}>
          “For Epicurus, attitudes toward food are a source of wisdom. Through observing the
          essential role that meals play in both the sustenance of human life and activity of social
          culture, Epicurus thought about the lessons to be gleaned from eating.”
          <sup>*</sup>
        </p>

        <p>
          In the tradition of the belly-centered philosopher, Epicurus, this blog series is a space
          to share, respond to, and reflect upon issues and topics visitors to El Paso Food Voices
          have gleaned from these stories.
        </p>

        <p>
          We welcome vignettes, poems, artwork, and essays that blend together literary journalism
          with cultural and historical analysis that gather their inspiration from a featured story
          within El Paso Food Voices. Submissions should be 600–1200 words and include 2–4
          photographs (if applicable).
        </p>

        <div className={styles.introContact}>
          <p><strong>For questions, guidelines, and submissions contact:</strong></p>
          <p>
            Meredith E. Abarca, Editor,{" "}
            <a href="mailto:mabarca@utep.edu">Mabarca@utep.edu</a>
            <br />
            Joshua I. Lopez, Co-Editor,{" "}
            <a href="mailto:JoshuaLopez4@my.unt.edu">JoshuaLopez4@my.unt.edu</a>
          </p>
        </div>

        <p className={styles.footnote}>
          * Worth, Sarah and David, Ben. “Epicurus, Pleasure, and the Twenty–First–Century Diet.”
          <em> The Journal of Aesthetic Education</em>, Vol. 55, No. 3 (Fall 2021): 59–70.
        </p>
      </section>

      <Footer />
    </>
  );
}