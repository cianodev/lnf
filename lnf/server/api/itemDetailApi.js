const express = require("express");
const router = express.Router();
const ItemDetail = require("../models/ItemDetail");

router.post("/itemdetail/add", (req, res) => {
  const newItemDetail = new ItemDetail(req.body);

  newItemDetail
    .save()
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "New ItemDetail Created",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/itemdetail/get", (req, res) => {
  ItemDetail.findById(req.query.id)
    .then((data) => {
      res
        .status(200)
        .json({ data, success: true, message: "ItemDetail Found" });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.post("/itemdetail/update", (req, res) => {
  const { id, updated } = req.body;

  ItemDetail.findOneAndUpdate({ _id: id }, updated, {
    upsert: true,
    useFindAndModify: false,
    returnDocument: "after",
  })
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "ItemDetail Updated",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/itemdetail/delete", (req, res) => {
  ItemDetail.findOneAndDelete(req.query.id)
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "ItemDetail Deleted",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

module.exports = router;
