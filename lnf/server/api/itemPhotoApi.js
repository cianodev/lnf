const express = require("express");
const router = express.Router();
const ItemPhoto = require("../models/ItemPhoto");

router.post("/itemphoto/add", (req, res) => {
  const newItemPhoto = new ItemPhoto(req.body);

  newItemPhoto
    .save()
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "New ItemPhoto Created",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/itemphoto/get", (req, res) => {
  ItemPhoto.findById(req.query.id)
    .then((data) => {
      res.status(200).json({ data, success: true, message: "ItemPhoto Found" });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.post("/itemphoto/update", (req, res) => {
  const { id, updated } = req.body;

  ItemPhoto.findOneAndUpdate({ _id: id }, updated, {
    upsert: true,
    useFindAndModify: false,
    returnDocument: "after",
  })
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "ItemPhoto Updated",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/itemphoto/delete", (req, res) => {
  ItemPhoto.findOneAndDelete(req.query.id)
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "ItemPhoto Deleted",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

module.exports = router;
