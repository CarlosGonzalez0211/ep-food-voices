import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

import styles from "@/styles/Podcast.module.css";
import homeStyles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pagination from "@/components/Pagination";

import podcasts from "../data/podcasts.json";
import PodcastCard from "@/components/PodcastCard";

export default function Podcasts() {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsRef = useRef(null);

  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    podcast.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setSearchTerm(inputValue);
    setCurrentPage(1); // Reset to page 1 when searching
  };

  // Pagination logic
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredPodcasts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPodcasts = filteredPodcasts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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

      {/* Search Bar */}
      <div className={homeStyles.searchContainer}>
        <input
          type="text"
          placeholder="Search by title or author..."
          className={homeStyles.searchInput}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={homeStyles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Episode list (image left, details right) */}
      <section ref={cardsRef} className={styles.listContainer}>
        {Array.isArray(currentPodcasts) &&
          currentPodcasts.map((p) => <PodcastCard key={p.slug} podcast={p} />)}
      </section>

      {searchTerm.trim() && currentPodcasts.length === 0 && (
        <div className={homeStyles.emptyState}>
          <h4 className={homeStyles.emptyStateTitle}>No podcasts found</h4>
          <p className={homeStyles.emptyStateBody}>
            We couldn’t find any matches for{" "}
            <span className={homeStyles.emptyStateQuery}>
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

      {/* Footer */}
      <Footer />
    </>
  );
}
