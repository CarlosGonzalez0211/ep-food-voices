import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/EpicureansArticle.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleCarousel from "../../components/ArticleCarousel";

export default function LosAngelesAbuelaProject() {
  return (
    <>
      <Head>
        <title>El Paso Food Voices Inspires Los Angeles Abuela Project - Epicureans</title>
        <meta
          name="description"
          content="How El Paso Food Voices inspired a parallel project in Los Angeles by Sarah Portnoy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className={styles.page}>
        <main className={styles.main}>
          <article className={styles.article}>
            <div className={styles.heroImage}>
              <Image
                src="/epicureans_images/los_angeles/los_angeles_cover.jpg"
                alt="El Paso Food Voices Inspires Los Angeles Abuela Project"
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
                El Paso Food Voices Inspires Los Angeles Abuela Project
              </h1>

              <p className={styles.author}>By Sarah Portnoy</p>

              <div className={styles.body}>
                <p>
                  In 2013, I attended my first conference of the Association for the Study of Food and Society in New York City. I was very excited to be at an academic conference in Manhattan, but I did not know any of the other attendees. Fortunately, the conference began with a day of food tours. I signed up for the tour of Queens, where I met Meredith Abarca and Laresh Jayasanker. The three of us hit it off and had a great day tasting a variety of cuisines around Queens including Chinese, Peruvian, Ecuadorian, etc. Meredith was a fun companion and I found the topic of her research very interesting. At the time, I had just started teaching and researching about Latinx food culture. Meredith, on the other hand, had been doing food studies research for many years already and was well established in the field.
                </p>

                <p>
                  Since meeting Meredith almost ten years ago, we have stayed in touch and gotten together at past ASFS conferences. I have included her publications in my classes on Latinx food culture in Los Angeles in the Department of Latin American and Iberian Cultures at the University of Southern California for many years. I regularly assign chapters of her book{" "}
                  <em>Voices in the Kitchen: Views of Food and the World from Working-class Mexican and Mexican American Women</em>{" "}
                  to the students of my class, "The Culture of Food in Latinx Los Angeles" when we talk about food and gender. I have the students write blog assignments using her definitions of "space" versus "place." As part of the assignment, the students interview women in their lives, such as their mothers or grandmothers, using these concepts to guide the conversation. Her writing has been great fodder for class discussions and blog posts.
                </p>

                <p>
                  In March 2020, the pandemic hit and threw a wrench into our teaching plans (and our lives). Many of us looked at our screens and wondered how to keep teaching exciting without human contact. For my students, there would be no more field trips to markets, restaurants, visits with street vendors, or taco tours of Boyle Heights. What should I do to keep a 3 hour block of class time interesting?
                </p>

                <p>
                  Soon after the lockdown began, I contacted Meredith and asked if she would talk to my students over Zoom about her current research project. This was the first time I had had the opportunity to learn about <em>El Paso Food Voices</em>. Over Zoom Meredith told the students about the podcasts she had been doing, her interviews with community members involved in the local food system—chefs, restaurateurs, bakers, farmers, etc. I thought that Meredith's work on EPFV sounded amazing and in line with my years of research focused on the Latinx food culture of the city of Los Angeles. This locally focused project got the wheels in my brain spinning, even with the craziness of working from home during the pandemic, and I started to think about how something similar could intersect with the ideas I had for my next project.
                </p>

                <p>
                  After I published <em>Food, Health and Culture in Latino Los Angeles</em> in 2017, I began to think about the next project. I had been involved with a museum in downtown Los Angeles for many years that tells the stories of the enduring cultural influence of Mexicans and Mexican Americans in Los Angeles and California, LA Plaza de Cultura y Artes and had become friendly with the director of Public Programs, Ximena Martin.
                </p>

                <p>
                  <a href="https://lapca.org/" target="_blank" rel="noopener noreferrer">LA Plaza de Cultura y Artes</a> The museum was in the process of opening a new space called <a href="https://lacocina.org/" target="_blank" rel="noopener noreferrer">.LA Plaza Cocina</a>, the first museum space focused on Mexican cuisine and a teaching kitchen dedicated to exploring the rich culinary traditions and treasures of Mexican and Mexican American cooking. I had been on LA Cocina's advisory committee and had been brainstorming future exhibition ideas with Ximena.
                </p>

                <p>
                  Meredith's talk to my students inspired me to think beyond just teaching and writing about Mexican food culture in Los Angeles. One night during the pandemic, Ximena and I were drinking margaritas on her front porch and I said to her, "why don't we record Mexican and Mexican American women's food stories for an exhibition?" Ximena answered, "we've always wanted to do something with grandmothers." And the idea was born. I started brainstorming, "How many grandmothers? Would all be Spanish speaking or would some speak an indigenous language? Would they be from different states in Mexico or would some be second or third generation Mexican Americans?"
                </p>

                <p>
                  I knew I would need both time and funding for this project, so I applied for a grant from <a href="https://calhum.org/" target="_blank" rel="noopener noreferrer">California Humanities</a> in early 2021 and for a sabbatical from my institution. I also applied for an Interdisciplinary Teaching Grant from my university. This would allow me to co-teach a class with a colleague in the journalism/media school and have the students create interactive media for the exhibition. Fortunately, I was awarded both of the grants and the Sabbatical. I asked Ebony Bailey, (<a href="https://www.ebonybailey.com/" target="_blank" rel="noopener noreferrer">https://www.ebonybailey.com/</a>), a former student who had moved to Mexico City and became a documentary filmmaker, to do the filming for the exhibition, thinking it would make sense to film the interviews with the grandmothers.
                </p>

                <p>
                  Using contacts from different non-profit organizations and women with whom I had previous relationships, I recruited grandmothers who love to cook and have strong Mexican and Mexican American identities. Of course, there is no shortage of candidates in Los Angeles, but the task was a little more complicated as I was trying to find women from different states of Mexico, ages, and ethnicities. In the end, Ebony and I agreed on ten women to participate in the project. I pre-interviewed all of them at their homes or other locations, gave them a printed list of questions I would ask, and had them choose one dish to prepare that had significance for them.
                </p>

                <p>
                  Over ten days during September and October 2021, my crew, including Ebony and two others, filmed the interviews with the women in their homes and the cooking sessions. We filmed some B-roll of them at markets, walking down the street, and interacting with their children and grandchildren. After each session, we would sit down and eat a meal with the grandmother and, typically, her family. They were really memorable and special days for all of us.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/los_angeles/los_angeles_cover.jpg"
                    alt="Filming with the grandmothers"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>

                <p>
                  During early 2022, I hired a composer, a colorist, a sound editor, and a team of women animators based in Mexico City for work on the documentary. We paid for rights to a song from "Los Cojolites" for the opening music. <a href="https://www.allmusic.com/artist/los-cojolites-mn0000754423" target="_blank" rel="noopener noreferrer">Los Cojolites Biography, Songs, & Albums | AllMusic</a> At the same time, I worked with a photographer and a designer on the layout of the exhibit. I divided the space up into 3 themes: dish, identity and place and wrote text in Spanish and English to describe the dishes and introduce the subject to the public. Each of the grandmothers lent us an object from her home kitchen to place in the exhibition in cases with audio selections from the women.
                </p>

                <p>
                  <a href="https://lacocina.org/abuelitas-kitchen-mexican-food-stories/" target="_blank" rel="noopener noreferrer">Abuelita's Kitchen: Mexican Food Stories - LA Plaza Cocina</a>
                </p>

                <p><strong>Here's some of the media about the exhibition:</strong></p>

                <ul>
                  <li>
                    <a href="https://laist.com/news/food/come-hear-the-kitchen-wisdom-of-these-mexican-abuelas" target="_blank" rel="noopener noreferrer">
                      Come Hear The Kitchen Wisdom Of These Mexican Abuelas | LAist
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ladowntownnews.com/arts_and_culture/abuelitas-kitchen-showcases-citys-mexican-culinary-traditions/article_b4a6e3c8-d8a5-11ec-9b3e-77c7f7c7f7c7.html" target="_blank" rel="noopener noreferrer">
                      'Abuelita's Kitchen' showcases city's Mexican culinary traditions | Arts and Culture | ladowntownnews.com
                    </a>
                  </li>
                  <li>
                    <a href="http://specne.ws/GsiaGT" target="_blank" rel="noopener noreferrer">
                      http://specne.ws/GsiaGT
                    </a>
                  </li>
                </ul>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/los_angeles/los_angeles_1.jpg"
                    alt="Exhibition opening"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>

                <p>
                  On May 12th, I gathered all the abuelitas and their families, along with friends and colleagues, at LA Cocina, to see the exhibition for the first time. It was a very exciting evening! They all stood in front of their photographs and took pictures with their families. Afterwards, we went across the street to the lawn outside the museum to watch the documentary film together. Since that night, I have shown the film in both Mexico and Los Angeles many times and the public has enjoyed it.
                </p>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/los_angeles/los_angeles_2.jpg"
                    alt="Abuelitas at the exhibition"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>

                <div className={styles.imageContainer}>
                  <Image
                    src="/epicureans_images/los_angeles/los_angeles_3.jpg"
                    alt="Group photo at the exhibition"
                    width={600}
                    height={400}
                    className={styles.contentImg}
                  />
                </div>

                <p>
                  In Puebla, they held an official screening at the Palacio Municipal that was well attended by politicians and people involved in migration issues. There was a group that came from the state of Mexico from an organization that works with migrants that have returned or been deported from the U.S. Here's an article about that event:
                </p>

                <p>
                  <a href="https://volt.utep.edu/epfoodvoices/epicureans-post/el-paso-food-voices-inspires-los-angles-abuela-project-sarah-portnoy/1" target="_blank" rel="noopener noreferrer">
                    DOCUMENTAL | "Abuelitas Kitchen: Mexican Food Stories" en Puebla, el arte culinario de mujeres migrantes
                  </a>
                </p>

                <p>
                  After many screenings in Mexico and Los Angeles, I have witnessed how the documentary really resonates with the Mexican immigrant population. When I have watched it with them, they have laughed and cried at certain key moments that were not understood by the Mexican national population or non-migrant populations in the U.S.
                </p>

                <p>
                  In August 2022, I was awarded an NEH Media Production grant of $536,000 to create a documentary series called "Abuelas on the Borderlands" with my colleague Prof. Amara Aguilar of USC Annenberg. Meredith helped tremendously with the grant application and wrote the treatment for the El Paso episode. Meredith will be the Executive Producer of the episode based in El Paso. I look forward to working with her on this upcoming project very soon!
                </p>
              </div>

              <Link href="/epicureans" className={styles.backLink}>
                ← Back to Epicureans
              </Link>
            </div>
          </article>
        </main>
      </div>

      <ArticleCarousel currentSlug="los-angeles-abuela-project" />

      <Footer />
    </>
  );
}
