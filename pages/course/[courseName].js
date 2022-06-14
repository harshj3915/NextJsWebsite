import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import mongoose from "mongoose";

import styles from "../../styles/Coursepages.module.css";

import Branch from "../../database/models/Branch";
import { useRouter } from "next/router";

const FirstSem = ({ subjects, errors }) => {
  const router = useRouter();
  const { branchName } = router.query;

  return <></>;
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
