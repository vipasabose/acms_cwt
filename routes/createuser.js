const User = require('../models/Registration');
const express = require('express');
const router = express.Router();

//router.post('/createuser',function(req,res,next){
function signup(req,res,next) {


console.log(req.body);
    const {body} = req;
    const {
      email,
      name,
      pswd,
      isReviewer
    }=body;
    if(!name){
      res.status(101).send({
        success: false,
        message: 'Username cannot be empty'
      });
    }
      if(!pswd){
        res.status(102).send({
          success: false,
          message: 'Password cannot be empty'
        });
      }
      //email = email.toLowerCase();

      User.find({
        name:name
      },(err,existingUsers)=>{
        if(err){
          res.status(404).send({
            success: false,
            message:'Error: Server error'});
        }
        else if(existingUsers.length >0){
          res.status(201).send({
            success: false,
            message: 'Error: Username already exists'});
        }
        else{
          //save the details to DB
          const newUser = new User();

          newUser.email = email;
          newUser.name = name;
          newUser.pswd = newUser.generateHash(pswd);
          newUser.isReviewer = isReviewer;
          newUser.save((err,user)=>{
            if(err){
              if(err){
                res.status(404).send({
                  success: false,
                  message:'Error: Server error'});
              }
              else{
                  res.status(100).send({
                    success: true,
                    message:'Signed up successfully'});
                    console.log(req.body);
              }
            }
          });
        }
      });

};

module.exports = signup;
