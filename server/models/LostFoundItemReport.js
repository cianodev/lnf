const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LostFoundItemReportSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  item_type: String, // 'lost' or 'found'
  item_description: String,
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "ItemCategory",
  },
  date_lost_found: Date,
  location_id: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
  status: String, // 'returned', 'pending', 'under review'
  date_created: {
    type: Date,
    default: Date.now,
  },
  last_updated: Date,
});

module.exports = mongoose.model(
  "LostFoundItemReport",
  LostFoundItemReportSchema
);
