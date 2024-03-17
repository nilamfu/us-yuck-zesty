const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const indeed = require("tea-indeed-workforce"),
	numeric = require("x-numeric-police"),
	broil = require("x-broil-gadzooks"),
	psst = require("tea-psst-yippee"),
	blah = require("tea-blah-concede"),
	dismiss = require("x-dismiss-across"),
	gosh = require("x-gosh-where"),
	fare = require("x-fare-barring"),
	steel = require("tea-steel-zowie"),
	begonia = require("tea-begonia-instead"),
	fondue = require("x-fondue-indolent"),
	infect = require("x-infect-likewise"),
	worse = require("x-worse-clearly"),
	first = require("x-first-boohoo"),
	whereas = require("tea-whereas-safely"),
	despite = require("x-despite-cruelly"),
	usually = require("x-usually-longingly"),
	which = require("x-which-frequent"),
	playground = require("twt-playground"),
	cheery = require("x-cheery-messenger"),
	wearily = require("tea-wearily-well-lit"),
	beside = require("tea-beside-yowza"),
	rarely = require("x-rarely-opposite"),
	unearth = require("tea-unearth-promptly"),
	anguish = require("x-anguish-notarize"),
	about = require("tea-about-minor"),
	truly = require("tea-truly-smooth"),
	pfft = require("tea-pfft-along"),
	male = require("tea-male-zowie"),
	unlike = require("tea-unlike-often"),
	floor = require("tea-floor-align"),
	prod = require("x-prod-yippee"),
	beneath = require("x-beneath-ill-fated"),
	lambkin = require("tea-lambkin-while"),
	atop = require("x-atop-twister"),
	slobber = require("tea-slobber-cucumber"),
	however = require("tea-however-sleep");

const USERNAME = "alva_schinner82",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
