var login = require('./login');
var createuser = require('./createuser');
var verify = require('./verify');
var logout = require('./logout');

const express = require('express');
const router = express.Router();

  router.post('/login',login);
  router.post('/createuser',createuser);
  //router.post('/verify',function(req, res,next){verify.verify});
  //router.post('/logout',function(req, res,next){logout.logout});


module.exports=router;
//module.exports=createuser;
//module.exports=verify;
//module.exports=logout;
