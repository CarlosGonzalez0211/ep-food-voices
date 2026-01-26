import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/EpicureansArticle.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleCarousel from "../../components/ArticleCarousel";

export default function MyInnerChildConsciousEating() {
  return (
    <>
      <Head>
        <title>My Inner Child and Finding Purpose in Conscious Eating - Epicureans</title>
        <meta
          name="description"
          content="A journey through veganism, childhood memories, and conscious eating by Priya Anderson"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className={styles.page}>
        <main className={styles.main}>
          <article className={styles.article}>
            <div className={styles.heroImage}>
              <Image
                src="/epicureans_images/inner_child/inner_child_cover.jpg"
                alt="My Inner Child and Finding Purpose in Conscious Eating"
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
                My Inner Child and Finding Purpose in Conscious Eating
              </h1>

              <p className={styles.author}>By Priya Anderson</p>

              <div className={styles.body}>
                <h2>"The Little Girl Who Asked Why"</h2>

                <div className={styles.poemSection}>
                  <p>
                    What happened to the little girl<br />
                    Who spoke to trees on nature walks,<br />
                    Picking flowers in the middle of soccer games,<br />
                    Like Ferdinand the Bull?
                  </p>

                  <p>
                    The girl who immersed herself in pictures,<br />
                    Published in Wildlife Fact Files:<br />
                    Bengal Tiger, "exquisite grace and power,"<br />
                    Warthog, "unsightly appearance,"<br />
                    Honey Possum, "size of a mouse."
                  </p>

                  <p>
                    One day, following twenty-one birthdays,<br />
                    Getting lost on a path she sauntered many times,<br />
                    After silencing the excuses that<br />
                    Society brashly reminded her of daily:<br />
                    Too busy! Too poor! Too tasty! Too challenging!<br />
                    She sat down on a rock, dipped her toes in a stream,<br />
                    Observing blue jays, redbirds, and bluebonnets,<br />
                    Asked a question the little girl eagerly answered,<br />
                    "What gives you the right to cause suffering?"
                  </p>

                  <p>
                    Her actions align with her values.<br />
                    She harnesses the Bengal Tiger's power,<br />
                    Never wavering on animals' rights and their autonomy,<br />
                    Her words will take the shape of a Warthog,<br />
                    Because being bred to suffer a lifetime is never pretty.<br />
                    She ponders on the Honey Possum,<br />
                    No matter the size, every creature deserves compassion.
                  </p>

                  <p>
                    What became of her soul,<br />
                    When she grew up and awaken
                  </p>
                </div>

                <h2>Mom and Dad</h2>

                <h3>Spice, Spirit, and End Speciesism</h3>

                <p>
                  My childhood was influenced by my Jewish upbringing, a tender loving grandma, a father who picked up his pieces, and a fierce mother who I often imagine as a fire-breathing dragon atop mountains, watercolor painted and hung in a museum. We moved around a lot but eventually settled in a small town just outside of Austin, Texas. Cows grazed in our backyard, and my younger brother and I spent most of our free time playing computer games and exploring parks and underdeveloped land.
                </p>

                <p>
                  My grandma's home was conveniently located down the street, and I eagerly spent almost every weekend there. Her blueberry and chocolate chip pancakes and perfectly crispy bean and cheese burritos were unrivaled. On most birthdays at her house, we feasted on bagels and locks, while Rosh Hashana featured her famous brisket and mashed potatoes, and on Hanukkah, we celebrated with latkes. My grandma's cooking was simple, but I relished every bite. She wasn't afraid to use sugar and butter and treat her grandchildren to the occasional greasy Sonic meal.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/inner_child/inner_child_1.jpg"
                    alt="Grandma reciting a Passover prayer"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                  <p className={styles.imageCaption}>Grandma reciting a Passover prayer</p>
                </div>

                <p>
                  At home, we ate markedly healthier. Ezekiel or rice cracker PB & J's, unsweetened almond milk, and "eat-your-vegetables-before-you-leave-this-table" kind of healthy. Whole milk was not a household staple, especially after my parents watched the documentary Meat Your Meat, which exposed the harsh realities of factory farming. I will never forget my mom's declaration, "Cow's milk is nothing but pus and blood." As a young girl, I didn't appreciate the graphic description, but it didn't stop me from loving the chocolate or strawberry milk my grandma would buy me before school.
                </p>

                <p>
                  Why don't I recall my parents discussing their concerns or feelings about the atrocities they witnessed in Meat Your Meat? As a Jewish woman in a small town, my mom was hesitant to hang our Mezuzah, while my dad was regularly subjected to racial profiling. How could they dismiss the poor animals as merely "pus and blood" when they too faced discrimination? Within our economic circumstances, money was tight. My mom had a demanding job as a designer, which left my dad in charge of cooking his staple dinner, barbecue chicken with sides of Annie's Mac and Cheese and steamed broccoli. However, when my mom changed careers to teaching, she was home often, and our meals became more diverse and flavorful, reflecting her artistic nature and global appetite. As we grew up, my parents had fewer financial burdens and stresses, which ultimately led to more open and developed conversations about conscious eating. I am proud to say my mother has been plant-based for the past two years. The constructs that society forms around us can make it challenging to move away from passed-down habits and beliefs. But, with an open mind and willingness to embrace change, we can make conscious choices that benefit animals, humans, and our shared planet.
                </p>

                <p>
                  I have been vegan for over five years and intend to stay vegan for life. Moreover, veganism is a practice that denounces all forms of animal exploitation. I didn't need to be convinced through factory farming documentaries to go vegan- it was something I felt in my spiritual sense of self and it's a force I've always known. Innately, we all are innocent, receptive, and compassionate as children. If we explained to kids that Peppa Pig was the bacon on their breakfast plates, they would feel betrayed. Many of us have grown up with the disconnection between the animals we love and the animals we eat.
                </p>

                <p>
                  I was an on-and-off vegetarian as a teenager, but as a young adult, I revolted. When I moved out of my parent's house, I filled the void created by my mom's healthy lessons, with junk food and soda. My body and health eventually faced repercussions. That was another reason to embrace veganism- for my well-being and teachings of balance. I make and consume nutritiously dense meals, but I also indulge in my favorite treats, like a box of macarons or a handful of Justin's Peanut Butter Cups. I believe that food balance is essential in a healthy diet. Sometimes we get too caught up in the façade of "clean" or super-healthy eating, and veganism isn't about feeling guilty or deprived.
                </p>

                <p>
                  At the beginning of my transition, the thought of going vegan was unsettling. I had a deep love for cheese and couldn't cook. Surprisingly, adjusting was easier than my mind made it up to be, and my cheese cravings disappeared within a few months. The availability of vegan cultured cheese options at grocery stores and restaurants also made the transition even smoother. Reeducating my taste buds was the simplest part of the process, but learning to cook was a challenge. In establishing a cooking foundation, I've learned that meat is simply a medium for the flavors you add, and that flavor profiles can be achieved using other ingredients like tofu, seitan, tempeh, Beyond or Impossible Meat. Over time, I've grown my spice pantry and have become somewhat skilled at creating quick, flavorful, and healthy meals and desserts. I haven't had to give up my favorite dishes, and in fact, going vegan has expanded my palate. I now enjoy Mexican and Ethiopian cuisine, which I disliked growing up.
                </p>

                <p>
                  Every day I connect to my food which connects me to the world I inhabit. Veganism has guided me to my inner child, has taught me about compassion and mindfulness, and gives me a sense of purpose in my choices. Every day I am grateful for the sensitivity and creativity veganism allows me to express. We all have a choice to reject the devastating impact of animal exploitation and cruelty. I choose to use my voice to bring awareness to speciesism and that everyone is capable of positive change.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/inner_child/inner_child_2.jpg"
                    alt="Baked tofu on crispy rice square"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                  <p className={styles.imageCaption}>Baked tofu on crispy rice square</p>
                </div>
              </div>

              <Link href="/epicureans" className={styles.backLink}>
                ← Back to Epicureans
              </Link>
            </div>
          </article>
        </main>
      </div>

      <ArticleCarousel currentSlug="my-inner-child-conscious-eating" />

      <Footer />
    </>
  );
}
