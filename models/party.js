var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partySchema = new Schema({
	name: String,
	organizer: String,
	location: String,
	date: {type: Date, default:Date.now}
});

module.exports = mongose.model('Party', partySchema);