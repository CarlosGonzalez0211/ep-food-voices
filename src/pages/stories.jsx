import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Link from "next/link";
import stories from "../data/stories.json";

export default function Stories() {
  return (
    <>
      <Head>
        <title>Stories</title>
        <meta name="description" content="All stories from El Paso Food Voices" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header import */}
      <Header />

      {/* Page Content */}
      <div className={styles.page}>
        <main className={styles.main}>
          {/* Hero Section */}
          <div className={styles.heroContainer}>
            <Image
              src="/about_images/about.jpg"
              alt="Background"
              className={styles.heroBg}
              width={1000}
              height={600}
            />
            <div className={styles.textOverlayMiddle}>
              <h2>Stories</h2>
            </div>
          </div>

          {/* Responsive Grid of Story Cards */}
          <div className={styles.storiesGrid}>
            {stories.map((story) => (
              <div key={story.slug} className={styles.storyCard}>
                <Image
                  src={story.image}
                  alt={`Image of ${story.author}`}
                  width={400}
                  height={250}
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h3>{story.title}</h3>
                  <p><strong>{story.author}</strong></p>
                  <Link href={`/stories/${story.slug}`}>
                    <span className={styles.cardLink}>Read More →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
