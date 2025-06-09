const Invoice = require('../models/Invoice');
const generatePDF = require('../utils/pdfGenerator');
const sendEmailWithAttachment = require('../utils/emailSender');
const path = require('path');

exports.createInvoice = async (req, res) => {
  try {
    const invoiceData = req.body;
    const newInvoice = new Invoice(invoiceData);
    await newInvoice.save();

    const filePath = path.join(__dirname, `../invoices/${newInvoice.invoiceNo}.pdf`);
    await generatePDF(newInvoice, filePath);
    await sendEmailWithAttachment(newInvoice.email, `Invoice ${newInvoice.invoiceNo}`, 'Please find the invoice attached.', filePath);

    res.status(201).json({ message: 'Invoice created and emailed', invoice: newInvoice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().sort({ date: -1 });
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


