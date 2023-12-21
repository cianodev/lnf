const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemPhotoSchema = new Schema({
  claim_id: {
    type: Schema.Types.ObjectId,
    ref: "Claim",
  },
  item_id: {
    type: Schema.Types.ObjectId,
    ref: "LostFoundItemReport",
  },
  photo_url: String,
  file_name: String,
});

module.exports = mongoose.model("ItemPhoto", ItemPhotoSchema);
