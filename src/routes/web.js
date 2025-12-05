const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getABC,
  getHoi,
} = require("../controllers/homeController");

router.get("/", getHomePage);

router.get("/abc", getABC);

router.get("/hoi", getHoi);

module.exports = router;
