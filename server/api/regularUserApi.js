const express = require("express");
const router = express.Router();
const RegularUser = require("../models/RegularUser");

router.post("/regularuser/add", (req, res) => {
  const newRegularUser = new RegularUser(req.body);

  newRegularUser
    .save()
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "New RegularUser Created",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/regularuser/get", (req, res) => {
  RegularUser.findById(req.query.id)
    .then((data) => {
      res
        .status(200)
        .json({ data, success: true, message: "RegularUser Found" });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.post("/regularuser/update", (req, res) => {
  const { id, updated } = req.body;

  RegularUser.findOneAndUpdate({ _id: id }, updated, {
    upsert: true,
    useFindAndModify: false,
    returnDocument: "after",
  })
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "RegularUser Updated",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/regularuser/delete", (req, res) => {
  RegularUser.findOneAndDelete(req.query.id)
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "RegularUser Deleted",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

module.exports = router;
