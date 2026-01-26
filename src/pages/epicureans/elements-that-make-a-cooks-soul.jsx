import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/EpicureansArticle.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleCarousel from "../../components/ArticleCarousel";

export default function ElementsThatMakeACooksSoul() {
  return (
    <>
      <Head>
        <title>The Elements that Make a Cook's Soul - Epicureans</title>
        <meta
          name="description"
          content="Exploring the spiritual connection between cooking and nature through Bhutanese traditions and Antonio Elias López's perspective"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className={styles.page}>
        <main className={styles.main}>
          <article className={styles.article}>
            <div className={styles.heroImage}>
              <Image
                src="/epicureans_images/cooks_soul/cooks_soul_cover.jpg"
                alt="The Elements that Make a Cook's Soul"
                width={1200}
                height={600}
                className={styles.heroImg}
                priority
              />
            </div>

            <div className={styles.content}>
              <Link href="/epicureans" className={styles.backLink}>
                ← Back to Epicureans
              </Link>

              <h1 className={styles.title}>
                The Elements that Make a Cook's Soul
              </h1>

              <p className={styles.author}>By Sangay Choden</p>

              <div className={styles.body}>
                <p>
                  Beyond gastronomic purpose, food offers a unique introspection on how human beings builds a spiritual connection with the elements of nature such as fire, water, earth, and wind including time. The act of cooking goes beyond the act of simply preparing the food or cleaning the kitchen; it rather considers cooking as art from an ecological perspective. When I first thought of applying to UTEP for my master's studies, I came across Dr. Abarca and her work <em>Voices in the Kitchen</em>. As I did my undergraduate paper on gender and feminist studies, I found her work really unique for no one could have imagined building an identity in the simplest and the most basic space like a kitchen.
                </p>

                <p>
                  For one of Dr. Abraca's graduate classes, we analyze Antonio Elias López' "The Spirit of a Cook," a short video where he talks about becoming a cook. (This video is archived in the section Public Kitchens of El Paso Food Voices' website{" "}
                  <a href="https://volt.utep.edu/epfoodvoices/story/3" target="_blank" rel="noopener noreferrer">
                    https://volt.utep.edu/epfoodvoices/story/3
                  </a>{" "}
                  ). Antonio recollects his cooking memories during the weekends at Marsha Gomez's place where he used "indigenous methods" to prepare vegetarian foods for the clients. He describes his experience of food service as getting to work in a "beautiful space" that instantly built a connection with the land and the gardens that he worked for. His whole experience of "cooking with consciousness" appears like a meditative process by being aware of the surrounding environment and relating it with the cycle of life fundamentally changing the process of cooking.
                </p>

                <p>
                  Antonio's perspective reminded me of various food practices in Bhutan such as the ritual of offering, dinning etiquettes and the relationship of food with the natural environment. The tradition of food offering is firmly embedded in Bhutanese tradition, considered an act of accumulating merits by habituating one's act of giving. In order to appease the deities, Bhutanese people display various types of food on the altar for prosperity and protection during the annual rituals called "Choku". Even in everyday life, before every meal people make offering by placing a small portion of food in front of the shrine and chant verses for the offering of food. The word of offering help remind to be mindful of the food one is consuming, which should not be obtained through non virtuous deeds such as deceit or trickery (Phuntsho).
                </p>

                <p>
                  The manner of eating in Bhutan is considered with utmost importance. Generally, the family members typically sit cross-legged on the floor to dine. Food in Bhutan is eaten with the hand; although, this tradition has changed over the years by replacing the use of the hand with a spoon and fork. For me, using my hand awakens a sense of rediscovering my true self as the food directly connects with my body, which is also an integral aspect of establishing kinship with my own roots. My roots also connect me with deeply held views of showing respect for food an for those who grow it. Growing up in a Bhutanese traditional household, my grandmother would not let even a grain of rice drop on the floor as this action is seen as an offense to the art-form of eating: showing gratitude to cooks and, not to mention, the farmers for making the ingredients available through hard labor. Likewise, parents and elders advise not to spill or let food overflow in the oven (whether it is a traditional or modern oven). It is believed that the unpleasant smell from the food burn affects the elements of nature around the cooking area.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/cooks_soul/cooks_soul_1.jpg"
                    alt="Bhutanese landscape"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>

                <p>
                  These Bhutanese traditions presents commonalities with Antonio's perspective of being a cook connected to the elements of nature. Antonio not only portrays the elements of nature as an integral part of the process of cooking but also turns nature into culture. The widespread Bhutanese belief surrounding the environment as an abode of spiritual deities closely ties with Antonio's deep understanding and respect for nature as he cooks. It reminds me of parents in Bhutan instructing their children to lower their voices while visiting sacred or holy places or hiking up the mountains as obnoxious noises would disturb the sanctity of the place. Some mountains in Bhutan are believed to be the abode of the local guardians (that is, proactive deity of that area and its vicinity).
                </p>

                <p>
                  Antonio describes the entire experience as an opportunity to coexist with the elements of nature through his work, taking into consideration the physical labor required for food service. He acknowledges these elements as his spiritual guide to push him to become a person who finds joy in the simplest and daily act of cooking. Indeed, cooking is an ode to elements of nature as it reminds a sense of human's tendency to underestimate how entirely we are dependent on nature even as we cook, sit and stand.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/cooks_soul/cooks_soul_2.jpg"
                    alt="Food offering in Lunana during Choesung (community ritual)"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                  <p className={styles.imageCaption}>
                    (Food offering in Lunana during Choesung (community ritual). Photograph: yeegateawaybhutan)
                  </p>
                </div>

                <div className={styles.worksSection}>
                  <h3>Works Cited</h3>
                  <p>
                    Parker, Robert Dale. <em>How to Interpret Literature: Critical Theory for Literary and Cultural Studies</em>. Oxford University Press, 2020.
                  </p>
                  <p>
                    Karma Phuntsho. "Mandala Collections Texts." <em>Texts</em>,{" "}
                    <a href="https://texts.mandala.library.virginia.edu/text/tomjathuk-ch%C3%B6-offering-food" target="_blank" rel="noopener noreferrer">
                      https://texts.mandala.library.virginia.edu/text/tomjathuk-ch%C3%B6-offering-food
                    </a>.
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

      <ArticleCarousel currentSlug="elements-that-make-a-cooks-soul" />

      <Footer />
    </>
  );
}
