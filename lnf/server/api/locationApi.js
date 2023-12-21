const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

router.post("/location/add", (req, res) => {
  const newLocation = new Location(req.body);

  newLocation
    .save()
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "New Location Created",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/location/get", (req, res) => {
  Location.findById(req.query.id)
    .then((data) => {
      res.status(200).json({ data, success: true, message: "Location Found" });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.post("/location/update", (req, res) => {
  const { id, updated } = req.body;

  Location.findOneAndUpdate({ _id: id }, updated, {
    upsert: true,
    useFindAndModify: false,
    returnDocument: "after",
  })
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "Location Updated",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/location/delete", (req, res) => {
  Location.findOneAndDelete(req.query.id)
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "Location Deleted",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

module.exports = router;
