import Head from "next/head";
import Image from "next/image";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Hero from "../components/Hero";
import LearnHow from "../components/LearnHow";
import Member from "../components/Member";
import Navbar from "../components/Navbar";
import PhotoBox from "../components/PhotoBox";
import TheSource from "../components/TheSource";
import Video from "../components/Video";
import styles from "../styles/home.module.scss";
import DataMembers from "../../dataMembers.json";
import DataPhotoBox from "../../dataPhotoBox.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NinjaMail</title>
      </Head>
      <Navbar />
      <Hero />
      <Video />
      <div className={styles.photoBoxContainer}>
        {DataPhotoBox.map((data) => (
          <PhotoBox srcImage={data.srcImage} texto={data.texto} key={data.id} />
        ))}
        <TheSource />
      </div>
      <div className={styles.memberContainer}>
      {DataMembers.map((data) => (
        <Member
          srcImage={data.srcImage}
          nome={data.nome}
          since={data.since}
          key={data.id}
        />
      ))}
      </div>
      <LearnHow />
      <Brands />
      <GetStarted />
      <Footer />
    </div>
  );
}
