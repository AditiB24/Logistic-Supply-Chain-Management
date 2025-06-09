const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  transporter: {
    type: String,
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  distanceInKm: {
    type: Number,
    required: true,
  },
  ratePerKm: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  invoiceDate: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: true,
  },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;
