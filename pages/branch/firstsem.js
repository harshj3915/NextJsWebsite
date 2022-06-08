import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import { useEffect, useState } from "react";

import connectDB from "../../database/connectDB";
import Course from "../../database/models/Course";

const FirstSem = () => {
  const subjects = [];

  const [errors, setErrors] = useState("");

  useEffect(() => {
    connectDB();
    fetchSubjectData();
  });

  const fetchSubjectData = async () => {
    const calculus = await Course.findOne({ code: "MAT1011" });
    if (!calculus || calculus.length === 0) {
      setErrors("Internal Server Error");
    }
    const chem = await Course.findOne({ code: "CHY1701" });
    if (!chem || chem.length === 0) {
      setErrors("Internal Server Error");
    }
    const eee = await Course.findOne({ code: "EEE1001" });
    if (!eee || eee.length === 0) {
      setErrors("Internal Server Error");
    }
    const phy = await Course.findOne({ code: "PHY1701" });
    if (!phy || phy.length === 0) {
      setErrors("Internal Server Error");
    }
    const python = await Course.findOne({ code: "CSE1001" });
    if (!python || python.length === 0) {
      setErrors("Internal Server Error");
    }
    subjects.push(calculus, chem, eee, phy, python);
  };

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
                  <h1 style="text-align: center" className="h1 mb-3">
                    {errors}
                  </h1>
                </>
              ) : (
                <>
                  <h1 style="text-align: center" className="h1 mb-3">
                    Branch - FIRSTSEM
                  </h1>
                  <div className="row">
                    {subjects.forEach(function (subject) {
                      <div className="col-12 col-md-6 col-lg-3">
                        <div
                          className="coursecard card"
                          id="single-course"
                          style="max-height: 200px; min-height: 200px"
                        >
                          <div className="card-header px-4 pt-4">
                            <div className="card-actions float-right">
                              <div className="dropdown show"></div>
                            </div>
                            <h4 className="card-title mb-0">{subject.name}</h4>
                          </div>
                          <div className="card-body px-4 pt-2">
                            <h6>Course Code - {subject.code}</h6>
                            <h6>Credits - {subject.credits}</h6>
                            <h6>Modules - {subject.modules.length}</h6>
                          </div>
                          <a
                            href={`/courses/${subject._id}`}
                            style="
                      border-top-left-radius: 0;
                      border-top-right-radius: 0;
                    "
                            className="btn btn-info"
                          >
                            See Detailed Description
                          </a>
                        </div>
                      </div>;
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
