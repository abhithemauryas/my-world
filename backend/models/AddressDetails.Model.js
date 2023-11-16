const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
    address1: String,
    address2: String,
    city: String,
    country: String,
    firstName: String,
    lastName: String,
    state1: String,
    zip: String
});

const AddressModel = mongoose.model("Address", AddressSchema);

module.exports = {
  AddressModel,
};