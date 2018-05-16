//Callback functions
var error = function (err, response, body) {
	console.log('ERROR [%s]', err);
};
var success = function (data) {
	console.log('Data [%s]', data);
};

var profilePic = function (data) {
	var prof = JSON.parse(data);
	console.log(prof.profile_image_url);
};

var Twitter = require('twitter-node-client').Twitter;

// make a directory in the root folder of your project called data
// copy the node_modules/twitter-node-client/twitter_config file over into data/twitter_config`
// Open `data/twitter_config` and supply your applications `consumerKey`, 'consumerSecret', 'accessToken', 'accessTokenSecret', 'callBackUrl' to the appropriate fields in your data/twitter_config file

var twitter = new Twitter();

var users = ['foundryspatial','dotsconnectus','COREGIS','themapsmith','WeAreMaption','RobChohan','mapstertech','voidalpha','parallelmaps','jthomassie1']

for (var i = 0; i < users.length; i++) {
	twitter.getUser( {screen_name: users[i]}, error, profilePic);
};

