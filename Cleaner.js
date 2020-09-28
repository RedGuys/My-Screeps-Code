let positions = require("./positions");

module.exports.work = function(creep) {
    if(creep === undefined) {
        if(require("./config").foundlog) {
            console.log("Cleaner not found");
        }
    } else {
        try {
            function findMineral() {
                const target = positions.getNearest(creep.pos,creep.room.find(FIND_DROPPED_RESOURCES,{
                    filter: {resourceType: RESOURCE_ENERGY}
                }));

                if(target != null) {
                    if(creep.pickup(target) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                } else {
                    let min;
                    for (let creep1 in Game.creeps) {
                        if(Game.creeps[creep1].ticksToLive < 50) {
                            if(min !== undefined) {
                                if (Game.creeps[creep1].ticksToLive < min.ticksToLive) {
                                    min = Game.creeps[creep1];
                                }
                            } else {
                                min = Game.creeps[creep1];
                            }
                        }
                    }
                    if(min !== undefined) {
                        creep.moveTo(min);
                    } else {
                        goHome()
                    }
                }
            }

            function goHome() {
                if (creep.transfer(Game.spawns['Home'], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(Game.spawns['Home']);
                }
            }

            if(creep.carry.energy === creep.carryCapacity) {
                goHome();
            } else {
                findMineral()
            }
        } catch (e) {console.log(e)}
    }
}