  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
    name:  String,
    age: Number,
    latitude: mongoose.Types.Decimal128,
    langitude: mongoose.Types.Decimal128,
    monthlyIncome: Number,
    experienced: Boolean,    
  });

  let User = mongoose.model('Users', userSchema);

  module.exports = User

