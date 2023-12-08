const express = require("express");
const router = express.Router();
const AdminUser = require("../models/AdminUser");

router.post("/adminUser/add", async (req, res) => {
  const newAdminUser = new AdminUser(req.body);

  newAdminUser
    .save()
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "New AdminUser Created",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/adminUser/get", async (req, res) => {
  AdminUser.findById(req.query.id)
    .then((data) => {
      res.status(200).json({ data, success: true, message: "AdminUser Found" });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.post("/adminUser/update", async (req, res) => {
  const { id, updated } = req.body;

  AdminUser.findOneAndUpdate({ _id: id }, updated, {
    upsert: true,
    useFindAndModify: false,
    returnDocument: "after",
  })
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "AdminUser Updated",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

router.get("/adminUser/delete", async (req, res) => {
  AdminUser.findOneAndDelete(req.query.id)
    .then((data) => {
      res.status(200).json({
        data,
        success: true,
        message: "AdminUser Deleted",
      });
    })
    .catch((error) => {
      res.status(500).json({ data: null, success: false, message: error });
    });
});

module.exports = router;
