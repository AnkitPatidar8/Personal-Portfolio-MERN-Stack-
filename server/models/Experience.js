const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  duration: { type: String, required: true },
  points: [{ type: String }], // bullet points array
}, { timestamps: true });

module.exports = mongoose.model("Experience", ExperienceSchema);
