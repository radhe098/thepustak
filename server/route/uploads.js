const pdf2pic = require("pdf2pic");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const pdfDetails = require("../model/booksdata");
router.use("/files",express.static("files"));
const path = require("path");

// const pdf2pic = require("pdf2pic");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
const PdfSchema = mongoose.model("PdfDetails");
const upload = multer({ storage: storage });

// router.post("/upload-files", upload.fields([{ name: 'file', maxCount: 1 }, { name: 'thumbnail', maxCount: 1 }]), async (req, res) => {
//   console.log(req.file);
//   // res.send("on page upload-files");
//   const title = req.body.title;
//   const fileName = req.file.file[0].filename; 
//   const thumbnail = req.file.thumbnail[0].fileName; 
//   const category = req.body.category;

  
//   try {
  
//     await PdfSchema.create({ title: title, pdf: fileName, category: category, thumb: thumbnail});
//     res.send({ status: "ok" });
//   } catch (error) {
//     console.error(error); // Log the error
//     res.json({ status: error });
//   }
// });

router.post("/upload-files", upload.fields([{ name: 'file', maxCount: 1 }, { name: 'thumbnail', maxCount: 1 }]), async (req, res) => {
  console.log(req.files);
  const title = req.body.title;
  const fileName = req.files.file[0].filename; 
  const thumbnail = req.files.thumbnail[0].filename; 
  const category = req.body.category;

  try {
    await PdfSchema.create({ title: title, pdf: fileName, category: category, thumb: thumbnail});
    res.send({ status: "ok" });
  } catch (error) {
    console.error(error); 
    res.json({ status: error });
  }
});
router.get("/get-files", async (req, res) => {  
  try {
    await PdfSchema.find({}).then((data) => { // Wrap the code inside a try-catch block
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});


module.exports = router;