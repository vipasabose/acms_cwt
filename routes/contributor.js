const Contributors = require('../models/ContributorSchema');
const Projects = require('../models/ProjectSchema');
const Enable  = require('../models/EnableSchema');

function contributor(req,res,next) {
  var pdetails =  new Array();
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
           console.log('error here');
           res.status(400).send({
             success: false,
             message: 'Error: Contributor does not exist'});
         }
         else{
           //console.log(existingUsers[0].subscribing[10]);
           var pid = new Array();
           pid = existingUsers[0].subscribing;
           var x=0;
           //console.log(pid);
           for(i=0;i<pid.length;i++)
           //var pid = existingUsers[0].subscribing[10];
           {Projects.find({_id:pid[i]},(err,projects)=>{
             if(err){
               res.status(404).send({
                 success: false,
                 message:'Error: Server error'});
             }
             else if(projects.length === 0){
               res.status(400).send({
                 success: false,
                 message: 'Error: Project does not exist'});
             }
             else {

               /*res.status(200).send({
                 success:true,
                 message: 'Projects found'

               });*/
               var enstatus;
               Enable.find({pid:projects[0]._id},(err, user)=>{
                 if(err){
                   res.status(404).send({
                     success: false,
                     message:'Error: Server error'});
                 }
                 else if(user.length===0)
                 {
                   res.status(400).send({
                     success: false,
                     message:'Project does not exist'});
                 }
                 else {

                   //console.log(user[0].userid);
                   if(user[0].userid==='0')
                   {
                     x=x+1;
                     enstatus = 1;
                   }
                   else {
                     x=x+1;
                     enstatus = 0;
                   }

                   var json = {pid: projects[0]._id, pname : projects[0].pname, pver:projects[0].__v,enstatus:enstatus};
                   //console.log(json);
                   pdetails.push(json);
                   //console.log(pdetails);
                   //console.log(projects);
                   //console.log(x);
                   if(x===pid.length)
                   {
                     //console.log(pdetails);
                     res.status(200).send({
                       success:true,
                       message: 'Projects found',
                       pdetails: pdetails});
                   }
                 }
               });


             }
           });}



         }
       });
};

module.exports = contributor;
