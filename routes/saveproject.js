const Version = require('../models/ProjectVersionSchema');
const Project = require('../models/ProjectSchema');
const Enable = require('../models/EnableSchema');

function saveproject(req,res,next){
  var projversion = new Version();
  var projectentry = new Project();
  const {body} = req;
  const {
    pid,
    description
  }=body;
  var version;
//console.log(pid);

  Project.find({_id:pid},(err,project)=>{
    if(err){
      res.status(404).send({
        success: false,
        message:'Error: Server error'});
    }
    else {
      version = project[0].__v;



      Enable.find({pid:pid},(err,user)=>{
        if(err){
          res.status(404).send({
            success: false,
            message:'Error: Server error'});
        }
        else {
          var enuser = new Enable();
          enuser = user[0];
          //console.log(user[0]);
          //console.log(enuser.userid);
          console.log(enuser);
          enuser.userid = '0';
          console.log(enuser);
          //console.log(enuser.userid);
          if(enuser.userid==='0')
          {enuser.save((err,en)=>{
            if(err){
              console.log(err);
              res.status(404).send({
                success: false,
                message:'Error: Server error'});
            }
            else {
              projectentry = project[0];
              projversion.versionNum=version+1;
              projversion.description=description;
              projversion.projectname=project[0]._id;
              projversion.status=0;

              projversion.save((err,pv)=>{
                if(err){
                    res.status(404).send({
                      success: false,
                      message:'Error: Server error'});
                  }
                  else{

                      //project.save();

                      projectentry.versions.push(projversion._id);
                      projectentry.save();
                      res.status(201).send({
                        success: true,
                        message:'Project saved successfully'});
                        //console.log(newProject.__v);
                  }

              });
            }
          });}
          else {
            console.log('I am mad');
          }

        }
      });



      //console.log(version);
    }
  });



};

module.exports = saveproject;
