const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  email: String,
  items: [
  {
    productId: String,
    quantity: Number
  }
],
  totalPrice: Number,
  status: String,
  datetime: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "Pending",
  },
});
module.exports = { OrderSchema };
