const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const categoryRoutes = require("./src/routes/category.routes");
const authRoutes = require("./src/routes/auth.routes");

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB
mongoose
  .connect("mongodb://localhost:27017/eventmanagement")
  .then(() => console.log("MongoDB connected"))
  .catch(console.error);

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", authRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
