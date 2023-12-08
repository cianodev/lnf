const express = require("express");
const router = express.Router();
const ItemCategory = require("../models/ItemCategory");

router.post("/itemcategory/add", (req, res) => {
  const newItemCategory = new ItemCategory(req.body);

  newItemCategory
    .save()
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "New ItemCategory Created",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/itemcategory/get", (req, res) => {
  ItemCategory.findById(req.query.id)
    .then((data) => {
      res
        .status(200)
        .json({ data, success: true, message: "ItemCategory Found" });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.post("/itemcategory/update", (req, res) => {
  const { id, updated } = req.body;

  ItemCategory.findOneAndUpdate({ _id: id }, updated, {
    upsert: true,
    useFindAndModify: false,
    returnDocument: "after",
  })
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "ItemCategory Updated",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/itemcategory/delete", (req, res) => {
  ItemCategory.findOneAndDelete(req.query.id)
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "ItemCategory Deleted",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

module.exports = router;
