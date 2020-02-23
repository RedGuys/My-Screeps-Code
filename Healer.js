module.exports.work = function(creep) {
	try {
		const target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
			filter: function(object) {
				return object.hits < object.hitsMax;
			}
		});
		if(target) {
			if(creep.heal(target) == ERR_NOT_IN_RANGE) {
				creep.moveTo(target);
			}
		}
	} catch(e) {
		console.log("Healer not found");
	}
}