const mongoose = require("mongoose");

const BranchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }],
});

const branch = mongoose.models
  ? mongoose.models.branch
  : mongoose.model("branch", BranchSchema);

export default branch;
