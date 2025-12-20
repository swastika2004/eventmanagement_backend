const express = require("express");
const {
  craeteCategory,
  getAllCategory,
  updateCategory,
  deleteCategory
} = require("../controllers/category.controller");

const router = express.Router();

router.post("/create-category", craeteCategory);
router.get("/getAllCategory",getAllCategory);
router.put("/updateCategory/:id", updateCategory);
router.delete("/deleteCategory/:id", deleteCategory);

module.exports = router;
