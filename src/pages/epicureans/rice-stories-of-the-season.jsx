import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/EpicureansArticle.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleCarousel from "../../components/ArticleCarousel";

export default function RiceStoriesOfTheSeason() {
  return (
    <>
      <Head>
        <title>Rice: The Stories of the Season - Epicureans</title>
        <meta
          name="description"
          content="A narrative exploring rice cultivation, memory, and family stories by Gabriel Arellano"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className={styles.page}>
        <main className={styles.main}>
          <article className={styles.article}>
            <div className={styles.heroImage}>
              <Image
                src="/epicureans_images/rice_stories/rice_stories_cover.jpg"
                alt="Rice: The Stories of the Season"
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
                Rice: The Stories of the Season
              </h1>

              <p className={styles.author}>By Gabriel Arellano</p>
              <p className={styles.date}>(November 16, 2023)</p>

              <div className={styles.body}>
                <p>
                  Rice is a staple in many cultures, including my own. Growing up, rice was always present at the dinner table, whether it was a simple side dish or the main course. The smell of rice cooking in the kitchen is a memory that I hold dear, as it reminds me of my childhood and the time I spent with my family. However, it wasn't until I took Dr. Abarca's class on food narratives that I began to understand the significance of rice in my life and the lives of my ancestors.
                </p>

                <p>
                  In her podcast, Dr. Abarca interviews individuals who share their food stories and the role that food plays in their lives. One of the stories that resonated with me was the story of a woman who shared her experience of growing up in a rice-farming family in the Philippines. She spoke about the hard work that went into cultivating rice and the importance of the harvest season. Her story reminded me of my own family's history of farming and the stories that my grandparents used to tell me about their childhood.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/rice_stories/rice_stories_1.jpg"
                    alt="Rice fields"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>

                <p>
                  My grandparents grew up in Mexico, where they worked on farms and helped their families cultivate crops. My grandfather used to tell me stories about how he would wake up before sunrise to tend to the fields and how the entire family would come together during the harvest season to gather the crops. He spoke about the sense of community that existed during this time and how everyone would help each other out. These stories made me realize that rice was not just a food item, but a symbol of hard work, community, and family.
                </p>

                <p>
                  As I grew older, I began to appreciate rice even more. I learned about the different types of rice and the various ways it could be prepared. I also learned about the cultural significance of rice in different parts of the world. For example, in Japan, rice is considered sacred and is used in religious ceremonies. In India, rice is often served during weddings and other celebrations. In my own culture, rice is a staple at every meal and is often served with beans, meat, and vegetables.
                </p>

                <p>
                  One of my favorite memories involving rice is when my grandmother taught me how to make arroz con leche, a traditional Mexican dessert made with rice, milk, and cinnamon. She showed me how to cook the rice until it was soft and creamy, and then how to add the milk and sugar to create a sweet and comforting dessert. As we cooked together, she told me stories about her own grandmother and the recipes that had been passed down through generations. This experience made me realize that rice was not just a food item, but a way to connect with my ancestors and preserve their stories.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/rice_stories/rice_stories_2.jpg"
                    alt="Arroz con leche"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>

                <p>
                  Today, rice continues to play an important role in my life. Whenever I cook rice, I am reminded of my family and the stories they shared with me. I am also reminded of the hard work that goes into cultivating rice and the importance of the harvest season. Rice has taught me to appreciate the simple things in life and to value the stories and traditions that have been passed down through generations.
                </p>

                <p>
                  In conclusion, rice is more than just a food item. It is a symbol of hard work, community, and family. It is a way to connect with our ancestors and preserve their stories. Through Dr. Abarca's podcast and the stories shared in her class, I have come to appreciate rice even more and understand the significance it holds in my life and the lives of many others. I encourage everyone to take the time to learn about the food they eat and the stories behind it. You may be surprised at what you discover.
                </p>
              </div>

              <Link href="/epicureans" className={styles.backLink}>
                ← Back to Epicureans
              </Link>
            </div>
          </article>
        </main>
      </div>

      <ArticleCarousel currentSlug="rice-stories-of-the-season" />

      <Footer />
    </>
  );
}
