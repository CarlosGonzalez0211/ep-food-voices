import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import styles from "@/styles/Epicureans.module.css";
import homeStyles from "@/styles/Home.module.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";

export default function Epicureans() {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsRef = useRef(null);

  // Array of all blog posts
  const blogPosts = [
    {
      slug: "los-angeles-abuela-project",
      image: "/epicureans_images/los_angeles/los_angeles_cover.jpg",
      title: "El Paso Food Voices Inspires Los Angeles Abuela Project",
      author: "Sarah Portnoy",
    },
    {
      slug: "my-father-food-and-memories",
      image: "/epicureans_images/my_father/my_father_cover.jpg",
      title: "My Father, Food and Memories",
      author: "Areyda Madrid",
    },
    {
      slug: "life-on-ranch-terrenates",
      image: "/epicureans_images/life_ranch/life_ranch_cover.jpg",
      title: "Life on Ranch Terrenates, the Story of an Immigrant",
      author: "Ana Berry",
    },
    {
      slug: "elements-that-make-a-cooks-soul",
      image: "/epicureans_images/cooks_soul/cooks_soul_cover.jpg",
      title: "The Elements that Make a Cook's Soul",
      author: "Sangay Choden",
    },
    {
      slug: "my-inner-child-conscious-eating",
      image: "/epicureans_images/inner_child/inner_child_cover.jpg",
      title: "My Inner Child and Finding Purpose in Conscious Eating",
      author: "Priya Anderson",
    },
    {
      slug: "acknowledge-the-gordita",
      image: "/epicureans_images/gordita/gordita_cover.jpeg",
      title: "We Need to Acknowledge the Gordita!",
      author: "Tomas Maldonado",
    },
    {
      slug: "reflections-culinary-subjectivities",
      image: "/epicureans_images/reflections_culinary/reflections_culinary_cover.jpg",
      title: "Reflections on My Culinary Subjectivities",
      author: "Purna Chandra Bhusal",
    },
    {
      slug: "shaking-up-christmas-canon",
      image: "/epicureans_images/shaking_up/shaking_up_cover.jpg",
      title: "Shaking Up the Christmas Canon",
      author: "Anthony J. Diaz",
    },
    {
      slug: "rice-stories-of-the-season",
      image: "/epicureans_images/rice_stories/rice_stories_cover.jpg",
      title: "Rice: The Stories of the Season",
      author: "Gabriel Arellano",
    },
    {
      slug: "the-process-of-identity",
      image: "/epicureans_images/pocess_identity/process_identity_cover.jpeg",
      title: "The Process of Identity",
      author: "Antonio Valerio Muñoz",
    },
    {
      slug: "palate-memories-nepal-to-el-paso",
      image: "/epicureans_images/palate_memories/palate_memories_cover.jpg",
      title: "Changes for tests",
      author: "Purna Chandra Bhusal",
    },
  ];

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (post.author || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setSearchTerm(inputValue);
    setCurrentPage(1); // Reset to page 1 when searching
  };

  // Pagination logic
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Head>
        <title>Epicureans</title>
        <meta
          name="description"
          content="Epicurus, Epicureanism, and the Epicureans — EPFV’s blog series."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      {/* Hero */}
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.heroContainer}>
            <Image
              src="/home_images/epfv_home_img.jpg"
              alt="Epicureans background"
              className={styles.heroBg}
              width={1600}
              height={600}
              priority
            />

            {/* EPFV logo (same placement as index) */}
            <Image
              src="/home_images/epfv-white-logo.png"
              alt="El Paso Food Voices"
              className={styles.heroOverlay}
              width={800}
              height={200}
              priority
            />

            {/* Overlay: Φ + title + definitions */}
            <div className={styles.epiOverlay}>
              <div className={styles.epiGroup}>
                <div className={styles.epiPhi}>Φ</div>

                <div className={styles.epiContent}>
                  <h1 className={styles.epiTitle}>Epicureans</h1>
                  <p className={styles.epiLine}>
                    <strong>Epicurus:</strong> The “belly-centered” ancient Greek philosopher.
                  </p>
                  <p className={styles.epiLine}>
                    <strong>Epicureanism:</strong> “The beginning and the root to all good is the
                    pleasure of the stomach; even wisdom and culture must be referred to this.”
                  </p>
                  <p className={styles.epiLine}>
                    <strong>Epicureans:</strong> Disciples of Epicurus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Intro section below the hero */}
      <section className={styles.introSection}>
        <h3 className={styles.introHeading}>Epicureans is EPFV’s blog series.</h3>

        <p className={styles.introQuote}>
          “For Epicurus, attitudes toward food are a source of wisdom. Through observing the
          essential role that meals play in both the sustenance of human life and activity of social
          culture, Epicurus thought about the lessons to be gleaned from eating.”
          <sup>*</sup>
        </p>

        <p>
          In the tradition of the belly-centered philosopher, Epicurus, this blog series is a space
          to share, respond to, and reflect upon issues and topics visitors to El Paso Food Voices
          have gleaned from these stories.
        </p>

        <p>
          We welcome vignettes, poems, artwork, and essays that blend together literary journalism
          with cultural and historical analysis that gather their inspiration from a featured story
          within El Paso Food Voices. Submissions should be 600–1200 words and include 2–4
          photographs (if applicable).
        </p>

        <div className={styles.introContact}>
          <p><strong>For questions, guidelines, and submissions contact:</strong></p>
          <p>
            Meredith E. Abarca, Editor,{" "}
            <a href="mailto:mabarca@utep.edu">Mabarca@utep.edu</a>
            <br />
            Joshua I. Lopez, Co-Editor,{" "}
            <a href="mailto:JoshuaLopez4@my.unt.edu">JoshuaLopez4@my.unt.edu</a>
          </p>
        </div>

        <p className={styles.footnote}>
          * Worth, Sarah and David, Ben. “Epicurus, Pleasure, and the Twenty–First–Century Diet.”
          <em> The Journal of Aesthetic Education</em>, Vol. 55, No. 3 (Fall 2021): 59–70.
        </p>
      </section>

      {/* Search Bar */}
      <div className={homeStyles.searchContainer}>
        <input
          type="text"
          placeholder="Search by title or author..."
          className={homeStyles.searchInput}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={homeStyles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Featured Card Section */}
      <section ref={cardsRef} className={styles.featuredSection}>
        {currentPosts.map((post) => (
          <Link key={post.slug} href={`/epicureans/${post.slug}`} className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={450}
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>
                  {post.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {searchTerm.trim() && currentPosts.length === 0 && (
        <div className={homeStyles.emptyState}>
          <h4 className={homeStyles.emptyStateTitle}>No Epicureans posts found</h4>
          <p className={homeStyles.emptyStateBody}>
            We couldn’t find any matches for{" "}
            <span className={homeStyles.emptyStateQuery}>
              {`"${searchTerm}"`}
            </span>
            . Try a different title or author.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      <Footer />
    </>
  );
}
