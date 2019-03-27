const contributor = require('../models/ContributorSchema');
const projects = require('../models/ProjectSchema');

function contributor(req,res,next) {
  const {body} = req;
  const {
    name
  }=body;

  contributor.findById(name)
       .populate('subscribing')
       .exec(function(err, user){
            console.log(user.subscribing);
};

module.exports = contributor;
