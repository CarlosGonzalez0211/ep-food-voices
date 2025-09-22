import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header import */}
      <Header />

      {/* Page Content */}
      <div className={`${styles.page}`}>
        <main className={styles.main}>
          <div className={styles.heroContainer}>
            <Image
              src="/about_images/about.jpg"
              alt="Background"
              className={styles.heroBg}
              width={1000}
              height={600}
            />
          </div>
          <div className={styles.textOverlayMiddle}>
              <h2>About</h2>
            </div>
        </main>
        <section className={styles.storiesSection}>
            <div className={styles.storiesWrap}>
              <div className={styles.storiesBody}>

                <p>
                  <strong>El Paso Food Voices is a city’s story lived through food. </strong>
                  It begins by embracing that food speaks of people’s migratory patterns, 
                  histories and cultural values. EPFV is an archive of oral stories that 
                  records a living history, a kind of “intimate history,” that is experienced, 
                  remembered, and archived viscerally. The residents of El Paso, Texas, give 
                  expression to their gastronomic ruminations. Many participants share how food 
                  goes beyond nourishing the body; their stories speak of how food feed us 
                  emotionally, socially, and spiritually. For example, Yolanda Leyva values foods, 
                  recipes, and cooking tools that connects her to an indigenous ancestral past. 
                  Roman Wilcox believes that cooking is about responsibility to people and the 
                  environment. Antonio Lopez sees food as a gift of time. Machelle Wood uses food 
                  in a museum setting to humanize the past and root it in the present. A city’s 
                  story lived through food is defined by relationships: an individual’s relationship 
                  with food, amongst people of different ethnic and socio-economic backgrounds, 
                  between individuals and nature, and between the past and the present. All of the 
                  stories included in EPFV communicate how El Paso’s history, culture and politics 
                  expand beyond the coordinates that geographically place El Paso, Texas, on a map.
                </p>

                <h3>Acknowledgments</h3>

                <p>
                  El Paso Food Voices has been made possible through the EPCC-UTEP Humanities 
                  Collaborative, a grant supported by the Mellon Foundation and with the 
                  collaboration of the University of Texas at El Paso’s Creative Studios. 
                  Further support has been provided by The Mimi Reisel Gladstein Endowment Grant, 
                  the NEH Digital Humanities Advancement Grant supporting Digital Mapping in Latinx 
                  Studies workshops, and California Humanities supporting the documentary “Voces de 
                  las Abuelas,” to which EPFV is an integral digital food story model. Additional 
                  support received by UTEP's College of Liberal Arts' Community Engagement Grant.
                </p>

                <h3>TEAM</h3>

                <p>
                  El Paso Food Voices has been made possible through the EPCC-UTEP Humanities 
                  Collaborative, a grant supported by the Mellon Foundation and with the 
                  collaboration of the University of Texas at El Paso’s Creative Studios. 
                  Further support has been provided by The Mimi Reisel Gladstein Endowment Grant, 
                  the NEH Digital Humanities Advancement Grant supporting Digital Mapping in Latinx 
                  Studies workshops, and California Humanities supporting the documentary “Voces de 
                  las Abuelas,” to which EPFV is an integral digital food story model. Additional 
                  support received by UTEP's College of Liberal Arts' Community Engagement Grant.
                </p>

                <article className={styles.teamCard}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src="/about_images/meredith.jpg"
                      alt="Meredith E. Abarca"
                      width={200}
                      height={200}
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardText}>
                    <h4>Meredith E. Abarca<br/><span>Founder, Editor, and Curator</span></h4>
                    <p>
                      What has led me to become a professor of Food Studies and Literature in the Department of English at the University of Texas at El Paso, is a life-long passion for food and for people’s stories, especially when these are about food. I define myself as “a child of the kitchen.” I grew up in restaurants, for a while I thought of becoming a professional chef, and then one day I found myself getting a Ph.D. and writing about the transformative power that food holds in all of our lives. Since then, I’ve continued to research and write about this power in <em>Voices in the Kitchen</em> (2006); <em>Rethinking Chicana/o Literature Through Food</em>: Postnational Appetites (2013), <em>Latin@s’ Presence in the Food Industry</em>: Changing How We Think about Food (2016), and in numerous articles in scholarly journals and edited collections.
                    </p>
                    <p>
                      Through lectures and workshops, I’ve had opportunities of sharing the complicated social, cultural, historical and philosophical complex dynamics that food plays in our lives in places like the Southern Foodways Alliance Symposium in Oxford, Mississippi; the University of Gastronomical Sciences in (Colorno) Parma, Italy; the University of Technology in Sidney, Australia; the University of Paris-Sorbonne, France; the University of Oslo, Norway; the University of Toronto, Canada and numerous US academic settings.
                    </p>
                    <p>
                      EPFV reflects my commitment to create venues to share work produced within an academic setting with an audience not reached by scholarly academic publications. My first digital endeavor in this commitment was the creation of a virtual museum as a graduate course’s final project. Learn more:{" "}
                      <a href="https://www.youtube.com/watch?v=ZJTQC1P3E8U" target="_blank" rel="noopener noreferrer">
                        Afro-Latino Foodways Museum Project
                      </a>.
                    </p>
                  </div>
                </article>
                <article className={styles.teamCard}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src="/about_images/joshua.jpg"
                      alt="Joshua I. Lopez"
                      width={200}
                      height={200}
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardText}>
                    <h4>Joshua I. Lopez<br/><span>Co-editor</span></h4>
                    <p>
                      I am a PhD candidate in the department of History at the University of North Texas. I began working on EPFV after I earned my master’s degree in English and American Literature from the University of Texas at El Paso. Inspired by the work in EPFV, I pursued my PhD. My research areas are in food studies, Latinx/Chicanx studies, and oral history. I am currently working on my dissertation which is an oral history project of El Paso’s LGBTQ+ community and their relationships to food.
                    </p>
                  </div>
                </article>

                <article className={styles.teamCard}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src="/about_images/solomon.jpg"
                      alt="Solomon Contreras"
                      width={200}
                      height={200}
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardText}>
                    <h4>Solomon Contreras<br/><span>Videographer & Sound Engineer<br/>(Spring 2019; Spring 2022)</span></h4>
                    <p>
                      A Communications Major at UTEP. As an Undergraduate student research assistant to EPFV, I’ve worked as a videographer, video editor and sound engineer. The opportunity of recording people’s food stories and recipes has offered me the opportunity of a hands-on experience towards my goals for a future profession in videography, sound engineering, editing and directing.
                    </p>
                  </div>
                </article>

                <article className={styles.teamCard}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src="/about_images/jonathan.jpg"
                      alt="Jonathan Hinojos"
                      width={200}
                      height={200}
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardText}>
                    <h4>Jonathan Hinojos<br/><span>Research Assistant (Spring 2019)</span></h4>
                    <p>
                      I worked with this project as part of the EPCC–UTEP Humanities Collaborative. I conducted research to frame people’s food memories and culinary practices in a historical and cultural context. In 2018 I began my studies at El Paso Community College (EPCC) where I am majoring in Communications and Journalism. After completing an Associate’s degree at EPCC, I transferred to the University of Texas at El Paso (UTEP).
                    </p>
                  </div>
                </article>

                <article className={styles.teamCard}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src="/about_images/marcos.jpg"
                      alt="Marcos E. Soto"
                      width={200}
                      height={200}
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardText}>
                    <h4>Marcos E. Soto<br/><span>Web Designer, Graphic Designer</span></h4>
                    <p>
                      I am a current student attending the University of Texas at El Paso and I am majoring in Graphic Design and minoring in Painting. I have always had a fascination for the arts in film posters and game design.
                    </p>
                  </div>
                </article>

                <article className={styles.teamCard}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src="/about_images/food_logo.png"
                      alt="Carolina Valdez"
                      width={200}
                      height={200}
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardText}>
                    <h4>Carolina Valdez<br/><span>Graphic Designer (for EPFV "Logo")</span></h4>
                    <p>
                      This logo was created by Carrolina Valdez, a UTEP student sharpening her graphic skills at UTEP’s Creative Studios. The logo takes its inspiration from Chicano artist Rolando Briseño’s Tablescapes.
                    </p>
                  </div>
                </article>

                <article className={styles.teamCard}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src="/about_images/marcos.jpg"
                      alt="Carlos Gonzalez"
                      width={200}
                      height={200}
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardText}>
                    <h4>Carlos Gonzalez<br/><span>Web Developer</span></h4>
                    <p>
                      I am a rising-senior undergraduate student majoring in Computer Science at the Univeristy of Texas at El Paso. I have always been captivated and passionate about software development, and working on this project has allowed for me to grow my development skills while expanding my culinary education along the way
                    </p>
                  </div>
                </article>

                <section>
                  <strong>Special Thanks:</strong>
                  <p>Steve Varela and UTEP's Creatuve Studios</p>
                  <p>Liduvina Velez</p>
                  <p>Lucy Fischer-West</p>
                  <p>Skip Clark</p>
                  <p>Julia and Sergio Lopez</p>
                  <p>To read about how EPFV provides a model to achieve UTEP’s 2030 Strategic Plan, please visit<a href="/strategic_plan"> EPFV-UTEP’S 2030 STRATEGIC PLAN</a></p>

                </section>

              </div>
            </div>
          </section>
    </div>

    {/* Footer import */}
    <Footer/>
    </>
  );
}
