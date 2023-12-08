const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemCategorySchema = new Schema({
  category_name: String,
  description: String,
  date_created: {
    type: Date,
    default: Date.now,
  },
  last_updated: Date,
});

module.exports = mongoose.model("ItemCategory", ItemCategorySchema);
