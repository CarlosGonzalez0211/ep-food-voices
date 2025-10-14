import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Recipe.module.css";

export default function RecipeCard({ recipe }) {
  if (!recipe) return null;

  return (
    <article className={styles.card}>
      {/* Image */}
      <div className={styles.imageWrap}>
        <Image
          src={recipe.image}                 // e.g. "/recipe_images/cream-puffs.jpg"
          alt={recipe.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.imageEl}
          priority={false}
        />
      </div>

      {/* Linked title */}
      <h3 className={styles.title}>
        <Link href={`/recipes/${recipe.slug}`} className={styles.titleLink}>
          {recipe.title}
        </Link>
      </h3>

      {/* Author */}
      {recipe.author && (
        <p className={styles.byline}><em>by {recipe.author}</em></p>
      )}

      {/* Meta */}
      <ul className={styles.metaList}>
        {recipe.type &&   <li><strong>Type:</strong> {recipe.type}</li>}
        {recipe.serves && <li><strong>Serves:</strong> {recipe.serves}</li>}
        {recipe.prepTime && <li><strong>Prep Time:</strong> {recipe.prepTime}</li>}
        {recipe.cookTime && <li><strong>Cook Time:</strong> {recipe.cookTime}</li>}
      </ul>
    </article>
  );
}
