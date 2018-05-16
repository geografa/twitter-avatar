README.md

1. make a directory in the root folder of your project called data
2. create a twitter_config.js file w/ your application's `consumerKey`, `consumerSecret`, `accessToken`, `accessTokenSecret`, `callBackUrl` in the data directory


Get your application key data from your twitter apps dashboard. Then add this to your `twitter_config.js`:
```
module.exports = {
	"twitterConsumerKey": "xxx",
	"twitterConsumerSecret": "xxx",
	"twitterAccessToken": "xxx",
	"twitterAccessTokenSecret": "xxx",
	"callBackUrl": "xxx"
};
```


3. `npm install`
4. run `node index.js`

