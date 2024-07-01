
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  sid: { type: String, required: true },
  name: { type: String, required: true },
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
