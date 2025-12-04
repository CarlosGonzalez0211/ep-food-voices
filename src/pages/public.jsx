import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Link from "next/link";
import stories from "../data/stories.json";

import { useState } from "react";

export default function PublicKitchen() {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  return (
    <>
      <Head>
        <title>Public Kitchen</title>
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
              src="/stories_images/private_background.jpg"
              alt="Background"
              className={styles.heroBg}
              width={1000}
              height={600}
            />

            {/* Middle Title */}
            <div className={styles.textOverlayMiddle}>
              <h2>Public Kitchen</h2>
            </div>
          </div>

          {/* Search Bar */}
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search by title or author..."
              className={styles.searchInput}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className={styles.searchButton} onClick={handleSearch}>
              Search
            </button>
          </div>

          {/* Responsive Grid of Story Cards */}
          <div className={styles.storiesGrid}>
            {filteredStories.map((story) => (
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
