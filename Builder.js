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
				if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources[0]);
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