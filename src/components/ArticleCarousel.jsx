import Link from "next/link";
import Image from "next/image";
import styles from "./ArticleCarousel.module.css";
import { epicureansArticles } from "../data/epicureansArticles";

export default function ArticleCarousel({ currentSlug }) {
  const currentIndex = epicureansArticles.findIndex(
    (article) => article.slug === currentSlug
  );

  const prevArticle =
    currentIndex > 0 ? epicureansArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < epicureansArticles.length - 1
      ? epicureansArticles[currentIndex + 1]
      : null;

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {prevArticle && (
          <Link
            href={`/epicureans/${prevArticle.slug}`}
            className={`${styles.carouselCard} ${styles.prevCard}`}
          >
            <div className={styles.arrowLeft}>‹</div>
            <div className={styles.cardContent}>
              <div className={styles.cardImage}>
                <Image
                  src={prevArticle.image}
                  alt={prevArticle.title}
                  width={300}
                  height={200}
                  className={styles.cardImg}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className={styles.cardTitle}>{prevArticle.title}</h3>
            </div>
          </Link>
        )}

        {!prevArticle && <div className={styles.placeholder}></div>}

        {nextArticle && (
          <Link
            href={`/epicureans/${nextArticle.slug}`}
            className={`${styles.carouselCard} ${styles.nextCard}`}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardImage}>
                <Image
                  src={nextArticle.image}
                  alt={nextArticle.title}
                  width={300}
                  height={200}
                  className={styles.cardImg}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className={styles.cardTitle}>{nextArticle.title}</h3>
            </div>
            <div className={styles.arrowRight}>›</div>
          </Link>
        )}

        {!nextArticle && <div className={styles.placeholder}></div>}
      </div>
    </div>
  );
}
