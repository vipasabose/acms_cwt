const Contributors = require('../models/ContributorSchema');
const Projects = require('../models/ProjectSchema');

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
             message: 'Error: Contributor does not exist'});
         }
         else{
           //console.log(existingUsers[0].subscribing[10]);
           var pid = new Array();
           pid = existingUsers[0].subscribing;
           //console.log(pid);
           for(i=0;i<pid.length;i++)
           //var pid = existingUsers[0].subscribing[10];
           {Projects.find({_id:pid[i]},(err,projects)=>{
             if(err){
               res.status(404).send({
                 success: false,
                 message:'Error: Server error'});
             }
             else if(existingUsers.length === 0){
               res.status(201).send({
                 success: false,
                 message: 'Error: Project does not exist'});
             }
             else {

               res.status(400).send({
                 success:true,
                 message: 'Projects found'
               });

               console.log(projects);
             }
           });}
         }
       });
};

module.exports = contributor;
