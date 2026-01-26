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
          <div className={styles.heroContainer}>
            <Image
              src="/home_images/epfv_home_img.jpg"
              alt="Background"
              className={styles.heroBg}
              width={1600}
              height={600}
            />
            <Image
              src="/home_images/epfv-white-logo.png"
              alt="El Paso Food Voices"
              className={styles.heroOverlay}
              width={800}
              height={200}
            />
            <div className={styles.textOverlayMiddle}>
              <h2>Stories - Recipes - Podcasts</h2>
            </div>
            <div className={styles.textOverlayBottom}>
              <h2>A City's Story</h2>
              <h2>Lived Through Food</h2>
            </div>
          </div>

          <section className={styles.imageTextSection}>
            <div className={styles.imageTextContainer}>
              <div className={styles.imageTextContent}>
                <div className={styles.imageTextColumns}>
                  <div className={styles.imageColumn}>
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F7ab7fc37668c4a2abbded63a8af2b326"
                      alt=""
                      className={styles.responsiveImage}
                      width={800}
                      height={800}
                      unoptimized
                    />
                  </div>
                  <div className={styles.textColumn}>
                    <div className={styles.textContent}>
                      Monsato is bad.
                    </div>
                  </div>
                </div>

                <div className={styles.imageTextColumns}>
                  <div className={styles.imageColumn}>
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F594dad2075fd46cfb1b0569525c91cf0"
                      alt=""
                      className={styles.responsiveImage}
                      width={800}
                      height={800}
                      unoptimized
                    />
                  </div>
                  <div className={styles.textColumn}>
                    <div className={styles.textContent}>
                      "Historical recipes humanize the past."
                    </div>
                  </div>
                </div>

                <div className={styles.imageTextColumns}>
                  <div className={styles.imageColumn}>
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2Fba62e9019a3d4b5fa797b6d51999c057"
                      alt=""
                      className={styles.responsiveImage}
                      width={800}
                      height={800}
                      unoptimized
                    />
                  </div>
                  <div className={styles.textColumn}>
                    <div className={styles.textContent}>
                      "creating opportunities while teaching with food"
                    </div>
                  </div>
                </div>

                <div className={styles.imageTextColumns}>
                  <div className={styles.imageColumn}>
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2Fcbebf84fbf684a94ad0562adbd67a850"
                      alt=""
                      className={styles.responsiveImage}
                      width={800}
                      height={800}
                      unoptimized
                    />
                  </div>
                  <div className={styles.textColumn}>
                    <div className={styles.textContent}>
                      "I'm a damn good chef, and I show it."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer import */}
      <Footer/>
    </>
  );
}
