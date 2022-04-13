import type { NextPage } from "next";
import Head from "next/head";
import { About } from "../components/About";
import Blogs from "../components/Blogs";
import Certifications from "../components/Certification";
import Education from "../components/Education";
import { ExternalLink } from "../components/ExternalLink";
import Heading2 from "../components/Heading";
import { Profile } from "../components/Profile";
import { Section } from "../components/Section";
import { Skills } from "../components/Skills";
import { Intuit } from "../containers/Intuit";
import { ModusCreate } from "../containers/ModusCreate";
import { Tekion } from "../containers/Tekion";
import { Toptal } from "../containers/Toptal";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-dark pb-8">
      <Head>
        <title>Vijay Resume</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-6 flex gap-4 mx-auto max-w-312">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <Profile />
            <About />
          </div>

          <Heading2>Skills</Heading2>

          <div className="bg-dusk p-6 rounded-lg">
            <Skills />
          </div>

          <Heading2>Work Experience</Heading2>

          <div className="lg:grid grid-cols-2 gap-4">
            <ModusCreate />
            <Tekion />
            <Toptal />
            <Intuit />
          </div>

          <div className="md:grid md:grid-cols-2 gap-4 md:mb-4">
            <div className="flex flex-col gap-4 mb-8 md:mb-0">
              <Heading2>Certifications</Heading2>
              <Section>
                <Certifications>
                  <Certifications.Certification>
                    <ExternalLink href="https://www.hackerrank.com/vpr_wyd">
                      HackerRank
                    </ExternalLink>
                    - Javascript, CSS, Problem solving certified
                  </Certifications.Certification>
                  <Certifications.Certification>
                    <ExternalLink href="https://www.linkedin.com/in/vijay-p-r-133147131/">
                      Linkedin
                    </ExternalLink>
                    - Javascript, HTML, CSS, React certified
                  </Certifications.Certification>
                </Certifications>
              </Section>
            </div>

            <div className="flex flex-col gap-4 mb-10 md:mb-0">
              <Heading2>Blogs</Heading2>

              <Section className="flex-grow">
                <Blogs>
                  <ul className="list-disc ml-6 text-2xl">
                    <li>
                      <ExternalLink href="https://dev.to/vijayprwyd/polyfill-for-promises-1f0e">
                        Polyfill
                      </ExternalLink>{" "}
                      for Promises
                    </li>
                    <li>
                      Multiplayer{" "}
                      <ExternalLink href="https://if092.csb.app/">
                        chess
                      </ExternalLink>{" "}
                      game
                    </li>
                  </ul>
                </Blogs>
              </Section>
            </div>
          </div>

          <Heading2>Education</Heading2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Education>
              <Education.Institution>
                College Of Engineering, Tiruvananthapuram
              </Education.Institution>
              <Education.Subject>
                Computer Science And Engineering
              </Education.Subject>
              <Education.Score>8.55 CGPA</Education.Score>
            </Education>

            <Education>
              <Education.Institution>
                Hill Blooms School, Mananthavady
              </Education.Institution>
              <Education.Subject>
                Physics, Mathematics and Computer Science
              </Education.Subject>
              <Education.Score>95.4%</Education.Score>
            </Education>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
