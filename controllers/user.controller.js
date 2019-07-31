var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res){
	res.render('users/index',{ 
		users: db.get('users').value(), nameSearch: ""
	});
};

module.exports.search = (req,res)=>{
	var q = req.query.q;
	var filteredUsers = db.get('users').value().filter(function(x){
		return x.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	})
	
	res.render('users/index',{ users: filteredUsers, nameSearch: q});
};

module.exports.create = function(req, res){
	res.render('users/create', { errors: []});
};

module.exports.postCreate = function(req,res){	
	req.body.id = shortid.generate();
	db.get('users').push(req.body).write();		
	res.redirect('/users');				
};

module.exports.view = function(req,res){		
	var id = req.params.id;			
	var user = db.get('users').find({ id : id }).value();   
	res.render('users/view', {      			
		user: user		
	});		
};