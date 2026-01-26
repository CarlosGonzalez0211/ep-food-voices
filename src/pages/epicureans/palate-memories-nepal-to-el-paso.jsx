import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/EpicureansArticle.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleCarousel from "../../components/ArticleCarousel";

export default function PalateMemoriesNepal() {
  return (
    <>
      <Head>
        <title>Palate Memories from Nepal to El Paso - Epicureans</title>
        <meta
          name="description"
          content="A journey through food memories from Nepal to El Paso by Purna Chandra Bhusal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className={styles.page}>
        <main className={styles.main}>
          <article className={styles.article}>
            <div className={styles.heroImage}>
              <Image
                src="/epicureans_images/palate_memories/palate_memories_cover.jpg"
                alt="Palate Memories from Nepal to El Paso"
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
                Palate Memories from Nepal to El Paso
              </h1>

              <p className={styles.author}>By Purna Chandra Bhusal</p>
              <p className={styles.date}>(September 28, 2023)</p>

              <div className={styles.body}>
                <p>
                  My palate memories are deeply rooted in the hills of Nepal, where I grew up eating dal bhat (lentil soup and rice) twice a day, every day. This simple yet nourishing meal was not just food; it was a way of life, a connection to my family, my community, and my land. The aroma of dal cooking on the wood stove, the sound of rice grains being washed in a metal pot, and the taste of freshly prepared vegetables from our garden are all deeply ingrained in my sensory memory.
                </p>

                <p>
                  When I moved to the United States for my doctoral studies, I brought these palate memories with me. However, I quickly realized that recreating the exact flavors and textures of home was nearly impossible. The ingredients were different, the water tasted different, and even the rice didn't cook the same way. Despite these challenges, I continued to prepare dal bhat, as it provided me with a sense of comfort and connection to my homeland.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/palate_memories/palate_memories_1.jpg"
                    alt="Traditional Nepali meal"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>

                <p>
                  In El Paso, I have discovered a vibrant food culture that is both similar to and different from my own. The emphasis on family meals, the importance of fresh ingredients, and the central role of food in social gatherings are all familiar to me. However, the flavors, spices, and cooking techniques are distinctly different from what I grew up with. Tacos, enchiladas, and tamales have become part of my culinary repertoire, though dal bhat remains my comfort food.
                </p>

                <p>
                  One of the most profound lessons I have learned from living in El Paso is that food memories are not static. They evolve and adapt as we move through different spaces and encounter new culinary traditions. My palate memories from Nepal are now interwoven with memories from El Paso, creating a hybrid culinary identity that reflects my journey as an immigrant and a student.
                </p>

                <p>
                  In Dr. Abarca's class, I have been exposed to the concept of "food voices" – the idea that food can speak and tell stories about who we are, where we come from, and how we navigate the world. This concept has resonated deeply with me, as it captures the essence of what food means in my life. My food voice is multilingual, speaking in Nepali when I cook dal bhat and in Spanish when I order tacos at a local taqueria.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/palate_memories/palate_memories_2.jpg"
                    alt="Cooking scene"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>

                <p>
                  One of the stories that has stayed with me from the El Paso Food Voices podcast is the story of a woman who spoke about the role of food in maintaining family connections across borders. She described how cooking and sharing food allowed her to stay connected to her family in Mexico, even though she was living in El Paso. Her story reminded me of my own experience of cooking dal bhat as a way to stay connected to my family in Nepal. Despite the physical distance, food allows us to bridge the gap and maintain a sense of belonging.
                </p>

                <p>
                  Another important lesson I have learned is that palate memories are not just about taste; they are also about the emotions and experiences associated with food. When I eat dal bhat, I am not just tasting lentils and rice; I am tasting my childhood, my family's love, and the hard work of my parents who grew the rice and vegetables we ate. Similarly, when I eat tacos in El Paso, I am not just tasting meat and tortillas; I am tasting the warmth and hospitality of the community that has welcomed me.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/palate_memories/palate_memories_3.jpg"
                    alt="Market scene"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>

                <p>
                  As I continue my journey in El Paso, I am learning to embrace my hybrid culinary identity and appreciate the richness that comes from being exposed to multiple food cultures. I am also learning to see food as a form of communication and connection, a way to share my story and learn about the stories of others. Through food, I am able to navigate the complexities of being an immigrant and a student, finding comfort in the familiar while exploring the new.
                </p>

                <p>
                  In conclusion, my palate memories are a testament to the power of food to connect us to our past, ground us in our present, and guide us into our future. From the hills of Nepal to the streets of El Paso, food has been my constant companion, helping me navigate the challenges of migration and adaptation. I am grateful for the opportunity to share my food story and to learn from the food stories of others in this vibrant and diverse community.
                </p>

                <p className={styles.acknowledgment}>
                  <strong>Acknowledgment:</strong> I would like to thank Dr. Meredith Abarca for creating the El Paso Food Voices podcast and for teaching a class that has opened my eyes to the profound ways in which food shapes our identities and connects us to each other. I would also like to thank my family in Nepal for instilling in me a deep appreciation for food and for teaching me that every meal is an opportunity to create memories and strengthen bonds.
                </p>
              </div>

              <Link href="/epicureans" className={styles.backLink}>
                ← Back to Epicureans
              </Link>
            </div>
          </article>
        </main>
      </div>

      <ArticleCarousel currentSlug="palate-memories-nepal-to-el-paso" />

      <Footer />
    </>
  );
}
