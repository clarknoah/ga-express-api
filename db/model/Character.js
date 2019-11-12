const mongoose = require("../connection.js");
const Schema = mongoose.Schema;

const Character = new Schema({
  name: String,
  gender:String,
  culture:String,
  born:String,
  died:String,
  titles:[String],
  aliases:[String],
  father:String,
  mother:String

})

module.exports = mongoose.model('character', Character);
