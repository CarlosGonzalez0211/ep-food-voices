import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";

import styles from "@/styles/Recipe.module.css";
import homeStyles from "@/styles/Home.module.css";
import recipes from "@/data/recipes.json";

export default function Recipes() {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setSearchTerm(inputValue);
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
          <section className={styles.grid}>
            {Array.isArray(filteredRecipes) &&
              filteredRecipes.map((r) => <RecipeCard key={r.slug} recipe={r} />)}
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
