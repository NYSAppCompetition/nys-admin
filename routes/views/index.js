(function(){
	var keystone = require('keystone');
	exports = module.exports = function (req, res) {
		res.redirect('/keystone/signin');
	};
})();
