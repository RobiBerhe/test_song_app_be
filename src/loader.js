const { DB_URL } = require('./config');

const mongoose = require('mongoose');

(async () => {
    console.log("loading dependencies...");
    await mongoose.connect(DB_URL);
    console.log("Connected to db!");
})();