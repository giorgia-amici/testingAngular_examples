var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partySchema = new Schema({
	name: String,
	organizer: String,
	location: String,
	date: {type: Date, default:Date.now}
});


module.exports = mongoose.model('PartyEvent', partySchema);

// var name = new PartyEvent({ name: 'small' });
// small.save(function (err) {
//   if (err) return handleError(err);
//   console.log('saved!')
// })