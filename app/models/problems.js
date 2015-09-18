var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection('mongodb://saru95:codefeed@ds061308.mongolab.com:61308/codefeed');
autoIncrement.initialize(connection);


var problemsSchema = mongoose.Schema({
	problem_name: String,
	problem_statement: String,
	problem_input: String,
	problem_output: String
	//date: Date
});

problemsSchema.plugin(autoIncrement.plugin, {
	model: 'Problems',
	field: 'problemid'
});

module.exports = connection.model('Problems', problemsSchema);


