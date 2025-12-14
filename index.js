const express = require("express");
const mongoose = require("mongoose");
const categoryRoutes = require("./routes/category.routes");

const app = express();

app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/eventmanagement")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/categories", categoryRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
