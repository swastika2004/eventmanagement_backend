const express = require("express");
const {
  createCategory,
  getAllCategory
} = require("../controllers/category.controller");

const router = express.Router();

router.post("/create-category", createCategory);
router.get("/getAllCategory",getAllCategory)

module.exports = router;
