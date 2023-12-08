const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RegularUserSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  user_bio: String,
  items_claimed: Number,
  items_reports_count: Number,
  notification_setting: String, // 'on' or 'off'
  credential_name: String,
  credential_file_url: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("RegularUser", RegularUserSchema);
