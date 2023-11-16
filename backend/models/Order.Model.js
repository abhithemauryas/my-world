const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  products: [{ ProductId: String, quantity: String }],
  UserID: String,
  AddressId:String,
  paymentId:String,
});

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = {
  OrderModel,
};
