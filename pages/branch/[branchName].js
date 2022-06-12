import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import mongoose from "mongoose";

import styles from "../../styles/Cousepages.module.css";

import Course from "../../database/models/Course";
import Branch from "../../database/models/Branch";
import { useRouter } from "next/router";

const FirstSem = ({ subjects, errors }) => {
  const router = useRouter();
  const { branchName } = router.query;

  return (
    <div
      data-theme="default"
      data-layout="fluid"
      data-sidebar-position="left"
      data-sidebar-behavior="sticky"
    >
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default FirstSem;

export async function getServerSideProps(context) {
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

    const branchData = await Branch.find({ name: branchName })
      .populate("subjects")
      .exec();
    const subjects = branchData[0].subjects;
    let errors = null;
    if (!subjects || subjects.length === 0) {
      errors = "No subjects found";
    }
    return {
      props: {
        subjects: JSON.parse(JSON.stringify(subjects)),
        errors: JSON.parse(JSON.stringify(errors)),
      },
    };
  } catch (e) {
    console.log("Error in connecting to DB!", e.message);
    return {
      props: {},
    };
  }
}
