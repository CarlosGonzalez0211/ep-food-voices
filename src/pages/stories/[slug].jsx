import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import stories from "@/data/stories.json";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function StoryDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const story = stories.find((s) => s.slug === slug);

  if (!story) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>{story.title}</title>
        <meta name="description" content={story.description} />
      </Head>

      <Header />

      <div className={styles.storyContainer}>
        <p className={styles.storyQuote}>{story.quote}</p>
        <p className={styles.storyAuthor}>{story.author}</p>
        <p className={styles.photoCredit}>{story.photoCourtesy}</p>

        <div className={styles.storyDescription}>
          <p>{story.description}</p>
        </div>

        {story.videos && story.videos.length > 0 && (
          <section className="videos-section">
            <h2>Videos</h2>
            {story.videos.map((video, index) => {
              // Handle both youtu.be and full watch?v= URLs
              let videoId = "";
              if (video.embedUrl.includes("youtu.be/")) {
                videoId = video.embedUrl.split("youtu.be/")[1];
              } else if (video.embedUrl.includes("watch?v=")) {
                videoId = video.embedUrl.split("watch?v=")[1];
              }

              return (
                <div key={index} className="video-wrapper">
                  <h3>{video.title}</h3>
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-frame"
                  />
                </div>
              );
            })}
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
      </div>

      <Footer />
    </>
  );
}
