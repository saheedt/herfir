let express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let routes = require('./api/routes/routes');
routes(app);
app.listen(port);

console.log('Herfir test app started on', port);