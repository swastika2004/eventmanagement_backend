const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    eventName: { type: String, required: true },
    description: { type: String, required: true },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    eventDate: { type: Date, required: true },
    venue: { type: String, required: true },
    location: { type: String, required: true },

    totalSeats: { type: Number, required: true },
    availableSeats: { type: Number, required: true },

    price: { type: Number, default: 0 },
    imageUrl: { type: String },

    status: {
      type: String,
      enum: ["draft", "published", "cancelled"],
      default: "draft",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
