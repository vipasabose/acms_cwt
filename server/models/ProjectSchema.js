const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({


   // pid: String,
    pname:String,
    reviewer:{type: Schema.Types.ObjectId, ref: 'Reviewer' },
    contributors    : [{type: Schema.Types.ObjectId, ref: 'Contributor' }]


});
module.exports = mongoose.model('Project', ProjectSchema);
