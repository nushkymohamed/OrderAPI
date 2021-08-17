const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  
  code: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  amount: { type: Number, required: true }

});

const Order = mongoose.model("orders", OrderSchema);
module.exports = Order;