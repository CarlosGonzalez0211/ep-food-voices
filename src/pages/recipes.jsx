import Head from "next/head";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";

import styles from "@/styles/Recipe.module.css";
import recipes from "@/data/recipes.json";

export default function Recipes() {
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

          {/* Grid of Recipe Cards (3 per row on desktop) */}
          <section className={styles.grid}>
            {Array.isArray(recipes) &&
              recipes.map((r) => <RecipeCard key={r.slug} recipe={r} />)}
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
