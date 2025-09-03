const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  college: { type: String, required: true },
  year: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Education", EducationSchema);
