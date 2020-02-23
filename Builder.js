var positions = require("./positions");

module.exports.work = function(creep) {
	try {
		if(creep.memory.fulled) {
			if(creep.carry.energy == 0) {
				creep.memory.fulled = false;
			} else {
				const target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
				if(target) {
					if(creep.build(target) == ERR_NOT_IN_RANGE) {
						creep.moveTo(target);
					}
				}
			}
		} else {
			if(creep.carry.energy < creep.carryCapacity) {
				var sources = creep.room.find(FIND_SOURCES_ACTIVE);
				var source = positions.getNearest(creep.pos,sources);
				if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
					creep.moveTo(source);
				}
			}
			else {
				creep.memory.fulled = true;
			}
		}
	} catch(e) {
		console.log("Builder not found");
	}
}