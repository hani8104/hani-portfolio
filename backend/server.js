const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

// ✅ Root route (IMPORTANT)
app.get('/', (req, res) => {
  res.send("API is running 🚀");
});

// Routes
app.use('/api/contact', require('./routes/contactRoute'));

// DB connect + server start
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB Atlas Connected ✅");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀`);
    });
  })
  .catch(err => {
    console.error("MongoDB Error:", err.message);
  });