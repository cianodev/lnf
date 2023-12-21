const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminUserSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  access_level: String, // 'full control', 'restricted access'
  admin_id: {
    type: String,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("AdminUser", AdminUserSchema);
