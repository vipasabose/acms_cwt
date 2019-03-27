const Contributor = require('../models/ContributorSchema');
const Reviewer = require('../models/ReviewerSchema');
const Project = require('../models/ProjectSchema');

function newproject(req,res,next){
  const {body} = req;
  const {
    pname,
    contributors,
    reviewer
  }=body;
  if(!pname){
    res.status(101).send({
      success: false,
      message: 'Project name cannot be empty'
    });
  }
    if(!contributors){
      res.status(102).send({
        success: false,
        message: 'One or more contributors is required'
      });
    }
    if(!reviewer){
      res.status(103).send({
        success: false,
        message: 'Reviewer field cannot be empty'
      });
    }
    const newProject = new Project({pname:pname});
    newProject.save();
    var contributor=contributors.split(",");
    Reviewer.find({reviewer:reviewer},(err,existingUsers)=>{
      if(err){
        res.status(404).send({
          success: false,
          message:'Error: Server error'});
      }
      else if(existingUsers.length === 0){
        res.status(201).send({
          success: false,
          message: 'Error: Reviewer does not exist'});
      }
      else{
        /*res.status(202).send({
          success: true,
          message: 'Reviewer exists'});*/
          existingUsers.projects.push(newProject);
          existingUsers.save();
          newProject.reviewer=existingUsers._id;
      }
    });

    for(i=0;i<contributor.length;i++)
    {
      Contributor.find({name:contributor[i]},(err,existingUsers)=>{
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
          /*res.status(202).send({
            success: true,
            message: 'Contributor exists'});*/
            existingUsers.projects.push(newProject);
            existingUsers.save();
            newProject.contributors.push(existingUsers);
        }
      });
    }
    newProject.save((err,user)=>{
      if(err){
          res.status(404).send({
            success: false,
            message:'Error: Server error'});
        }
        else{
            res.status(400).send({
              success: true,
              message:'Project created successfully'});
              console.log(req.body);
        }

    });
};

module.exports = newproject;
