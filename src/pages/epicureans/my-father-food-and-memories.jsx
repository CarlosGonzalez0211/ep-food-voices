import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/EpicureansPoetry.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleCarousel from "../../components/ArticleCarousel";

export default function MyFatherFoodAndMemories() {
  return (
    <>
      <Head>
        <title>My Father, Food and Memories (Poetry) - Epicureans</title>
        <meta
          name="description"
          content="Poetry by Areyda Madrid exploring the connections between food, family, and memory"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className={styles.page}>
        <main className={styles.main}>
          <article className={styles.article}>
            <div className={styles.content}>
              <Link href="/epicureans" className={styles.backLink}>
                ← Back to Epicureans
              </Link>

              <h1 className={styles.title}>
                My Father, Food and Memories
              </h1>
              <p className={styles.subtitle}>(Poetry)</p>

              <div className={styles.heroImageContainer}>
                <Image
                  src="/epicureans_images/my_father/my_father_cover.jpg"
                  alt="Father and daughter"
                  width={900}
                  height={600}
                  className={styles.heroContentImg}
                />
              </div>

              <p className={styles.author}>By Areyda Madrid</p>

              <div className={styles.imageContainer}>
                <Image
                  src="/epicureans_images/my_father/my_father_1.jpg"
                  alt="Cooking outdoors"
                  width={600}
                  height={400}
                  className={styles.contentImg}
                />
              </div>

              <div className={styles.poemSection}>
                <h2 className={styles.poemTitle}>Letters to the Universe</h2>

                <div className={styles.poem}>
                  <p className={styles.stanza}>
                    Dear papi,<br />
                    Is the food good wherever you are?<br />
                    Do they let you cook?<br />
                    When I get there some day,<br />
                    Will you be waiting with<br />
                    Tacos de barbacoa and<br />
                    Your salsa roja that I'll finally be able to eat?
                  </p>

                  <p className={styles.stanza}>
                    After I get there, will you let me make you<br />
                    A real feast? Not just spaghetti and all that<br />
                    But like the things we'd watch on PBS<br />
                    When you'd call me your "Chef Pepin" and<br />
                    Tell me I could do that too, and you wanted to try it.
                  </p>

                  <p className={styles.stanza}>
                    We can invite Grandma Cuca<br />
                    And you two can sit and talk—<br />
                    You can be her Pedrin again—<br />
                    While I make the meals and serve coffee<br />
                    And neither of you will have to worry<br />
                    If there isn't enough beans<br />
                    Or if we can afford meat<br />
                    Or that I'm making too many things<br />
                    Because we'll be able to eat it all.
                  </p>

                  <p className={styles.stanza}>
                    We will sit together and eat<br />
                    And laugh and talk<br />
                    And you will tell me my beans are perfect.<br />
                    You will look at your mother and say,<br />
                    "Mira mi Cucita, mírala.<br />
                    Es un chef, mi Cucita, y sus frijoles y arroz,<br />
                    Pues, ya se puede casar, jefa."
                  </p>

                  <p className={styles.stanza}>
                    Grandma Cuca will laugh at you,<br />
                    And turn to me and say I don't have to worry<br />
                    About those things, like finding a husband.<br />
                    A husband will find me—but you will tell her,<br />
                    That no, a husband won't find me, but a wife will.
                  </p>

                  <p className={styles.stanza}>
                    And I won't have to worry about a handful of beans<br />
                    At the bottom of a burlap sack;<br />
                    Or how I will feed three children on a custodian's wage,<br />
                    All on my own because my shiftless husband took off.
                  </p>

                  <p className={styles.stanza}>
                    She might not understand<br />
                    The whole "wife" thing (she was born at a time<br />
                    Where that was never spoken of or even a possibility)<br />
                    But she will be proud that<br />
                    Her mini-me will not have to worry<br />
                    About money, and food, and caring for children with no help.
                  </p>

                  <p className={styles.stanza}>
                    And maybe you two will be able to mend<br />
                    The bridges that were broken between you<br />
                    And you and I will be able<br />
                    To pick up the pieces that were broken<br />
                    Between us before you left<br />
                    For that place further<br />
                    Than a mortal hand can reach.
                  </p>

                  <p className={styles.stanza}>
                    Save me a seat at the table, daddy.<br />
                    And if you can,<br />
                    Please make me a bowl of frijoles charros,<br />
                    But with the Peyton weenies,<br />
                    Not the red Bar-S ones.<br />
                    I tell you, they taste better.
                  </p>

                  <p className={styles.signature}>
                    Love, Cucita/tu wao-wao/Areyda<br />
                    (May 12, 2023)
                  </p>
                </div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.imageContainer}>
                <Image
                  src="/epicureans_images/my_father/my_father_2.jpg"
                  alt="Cooking outdoors"
                  width={600}
                  height={400}
                  className={styles.contentImg}
                />
              </div>

              <div className={styles.poemSection}>
                <h2 className={styles.poemTitle}>Eat, Pray, Grieve</h2>

                <div className={styles.poem}>
                  <p className={styles.stanza}>
                    * Smith said<br />
                    for her daddy's<br />
                    hot water cornbread<br />
                    all you needed was<br />
                    two ingredients<br />
                    hot water<br />
                    and cornmeal.
                  </p>

                  <p className={styles.stanza}>
                    My daddy's recipe<br />
                    for salsa roja<br />
                    was not near so simple.<br />
                    Take a pot of water<br />
                    put it on the stove,<br />
                    but don't let it boil.<br />
                    Just let the flames get it<br />
                    past simmering<br />
                    just before it boils.
                  </p>

                  <p className={styles.stanza}>
                    Soak your chile de arbol in it,<br />
                    two big handfuls, maybe three<br />
                    while you chop up cilantro<br />
                    cebolla de rabo<br />
                    and get your<br />
                    garlic salt oregano comino<br />
                    ready to put in.
                  </p>

                  <p className={styles.stanza}>
                    Don't think about how much<br />
                    you miss your father<br />
                    while the muscle memory takes over<br />
                    as you cradle the salt in your hand<br />
                    like he taught you<br />
                    because he made you learn<br />
                    you can fit a whole tablespoon<br />
                    in your cupped palm<br />
                    and a teaspoon is a lot less<br />
                    then that.
                  </p>

                  <p className={styles.stanza}>
                    Add a can of whole peeled tomatoes.<br />
                    Never stewed because those are too sweet.<br />
                    Blend it all up and make sure<br />
                    you don't make too much of a mess<br />
                    because your mother hated seeing<br />
                    her pretty yellow white and beige tiles<br />
                    splattered with salsa<br />
                    even though she loves the result.
                  </p>

                  <p className={styles.stanza}>
                    Try a little with a spoon<br />
                    and gag and cough<br />
                    spluttering because<br />
                    you're your father's pocha daughter<br />
                    who can't even eat salsa<br />
                    or chilitos<br />
                    but you try to anyway<br />
                    because those are the ways you connected<br />
                    with a man who had closed himself off.
                  </p>

                  <p className={styles.stanza}>
                    He probably would've been proud at<br />
                    how it turned out<br />
                    laughing<br />
                    and breathing<br />
                    with a heart that still works.<br />
                    (March 2023)
                  </p>

                  <p className={styles.footnote}>
                    * Patricia Smith's "When the Burning Begins"
                  </p>
                </div>
              </div>

              <Link href="/epicureans" className={styles.backLink}>
                ← Back to Epicureans
              </Link>
            </div>
          </article>
        </main>
      </div>

      <ArticleCarousel currentSlug="my-father-food-and-memories" />

      <Footer />
    </>
  );
}
