const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    
    
    pver:{type: Schema.Types.ObjectId, ref: 'ProjectVersion' },
    timestamp:date,
    comment:String,
    name:{type: Schema.Types.ObjectId, ref: 'Contributor' }
    
   
});
module.exports = mongoose.model('Comment', CommentSchema);
