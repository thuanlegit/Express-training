var db = require('../db');
var md5 = require('md5');

module.exports.index = function(req, res, next) {
	res.render('../views/auth/login', { errors: [] });
};

module.exports.postLogin = function(req, res, next) {
	var filteredUsers = db.get('users').value().filter(function(x){
		return x.email === req.body.email;
	});
	if(filteredUsers.length === 0){ 
		res.render('../views/auth/login', { errors: ['Tài khoản không tồn tại!'], values: req.body });
	}else{
		if(filteredUsers[0].password === md5(req.body.password)){
			res.cookie('userid', filteredUsers[0].id);
			res.redirect('/users');
		}else{
			res.render('../views/auth/login', { errors: ['Mật khẩu không đúng!'], values: req.body });
		}
	}
	
};