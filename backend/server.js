const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', require('./routes/contactRoute'));

// DB connect
mongoose.connect(MONGODB_URI)
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));