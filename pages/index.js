import Head from "next/head";
import Hero from "../components/home/hero";
import Navbar from "../components/home/navbar";
import SectionTitle from "../components/home/sectionTitle";

import { benefitOne, benefitTwo, stakeOne, stakeTwo,stakeThree } from "../components/home/data";
import Video from "../components/home/video";
import Benefits from "../components/home/benefits";
import Stakeholders from "../components/home/stakeholders";
import Footer from "../components/home/footer";
import PopupWidget from "../components/home/popupWidget";

export default function Home() {
  return (
    <>
      <Head>
        <title>GTECH GLOBAL INTEGRATED LIMITED</title>
        <meta
          name="description"
          content="Think, talk, and create with TalkGenie"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="GTECH GLOBAL INTEGRATED"
        title=" Gtech Global R and D Network"
      >
        In August 2021, as part of activities marking the firm’s 13 years
        anniversary of our firm, the management of the firm initiated the Gtech
        Global R and D Network – a Network of Research institutions working
        collaboratively to strengthen Global R and D ecosystem.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Stakeholders data={stakeOne} />
      <Stakeholders imgPos="right" data={stakeTwo} />
      <Stakeholders data={stakeThree} />
      <SectionTitle
        pretitle="Background"
        title="2023 Project Kick-off Schedule"
      >
       
      </SectionTitle>
      <Video />

      <Footer />
      <PopupWidget />
    </>
  );
}
