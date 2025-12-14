const express = require("express");
const {
  craeteCategory,
  getAllCategory
} = require("../controllers/category.controller");

const router = express.Router();

router.post("/create-category", craeteCategory);
router.get("/getAllCategory",getAllCategory)

module.exports = router;
