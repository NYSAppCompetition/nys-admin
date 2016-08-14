(function(){
	 var keystone = require('keystone'),
		Types = keystone.Field.Types,
	/**
	 * User Model
	 * ==========
	 */
	User = new keystone.List('User');

	User.add({
		name: { type: Types.Name, required: true, index: true },
		middle_name: {type: Types.Text, label: "Middle Name", initial: true, required: true, index: true},
		email: { type: Types.Email, initial: true, required: true, index: true },
		password: { type: Types.Password, initial: true, required: true },
	}, 'Profile', {
		phone: {type: Types.Text},
		dob: { type: Types.Date, label: "DOB"},
		gender: {type: Types.Select, options: 'male, female'},
		trn: {type: Types.Number}
	}, 'Permissions', {
		isAdmin: { type: Boolean, label: 'Can access Keystone', index: true, default: false },
	});
	// Provide access to Keystone
	User.schema.virtual('canAccessKeystone').get(function () {
		return this.isAdmin;
	});
	/**
	 * Registration
	 */
	User.defaultColumns = 'name, email, isAdmin';
	User.register();
})();
