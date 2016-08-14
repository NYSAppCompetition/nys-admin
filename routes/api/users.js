(function(){
	var keystone = require('keystone'),
		User = keystone.list('User'),
		utils = require('../../util/utils');
	/**
	 * Get all users from the database.
	 * @param req
	 * @param res
	 */
	exports.index = function(req, res){
		User.model
			.find({})
			.select('-password') //select all fields except password field
			.exec(function(err, users){
				if(err || !users){
					utils.handleDBError(err, res)
				}else{
					res.json(users);
				}
			});
	};
	/**
	 * Get a single user given an id.
	 * @param req
	 * @param res
	 */
	exports.show = function(req, res){
		User.model
			.findOne({"_id": req.params.id})
			.select('-password')
			.exec(function(err, user){
				if(err || !user){
					utils.handleDBError(err, res);
				}else{
					res.json(user);
				}
			});
	};
	/**
	 * Create a user from the request body
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	exports.create = function(req, res){
		var user = new User.model(req.body);
		user.save(function(err){
			if(err){
				utils.handleDBError(err, res);
			}else{
				res.json(user._id);
			}
		});
	};
})();
