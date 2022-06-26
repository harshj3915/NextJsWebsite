import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import mongoose from "mongoose";
import Image from "next/image";

import "css-doodle";

import styles from "../../styles/Branchpage.module.css";

import branch from "../../database/models/Branch";
import courses from "../../database/models/Courses";
import { useRouter } from "next/router";

const FirstSem = ({ subjects, errors }) => {
  const router = useRouter();
  const { branchName } = router.query;

  return (
    <>
      <Navbar />
      <div
        data-theme="default"
        data-layout="fluid"
        data-sidebar-position="left"
        data-sidebar-behavior="sticky"
        className={styles.branchPageMain}
      >
        <div className={styles.doodle}>
          <css-doodle>
            {`
          :doodle { @grid: 30x30; @size: 100vmax; grid-gap: 1px; } background-color:
          hsla(@r(360), 85%, @r(70%, 90%), @r(.2)); transform: scale(@rand(.1,.9));
      `}
          </css-doodle>
        </div>
        <div className="wrapper">
          <div className="main">
            <main className="content">
              <div className="container-fluid p-0">
                {errors ? (
                  <>
                    <h1 className={`${styles.h1} mb-3 ${styles.textCenter}`}>
                      {errors}
                    </h1>
                  </>
                ) : (
                  <>
                    <h1 className={`${styles.h1} mb-3 ${styles.textCenter}`}>
                      Branch - {branchName.toUpperCase()}
                    </h1>
                    {branchName === "ece" ? (
                      <div className="col-12 col-lg-12 col-xl-12">
                        <div className={styles.ieeed}>
                          <p className={styles.ieeep}>
                            Contributed by{" "}
                            <a
                              className={styles.ieeea}
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://www.ieeecasvit.com/"
                            >
                              IEEE CAS
                            </a>
                          </p>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.ieeecasvit.com/"
                          >
                            <div styleName={styles.ieeeStyle}>
                              <Image
                                alt=""
                                height={60}
                                width={60}
                                src="/img/cas.png"
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="row">
                      {subjects.map((subject) => {
                        return subject ? (
                          <div
                            className="col-12 col-md-6 col-lg-3"
                            key={subject.code}
                          >
                            <div
                              className={`${styles.coursecard} card`}
                              id="single-course"
                            >
                              <div className="card-header px-4 pt-4">
                                <div className="card-actions float-right">
                                  <div className="dropdown show"></div>
                                </div>
                                <h4 className="card-title mb-0">
                                  {subject.name}
                                </h4>
                              </div>
                              <div className="card-body px-4 pt-2">
                                <h6>Course Code - {subject.code}</h6>
                                <h6>Credits - {subject.credits}</h6>
                                <h6>Modules - {subject.modules.length}</h6>
                              </div>
                              <a
                                href={`/courses/${subject._id}`}
                                className={`btn ${styles.btnBtn}  btn-info`}
                              >
                                See Detailed Description
                              </a>
                            </div>
                          </div>
                        ) : (
                          <></>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FirstSem;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { branchName: "firstsem" } },
      { params: { branchName: "it" } },
      { params: { branchName: "cse" } },
      { params: { branchName: "eee" } },
      { params: { branchName: "mech" } },
      { params: { branchName: "ece" } },
      { params: { branchName: "uc" } },
    ],
    fallback: false,
  };
}
export async function getStaticProps(context) {
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

    let branchName = context.params.branchName;
    branchName = branchName.toUpperCase();

    const branchData = await branch
      .find({ name: branchName })
      .populate("subjects")
      .exec();
    const subjects = branchData[0].subjects;
    let errors = null;
    if (!subjects || subjects.length === 0) {
      console.log("Subject Error: No Subjects Found");
      errors = "Internal Server Error! Please visit after sometime";
    }
    return {
      props: {
        subjects: JSON.parse(JSON.stringify(subjects)),
        errors: JSON.parse(JSON.stringify(errors)),
      },
    };
  } catch (e) {
    console.log("Error in connecting to DB!", e.message);
    const errors = "Internal Server Error! Please visit after sometime";
    return {
      props: {
        subjects: {},
        errors: JSON.parse(JSON.stringify(errors)),
      },
    };
  }
}
