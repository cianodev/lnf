const express = require("express");
const router = express.Router();
const LostFoundItemReport = require("../models/LostFoundItemReport");

router.post("/lostfounditemreport/add", (req, res) => {
  const newLostFoundItemReport = new LostFoundItemReport(req.body);

  newLostFoundItemReport
    .save()
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "New LostFoundItemReport Created",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/lostfounditemreport/get", (req, res) => {
  LostFoundItemReport.findById(req.query.id)
    .then((data) => {
      res
        .status(200)
        .json({ data, success: true, message: "LostFoundItemReport Found" });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.post("/lostfounditemreport/update", (req, res) => {
  const { id, updated } = req.body;

  LostFoundItemReport.findOneAndUpdate({ _id: id }, updated, {
    upsert: true,
    useFindAndModify: false,
    returnDocument: "after",
  })
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "LostFoundItemReport Updated",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/lostfounditemreport/delete", (req, res) => {
  LostFoundItemReport.findOneAndDelete(req.query.id)
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "LostFoundItemReport Deleted",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

module.exports = router;
