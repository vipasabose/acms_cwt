const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjectVersionSchema = new Schema({


    versionNum: Number,
    description:String,
    projectname:{type: Schema.Types.ObjectId, ref: 'Project' }




});
module.exports = mongoose.model('ProjectVersion', ProjectVersionSchema);
