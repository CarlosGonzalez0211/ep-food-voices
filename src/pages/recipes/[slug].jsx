import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Recipe.module.css";
import recipes from "@/data/recipes.json";

function extractYouTubeId(url = "") {
  if (!url) return "";
  try {
    // youtu.be/<id>
    if (url.includes("youtu.be/")) return url.split("youtu.be/")[1].split(/[?&]/)[0];
    // youtube.com/watch?v=<id>
    if (url.includes("watch?v=")) return url.split("watch?v=")[1].split("&")[0];
    // already /embed/<id>
    if (url.includes("/embed/")) return url.split("/embed/")[1].split(/[?&]/)[0];
  } catch {}
  return "";
}

export default function RecipeDetail({ recipe }) {
  if (!recipe) {
    return (
      <>
        <Header />
        <main className={styles.detailContainer}>
          <h1>Recipe not found</h1>
        </main>
        <Footer />
      </>
    );
  }

  // Back-compat: allow old single video fields OR the new "videos" array
  const videos = Array.isArray(recipe.videos) && recipe.videos.length
    ? recipe.videos
    : (recipe.videoUrl
        ? [{ title: recipe.videoTitle || "Video", embedUrl: recipe.videoUrl }]
        : []);

  return (
    <>
      <Head>
        <title>{recipe.title} — Recipes</title>
        <meta name="description" content={`${recipe.title} by ${recipe.author || ""}`} />
      </Head>

      <Header />

      <main className={styles.detailContainer}>
        <h1 className={styles.detailTitle}>{recipe.title}</h1>
        {recipe.author && <p className={styles.detailByline}>By {recipe.author}</p>}

        {/* HERO image from JSON "image" */}
        {recipe.image && (
          <figure className={styles.heroFigure}>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={1200}
              height={700}
              className={styles.heroImage}
              priority
            />
            {recipe.photoCredit && (
              <figcaption className={styles.photoCredit}>
                {recipe.photoCredit}
              </figcaption>
            )}
          </figure>
        )}

        {/* INGREDIENTS */}
        {(recipe.ingredientsTitle || recipe.ingredients?.length) && (
          <section className={styles.section}>
            {recipe.ingredientsTitle && <h2>{recipe.ingredientsTitle}</h2>}
            {recipe.ingredientsNote && <p className={styles.muted}>{recipe.ingredientsNote}</p>}
            {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 && (
              <ul className={styles.ingredientsList}>
                {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
          </section>
        )}

        {/* NOTE */}
        {(recipe.noteTitle || recipe.noteBody) && (
          <section className={styles.section}>
            {recipe.noteTitle && <h2>{recipe.noteTitle}</h2>}
            {recipe.noteBody && <p>{recipe.noteBody}</p>}
          </section>
        )}

        {/* VIDEOS (like your StoryDetail) */}
        {videos.length > 0 && (
          <section className={styles.section}>
            <h2>Videos</h2>
            <div className={styles.videoList}>
              {videos.map((v, idx) => {
                const id = extractYouTubeId(v.embedUrl);
                if (!id) return null;
                return (
                  <div key={idx} className={styles.videoWrapper}>
                    {v.title && <h3 className={styles.videoTitle}>{v.title}</h3>}
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      title={v.title || `Video ${idx + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className={styles.videoFrame}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* GALLERY (3/2/1 responsive) */}
        {Array.isArray(recipe.gallery) && recipe.gallery.length > 0 && (
          <section className={styles.section}>
            {recipe.galleryTitle && <h2>{recipe.galleryTitle}</h2>}
            <div className={styles.galleryGrid}>
              {recipe.gallery.map((img, i) => (
                <div key={i} className={styles.galleryItem}>
                  <Image
                    src={img.src}
                    alt={img.alt || `Gallery image ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.galleryImage}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: recipes.map((r) => ({ params: { slug: r.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const recipe = recipes.find((r) => r.slug === params.slug) || null;
  return { props: { recipe } };
}
