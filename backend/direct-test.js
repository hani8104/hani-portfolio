const mongoose = require('mongoose');
require('dotenv').config();

const URI = "mongodb+srv://hanipathak8104_db_user:Pathak$773735@portfolio-db.be6gzfh.mongodb.net/?appName=portfolio-db";

mongoose.connect(URI)
  .then(() => {
    console.log("Connection Success! ✅");
    process.exit(0);
  })
  .catch(err => {
    console.error("Connection Failed: ❌", err.message);
    process.exit(1);
  });
