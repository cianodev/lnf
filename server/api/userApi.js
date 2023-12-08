const express = require("express");

const router = express.Router();

const User = require("../models/User");

router.post("/user/add", async (req, res) => {
  const newUser = new User(req.body);

  newUser
    .save()
    .then((data) => {
      res
        .status(200)
        .json({ data, success: true, message: "New User Created" });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/user/get", async (req, res) => {
  User.findById(req.query.id)
    .then((data) => {
      res.status(200).json({ data, success: true, message: "User Found" });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.post("/user/update", async (req, res) => {
  const { id, updated } = req.body;

  User.findOneAndUpdate({ _id: id }, updated, {
    upsert: true,
    useFindAndModify: false,
    returnDocument: "after",
  })
    .then((data) => {
      res.status(200).json({ data, success: true, message: "User Updated" });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/user/delete", async (req, res) => {
  User.findOneAndDelete(req.query.id)
    .then((data) => {
      res.status(200).json({ data, success: true, message: "User Deleted" });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

module.exports = router;
