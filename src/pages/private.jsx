import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";

import Link from "next/link";
import stories from "../data/stories.json";

import { useState, useRef } from "react";

export default function PrivateKitchen() {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsRef = useRef(null);

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setSearchTerm(inputValue);
    setCurrentPage(1); // Reset to page 1 when searching
  };

  // Pagination logic
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredStories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStories = filteredStories.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Head>
        <title>Private Kitchen</title>
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
              <h2>Private Kitchen</h2>
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
          <div ref={cardsRef} className={styles.storiesGrid}>
            {currentStories.map((story) => (
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

          {searchTerm.trim() && currentStories.length === 0 && (
            <div className={styles.emptyState}>
              <h4 className={styles.emptyStateTitle}>No stories found</h4>
              <p className={styles.emptyStateBody}>
                We couldn’t find any matches for{" "}
                <span className={styles.emptyStateQuery}>
                  {`"${searchTerm}"`}
                </span>
                . Try a different title or author.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
          </main>
        </div>
      <Footer />
    </>
  );
}
