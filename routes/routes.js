var login = require('./login.js');
var createuser = require('./createuser');
var verify = require('./verify');
var logout = require('./logout');

  //router.post('/login',login.login);
  //router.post('/createuser',createuser.createuser);
  //router.post('/verify',function(req, res,next){verify.verify});
  //router.post('/logout',function(req, res,next){logout.logout});


module.exports=login;
module.exports=createuser;
module.exports=verify;
module.exports=logout;
