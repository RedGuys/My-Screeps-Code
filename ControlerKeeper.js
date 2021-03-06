module.exports.work = function(creep) {
    if(creep === undefined) {
        if(require("./config").foundlog) {
            console.log("ControlerKeeper not found");
        }
    } else {
        try {
            if (creep.memory.fulled) {
                if (creep.carry.energy == 0) {
                    creep.memory.fulled = false;
                } else {
                    if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller);
                    }
                }
            } else {
                if (creep.carry.energy < creep.carryCapacity) {
                    var sources = creep.room.find(FIND_SOURCES_ACTIVE);
                    if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources[0]);
                    }
                } else {
                    creep.memory.fulled = true;
                }
            }
        } catch (e) {
        }
    }
}