(function(){
	var keystone = require('keystone'),
		User = keystone.list('User'),
		utils = require('../../util/utils');
	/**
	 * Searches posts by query parameters.
	 * @param req
	 * @param res
	 */
	exports.index = function(req, res){
		User.model
			.find({})
			.select('-password')
			.exec(function(err, users){
				if(err || !users){
					utils.handleDBError(err, res)
				}else{
					res.json(users);
				}
			});
	};
	/**
	 * Get a single user given a slug.
	 * @param req
	 * @param res
	 */
	exports.show = function(req, res){
		User
			.model
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

	exports.create = function(req, res){
		

	};

	
})();