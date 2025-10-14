import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Podcast.module.css";

export default function PodcastCard({ podcast }) {
  if (!podcast) return null;

  return (
    <article className={styles.podcastRow}>
      {/* Left: image + caption */}
      <div className={styles.imageSide}>
        <div className={styles.imageWrap}>
          <Image
            src={podcast.image}
            alt={podcast.author || podcast.title}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className={styles.imageEl}
            priority={false}
          />
        </div>
        {podcast.photoCourtesy && (
          <p className={styles.caption}>{podcast.photoCourtesy}</p>
        )}
      </div>

      {/* Right: details */}
      <div className={styles.detailSide}>
        <h2 className={styles.title}>{podcast.title}</h2>

        {podcast.quote && (
          <blockquote className={styles.quote}>
            <em>“{podcast.quote}”</em>
          </blockquote>
        )}

        <div className={styles.meta}>
          {podcast.author && (
            <span>
              <strong>Guest:</strong> {podcast.author}
            </span>
          )}
          {podcast.host && (
            <span>
              <strong>Host/ess:</strong> {podcast.host}
            </span>
          )}
        </div>

        {Array.isArray(podcast.links) && podcast.links.length > 0 && (
          <ul className={styles.linksList}>
            {podcast.links.map((link, i) => (
              <li key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
