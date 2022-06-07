import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div
      data-theme="default"
      data-layout="fluid"
      data-sidebar-position="left"
      data-sidebar-behavior="sticky"
      className="global-style"
    >
      <div className="google-play-image">
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
          <header className="header">
            <div className="content">
              <h1 className="h1">
                StudyHub by
                <span className="viit"></span> VinnovateIT
              </h1>
              <p className="revcolor landingp">
                <span className="quotes"> {'"'} </span>
                {
                  "A 'CAT'ing chai and StudyHub from VinnovateIT is all you need for your exams!!"
                }
                <span className="quotes-2">{' "'} </span>
              </p>
              <h4 className="desc">
                No need to worry about your exams anymore, we present to you the
                StudyHub. All in one resource collection for VIT
              </h4>

              <div className="buttons">
                <a href="branch/firstsem">1st Sem</a>
                <a href="branch/it">IT</a>
                <a href="branch/cse">CSE</a>
                <a href="branch/eee">EEE</a>
                <a href="branch/mech">MECH</a>
                <a href="branch/ece">ECE</a>
                <a href="branch/uc">U.C.</a>
              </div>
            </div>
            <div className="imgBox">
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
  );
}
