import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Podcast.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import podcasts from "../data/podcasts.json";
import PodcastCard from "@/components/PodcastCard";

export default function Podcasts() {
  return (
    <>
      <Head>
        <title>Podcasts</title>
        <meta
          name="description"
          content="Listen to our podcast series featuring community voices, stories, and food culture."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.heroContainer}>
            <Image
              src="/podcast_images/podcasts_background.jpg"
              alt="Podcasts background"
              className={styles.heroBg}
              width={1600}
              height={900}
              priority
            />
            <div className={styles.textOverlayMiddle}>
              <h2>Podcasts</h2>
            </div>
          </div>
        </main>
      </div>
      <section className={styles.intro}>
        <p>
          El Paso Food Voices podcast provides a window into the extensive role
          food plays in people’s lives. Food embodies symbolic, metaphorical,
          and political cultural and social practices. This podcast series
          shows how food practices captures a city&apos;s history beyond
          borders. Both guest and host/ess are members of the El Paso
          community. Each host/hostess has developed the episode’s topic and
          written a short analysis based on the central theme discussed.
        </p>
      </section>

      {/* Episode list (image left, details right) */}
      <section className={styles.listContainer}>
        {Array.isArray(podcasts) &&
          podcasts.map((p) => <PodcastCard key={p.slug} podcast={p} />)}
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
