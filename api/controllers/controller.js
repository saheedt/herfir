'use strict';

let firebase = require('firebase');

let config = {
  apiKey: "AIzaSyCRDJauN0c0N0jXhEF6A_ORrMNDOhGDzW4",
  authDomain: "test-project-46ac8.firebaseapp.com",
  databaseURL: "https://test-project-46ac8.firebaseio.com/",
  storageBucket: "gs://test-project-46ac8.appspot.com",
};

firebase.initializeApp(config);

exports.login = (req, res)=>{
	console.log(req);

}