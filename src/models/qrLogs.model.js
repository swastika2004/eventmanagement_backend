import mongoose from "mongoose";

const qrLogSchema = new mongoose.Schema({
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
  scannerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Admin/staff
  scannedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ["success", "failed"], default: "success" }
});

export default mongoose.model("QrLog", qrLogSchema);
