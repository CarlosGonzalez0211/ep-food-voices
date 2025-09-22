import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Strategic() {
  return (
    <>
      <Head>
        <title>Strategic Plan</title>
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
              <h2>Strategic Plan</h2>
            </div>
        </main>

        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
            <article>
                <h2><strong>El Paso Food Voices: A City’s Story Lived Through Food</strong></h2>
                <p>
                As an open source, digital humanities archival project, El Paso Food Voices’ (EPFV) mission is to explore the city’s culinary knowledge by engaging with our diverse multicultural, multiethnic, and multinational community members to gather, preserve, and share their food stories that document the rich and complex culinary culture and history of this region.
                </p>

                <h3>Three intentions motivate the design of <strong>EPFV</strong>:</h3>
                <p><strong>First</strong>, to gather and engage with our community to record, through audio and video, their food stories.</p>
                <p><strong>Second</strong>, to preserve our diverse community’s culinary knowledge for the benefit of current and future generations interested in learning how ordinary people’s food practices shape food systems that impact the history, culture, politics, economics, natural environment, and overall health of a region.</p>
                <p><strong>Third</strong>, to share this knowledge with a wide range of audiences: from the general public to food scholars and students in the classroom.</p>

                <p>
                As a digital humanities project, <strong>El Paso Food Voices</strong> reflects one model by which to achieve a number of goals and initiatives set forth by <strong>UTEP’s 2030 Strategic Plan</strong>. First and foremost, the four central goals of the Strategic Plan are framed by El Paso’s location, demographics, culture, and collaborations of engagement between the university and the community at large. <strong>EPFV</strong> is informed by these realities.
                </p>

                <h4><strong>Strategic Plan/Place:</strong></h4>
                <blockquote>“Our region, The Paso del Norte—or pass of the north—has been a gateway to opportunity and a route of trade for over 400 years.”</blockquote>
                <p>
                <strong>EPFV on Place:</strong> Food trade has been fundamental to this route. It brought grapes, pomegranates, pecans, cattle, oysters, sushi, and southern and Korean barbecues. Culinary exchanges between native foods of the Chihuahua Desert and foodstuffs introduced to the area by different ethnic groups have left an imprint that marks El Paso’s area with a complex culinary-cultural diversity that has always led to a variety of food entrepreneurial opportunities. Our residents' food stories keep this culinary history alive.
                </p>

                <h4><strong>Strategic Plan/People:</strong></h4>
                <blockquote>“Overwhelmingly Mexican-American, our history as a gateway has enriched our region with a unique population of Native Americans, Spaniards, Mexicans, and Americans mixed with immigrants from nations around the globe.”</blockquote>
                <p>
                <strong>EPFV on the Voices of People:</strong> Food practices and food memories of eating fry bread, churros, and buñuelos or hummus, chile con queso, and mango chucky speak to the unique culinary character of this city. Our residents’ food stories help us remember and understand how living in la frontera opens up our palate to the world.
                </p>

                <h4><strong>Strategic Plan/Culture:</strong></h4>
                <blockquote>“Our culture of care is drawn from the community in which we live. We are a generous, family-oriented, closely knit community that is shaped by traditions and customs that have defined us for more than four centuries.”</blockquote>
                <p>
                <strong>EPFV shows this culture:</strong> Through our residents’ food stories, we expand how the culture of care manifests itself within the El Paso area. El Paso’s cooks, those working in restaurants and those cooking at home, bring to our attention how food is about responsibility to one another; it’s about respect; it’s about remembering and honoring ancestral culinary histories; it’s about protecting the soil; it’s about gratitude for the food the Chihuahuan Desert offers.
                </p>

                <h4><strong>Strategic Plan/Engagement:</strong></h4>
                <blockquote>“UTEP will strengthen our existing regional partnerships and establish new ones to positively impact the security, health, culture, education, and economy of the community we serve.”</blockquote>
                <p>
                <strong>EPFV expands engagement:</strong> By listening to our residents’ food stories, we are exposed to new possibilities for community engagement and partnerships: we learned about community gardens; farming, NPOs that help the hungry, the homeless, the refugee, the immigrant; organizations committed to composting food waste; community centers that feed diverse populations; community centers that organize food events to promote plant-based eating; museum events that bring to life the past through food demonstrations.
                </p>

                <h3>2030 Strategic Plan Goals and EPFV Alignment</h3>
                <ul style={{ textAlign: "left" }}>
                <li><strong>Goal 1 / Initiative 2:</strong> Embed active learning throughout foundational academics; develop critical thinking and communication.</li>
                <li><strong>Goal 1 / Initiative 3:</strong> Expand applied-learning through research, creative work, and tech-enabled learning.</li>
                <li><strong>Goal 2 / Initiative 3:</strong> More engaged research for undergrad and grad students aligned with faculty scholarship.</li>
                <li><strong>Goal 3 / Initiative 1:</strong> Increase cultural events and meaningful educational outreach with faculty/students.</li>
                </ul>

                <h3>How EPFV Carries Out These Goals and Initiatives</h3>
                <p><strong>Building the archive:</strong> Faculty and students as archivists – This involves community engagement, culture of care, team work, media literacy; leadership, organization, planning and problem-solving skills, and effective communication and written skills.</p>

                <p><strong>Pre-production includes:</strong> identifying and establishing a space of trust with the person sharing a food story; drafting a list of open-ended questions to lead the conversation to capture a rich, complex and informative food story; setting up a place and time to carry out an interview; obtaining permission forms from the Institute of Oral History where audio stories will be archived.</p>

                <p><strong>Production includes:</strong> The collaboration at this stage stresses effective oral communication skills to conduct the gathering of a story; it includes technical knowledge on best practices in audio, videography, and lighting. This collaboration can be created by students within a single class, from different classes, different colleges, or a program such as the College of Liberal Arts Honors Program.</p>

                <p><strong>Post-production includes:</strong> Submit full food story audio recording, release form, and a summary of food story to the Institute of Oral History to be archived in the collection: Texas Voices. Story narrative and digital editing skills are critical set tools. Research for visual images (photographs; music, etc.). Submitting videos for peer review to EPFV editors. Organize and submit all audio and video footage to EPFV editors. Submit final cut of short videos to EPFV editors who in turn will submit to UTEP’s Creative Studios to be uploaded to the EPFV website. Draft a critical multimodal blog/article based on a theme presented in the collected story. This will be submitted for peer-review to the EPFV editors. Once reviewed and if accepted, it will be published in EPFV.</p>

                <h3>Pedagogical Applications of the Archive</h3>
                <ul style={{ textAlign: "left" }}>
                <li>EPFV stories apply across Humanities and Social Sciences courses.</li>
                <li>Primary source for food studies, writing, and digital media classes.</li>
                <li>Used in oral history courses as a model for collecting and sharing stories.</li>
                <li>Supports Digital Humanities by promoting inclusive and ethical storytelling.</li>
                <li>Content can support final projects, theses, or dissertations.</li>
                <li>Archive includes blog posts, scholarly references, and media files.</li>
                </ul>

                <h3>Public Sharing of the Archive</h3>
                <ul style={{ textAlign: "left" }}>
                <li>All audio recordings archived in UTEP’s Institute of Oral History (Texas Food Voices).</li>
                <li>Videos are hosted on the El Paso Food Voices YouTube channel.</li>
                <li>Exhibited in academic/museum events at local, state, and national levels.</li>
                <li>Annual features on UTEP’s KTEP "Focus on Campus".</li>
                <li>Future collaborations with Museum Studies, IOH, and community organizations.</li>
                </ul>
            </article>
        </section>



    </div>

    {/* Footer import */}
    <Footer/>
    </>
  );
}
