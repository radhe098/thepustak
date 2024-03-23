const mongoose = require("mongoose");
const PdfDetailsSchema = new mongoose.Schema(
  { 
    thumb: String,
    pdf: String,
    title: String,
    category: String,
    rating: Number,
  },
  { collection: "PdfDetails" }
);

module.exports = mongoose.model("PdfDetails", PdfDetailsSchema);