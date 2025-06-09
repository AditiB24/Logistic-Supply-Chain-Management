
// require('dotenv').config(); // for CommonJS

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const invoiceRoutes = require('./routes/invoiceRoutes');

dotenv.config(); // ✅ only once
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Route mount
app.use('/api/invoices', invoiceRoutes);

const PORT = process.env.PORT || 5000;

// ✅ DB connection + only one app.listen()
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error('MongoDB connection error:', err));

// const cors = require('cors');
// app.use(cors());



// import express from 'express'

// const app = express();

// app.get("/", (req,res) => {
//     res.send("server is ready");
// })

// app.listen(5000, () =>{
//     console.log("server started at http://localhost:5000 hello");
// });

