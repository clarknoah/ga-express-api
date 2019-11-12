const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/asoiaf", { useNewUrlParser: true });

module.exports = mongoose;
