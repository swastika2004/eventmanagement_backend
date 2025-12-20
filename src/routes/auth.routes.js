const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth.controller");
const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected example
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Profile data",
    user: req.user,
  });
});

module.exports = router;
