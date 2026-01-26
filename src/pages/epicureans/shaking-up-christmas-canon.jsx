import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/EpicureansArticle.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleCarousel from "../../components/ArticleCarousel";

export default function ShakingUpChristmasCanon() {
  return (
    <>
      <Head>
        <title>Shaking Up the Christmas Canon - Epicureans</title>
        <meta
          name="description"
          content="Redefining holiday traditions through food and family memory by Anthony J. Diaz"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className={styles.page}>
        <main className={styles.main}>
          <article className={styles.article}>
            <div className={styles.heroImage}>
              <Image
                src="/epicureans_images/shaking_up/shaking_up_cover.jpg"
                alt="Shaking Up the Christmas Canon"
                width={1200}
                height={600}
                className={styles.heroImg}
                priority
              />
            </div>

            <div className={styles.content}>
              <Link href="/epicureans" className={styles.backLink}>
                ← Back to Epicureans
              </Link>

              <h1 className={styles.title}>
                Shaking Up the Christmas Canon
              </h1>

              <p className={styles.author}>By Anthony J. Diaz</p>
              <p className={styles.date}>(May 8, 2024)</p>

              <div className={styles.body}>
                <p>
                  Food during the holidays can either be seen as a chore or a social endeavor where all participants in the cooking are tasked with preparing enough food for all the guests and seconds and thirds. However, you may see the process of making a holiday feast, one thing remains clear and that is: the food is usually the same every year. There are certain staples to Christmas dinner that have either been a tradition since the colonial era or have been slowly incorporated through popular demand. Such staples include a turkey or ham, potatoes, corn, charcuterie boards and if you are Mexican American, tamales, brisket and chile con queso. All of these dishes must be prepared by a large group of the family and if said family prefers efficiency, they are also prepared before the get-together and served potluck style. This means that holiday meals are just as much about how the food is made as how it tastes.
                </p>

                <p>
                  Take tamales for example. They are, by far, the most historically significant part of a holiday meal for any Mexican household, and their preparation tells a story that goes back for generations. It is an indigenous dish and is a product of hard fought preservation by people who have been subjugated and systematically erased by imperial powers aiming to establish European control over the Americas. Thus, when they are made every year, those who make them, whether they be grandparents, parents, or people attempting to learn the recipe for the first time, are breathing life into an ongoing entity that is "the Tamal". With each new iteration of the tamal, its handlers create a memory that not only preserves the past but that prepares the individual for the next year where the tradition will resurface and the process will begin anew.
                </p>

                <p>
                  David Sutton calls this the food-ritual-memory complex. He states that "A first approach to the food–ritual–memory complex is provided through a consideration of the role food plays as a mnemonic for the passing of time and the seasonal cycles. But mnemonic is perhaps not completely the right word, because food is equally important in creating prospective memories, that is, in orienting people toward future memories that will be created in the consumption of food."(Sutton 28). Basically, as we make food, we memorize what will become a future reality of dishes to come. Preparation always proceeds eating, even in memory. Since preparing food, especially during the holidays, can be a shared communal ritual, the kinship that is built between individuals through this memory complex creates the foundation for a shared heritage by continuing a process that relies on memory in order to exist. The passing of recipes and the prospect of future creations of a dish makes us rethink our relationship with the people with whom we share food. The process of memorizing the ritual of making tamales connects us with our past as well as with those around us as we perpetuate the creation of a dish and propel it into the future. This reminds me of a concept from El Paso Food Voices' special documentary on Culinary Heritage and Kinship where Joshua Lopez touches on the fact that kinship, in this context referring to the creation of food for others, is what prevents the erasure of histories by way of cementing personal experiences within a shared memory. Shared food, and the vulnerability inherent in eating with others, means the preservation and development of a shared history(Abarca, El Paso Food Voices).
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/shaking_up/shaking_up_1.jpeg"
                    alt="Holiday meal preparation"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>

                <p>
                  So, how does this relate to me? Well, being a young and aspiring Chicano scholar, I have always thought about the memories that foods possess and how they connect us to others. Furthermore, I have always been a hungry critic of the lack of originality that comes from sticking to a specific culture of food. The running joke for Mexican food has always been that every dish is a combination of beans, meat, cheese and tortillas. However, considering this stereotype more deeply reveals that Mexican food cares less about the ingredients, probably a consequence of the region from which these dishes originated, and more about how the food is prepared and presented. In regards to holiday food, my family decided to run an experiment.
                </p>

                <p>
                  In 2021, sick of eating the same dishes every year, my family had the idea to change what we would be cooking for Christmas day. We are a small family of five and given that my parents count as a single unit, there were only four dishes to be made. Each member was tasked to bring a dish on the 25th of December that was not a part of the traditional staples usually expected for the holiday. We wanted to do this because it would help us understand how much we knew about cooking as well as help us redefine the borders of what a holiday food is. We had plenty of time to prepare, but when it came to actually eating on that fateful day, the emotions ran high. It was obvious that all of my family members looked into their cultural heritage and picked from a catalog of foods that each carried a significant memory.
                </p>

                <p>
                  For my parents, they chose tacos de chile colorado and huevos estrellados. They could not resist including tamales rojos alongside their dish. Their reason for choosing the dish was that it reminded them both of how they met. They were young lovers just out of highschool. They had very little money early in their relationship and with a baby girl on the way, the food they made was almost always simple. Chile colorado in its most simple form is just meat smothered in chile sauce. The eggs were also significant parts of their early meals as a couple since they are easy to make, especially for a teen mom with little cooking experience.
                </p>

                <p>
                  My older sisters chose to make chilaquiles and churros. These two dishes were childhood favorites. Chilaquiles were especially popular as we grew up since our mother would make them quickly as an after school snack before our father came home from work. My eldest sister claimed that making churros was inspired by the many trips we would take to our grandmother's house just down the road from where we lived. She lived alone, her husband being gone before any of us were born, but she never made it seem like her home was lonely or empty. It was cozy there and full of life. Her furniture was vibrant, detailed, and colorful. Her food, especially the sweets, were unmatched. This memory is where the churros, as difficult as they are to master, came from.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/shaking_up/shaking_up_1.jpeg"
                    alt="Mole poblano"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>

                <p>
                  As for me, I always hated the taste of mole poblano. The idea of chocolate being spicy and mixing with chicken made me sick. As a kid, I remember feeling the warm, soupy mixture of chiles, pine nuts, and cocoa sitting heavily in my mouth and not wanting to swallow. The taste was foreign and complex. My taste buds were only accustomed to salt and sugar, staples of a wholly American diet. Tasting that dark bittersweet sauce my mother made only on special occasions scared me. I don't believe I was prepared to savor up to twenty ingredients simultaneously and the fact that my identity hinged on the ability to distinguish each one as my ancestors had before, made me feel pressured and wary of the dish. However, after learning how to make mole with a friend and making it again for this Christmas I got the chance to finally understand why my family found this dish sacred. I liked it! I could finally appreciate each spice for its contribution. The texture inside my mouth screamed "yollotl!", my heart and the cacao bean becoming one.
                </p>

                <p>
                  It wasn't necessarily the flavors of each dish that made that 2021 Christmas special. It was the story of why and how each member of the family made each dish that helped us learn more about each other. It brought us closer together. Like David Sutton discusses, we made a prospective memory that has been and will continue to inform our future Christmases. I encourage the reader of this blog to do the same; to try to redefine a holiday or sacred meal or perhaps find a new sacred dish that has never been a part of your repertoire before. I can assure that it will be worth the effort.
                </p>
              </div>

              <Link href="/epicureans" className={styles.backLink}>
                ← Back to Epicureans
              </Link>
            </div>
          </article>
        </main>
      </div>

      <ArticleCarousel currentSlug="shaking-up-christmas-canon" />

      <Footer />
    </>
  );
}
