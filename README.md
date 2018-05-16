README.md

1. make a directory in the root folder of your project called data
2. create a twitter_config.js file w/ your application's `consumerKey`, 'consumerSecret', 'accessToken', 'accessTokenSecret', 'callBackUrl' in the data directory


Get your application key data from your twitter apps dashboard. Then add this to your twitter_config.js:
```
module.exports = {
	"twitterConsumerKey": "xumEFlvGJFwY24rl3OKLBilH7",
	"twitterConsumerSecret": "96k9i1wG34wV05kWIKxV0TO72YymLOkOksrwHK0lipKN46RTPX",
	"twitterAccessToken": "20448935-ukiTiG1uDU4YuovmhygWDkQV96vLSbSTQPaILRsYX",
	"twitterAccessTokenSecret": "Tczrv8xfYAT9WaT0GQiOV3WSTdArnR2MzMkyTES9yYAZC",
	"callBackUrl": "https://www.mapbox.com/help/"
};
```


3. `npm install`
4. run `node index.js`

