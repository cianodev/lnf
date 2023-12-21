const express = require("express");

const adminUserApi = require("./adminUserApi");
const claimApi = require("./claimApi");
const itemCategoryApi = require("./itemCategoryApi");
const itemDetailApi = require("./itemDetailApi");
const itemPhotoApi = require("./itemPhotoApi");
const locationApi = require("./locationApi");
const lostFoundItemReportApi = require("./lostFoundItemReportApi");
const regularUserApi = require("./regularUserApi");
const userApi = require("./userApi");

const router = express.Router();

router.use(adminUserApi);
router.use(claimApi);
router.use(itemCategoryApi);
router.use(itemDetailApi);
router.use(itemPhotoApi);
router.use(locationApi);
router.use(lostFoundItemReportApi);
router.use(regularUserApi);
router.use(userApi);

module.exports = router;
