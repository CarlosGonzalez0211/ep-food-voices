import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/EpicureansArticle.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleCarousel from "../../components/ArticleCarousel";

export default function TheProcessOfIdentity() {
  return (
    <>
      <Head>
        <title>The Process of Identity - Epicureans</title>
        <meta
          name="description"
          content="Exploring the intersection of food, identity, and migration by Antonio Valerio Muñoz"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className={styles.page}>
        <main className={styles.main}>
          <article className={styles.article}>
            <div className={styles.heroImage}>
              <Image
                src="/epicureans_images/pocess_identity/process_identity_cover.jpeg"
                alt="The Process of Identity"
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
                The Process of Identity
              </h1>

              <p className={styles.author}>By Antonio Valerio Muñoz</p>
              <p className={styles.date}>(October 30, 2023)</p>

              <div className={styles.body}>
                <p>
                  Identity is a complex and multifaceted concept that is shaped by various factors, including culture, language, and food. For immigrants and their descendants, the process of forming an identity can be particularly challenging, as they navigate between different cultures and try to find their place in a new society. Food plays a crucial role in this process, as it serves as a link to one's heritage and a way to express one's identity.
                </p>

                <p>
                  Growing up as a Mexican American in El Paso, Texas, I have always been aware of the duality of my identity. On one hand, I am American, born and raised in the United States. On the other hand, I am Mexican, with deep roots in a culture that values family, tradition, and food. This duality has shaped my identity and influenced the way I see myself and the world around me.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/pocess_identity/process_identity_1.jpeg"
                    alt="Border crossing"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>

                <p>
                  Food has always been a central part of my life and my identity. Growing up, my family would gather around the dinner table to share meals and stories. My grandmother would prepare traditional Mexican dishes, such as mole, pozole, and tamales, using recipes that had been passed down through generations. These meals were not just about nourishment; they were about connection, memory, and identity. Through food, I learned about my heritage and the experiences of my ancestors.
                </p>

                <p>
                  However, as I grew older and began to explore my identity more deeply, I realized that food could also be a source of conflict and confusion. In school, I was often made to feel ashamed of the food I brought for lunch. While my classmates ate sandwiches and chips, I would bring tacos or burritos wrapped in aluminum foil. I remember feeling embarrassed and wishing that I could be like everyone else. This experience taught me that food is not just about taste; it is also about belonging and acceptance.
                </p>

                <p>
                  As I navigated between two cultures, I began to understand that identity is not fixed or static. It is a process, constantly evolving and changing. My identity as a Mexican American is not about choosing one culture over the other; it is about embracing both and finding a balance between them. Food has been a powerful tool in this process, allowing me to connect with my heritage while also exploring new culinary traditions.
                </p>

                <p>
                  In Dr. Abarca's class, I have learned about the concept of "culinary citizenship," which refers to the ways in which food can be used to assert one's identity and claim a place in society. For immigrants and their descendants, food can be a form of resistance against assimilation and a way to maintain a connection to their homeland. By cooking and eating traditional foods, they are not only preserving their cultural heritage but also asserting their right to exist and be recognized in a new society.
                </p>

                <p>
                  This concept resonates deeply with me, as I have experienced firsthand the power of food to shape identity and create a sense of belonging. Through food, I have been able to connect with my Mexican heritage and claim my place as a Mexican American. I have also learned to appreciate the diversity of culinary traditions and the ways in which food can bring people together.
                </p>

                <p>
                  One of the most powerful lessons I have learned from Dr. Abarca's class is that food stories are not just about food; they are about people, their experiences, and their struggles. Each food story is unique and reflects the individual's journey of identity formation. By sharing these stories, we can learn from each other and develop a deeper understanding of the complex ways in which food shapes our identities.
                </p>

                <p>
                  In conclusion, the process of identity formation is ongoing and complex, particularly for immigrants and their descendants. Food plays a crucial role in this process, serving as a link to one's heritage and a way to assert one's identity. Through food, we can connect with our past, navigate our present, and shape our future. As I continue to explore my identity as a Mexican American, I am grateful for the role that food has played in this journey and the lessons I have learned from the food stories shared in Dr. Abarca's class.
                </p>
              </div>

              <Link href="/epicureans" className={styles.backLink}>
                ← Back to Epicureans
              </Link>
            </div>
          </article>
        </main>
      </div>

      <ArticleCarousel currentSlug="the-process-of-identity" />

      <Footer />
    </>
  );
}
