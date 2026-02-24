import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import stories from "@/data/stories.json";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function StoryDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const story = stories.find((s) => s.slug === slug);

  if (!story) return <p>Loading...</p>;

  const currentIndex = stories.findIndex((s) => s.slug === story.slug);
  const prevStory = stories[(currentIndex - 1 + stories.length) % stories.length];
  const nextStory = stories[(currentIndex + 1) % stories.length];

  return (
    <>
      <Head>
        <title>{story.title}</title>
        <meta name="description" content={story.description} />
      </Head>

      <Header />

      <div className={styles.storyContainer}>
        {story.image && (
          <div className={styles.storyHeroImage}>
            <Image
              src={story.image}
              alt={story.title}
              width={1200}
              height={600}
              className={styles.heroImg}
            />
          </div>
        )}
        <p className={styles.storyQuote}>{story.quote}</p>
        <p className={styles.storyAuthor}>{story.author}</p>
        <p className={styles.photoCredit}>{story.photoCourtesy}</p>

        <div className={styles.storyDescription}>
          <p>{story.description}</p>
        </div>

        {story.videos && story.videos.length > 0 && (
          <section>
            <h2>Videos</h2>
            <div className={styles.videoCarousel}>
              {story.videos.map((video, index) => {
                const url = video.embedUrl || video.url || "";
                let videoId = "";
                if (url.includes("youtu.be/")) videoId = url.split("youtu.be/")[1];
                else if (url.includes("watch?v=")) videoId = url.split("watch?v=")[1];

                return (
                  <div key={index} className={styles.videoItem}>
                    <h3>{video.title}</h3>
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className={styles["video-frame"]}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {story.resources && story.resources.length > 0 && (
          <div className={styles.resourcesSection}>
            <h3>Resources</h3>
            <ul className={styles.resourceList}>
              {story.resources.map((res, index) => (
                <li key={index}>
                  {res.link ? (
                    <a href={res.link} target="_blank" rel="noopener noreferrer">
                      {res.title}
                    </a>
                  ) : (
                    res.title
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {story.recipes && story.recipes[0].title && (
          <div className={styles.recipeSection}>
            <h3>Recipe</h3>
            <div className={styles.recipeDetails}>
              {story.recipes[0].image && (
                <img
                  src={story.recipes[0].image}
                  alt="Recipe"
                  className={styles.recipeImage}
                />
              )}
              <div>
                <p><strong>Title:</strong> {story.recipes[0].title}</p>
                <p><strong>Author:</strong> {story.recipes[0].author}</p>
                <p><strong>Type:</strong> {story.recipes[0].type}</p>
                <p><strong>Serves:</strong> {story.recipes[0].servings}</p>
                <p><strong>Prep Time:</strong> {story.recipes[0].prepTime}</p>
                <p><strong>Cook Time:</strong> {story.recipes[0].cookTime}</p>
              </div>
            </div>
          </div>
        )}

        {/* Related stories carousel */}
        <section>
          <h3>Related Stories</h3>
          <div className={styles.relatedCarousel}>
            {stories
              .filter((s) => s.slug !== slug)
              .slice(0, 8)
              .map((s) => (
                <div key={s.slug} className={styles.relatedItem}>
                  <Link href={`/stories/${s.slug}`}>
                    <img src={s.image} alt={s.title} />
                    <p><strong>{s.title}</strong></p>
                  </Link>
                </div>
              ))}
          </div>
        </section>

        <section className={styles.storyPagerSection} aria-label="Previous and next stories">
          <div className={styles.storyPagerGrid}>
            <Link
              href={`/stories/${prevStory.slug}`}
              className={`${styles.storyPagerLink} ${styles.storyPagerPrev}`}
            >
              <span className={styles.storyPagerArrow} aria-hidden="true">
                &#8249;
              </span>
              <div className={styles.storyPagerCard}>
                {prevStory.image && (
                  <Image
                    src={prevStory.image}
                    alt={prevStory.title}
                    width={460}
                    height={280}
                    className={styles.storyPagerImage}
                  />
                )}
                <p className={styles.storyPagerCaption}>
                  {prevStory.quote || prevStory.title}
                </p>
              </div>
            </Link>

            <Link
              href={`/stories/${nextStory.slug}`}
              className={`${styles.storyPagerLink} ${styles.storyPagerNext}`}
            >
              <div className={styles.storyPagerCard}>
                {nextStory.image && (
                  <Image
                    src={nextStory.image}
                    alt={nextStory.title}
                    width={460}
                    height={280}
                    className={styles.storyPagerImage}
                  />
                )}
                <p className={styles.storyPagerCaption}>
                  {nextStory.quote || nextStory.title}
                </p>
              </div>
              <span className={styles.storyPagerArrow} aria-hidden="true">
                &#8250;
              </span>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
