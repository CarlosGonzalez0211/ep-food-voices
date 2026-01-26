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
            <strong>Abarca, Meredith E.</strong> <a href="https://journals.sagepub.com/doi/abs/10.1177/00380261211009088" target="_blank" rel="noopener noreferrer">"Commensality: Networks of Personal, Family, and Community Social Transformation."</a> <em>The Sociological Review</em>, (May 2021)
        </p>
        <p className={styles.citationDesc}>
            By examining three stories found in EPFV, Antonio Lopez, Yolanda Leyva, and Roman Wilcox, this article shows how food is transformative and acts of significant social change are experienced through individuals' everyday culinary practices.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>Abarca, Meredith E.</strong> "Bill Parks Bar-B-Q: Southern Food with a Taste of the Southwest." In <a href="https://www.barnesandnoble.com/w/lost-restaurants-of-el-paso-el-paso-county-historical-society/1138479129" target="_blank" rel="noopener noreferrer"><em>Lost Restaurants of El Paso</em></a>. Ed. by Robert Diaz. El Paso Historical Society. Charleston, SC:The History Press, 2021 (121-129)
        </p>
        <p className={styles.citationDesc}>
            This chapter captures the life of Bill Park, an African American retired from the military, who introduced his native southern-style barbecue to El Paso. A gifted pit-master who run his Bar-B-Q from the 1970s to 1998.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>Abarca, Meredith E.</strong> "Without Cooking, There Is No Community: Women Feeding El Paso." In <a href="https://www.tamupress.com/book/9780875654300/grace-and-gumption/" target="_blank" rel="noopener noreferrer"><em>Grace and Gumption: The Women of El Paso</em></a>. Ed. by Marcia Hatfield Daudistel. Fort Worth, TX: TCU Press, 2011. (107-125)
        </p>
        <p className={styles.citationDesc}>
            This chapter captures the history of four women and their recipes cooked in restaurants like L & J Cafe and Ardovino's Pizza that for generations have nourished the bodies and souls of El Paso's residents.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>Abarca, Meredith E.</strong> <a href="https://www.tandfonline.com/doi/full/10.1080/07409710701620094" target="_blank" rel="noopener noreferrer">"Charlas Culinarias: Mexican Women Speaking from Their Public Kitchens."</a> <em>Food and Foodways</em>. Vol. 3-4. no. 15 (Oct. 2007): 182-212
        </p>
        <p className={styles.citationDesc}>
            This article explores how women who own small food businesses in El Paso, Texas and Ciudad Juárez, Chihuahua transform their home cooking into an economic resource. The concept of familial wealth explains the kind of profit these women value.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>Arrellano, Gustavo.</strong> <a href="https://www.elpasoinc.com/elpasoplus/features/remembering-ashleys-how-el-paso-helped-spread-mexican-food-across-the-world/article_ebd76a04-ac39-11e1-86f1-001a4bcf6878.html" target="_blank" rel="noopener noreferrer">"Remembering Ashley's: How El Paso Help Spread Mexican Food Across the World."</a>  <em>El Paso Inc.</em> June 1, 2012
        </p>
        <p className={styles.citationDesc}>
            It offers a short excerpt from Arellano's <em>Taco USA: How Mexican Food Conquered America</em> that shows the significant role El Paso play in this culinary conquest.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>Fischer-West, Lucy.</strong> "A Tortilla is Never 'Just' a Tortilla." In <a href="https://untpress.unt.edu/catalog/abernethy-both-sides-of-the-border/" target="_blank" rel="noopener noreferrer"><em>Both Sides of the Border</em></a>. Eds. Francis E. Abernethy and Kenneth L. Untiedt. Denton: University of North Texas Press, 2004: 93-99.
        </p>
        <p className={styles.citationDesc}>
            This chapter traces the history of corn tortillas as it relates to El Paso and to families in the borderlands.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>Long, Trish.</strong> <a href="https://www.elpasotimes.com/story/life/2017/02/04/ashley-revolutionized-mexican-food/97414970/" target="_blank" rel="noopener noreferrer">"Ashley Revolutionized Mexican Food."</a> <em>El Paso Times</em>. (Feb. 9, 2017)
        </p>
        <p className={styles.citationDesc}>
            Long offers a short biographical history of George N. Ashley, founder of Ashley's Food, and how Mexican food became central to Mr. Ashley's food industry.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>Mendoza Guerrero, Juan Manuel.</strong> <a href="https://www.google.com/books/edition/_/2EcECwAAQBAJ?hl=en&sa=X&ved=2ahUKEwi2ueO917z5AhW2lGoFHUcxAU4Q7_IDegQIERAC" target="_blank" rel="noopener noreferrer">"Mexican Food in El Paso, 1880-1940: Its Path and Discordant Voices."</a> In <em>Latin@s' Presence in the Food Industry: Changing How We Think About Food</em>. Eds. Meredith E. Abarca and Consuelo Carr Salas. Fayetteville: University of Arkansas Press, 2016: 23-39.
        </p>
        <p className={styles.citationDesc}>
            Chapter maps the rise and fall of Mexican owned food business, from food stands in corner streets to high end Mexican restaurants.
        </p>
        </li>

        <li>
        <p className={styles.citation}>
            <strong>West, John O.</strong> <a href="https://www.amazon.com/Mexican-American-Folklore-American-John-West/dp/0874830591" target="_blank" rel="noopener noreferrer">"Folk Food."</a> in <em>Mexican-American Folklore: Legends, Songs, Festivals, Proverbs, Craft, Tales of Saints, of Revolutionaries, and More.</em> Little Rock: August House, 1989: 207-220.
        </p>
        <p className={styles.citationDesc}>
            This chapter encapsulates the variety of foods traditions pertinent to the border region of El Paso/Cd. Juarez.
        </p>
        </li>
    </ul>
    </section>


      {/* Footer import */}
      <Footer/>
    </>
  );
}
