const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const registrationSchema = new mongoose.Schema({
    email:  String,
    name: {
    type: String,
    required: true
  },
    pswd: {
    type: String,
    required: true
  },
    isReviewer: String

});

registrationSchema.methods.generateHash = function(pswd){
  return bcrypt.hashSync(pswd,bcryt.genSaltSync(8),null);
}

registrationSchema.methods.validPassword = function (pswd) {
  return bcrypt.compareSync(pswd,this.pswd);
}

module.exports = mongoose.model('Registration', registrationSchema);
