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
          <section className={styles.storiesSection}>
            <div className={styles.storiesWrap}>
              <h2 className={styles.storiesTitle}>Latest Stories</h2>

              <div className={styles.storiesBody}>
                <p>
                  <strong>El Paso Food Voices (EPFV) is a city's story lived through food.</strong>
                  It speaks to cross‑cultural connections that define a city's culinary identity
                  that is made up of a diverse population, a past with roots spreading in multiple
                  directions, and a dynamic and ever‑changing present. This collection, which
                  includes recipes, is gathered from home cooks, professional chefs, restaurant
                  owners, community educators, and others from across El Paso, Texas.
                  <strong> EPFV </strong>
                  invites viewers to consider what living histories are served on their plates and how our
                  culinary actions of today influence the kinds of living histories future generations will experience.
                </p>

                <p>
                  <strong>The foods that define</strong> a city's story lived through food speaks to its histories,
                  cultures, ecological environments, politics and economics. Recipes are always more than
                  “how to” instructions. Recipes are stories. They reveal how and why we remember certain
                  ingredients, techniques, and ways of serving. Food stories archive the flavors and textures of
                  our lived experiences, of the places we have lived, of histories we share with family, friends
                  and strangers. These stories bring to life El Paso's mosaic of flavors.
                </p>
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