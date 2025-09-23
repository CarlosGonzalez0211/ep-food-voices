import { Link } from "react-router-dom";

export default function StoryCard({ story }) {
  return (
    <div className="story-card">
      <img src={story.image} alt={`Photo of ${story.author}`} />
      <h3>{story.title}</h3>
      <p>By: {story.author}</p>
      <Link to={`/stories/${story.slug}`}>Read Story</Link>
    </div>
  );
}
