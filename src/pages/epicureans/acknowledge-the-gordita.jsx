import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/EpicureansArticle.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleCarousel from "../../components/ArticleCarousel";

export default function AcknowledgeTheGordita() {
  return (
    <>
      <Head>
        <title>We Need to Acknowledge the Gordita! - Epicureans</title>
        <meta
          name="description"
          content="A nostalgic look at the gordita and its place in Mexican-American food culture by Tomas Maldonado"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className={styles.page}>
        <main className={styles.main}>
          <article className={styles.article}>
            <div className={styles.heroImage}>
              <Image
                src="/epicureans_images/gordita/gordita_cover.jpeg"
                alt="We Need to Acknowledge the Gordita!"
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
                We Need to Acknowledge the Gordita!
              </h1>

              <p className={styles.author}>By Tomas Maldonado</p>
              <p className={styles.date}>(January 13, 2024)</p>

              <div className={styles.body}>
                <p>
                  Growing up on the Border of El Paso, Texas and Ciudad Juárez, Chihuahua during the early 80s, bringing Mexican food for lunch in elementary school was anything but cool. White and black students laughed at those of us of Mexican ancestry whose mothers packed gorditas tightly wrapped in aluminum foil - alongside a leftover Country Crock container with pan de huevo thrown in a pasty Walmart bag - instead of the more American lunch – deli sliced baloney and cheese slapped between two slices of white bread coupled with greasy potato chips and a few Twinkies - neatly compacted into a Star Wars lunchbox.
                </p>

                <p>
                  Fast forward to the late 80s going into the early 90s and suddenly everything Mexican, from Selena to the Chupacabra, became just as cool as Madonna or Bigfoot; Mexican food was no exception, but gorditas didn't seem to gain the same notoriety as tacos or tamales.
                </p>

                <p>
                  By the late 90s, Taco Bell introduced a monstrosity they passed off as the gordita – a hard shell taco, with all the fixings, wedged into a pita-like bread. I remember my relatives laughing at the commercials while enjoying an order of authentic Mexican gorditas during a family gathering.
                </p>

                <p>
                  In Christmas of 2022, I left my comfortable Minnesota surroundings to visit family back home in El Paso, Texas. There was plenty of Mexican food and drink awaiting me in the Sun City: enchiladas, Modelo, chile rellenos, Kahlua, caldo de res, tequila and, my all-time favorite, gorditas. It's been nearly six years since I last had this style – a deep-fried corn cake split in the middle filled with seasoned ground beef and onions, then doused in shredded lettuce, Muenster cheese, diced tomatoes and a spoonful of tomatillo salsa. In the first few days of arriving, I anxiously order a dozen from a nearby Mexican spot eager to reminisce on the flavors of my southwestern childhood.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/gordita/gordita_1.jpeg"
                    alt="Gorditas on a plate"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                  <p className={styles.imageCaption}>I reach for the first of three gorditas unintentionally arranged in the form of a trinity, coupled with an ice-cold Shiner Bock.</p>
                </div>

                <p>
                  I take a swig of my beer to wash down the remains of the first gordita I started on. I have an epiphany that forces me to ask myself, what's the origin of the gordita? I curiously pick up my cell phone and begin googling as much as I can. Halfway into my second gordita – and a half empty bottle of Shiner Bock, I discover that the roots of the Mexican gordita are shrouded in total mystery. I like to think that they were in the homes of my indigenous ancestors before the arrival of the Spaniards – however, given what is known of the early Aztec diet, gorditas were probably not a part of that staple.
                </p>

                <p>
                  I finish the second gordita and notice my Google search bar offering me the phrase 'National Gordita Day'. I inquisitively click on it hoping for some kind of information about my nostalgic lunch. I read through the entries and find National Taco Day on October 4th; National Burrito Day on April 1st; National Tamale Day on March 23rd; National Enchilada Day on May 5th; National Guacamole Day on September 16th; and even National Nachos Day November 6th. And yet, no National Gordita Day! Nada!
                </p>

                <p>
                  I have to dig further; but not before finishing my beer and opening another to finish that last gordita staring back at me. I find that national days are recognized by making a request online at a website known as the National Day Calendar. Though not legally recognized – since a national day has to be approved by the government - the site is set up specifically for brands, nonprofits and corporations to 'officially' register a designated day, of any kind, for their products or services.
                </p>

                <p>
                  The process to declare a national day has to be done via an online questionnaire, by either a business or organization, that asks the following: what is the name of the national day being designated as; what day each year is being requested for observation; and what is the background story for observing such a day. The whole process takes several weeks and, according to the website, is already backlogged.
                </p>

                <p>
                  The founders, Marlo and Alice Anderson, created the Dot Com in 2013 and have officially registered some of the wildest days I've ever seen: National Have Fun At Work Day, National Granola Bar Day, National Toothache Day and, my personal favorite, National Hangover Day – that inevitable feeling that I will experience the next morning after one too many a Shiner Bock.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/gordita/gordita_2.jpeg"
                    alt="Beer bottle next to plate"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>

                <p>
                  Dwelling on the whole national days business, I remember this relatable statement by the late character actor, Vincent Schiavelli, in his posthumous documentary Polizi, "food is edible culture." And this is true, throughout the Southwest, the gordita is not limited to only Mexican functions like quinceañeras or baptisms, you can find them by the dozens at weddings, Ramadan iftars, Bar Mitzvas, Diwalis, Chinese New Year and parties celebrated by Whites, Blacks, Asians, Jews and Arabs.
                </p>

                <p>
                  Without a doubt, the gordita can be adapted to fit any taste and craving: if you're a vegan, you can stuff it with potatoes instead of meat. If you're Jewish, Muslim or Seventh-day Adventist, you can stuff it with kosher or halal beef. There are not only Mexican gorditas, there are also Colombian and Venezuelan gorditas called arepas. In this sense, gorditas are truly edible culture that rightfully deserve the same national day status as all of my other favorite Mexican foods.
                </p>

                <p>
                  I take the last few bites of my third gordita – and, at the same time, finish off the second bottle of Shiner Bock while contemplating a third. I know in a few days that I'll be back in Minnesota sad at the bitter reality that I most likely won't find gorditas like this again. I think to myself, we truly need a national gordita day – at least for a nostalgic moment or two. But if we can just acknowledge its existence, well that will be even better.
                </p>

                <p className={styles.note}>
                  <strong>NOTE:</strong> All photos are from author's personal collection.
                </p>
              </div>

              <Link href="/epicureans" className={styles.backLink}>
                ← Back to Epicureans
              </Link>
            </div>
          </article>
        </main>
      </div>

      <ArticleCarousel currentSlug="acknowledge-the-gordita" />

      <Footer />
    </>
  );
}
