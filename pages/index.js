import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import styles from "../styles/Landing.module.css";
import mongoose from "mongoose";

import Branch from "../database/models/Branch";
import Course from "../database/models/Courses";

export default function Home(props) {
  return (
    <>
      <Navbar />
      <div
        data-theme="default"
        data-layout="fluid"
        data-sidebar-position="left"
        data-sidebar-behavior="sticky"
        className={styles.globalStyle}
      >
        <div className={styles.googlePlayImage}>
          <a href="https://play.google.com/store/apps/details?id=com.vinnovateit.studyhub">
            <Image
              id="gplaybadge"
              width={120}
              height={55}
              src="/images/google-play-badge.png"
              alt="App Link"
            />
          </a>
        </div>
        <div className="wrapper">
          <div className="main">
            <header className={styles.header}>
              <div className={styles.content}>
                <h1 className={styles.h1}>
                  StudyHub by
                  <span className={styles.viit}></span> VinnovateIT
                </h1>
                <p className={`${styles.revcolor} ${styles.landingp} contentP`}>
                  <span className={styles.quotes}> {'"'} </span>
                  {
                    "A 'CAT'ing chai and StudyHub from VinnovateIT is all you need for your exams!!"
                  }
                  <span className={styles.quotes - 2}>{' "'} </span>
                </p>
                <h4 className={styles.desc}>
                  No need to worry about your exams anymore, we present to you
                  the StudyHub. All in one resource collection for VIT
                </h4>

                <div className={styles.buttons}>
                  <a href="branch/firstsem">1st Sem</a>
                  <a href="branch/it">IT</a>
                  <a href="branch/cse">CSE</a>
                  <a href="branch/eee">EEE</a>
                  <a href="branch/mech">MECH</a>
                  <a href="branch/ece">ECE</a>
                  <a href="branch/uc">U.C.</a>
                </div>
              </div>

              <div className={styles.imgBox}>
                <Image
                  src="/images/studyguide.svg"
                  height="400px"
                  width="550px"
                  alt=""
                />
              </div>
            </header>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    if (mongoose.connections[0].readyState) {
      //Execute fetch here
    } else {
      console.log(process.env.MONGO_URI);
      await mongoose
        .connect(process.env.MONGO_URI, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        })
        .then(() => {
          console.log("Connected to DB!");
          //Execute fetch here
        });
    }
    return {
      props: {},
    };
  } catch (e) {
    console.log("Error in connecting to DB!", e.message);
    return {
      props: {},
    };
  }
}
