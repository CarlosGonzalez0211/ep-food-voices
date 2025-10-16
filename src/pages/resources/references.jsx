import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Resources.module.css";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function References() {
  return (
    <>
      <Head>
        <title>References</title>
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
            <h2>References</h2>
          </div>
          <div>

          
          </div>
        </main>
    </div>
    
    {/* References list */}
    <section className={styles.refsSection}>
    <ul className={styles.refsList}>
        <li>
        <p className={styles.citation}>
            <strong>Abarca, Meredith E.</strong> “Commensality: Networks of Personal, Family, and Community
            Social Transformation.” <em>The Sociological Review</em> (May 2021).
        </p>
        <p className={styles.citationDesc}>
            By examining three EPFV stories (Antonio Lopez, Yolanda Leyva, and Roman Wilcox),
            this article shows how food is transformative and how significant social change
            is experienced through everyday culinary practices.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>Abarca, Meredith E.</strong> “Bill Parks Bar-B-Q: Southern Food with a Taste of the
            Southwest.” In <em>Lost Restaurants of El Paso</em>, ed. Robert Diaz. El Paso Historical Society.
            Charleston, SC: The History Press, 2021 (pp. 121–129).
        </p>
        <p className={styles.citationDesc}>
            Captures the life of Bill Park, an African American pit-master who ran his Bar-B-Q
            from the 1970s to 1998, bringing southern-style barbecue to El Paso.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>Abarca, Meredith E.</strong> “Without Cooking, There Is No Community: Women Feeding
            El Paso.” In <em>Grace and Gumption: The Women of El Paso</em>, ed. Marcia Hatfield Daudistel.
            Fort Worth, TX: TCU Press, 2011 (pp. 107–125).
        </p>
        <p className={styles.citationDesc}>
            History of four women and their recipes from restaurants like L &amp; J Cafe and
            Ardovino’s Pizza that for generations have nourished El Paso residents.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>Abarca, Meredith E.</strong> “Charlas Culinarias: Mexican Women Speaking from Their
            Public Kitchens.” <em>Food and Foodways</em> 15, nos. 3–4 (Oct. 2007): 182–212.
        </p>
        <p className={styles.citationDesc}>
            Explores how women who own small food businesses in El Paso and Ciudad Juárez transform
            home cooking into economic resources; introduces the idea of familial wealth.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>Arellano, Gustavo.</strong> “Remembering Ashley’s: How El Paso Help Spread Mexican
            Food Across the World.” <em>El Paso Inc.</em> (June 1, 2012).
        </p>
        <p className={styles.citationDesc}>
            Excerpt from <em>Taco USA: How Mexican Food Conquered America</em> highlighting El Paso’s role
            in that culinary story.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>Fischer-West, Lucy.</strong> “A Tortilla is Never ‘Just’ a Tortilla.” In
            <em> Both Sides of the Border</em>, eds. Francis E. Abernethy and Kenneth L. Untiedt.
            Denton: University of North Texas Press, 2004: 93–99.
        </p>
        <p className={styles.citationDesc}>
            Traces the history of corn tortillas in relation to El Paso and families in the borderlands.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>Long, Trish.</strong> “Ashley Revolutionized Mexican Food.” <em>El Paso Times</em>
            (Feb. 9, 2017).
        </p>
        <p className={styles.citationDesc}>
            A short biographical history of George N. Ashley, founder of Ashley’s Food, and the role of
            Mexican food in his enterprise.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>Mendoza Guerrero, Juan Manuel.</strong> “Mexican Food in El Paso, 1880–1940:
            Its Path and Discordant Voices.” In <em>Latin@s’ Presence in the Food Industry:
            Changing How We Think About Food</em>, eds. Meredith E. Abarca and Consuelo Carr Salas.
            Fayetteville: University of Arkansas Press, 2016: 23–39.
        </p>
        <p className={styles.citationDesc}>
            Maps the rise and fall of Mexican-owned food businesses—from street stands to high-end
            restaurants.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>West, John O.</strong> “Folk Food.” In <em>Mexican-American Folklore: Legends,
            Songs, Festivals, Proverbs, Craft, Tales of Saints, of Revolutionaries, and More</em>.
            Little Rock: August House, 1989: 207–220.
        </p>
        <p className={styles.citationDesc}>
            Encapsulates food traditions pertinent to the El Paso/Cd. Juárez border region.
        </p>
        </li>
    </ul>
    </section>


      {/* Footer import */}
      <Footer/>
    </>
  );
}
