const mongoose = require("mongoose");

const PaymentDetailsSchema = mongoose.Schema({
    cardName: String,
    cardNumber: String,
    cvv: String,
    expDate: String
});

const PaymentDetailsModel = mongoose.model("PaymentDetails", PaymentDetailsSchema);

module.exports = {
  PaymentDetailsModel
};