const PDFDocument = require('pdfkit');
const fs = require('fs');

function generatePDF(invoice, filePath) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filePath));

    doc.fontSize(18).text('Transport Invoice', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Invoice No: ${invoice.invoiceNo}`);
    doc.text(`Company: ${invoice.company}`);
    doc.text(`From: ${invoice.from} → To: ${invoice.to}`);
    doc.text(`Vehicle No: ${invoice.vehicleNo}`);
    doc.text(`Amount: ₹${invoice.amount}`);
    doc.text(`Date: ${new Date(invoice.date).toLocaleDateString()}`);

    doc.end();
    doc.on('finish', () => resolve());
    doc.on('error', reject);
  });
}

module.exports = generatePDF;
