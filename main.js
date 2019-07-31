const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

var userRoute = require('./routers/user.route.js'); 
var authRoute = require('./routers/auth.route.js'); 
var protectLogin = require('./protect/protect.login.js');

var app = express();
var port = 3000;


app.get('/', (req,res)=>{
	res.render('home',{});
});
app.set('views', './views');
app.set('view engine', 'pug');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.use('/users', protectLogin.protectLogin ,userRoute);
app.use('/auth', authRoute);



app.listen(port, function(){
	console.log('Server listen on port '+port);
});





























































// //----------------------------------------------------
// 					//Cơ bản

// //Hiển thị "Hello" trên trang http://localhost:3000/example
// app.get('/example', function(request, response){
// 	response.send('<h1>Hello</h1>');
// });


// //Hiển thị trên terminal "Server listen on port3000" khi trang đc load
// app.listen(port, function(){
// 	console.log('Server listen on port '+port);
// });

// //-----------------------------------------------------
// 					//Pug

//Import Pug
// app.set('views', './views');
// app.set('view engine', 'pug');


// //Hiển thị nội dung trong file index.pug lên trang chủ với Object là phần bổ sung
// app.get('/', function (req, res) {
//   res.render('index',{})
// });


//-----------------------------------------------------
					// Query parameters

// var users = [
// 	{name: 'Thuan', age: '19'},
// 	{name: 'Thinh', age: '19'},				//toàn bộ chuyển qua db.json
// 	{name: 'Phat', age: '19'},
// 	{name: 'Khoa', age: '19'},
// 	{name: 'Tien', age: '19'},
// 	{name: 'Minh', age: '19'},
// 	{name: 'Lam', age: '19'}
// ];

// //Hiển thị file index.pug lên trang /users với Object bổ sung là mảng users
// app.get('/users',function(req, res){
// 	res.render('users/index',{ users: db.get('users').value(), nameSearch: ""});
// });


// //Thực hiện hành động khi có request đến /users/search
// app.get('/users/search', (req,res)=>{
// 	var q = req.query.q;
// 	var filteredUsers = users.filter(function(x){
// 		return x.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
// 	})
	
// 	res.render('users/index',{ users: filteredUsers, nameSearch: q});
// });


//-----------------------------------------------------
					// POST

//import
// var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// //render file create.pug lên đường link .../users/create 
// app.get('/users/create', function(req, res){
// 	res.render('users/create');
// });

// //Thực hiện hành động khi có request POST đến /users/create
// app.post('/users/create', function(req, res){
// 	users.push(req.body);
// 	res.redirect('/users');
// });



//-----------------------------------------------------
					// lowdb


// //import
// var low = require('lowdb')
// var FileSync = require('lowdb/adapters/FileSync')
// var adapter = new FileSync('db.json')             //file db.json cùng thư mục với file js
// var db = low(adapter)


// // Set some defaults (cho dạng ban đầu của db nếu nó là file empty)
// db.defaults({ users: []})
// 	.write()


//
// app.get('/users',function(req, res){
// 	res.render('users/index',{ users: db.get('users').value(), nameSearch: ""});
// });
// app.get('/users/search', (req,res)=>{
// 	var q = req.query.q;
// 	var filteredUsers = db.get('users').value().filter(function(x){
// 		return x.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
// 	})
	
// 	res.render('users/index',{ users: filteredUsers, nameSearch: q});
// });
// app.get('/users/create', function(req, res){
// 	res.render('users/create');
// });
// app.post('/users/create', function(req, res){
// 	req.body.id = shortid.generate();
// 	db.get('users').push(req.body).write();
// 	res.redirect('/users');
// });
 

//-----------------------------------------------------
					// set ID

//import

// var shortid = require('shortid');

//thực hiện khi có request ghi data từ url .../users/create 

// app.post('/users/create',function(req,res){	
// 	req.body.id = shortid.generate();		//tạo id
// 	db.get('users').push(req.body).write();		//ghi data vào collection users trong db
// 	res.redirect('/users');				//điều hướng về trang .../users
// });

// //thực hiện khi có request đến url .../users/id với id là chỉ số phần tử nào đó của users
// app.get('/users/:id', function(req,res){		
// 	var id = req.params.id;			//gán giá trị của id ở url cho biến id
// 	var user = db.get('users').find({ id : id }).value();   	//tìm user trùng id trùng biến id
// 	res.render('users/view', {      			//render file view.pug ra màn hình
// 		user: user		
// 	});	
	
// });