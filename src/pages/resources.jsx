import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Resources.module.css";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources</title>
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
              src="/resources_images/resources_background.jpg"
              alt="Background"
              className={styles.heroBg}
              width={1000}
              height={600}
            />
          </div>
          <div className={styles.textOverlayMiddle}>
            <h2>Resources</h2>
          </div>
          <div>

          
          </div>
        </main>
    </div>
    {/* Intro / body */}
          <section className={styles.resourcesIntro}>
            <p>
              The foods that define a city’s culinary landscape speak to its histories, cultures,
              ecological environments, politics and economics. The El Paso–Ciudad Juárez area has
              represented diverse culinary landscapes—from a producer of grapes from which world-renowned
              wines were made in the 16th century to being the birthplace of a world-wide known food
              company, Old El Paso. The resources offered here are meant to help tell the story of how a
              city’s culinary identity develops and reflects ongoing connections that bridge geographical
              and cultural borders.
            </p>

            <p>
              <strong><u>Sites</u></strong> provide information on diverse organizations within the El Paso del
              Norte area where knowledge from agricultural practices, general information related to the
              diverse aspects of food culture, to where food can be obtained.
            </p>

            <p>
              <strong><u>References</u></strong> provide a list—mostly but not limited to—books, journals, articles,
              and documentaries about El Paso’s area that serve as a place to begin exploring food’s
              far-reaching ways of shaping the landscape of a community. Downloads provided when available.
            </p>

            <p>
              EPFV’s <strong><u>Digital Maps</u></strong> illustrate El Paso’s culinary DNA. What creates this DNA is
              its residents’ food knowledge, practices, and memories. A city’s culinary DNA leads to
              better understanding of its environment and climate; its settlement history and ethnic
              demographic; its economic history; its sociological factors; its religions— as folklorist
              Don Yoder explained when he first coined the term <em>foodways</em> to speak of the embedded
              complexity in all food systems (Yoder 328).
            </p>
          </section>

      {/* Footer import */}
      <Footer/>
    </>
  );
}
