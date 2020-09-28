module.exports.work = function(creep) {
    if(creep === undefined) {
        if(require("./config").foundlog) {
            console.log("Defender not found");
        }
    } else {
        try {
            const target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
                filter: function (object) {
                    return object.hits < object.hitsMax;
                }
            });
            if (target) {
                if (creep.heal(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
        } catch (e) {
        }
    }
}