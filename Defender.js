module.exports.work = function(creep) {
	try {
		const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
		if(target) {
			if(creep.attack(target) == ERR_NOT_IN_RANGE) {
				creep.moveTo(target);
			}
		}
	} catch(e) {
		console.log("Defender not found");
	}
}