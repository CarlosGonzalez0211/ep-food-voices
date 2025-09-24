import { useRouter } from "next/router";
import stories from "../../data/stories.json";

export default function StoryPage() {
  const router = useRouter();
  const { slug } = router.query;

  const story = stories.find((s) => s.slug === slug);

  if (!story) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{story.title}</h1>
      <blockquote>{story.quote}</blockquote>
      <p><strong>By:</strong> {story.author}</p>
      <img src={story.photo} alt={story.author} style={{ maxWidth: "100%" }} />
      <p><em>Courtesy: {story.photoCourtesy}</em></p>
      <p>{story.description}</p>

      <h3>Videos</h3>
      <ul>
        {story.videos.map((v, i) => (
          <li key={i}>
            <p>{v.title}</p>
            <iframe
              width="560"
              height="315"
              src={v.embedUrl}
              title={v.title}
              frameBorder="0"
              allowFullScreen
            />
          </li>
        ))}
      </ul>

      {story.recipe && (
        <>
          <h3>Recipe</h3>
          <p>{story.recipe.title} by {story.recipe.author}</p>
          <img src={story.recipe.image} alt="Recipe" style={{ maxWidth: "100%" }} />
          <p>Type: {story.recipe.type}</p>
          <p>Serves: {story.recipe.serves}</p>
        </>
      )}

      <h3>Resources</h3>
      <ul>
        {story.resources.map((r, i) => (
          <li key={i}>
            {r.link ? (
              <a href={r.link} target="_blank" rel="noopener noreferrer">{r.title}</a>
            ) : (
              <span>{r.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
