const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  last_login: Date,
  username: String,
  password: String,
  full_name: String,
  contact_info: String,
  user_type: {
    type: String,
    default: 'member',
  }, // 'admin' or 'regular'
  email: String,
  status: {
    type: String,
    default: 'active',
  }, // 'active', 'inactive', 'banned'
  avatar_url: String,
  date_created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
