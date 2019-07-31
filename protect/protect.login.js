const express = require('express');
var db = require('../db');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());


module.exports.protectLogin = function(req, res, next){
	if(!req.cookies.userid){
		res.redirect('/auth');
		return;
	}
	var user = db.get('users').find({id: req.cookies.userid}).value();

	if(req.cookies.userid !== user.id){
		res.redirect('/auth');
		return;
	}
	next();
};