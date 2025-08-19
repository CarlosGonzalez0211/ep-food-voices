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

          <section className={styles.imageTextSection}>
            <div className={styles.imageTextContainer}>
              <div className={styles.imageTextContent}>
                <div className={styles.imageTextColumns}>
                  <div className={styles.imageColumn}>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F7ab7fc37668c4a2abbded63a8af2b326?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F7ab7fc37668c4a2abbded63a8af2b326?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F7ab7fc37668c4a2abbded63a8af2b326?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F7ab7fc37668c4a2abbded63a8af2b326?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F7ab7fc37668c4a2abbded63a8af2b326?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F7ab7fc37668c4a2abbded63a8af2b326?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F7ab7fc37668c4a2abbded63a8af2b326?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F7ab7fc37668c4a2abbded63a8af2b326"
                      src="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F7ab7fc37668c4a2abbded63a8af2b326"
                      alt=""
                      className={styles.responsiveImage}
                    />
                  </div>
                  <div className={styles.textColumn}>
                    <div className={styles.textContent}>
                      Monsato is bad.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignSelf: "stretch",
                flexDirection: "column",
                flexGrow: "1",
                fontWeight: "400",
                maxWidth: "1200px",
                minHeight: "100px",
                position: "relative",
                width: "100%",
                pointerEvents: "auto",
                margin: "0 auto",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "400",
                  marginTop: "20px",
                  position: "relative",
                  pointerEvents: "auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontWeight: "400",
                    gap: "20px",
                    pointerEvents: "auto",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontWeight: "400",
                      width: "50%",
                      pointerEvents: "auto",
                    }}
                  >
                    <img
                      loading="lazy"
                      alt=""
                      src="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F7ab7fc37668c4a2abbded63a8af2b326"
                      style={{
                        display: "block",
                        aspectRatio: "1 / 1",
                        fontWeight: "400",
                        marginTop: "20px",
                        minHeight: "20px",
                        minWidth: "20px",
                        objectFit: "cover",
                        overflowX: "hidden",
                        overflowY: "hidden",
                        width: "100%",
                        pointerEvents: "auto",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontWeight: "400",
                      position: "relative",
                      pointerEvents: "auto",
                      marginLeft: "20px",
                      width: "50%",
                      paddingTop: "20px",
                    }}
                  >
                    Monsato is bad.
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignSelf: "stretch",
                flexDirection: "column",
                flexGrow: "1",
                fontWeight: "400",
                maxWidth: "1200px",
                minHeight: "100px",
                position: "relative",
                width: "100%",
                pointerEvents: "auto",
                margin: "0 auto",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "400",
                  marginTop: "20px",
                  position: "relative",
                  pointerEvents: "auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontWeight: "400",
                    gap: "20px",
                    pointerEvents: "auto",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontWeight: "400",
                      width: "50%",
                      pointerEvents: "auto",
                    }}
                  >
                    <img
                      loading="lazy"
                      alt=""
                      src="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F7ab7fc37668c4a2abbded63a8af2b326"
                      style={{
                        display: "block",
                        aspectRatio: "1 / 1",
                        fontWeight: "400",
                        marginTop: "20px",
                        minHeight: "20px",
                        minWidth: "20px",
                        objectFit: "cover",
                        overflowX: "hidden",
                        overflowY: "hidden",
                        width: "100%",
                        pointerEvents: "auto",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontWeight: "400",
                      position: "relative",
                      pointerEvents: "auto",
                      marginLeft: "20px",
                      width: "50%",
                      paddingTop: "20px",
                    }}
                  >
                    Monsato is bad.
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignSelf: "stretch",
                flexDirection: "column",
                flexGrow: "1",
                fontWeight: "400",
                maxWidth: "1200px",
                minHeight: "100px",
                position: "relative",
                width: "100%",
                pointerEvents: "auto",
                margin: "0 auto",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "400",
                  marginTop: "20px",
                  position: "relative",
                  pointerEvents: "auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontWeight: "400",
                    gap: "20px",
                    pointerEvents: "auto",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontWeight: "400",
                      width: "50%",
                      pointerEvents: "auto",
                    }}
                  >
                    <img
                      loading="lazy"
                      alt=""
                      src="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F7ab7fc37668c4a2abbded63a8af2b326"
                      style={{
                        display: "block",
                        aspectRatio: "1 / 1",
                        fontWeight: "400",
                        marginTop: "20px",
                        minHeight: "20px",
                        minWidth: "20px",
                        objectFit: "cover",
                        overflowX: "hidden",
                        overflowY: "hidden",
                        width: "100%",
                        pointerEvents: "auto",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontWeight: "400",
                      position: "relative",
                      pointerEvents: "auto",
                      marginLeft: "20px",
                      width: "50%",
                      paddingTop: "20px",
                    }}
                  >
                    Monsato is bad.
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
