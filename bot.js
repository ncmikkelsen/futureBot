console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);


var arc1List = ["collapse", "discipline", "grow", "transform"];
var arc2List = ["a few years", "a decade", "a generation", "two generations", "a century", "a millennium"];
var terrainList = ["agriculture", "the brain", "childhood", "citizenship", "class", "climate", "cloning", "communications", "court", "disease", "drones", "the economy", "education", "entertainment", "environment", "equality", "family", "fashion", "flight", "forests", "genetics", "gender", "governance", "health", "hobbies", "home", "identity", "insects", "intellectual property", "journalism", "justice", "learning", "memory", "mining", "the moon", "music", "oceans", "oil", "old age", "pets", "power", "religion", "robots", "sex", "shopping", "space", "sports", "theatre", "travel", "war", "water", "wealth", "women", "work", "zombies", "the zoo"];
var objectList = ["advertisement", "artwork", "beverage", "book", "bottle", "box", "brochure", "building", "candy", "clothing", "corporation", "device", "document", "event", "festival", "flag", "game", "gift", "headline", "implant", "instrument", "jewellery", "kit", "law", "logo", "lotion", "machine", "magazine cover", "map", "mask", "monument", "passport", "pill", "plant", "postcard", "poster", "product", "prosthetic", "public service announcement", "relic", "ritual", "show", "slogan", "snack", "song", "souvenir", "statue", "sticker", "symbol", "t-shirt", "tattoo", "tool", "toy", "vehicle", "video", "weapon"];
var moodList = ["admiration", "alienation", "amusement", "anger", "anxiety", "awkwardness", "calm", "charm", "cheer", "contentment", "curiosity", "decadence", "delight", "dignity", "disgust", "dread", "embarrassment", "excitement", "exhilaration", "fascination", "fervor", "frustration", "gratitude", "happiness", "hilarity", "hope", "longing", "malaise", "melancholy", "melodrama", "nostalgia", "optimism", "outrage", "pathos", "pleasure", "pride", "rationality", "relief", "resentment", "respect", "sadness", "satisfaction", "serenity", "shame", "shock", "sorrow", "surprise", "unease", "warmth", "weirdness", "wellbeing", "wonder", "worry", "zen"];

Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
};

function pickItems(){
	return "Arc: " + arc1List.pick() + " - " + arc2List.pick() + "\nTerrain: " +  terrainList.pick() + "\nObject: " + objectList.pick() + "\nMood: "+  moodList.pick();
};

function tweet(){
	var myTweet = pickItems();	
	console.log(myTweet);
	T.post('statuses/update', { status: myTweet}, function(err, reply){
		if(err){
			console.log('error: ', err);
		} else {
			console.log('reply: ', reply);
		}
	})
};



setInterval(function () {
	try{
		tweet();
	}
	catch(e){
		console.log(e);
	}
}, 1000 * 60 * 60 * 24);

tweet();

