import Navbar from "../../components/navbar";
import "css-doodle";
import Footer from "../../components/footer";
import Image from "next/image";
import mongoose from "mongoose";

import branch from "../../database/models/Branch";
import courses from "../../database/models/Courses";
import styles from "../../styles/Branchpage.module.css";

const Search = ({ subjects, errors, branch }) => {
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
                      {branch}
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
      </div>
      <Footer />
    </>
  );
};

export default Search;

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

    let errors = null;

    const queryRegex = new RegExp(context.params.searchName);

    const foundCourses = await courses.find({
      $or: [
        { name: { $regex: queryRegex, $options: "i" } },
        { code: { $regex: queryRegex, $options: "i" } },
      ],
    });

    if (!foundCourses || foundCourses.length === 0) {
      errors = "No courses found!";
    }

    const branch = "Following Results found :  ";

    return {
      props: {
        subjects: JSON.parse(JSON.stringify(foundCourses)),
        errors: JSON.parse(JSON.stringify(errors)),
        branch: JSON.parse(JSON.stringify(branch)),
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
