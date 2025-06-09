const express = require('express');
const router = express.Router();
const { createInvoice, getAllInvoices } = require('../controllers/invoiceController');

router.post('/create', createInvoice);
router.get('/', getAllInvoices);

module.exports = router;
