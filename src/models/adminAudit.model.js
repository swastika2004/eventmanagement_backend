import mongoose from "mongoose";

const adminAuditSchema = new mongoose.Schema({
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  action: { type: String, required: true }, // "Create Event", "Delete User", etc.

  target: { type: String }, // id or name of item changed

  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("AdminAudit", adminAuditSchema);
