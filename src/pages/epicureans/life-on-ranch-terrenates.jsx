import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/EpicureansArticle.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleCarousel from "../../components/ArticleCarousel";

export default function LifeOnRanchTerrenates() {
  return (
    <>
      <Head>
        <title>Life on Ranch Terrenates, the Story of an Immigrant - Epicureans</title>
        <meta
          name="description"
          content="The story of Silverio Anguiano, an 85-year-old Mexican American immigrant, and his life on Ranch Terrenates in Chihuahua, Mexico"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className={styles.page}>
        <main className={styles.main}>
          <article className={styles.article}>
            <div className={styles.heroImage}>
              <Image
                src="/epicureans_images/life_ranch/life_ranch_cover.jpg"
                alt="Life on Ranch Terrenates"
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
                Life on Ranch Terrenates, the Story of an Immigrant
              </h1>

              <p className={styles.author}>By Ana Berry</p>

              <div className={styles.body}>
                <p>
                  Silverio Anguiano is an 85-year-old Mexican American immigrant living in Socorro, Texas. He spent much of his adolescence living and working on a ranch called Terrenates in Chihuahua, Mexico. He has many stories to tell about his time living there, from foodways to celebrations, to the difficulties he faced, all the way up to his decision to come to the United States. Terrenates is a large ranch located in Flores Magon, a town where Mr. Anguiano was born. His family moved on the ranch for work in order to sustain themselves, and Silverio began his labor at the age of eleven, just four years after moving to the ranch. He looks back at the ranch with fond memories and nostalgia, he says because despite the hardships, the ranch was beautiful, and it was his home. We conducted our interview in Spanish, Mr. Anguiano's native tongue, although he had picked up his fair share of English from practicing Ingles Sin Barreras, as well as living in the U.S for the past sixty years or so. Mr. Anguiano recalls the beauty of the ranch, the food and drinks they would make that was special and unique to ranch life, the livestock, the crops, the wildlife, and the nearby town to which they would go to occasionally for dances. For leisure, the ranch held horse races where people could place bets.

                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/life_ranch/life_ranch_1.jpg"
                    alt="Cooking outdoors"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>

                <p>
                  Mr. Anguiano discusses foodways and the common dishes made on the ranch. In her book <em>Voices in the Kitchen</em>, Meredith Abarca states, "Foodways is 'a network of activities and systems--physical, social (communicative), cultural, economic, spiritual, and aesthetic,' (7). While some dishes were unique to the ranch itself, others were simple and more universal. For example, Mr. Anguiano used to help milk the cows while his mother would then make the cheese. A dish that appears to be unique to ranch life is called barbacoa de hoyo, in which the cow is killed and then prepared in four parts. A hole is made in the ground, approximately 3-4 feet deep and 4 feet wide, where a fire is made. Large rocks or even bricks are thrown into the hole, and when the ranchers felt the rocks were hot enough, they wrap the meat up in the skin of the cow really good and put it inside the hole. The hole is then filled and covered with dirt. Once the meat is cooked well, it is taken out in parts because of how well-done it is cooked. Mr. Anguiano said this dish is typically made during festivities, such as September 16.
                </p>

                <p>
                  Esther Katz says, "En fiestas se cuecen también alimentos en el horno de barbacoa. Es un hoyo excavado en la tierra, donde se colocan piedras en el fondo. Se enciende leña encima de las piedras y cuando las piedras están incandescentes los alimentos que se van a cocinar en ollas grandes o en hojas de plátano se colocan en el fondo" (125) which describes the practice of making barbacoa de hoyo in a similar fashion to Mr. Anguiano's experience on ranch Terrenates. In other words, "The festive dishes are prepared in earth oven, a very ancient technique that allows for cooking at once a large quantity of food, in pots (boiled, steamed or fried) or in a plate (for tortillas). The staple food, tortillas and beans, is cooked in festivals. However, other corn dishes –pozole, masa de barbacoa, mole amarillo –, probably more ancient than tortillas, play a major part as festive food" (119). Katz describes how this practice originated from Mixtec Indians of Oaxaca and that the practice of making food this way is a characteristic of cooking techniques performed in festivals or rituals.
                </p>

                <p>
                  Mr. Anguiano also discusses the process of making tesgüino, an alcoholic beverage. Tesgüino is made from maiz. The maiz is put into a sack with holes in it, and then it is put on the ground (not buried, just on top) in a safe spot where animals will not get to it. Everyday, it is watered for a week, then it is uncovered. They grind it and then they put water in it to make it soupy. Then, it is boiled in bottles. Once it is red in hue, it means that is ready, so it is taken out to cool, according to Mr. Anguiano. The process of boiling the tesgüino is what makes it turn into alcohol. Mr. Anguiano credits the Native Americans for this process. More specifically, John G. Kennedy states that tesgüino is sacred to the Tarahumara, a group of indigenous people of the Americas living in the state of Chihuahua in Mexico. On the background of tesgüino Kennedy says, "It is said that tesgüino was given to the Indians by onoruame or tata diosi (god) so that they could get their work done and that they might enjoy themselves. Whenever a jar of the beer is drunk, it must first be dedicated to tata diosi by symbolically tossing three small gourdfuls dipped from a larger gourd towards each of the four directions. This is done in front of a wooden cross and is for the purpose of allowing God to drink first so that he will not get angry." Additionally, he says, "The ritual significance of the beer is further shown by the fact that it is included as an integral part of most ceremonies…for the assurance of good crops, protection of animals, killing of worms, petition for rain, or protection from lightning" (623). This goes to show how tesgüino is a lot more than just an alcoholic beverage that is used for recreation, it is a folk recipe and a sacred tradition to the Native Americans who shared it with the pueblos and ranchos, becoming a staple in ranch life.
                </p>

                <p>
                  On the ranch, another common food was chile pasado. The chile is toasted on a fire, then cooled. The chile is then peeled and tied on string and hung on clothesline, similar to carne seca. The chile pasado then becomes dried. Mr. Anguiano says this is worth a lot in Juarez. Due to the abundance of peach, they would also dry peaches, which would become what they call orejones on the ranch. The peaches were cut in small parts and dried on a screen. Similarly, grapes were also dried to become raisins. Mr. Anguiano emphasizes that they used white raisins for this. His mother enjoyed making raising so much that she stored them in cans for eating them year-round.
                </p>

                <p>
                  Silverio Anguiano worked on ranch Terrenates until he was seventeen than he moved to Juarez, Chihuahua. Then, he immigrated to the United States at age 24. He moved to California to work on another ranch where they make sugar, while his family stayed in El Paso, Texas. In California, Mr. Anguiano cut crops for eleven months before he returned to El Paso to be with his family. He is nostalgic for the past; missing the ranch, its food and its customs. He misses the beauty of the open fields, the lush forests, and the animals. Mr. Anguiano looks back at this time of his life with fond memories and gratitude that he was able to share his story.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/life_ranch/life_ranch_2.jpg"
                    alt="Cooking outdoors"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>
              </div>

              <Link href="/epicureans" className={styles.backLink}>
                ← Back to Epicureans
              </Link>
            </div>
          </article>
        </main>
      </div>

      <ArticleCarousel currentSlug="life-on-ranch-terrenates" />

      <Footer />
    </>
  );
}
