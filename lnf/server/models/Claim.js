const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClaimSchema = new Schema({
  item_id: {
    type: Schema.Types.ObjectId,
    ref: "LostFoundItemReport",
  },
  claim_user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  non_registered_claim_name: String,
  non_registered_claim_contact: String,
  non_registered_claim_email: String,
  status: String, // 'pending', 'under review', 'claimed', 'rejected'
  claim_description: String,
  specific_item_info: String,
  date_created: {
    type: Date,
    default: Date.now,
  },
  last_updated: Date,
});

module.exports = mongoose.model("Claim", ClaimSchema);
