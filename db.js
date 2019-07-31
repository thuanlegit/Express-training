var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')
var adapter = new FileSync('db.json')             //file db.json cùng thư mục với file js
var db = low(adapter)
db.defaults({ users: []})
	.write()



module.exports = db;