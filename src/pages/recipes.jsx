import Head from "next/head";
import Image from "next/image";
import { useState, useRef } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import Pagination from "@/components/Pagination";

import styles from "@/styles/Recipe.module.css";
import homeStyles from "@/styles/Home.module.css";
import recipes from "@/data/recipes.json";

export default function Recipes() {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsRef = useRef(null);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setSearchTerm(inputValue);
    setCurrentPage(1); // Reset to page 1 when searching
  };

  // Pagination logic
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRecipes = filteredRecipes.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Community recipes and cooking demos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Hero */}
          <div className={styles.heroContainer}>
            <Image
              src="/recipes_images/recipes_background.jpg" // keep your path or change to /recipe_images
              alt="Recipes background"
              className={styles.heroBg}
              width={1600}
              height={900}
              priority={false}
            />
            <div className={styles.textOverlayMiddle}>
              <h2>Recipes</h2>
            </div>
          </div>

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

          {/* Grid of Recipe Cards (3 per row on desktop) */}
          <section ref={cardsRef} className={styles.grid}>
            {Array.isArray(currentRecipes) &&
              currentRecipes.map((r) => <RecipeCard key={r.slug} recipe={r} />)}
          </section>

          {searchTerm.trim() && currentRecipes.length === 0 && (
            <div className={homeStyles.emptyState}>
              <h4 className={homeStyles.emptyStateTitle}>No recipes found</h4>
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
        </main>
      </div>

      <Footer />
    </>
  );
}
