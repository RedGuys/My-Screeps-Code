module.exports.work = function(creep) {
    if(creep === undefined) {
        if(require("./config").foundlog) {
            console.log("Defender not found");
        }
    } else {
        try {
            const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (target) {
                if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
        } catch (e) {
        }
    }
}