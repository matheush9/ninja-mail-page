import Head from "next/head";
import Image from "next/image";
import AllThe from "../components/AllThe";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Hero from "../components/Hero";
import LearnHow from "../components/LearnHow";
import Navbar from "../components/Navbar";
import TheSource from "../components/TheSource";
import Video from "../components/Video";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NinjaMail</title>
      </Head>
      <Navbar />
      <Hero />
      <Video />
      <TheSource />
      <LearnHow />
      <AllThe />
      <GetStarted />
      <Footer />
    </div>
  );
}
