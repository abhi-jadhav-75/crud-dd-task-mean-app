const mongoose = require("mongoose");

// Use native Promises
mongoose.Promise = global.Promise;

// Build DB object
const db = {};

db.mongoose = mongoose;
db.url = process.env.MONGODB_URI || "mongodb://mongo:27017/tutorials_db";

// Load models
db.tutorials = require("./tutorial.model.js")(mongoose);

// Export single db object
module.exports = db;

