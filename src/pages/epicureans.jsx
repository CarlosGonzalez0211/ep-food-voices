import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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

      {/* Featured Card Section */}
      <section className={styles.featuredSection}>
        <Link href="/epicureans/los-angeles-abuela-project" className={styles.cardLink}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/epicureans_images/los_angeles/los_angeles_cover.jpg"
                alt="El Paso Food Voices Inspires Los Angeles Abuela Project"
                width={800}
                height={450}
                className={styles.cardImg}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                El Paso Food Voices Inspires Los Angeles Abuela Project
              </h2>
            </div>
          </div>
        </Link>

        <Link href="/epicureans/my-father-food-and-memories" className={styles.cardLink}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/epicureans_images/my_father/my_father_cover.jpg"
                alt="My Father, Food and Memories"
                width={800}
                height={450}
                className={styles.cardImg}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                My Father, Food and Memories
              </h2>
            </div>
          </div>
        </Link>

        <Link href="/epicureans/life-on-ranch-terrenates" className={styles.cardLink}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/epicureans_images/life_ranch/life_ranch_cover.jpg"
                alt="Life on Ranch Terrenates, the Story of an Immigrant"
                width={800}
                height={450}
                className={styles.cardImg}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                Life on Ranch Terrenates, the Story of an Immigrant
              </h2>
            </div>
          </div>
        </Link>

        <Link href="/epicureans/elements-that-make-a-cooks-soul" className={styles.cardLink}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/epicureans_images/cooks_soul/cooks_soul_cover.jpg"
                alt="The Elements that Make a Cook's Soul"
                width={800}
                height={450}
                className={styles.cardImg}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                The Elements that Make a Cook's Soul
              </h2>
            </div>
          </div>
        </Link>

        <Link href="/epicureans/my-inner-child-conscious-eating" className={styles.cardLink}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/epicureans_images/inner_child/inner_child_cover.jpg"
                alt="My Inner Child and Finding Purpose in Conscious Eating"
                width={800}
                height={450}
                className={styles.cardImg}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                My Inner Child and Finding Purpose in Conscious Eating
              </h2>
            </div>
          </div>
        </Link>

        <Link href="/epicureans/acknowledge-the-gordita" className={styles.cardLink}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/epicureans_images/gordita/gordita_cover.jpeg"
                alt="We Need to Acknowledge the Gordita!"
                width={800}
                height={450}
                className={styles.cardImg}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                We Need to Acknowledge the Gordita!
              </h2>
            </div>
          </div>
        </Link>

        <Link href="/epicureans/reflections-culinary-subjectivities" className={styles.cardLink}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/epicureans_images/reflections_culinary/reflections_culinary_cover.jpg"
                alt="Reflections on My Culinary Subjectivities"
                width={800}
                height={450}
                className={styles.cardImg}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                Reflections on My Culinary Subjectivities
              </h2>
            </div>
          </div>
        </Link>

        <Link href="/epicureans/shaking-up-christmas-canon" className={styles.cardLink}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/epicureans_images/shaking_up/shaking_up_cover.jpg"
                alt="Shaking Up the Christmas Canon"
                width={800}
                height={450}
                className={styles.cardImg}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                Shaking Up the Christmas Canon
              </h2>
            </div>
          </div>
        </Link>

        <Link href="/epicureans/rice-stories-of-the-season" className={styles.cardLink}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/epicureans_images/rice_stories/rice_stories_cover.jpg"
                alt="Rice: The Stories of the Season"
                width={800}
                height={450}
                className={styles.cardImg}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                Rice: The Stories of the Season
              </h2>
            </div>
          </div>
        </Link>

        <Link href="/epicureans/the-process-of-identity" className={styles.cardLink}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/epicureans_images/pocess_identity/process_identity_cover.jpeg"
                alt="The Process of Identity"
                width={800}
                height={450}
                className={styles.cardImg}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                The Process of Identity
              </h2>
            </div>
          </div>
        </Link>

        <Link href="/epicureans/palate-memories-nepal-to-el-paso" className={styles.cardLink}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/epicureans_images/palate_memories/palate_memories_cover.jpg"
                alt="Palate Memories from Nepal to El Paso"
                width={800}
                height={450}
                className={styles.cardImg}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                Palate Memories from Nepal to El Paso
              </h2>
            </div>
          </div>
        </Link>
      </section>

      <Footer />
    </>
  );
}