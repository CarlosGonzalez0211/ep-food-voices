import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Resources.module.css";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Sites() {
  return (
    <>
      <Head>
        <title>Sites</title>
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
            <h2>Sites</h2>
          </div>
          <div>

          </div>
        </main>
        </div>
        
        {/* Static list */}
        <section className={styles.linkListSection}>
            <ul className={styles.linkList}>
            <li>
                <strong>Borderland Rainbow Center</strong>, a nonprofit that serves the LGBTQ+ community to
                which a food pantry is integral to its many programs. @{" "}
                <a href="https://www.borderlandrainbow.org/" target="_blank" rel="noopener noreferrer">
                https://www.borderlandrainbow.org/
                </a>
            </li>

            <li>
                <strong>El Paso County Historical Society</strong>. The El Paso County Historical Society
                preserves and makes available a wide range of materials chronicling the El Paso Region&apos;s
                history and culture. @{" "}
                <a href="https://www.elpasohistory.com/" target="_blank" rel="noopener noreferrer">
                https://www.elpasohistory.com/
                </a>
            </li>

            <li>
                <strong>Kelly Center for Hunger Relief</strong>, a non-profit that assists El Pasoans facing
                hunger and works against food insecurity. @{" "}
                <a href="https://www.kmfp.org/" target="_blank" rel="noopener noreferrer">
                https://www.kmfp.org/
                </a>
            </li>

            <li>
                <strong>La Semilla Food Center</strong>, a non-profit organization based in Anthony, New Mexico
                that fosters a healthy, self-reliant, fair, and sustainable food system in the Paso del Norte
                region of southern New Mexico and El Paso, TX. @{" "}
                <a href="https://lasemillafoodcenter.org/" target="_blank" rel="noopener noreferrer">
                https://lasemillafoodcenter.org/
                </a>
            </li>

            <li>
                <strong>Planty for the People</strong>, a non-profit that strives to collectively create a
                commonplace that fosters food access, equality, and community. @{" "}
                <a href="https://www.facebook.com/PlantyForThePeople" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/PlantyForThePeople
                </a>
            </li>

            <li>
                <strong>The Magoffin Home State Historical Site</strong>, part of the Texas Historical
                Commission. It offers historically based cooking demonstrations. @{" "}
                <a
                href="https://www.thc.texas.gov/historic-sites/magoffin-home-state-historic-site"
                target="_blank"
                rel="noopener noreferrer"
                >
                https://www.thc.texas.gov/historic-sites/magoffin-home-state-historic-site
                </a>
            </li>
            </ul>
        </section>

      {/* Footer import */}
      <Footer/>
    </>
  );
}
