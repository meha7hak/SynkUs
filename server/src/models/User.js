import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  spotifyId: { type: String, required: true, unique: true },
  displayName: String,
  email: String,
  accessToken: String,
  refreshToken: String,
  createdRooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }]
}, { timestamps: true });

export default mongoose.model("User", userSchema);
