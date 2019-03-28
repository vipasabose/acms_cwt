const Contributors = require('../models/ContributorSchema');
const projects = require('../models/ProjectSchema');

function contributor(req,res,next) {
  const {body} = req;
  const {
    name
  }=body;

  /*Contributors.findById(name)
       .populate('subscribing')
       .exec(function(err, user){
         if(err){
             res.status(404).send({
               success: false,
               message:'Error: Server error'});
           }
           else{
               res.status(400).send({
                 success: true});
                 console.log(user[0].subscribing);
           }
       });*/

       Contributors.find({name:name},(err,existingUsers)=>{
         if(err){
           res.status(404).send({
             success: false,
             message:'Error: Server error'});
         }
         else if(existingUsers.length === 0){
           res.status(201).send({
             success: false,
             message: 'Error: Contributor does not exist',
             name: name});
         }
         else{
           console.log(existingUsers[0].subscribing);
         }
       });
};

module.exports = contributor;
