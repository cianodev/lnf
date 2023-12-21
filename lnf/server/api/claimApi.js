const express = require("express");
const router = express.Router();
const Claim = require("../models/Claim");

router.post("/claim/add", (req, res) => {
  const newClaim = new Claim(req.body);

  newClaim
    .save()
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "New Claim Created",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/claim/get", (req, res) => {
  Claim.findById(req.query.id)
    .then((data) => {
      res.status(200).json({ data, success: true, message: "Claim Found" });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.post("/claim/update", (req, res) => {
  const { id, updated } = req.body;

  Claim.findOneAndUpdate({ _id: id }, updated, {
    upsert: true,
    useFindAndModify: false,
    returnDocument: "after",
  })
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "Claim Updated",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/claim/delete", (req, res) => {
  Claim.findOneAndDelete(req.query.id)
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "Claim Deleted",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

module.exports = router;
