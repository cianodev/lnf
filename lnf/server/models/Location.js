const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  address: String,
  city_town: String,
  zipcode: String,
  country: String,
  date_created: {
    type: Date,
    default: Date.now,
  },
  last_updated: Date,
});

module.exports = mongoose.model("Location", LocationSchema);
