const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
  description: {
    markdown: String,
    sanitizedHtml: String,
  },
  modules: [
    {
      num: Number,
      markdown: String,
      sanitizedHtml: String,
    },
  ],
  pdfs: [
    {
      name: String,
      link: String,
    },
  ],
  das: [
    {
      name: String,
      link: String,
    },
  ],
});

module.exports = mongoose.model("courses", CourseSchema);
