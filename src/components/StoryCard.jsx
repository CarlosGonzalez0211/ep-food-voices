import { Link } from "react-router-dom";

export default function StoryCard({ story }) {
  return (
    <div className="story-card">
      <img
        src={story.photo || "/stories_images/placeholder.jpg"}
        alt={`Photo of ${story.author}`}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/stories_images/placeholder.jpg";
        }}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <h3>{story.title}</h3>
      <p>By: {story.author}</p>
      <Link to={`/stories/${story.slug}`}>Read Story</Link>
    </div>
  );
}
