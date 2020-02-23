module.exports.distance = function(pos1,pos2) {
	return Math.sqrt(((pos2.x - pos1.x) ** 2) + ((pos2.y - pos1.y) ** 2));
}

module.exports.getNearest = function(pos,sources) {
	var nearest;
	var min = 100;
	for(var i = 0; i < sources.length; i++) {
		var dist = this.distance(pos,sources[i].pos);
		if(dist < min) {
			min = dist;
			nearest = sources[i];
		}
	}
	return nearest;
}