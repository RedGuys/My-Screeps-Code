var Harvester = require("./Harvester");
var Aliver = require("./Aliver");
var ControlerKeeper = require("./ControlerKeeper");
var Builder = require("./Builder");
var Defender = require("./Defender");
var Healer = require("./Healer");
var Repaier = require("./Repaier");

module.exports.loop = function () {
	Aliver.check();
	
	Harvester.work(Game.creeps['Harvester1']);
	Harvester.work(Game.creeps['Harvester2']);
	Harvester.work(Game.creeps['Harvester3']);
	ControlerKeeper.work(Game.creeps['ControlerKeeper1']);
	ControlerKeeper.work(Game.creeps['ControlerKeeper2']);
	Builder.work(Game.creeps['Builder1']);
	Builder.work(Game.creeps['Builder2']);
	Defender.work(Game.creeps['Defender1']);
	Healer.work(Game.creeps['Healer1']);
	Repaier.work(Game.creeps['Fixick1']);
	Repaier.work(Game.creeps['Fixick2']);
	console.log("=======");
}