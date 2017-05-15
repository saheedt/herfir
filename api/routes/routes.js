'use strict';

module.exports = (app)=>{
	let controller = require('../controllers/controller');

	app.route('/login')
		.post(controller.login);

}