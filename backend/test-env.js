require('dotenv').config();
console.log('URI Prefix:', process.env.MONGODB_URI.substring(0, 20));
console.log('URI Suffix:', process.env.MONGODB_URI.substring(process.env.MONGODB_URI.length - 20));
