import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

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

          {/* Latest Stories Section */}
          <section className={styles.latestStoriesSection}>
            <div className={styles.latestStoriesContainer}>
              <h1 className={styles.latestStoriesTitle}>LATEST STORIES</h1>

              <p className={styles.latestStoriesText}>
                <strong>El Paso Food Voices (EPFV) is a city's story lived through food.</strong> It speaks to cross-cultural connections that define a city's culinary identity that is made up of a diverse population, a past with roots spreading in multiple directions, and a dynamic and ever-changing present. This collection, which includes recipes, is gathered from home cooks, professional chefs, restaurant owners, community educators, and others from across El Paso, Texas. <strong>EPFV</strong> invites viewers to consider what living histories are served on their plates and how our culinary actions of today influence the kinds of living histories future generations will experience.
              </p>

              <p className={styles.latestStoriesText}>
                <strong>The foods that define</strong> a city's story lived through food speaks to its histories, cultures, ecological environments, politics and economics. Recipes are always more than "how to" instructions. Recipes are stories. They reveal how and why we remember certain ingredients, techniques, and ways of serving. Food stories archive the flavors and textures of our lived experiences, of the places we have lived, of histories we share with family, friends and strangers. These stories bring to life El Paso's mosaic of flavors.
              </p>
            </div>
          </section>

          <section className={styles.imageTextSection}>
            <div className={styles.imageTextContainer}>
              <div className={styles.imageTextContent}>
                <div className={styles.imageTextColumns}>
                  <div className={styles.imageColumn}>
                    <Link href="/stories/monsanto-is-bad">
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F7ab7fc37668c4a2abbded63a8af2b326"
                        alt=""
                        className={`${styles.responsiveImage} ${styles.monsantoImage}`}
                        width={800}
                        height={800}
                        unoptimized
                      />
                    </Link>
                  </div>
                  <div className={styles.textColumn}>
                    <div className={styles.textContent}>
                        "Monsanto is bad."
                      </div>
                  </div>
                </div>

                <div className={styles.imageTextColumns}>
                  <div className={styles.imageColumn}>
                    <Link href="/stories/machelle-wood">
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F594dad2075fd46cfb1b0569525c91cf0"
                        alt=""
                        className={styles.responsiveImage}
                        width={800}
                        height={800}
                        unoptimized
                      />
                    </Link>
                  </div>
                  <div className={styles.textColumn}>
                    <div className={styles.textContent}>
                      "Historical recipes humanize the past."
                    </div>
                  </div>
                </div>

                <div className={styles.imageTextColumns}>
                  <div className={styles.imageColumn}>
                    <Link href="/stories/oso-good-culinary-program">
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2Fba62e9019a3d4b5fa797b6d51999c057"
                        alt=""
                        className={styles.responsiveImage}
                        width={800}
                        height={800}
                        unoptimized
                      />
                    </Link>
                  </div>
                  <div className={styles.textColumn}>
                    <div className={styles.textContent}>
                      "creating opportunities while teaching with food"
                    </div>
                  </div>
                </div>

                <div className={styles.imageTextColumns}>
                  <div className={styles.imageColumn}>
                    <Link href="/stories/chef-luis-borderland-story">
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2Fcbebf84fbf684a94ad0562adbd67a850"
                        alt=""
                        className={styles.responsiveImage}
                        width={800}
                        height={800}
                        unoptimized
                      />
                    </Link>
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
