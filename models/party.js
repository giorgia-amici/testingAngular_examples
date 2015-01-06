var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partySchema = new Schema({
	name: String,
	organizer: String,
	location: String,
	date: String
});


module.exports = mongoose.model('PartyEvent', partySchema);

