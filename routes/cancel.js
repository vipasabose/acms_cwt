
const Enable = require('../models/EnableSchema');

function cancel(req,res,next){

  const {body} = req;
  const {
    pid
  }=body;
  var version;
//console.log(pid);
 Enable.find({pid:pid},(err,entry)=>{
   if(err){
     res.status(404).send({
       success: false,
       message:'Error: Server error'});
   }
   else {
     var enuser = new Enable();
     enuser = entry[0];
     enuser.userid = '0';

     enuser.save((err,en)=>{
       if(err){
         console.log(err);
         res.status(404).send({
           success: false,
           message:'Error: Server error'});
       }
       else
         {
           res.status(201).send({
             success: true,
             message:'Lock removed successfully'});
         }

     });
   }
 });


};

module.exports = cancel;
