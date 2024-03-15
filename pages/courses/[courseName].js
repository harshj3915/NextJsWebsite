import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import mongoose from "mongoose";

import styles from "../../styles/Coursepages.module.css";
import "css-doodle";

import courses from "../../database/models/Courses";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import jQueryAccordion from "../../utils/accordion";

const FirstSem = ({ Course, errors }) => {
  const router = useRouter();

  useEffect(jQueryAccordion);

  return (
    <>
      <Head>
        <title>StudyHub</title>
      </Head>
      <Navbar />
      <div
        data-theme="default"
        data-layout="fluid"
        data-sidebar-position="left"
        data-sidebar-behavior="sticky"
        className={styles.body}
      >
        <div className={styles.doodle}>
          <css-doodle>
            {`
      :doodle { @grid: 30x30; @size: 100vmax; grid-gap: 1px; } background-color:
      hsla(@r(360), 85%, @r(70%, 90%), @r(.2)); transform: scale(@rand(.1,.9));
  `}
          </css-doodle>
        </div>
        <div className={`wrapper ${styles.wrapper}`}>
          <div className="main">
            <div className="content">
              <div className="container-fluid p-0">
                {errors ? (
                  <>
                    <div className="row">
                      <div className="col-12 col-lg-12 col-xl-12">
                        <h1
                          className={`${styles.h1} mb-3 ${styles.textCenter} `}
                        >
                          {errors}
                        </h1>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="row">
                      <div className="col-12 col-lg-12 col-xl-12">
                        <h1
                          className={`${styles.h1} mb-3 ${styles.textCenter} `}
                        >
                          {Course.name} ({Course.code})
                        </h1>
                      </div>
                      {Course.code == "MAT2001" ||
                      Course.code == "MAT2002" ||
                      Course.code == "BMAT102L" ? (
                        <div className="col-12 col-lg-12 col-xl-12">
                          <div className={styles.logoDiv}>

                            <div className={styles.vectorImage}>
                              <Image
                                height={25}
                                width={25}
                                src="/img/Vector.png"
                                alt="Vector"
                              />
                            </div>

                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      <div className="col-12 col-lg-12 col-xl-12">
                        <h1
                          className={`${styles.h3} mb-3 ${styles.floatRight}`}
                        >
                          Credits : {Course.credits}
                        </h1>
                      </div>
                    </div>
                    {Course.description && Course.description.sanitizedHtml ? (
                      <div className={styles.note}>
                        <h1 className={styles.noteH1}>NOTE:</h1>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: Course.description.sanitizedHtml,
                          }}
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    <div className={`${styles.accordion} js-accordion`}>
                      {Course.modules.map((module) => {
                        return (
                          <div
                            className={`${styles.accordion__item} js-accordion-item`}
                            key={module.num}
                          >
                            <div
                              className={`${styles.accordionHeader} js-accordion-header`}
                            >
                              MODULE {module.num}{" "}
                              <i
                                className={`fas fa-angle-down ${styles.fas} `}
                              ></i>
                            </div>
                            <div
                              className={`${styles.accordionBody} js-accordion-body`}
                            >
                              <div
                                className={`${styles.accordionBody__contents} ${styles.myContainer}`}
                              >
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: module.sanitizedHtml,
                                  }}
                                />
                                <Image
                                  src="/img/VinnovateIT_small.png"
                                  height={50}
                                  width={20}
                                  alt="VinnovateIT"
                                />
                              </div>
                            </div>
                            {/* end of accordion body  */}
                          </div>
                        );
                        // end of accordion item
                      })}
                    </div>
                    {/* end of accordion */}

                    {Course.pdfs.length > 0 ? (
                      <div className={`${styles.accordion} js-accordion`}>
                        <div
                          className={`materials ${styles.accordion__item} js-accordion-item`}
                        >
                          <div
                            className={`${styles.accordionHeader} js-accordion-header`}
                          >
                            MATERIALS
                          </div>
                          <div
                            className={`${styles.accordionBody} js-accordion-body`}
                          >
                            <div
                              className={`${styles.accordionBody__contents}`}
                            >
                              <div className="container-fluid">
                                <div className="row">
                                  {Course.pdfs.map((pdf) => {
                                    return (
                                      <div
                                        className="pdfdisp col-xl-3 col-lg-3 col-md-6 col-sm-12"
                                        key={pdf.name}
                                      >
                                        <h4 className="pdfname">{pdf.name}</h4>
                                        <iframe
                                          src="<%= pdf.link %>"
                                          width="100%"
                                          height="350rem"
                                        ></iframe>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </div>

              {/* {Course.das.length > 0 ? (
                <div className="accordion js-accordion">
                  <div className="digitalassignments accordion__item js-accordion-item">
                    <div className="accordion-header js-accordion-header">
                      Digital Assignments
                    </div>
                    <div className="accordion-body js-accordion-body">
                      <div className="accordion-body__contents">
                        <div
                          className="form-group"
                          style="display: flex; justify-content: center"
                        >
                          <input
                            style="box-shadow: 1px 1px #ced4da inset; width: 40vw"
                            type="text"
                            className="form-control searchtext"
                            id="searchtext"
                            name="searchtext"
                            placeholder="Search DA's"
                          />
                          <div className="search-button">
                            <button>
                              <i className="fas fa-search"></i>
                            </button>
                          </div>
                        </div>
                        <div className="container-fluid">
                          <div style="min-height: 350px" className="row">
                            {Course.das.map((da) => {
                              return (
                                <div
                                  className="dadisp col-xl-3 col-lg-3 col-md-6 col-sm-12"
                                  key={da.name}
                                >
                                  <h4 className="daname">
                                    {da.name.toLowerCase()}
                                  </h4>
                                  <iframe
                                    src="<%= da.link %>"
                                    width="100%"
                                    height="350rem"
                                  ></iframe>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FirstSem;

export async function getServerSideProps(context) {
  try {
    if (mongoose.connections[0].readyState) {
      //Execute fetch here
    } else {
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

    let courseName = context.params.courseName;
    if (
      courseName.length > "603f82d34b48f40004358e53".length ||
      courseName.length < "603f82d34b48f40004358e53".length
    ) {
      errors = "Course not found!";

      return {
        props: {
          errors,
        },
      };
    } else {
      const courseData = await courses.findById(courseName);

      if (!courseData || courseData.length === 0) {
        errors = "Course not found!";
      }

      return {
        props: {
          Course: JSON.parse(JSON.stringify(courseData)),
          errors: JSON.parse(JSON.stringify(errors)),
        },
      };
    }
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
