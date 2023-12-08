const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LostFoundItemReportSchema = new Schema({
  user: Object,
  title: String,
  item_type: String, // 'lost' or 'found'
  category: String ,
  date_lost_found: Date,
  model: String,
  serial_number: String,
  primary_color: String,
  secondary_color: String,
  brand: String,
  specific_description: String,
  specific_location: String,
  status: { // 'returned', 'pending', 'under review'
    type: String,
    default: 'review',
  }, 
  last_updated: {
    type: Date,
    default: Date.now,
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "LostFoundItemReport",
  LostFoundItemReportSchema
);
