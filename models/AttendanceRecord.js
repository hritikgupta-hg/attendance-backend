// models/AttendanceRecord.js
const mongoose = require("mongoose");

const myCollectionSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  date: { type: String, required: true },
  name: { type: String, required: true },
  status: { type: String, required: true },
});

const AttendanceRecord = mongoose.model("mycollection", myCollectionSchema);

module.exports = AttendanceRecord;
