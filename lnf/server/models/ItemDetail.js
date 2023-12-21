const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemDetailSchema = new Schema({
  item_id: {
    type: Schema.Types.ObjectId,
    ref: "LostFoundItemReport",
  },
  primary_color: String,
  secondary_color: String,
  specific_description: String,
  specific_location: String,
  brand: String,
  model: String,
  serial_number: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ItemDetail", ItemDetailSchema);
