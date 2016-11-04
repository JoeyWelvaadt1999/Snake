
this.canvas = null;

function Collision(canvas) {
	
	this.canvas = canvas;
}

Collision.prototype.WallCollision = function(a) {
	if(a.x + a.r / 2 > this.canvas.width || a.x - a.r / 2 < 0 ||
		a.y + a.r / 2 > this.canvas.height || a.y - a.r / 2 < 0) {
		return true;
	}
	
	return false;
}

Collision.prototype.ObjectCollision = function(a, b) {
	if(a.x + a.r / 2 > b.x - b.r / 2 && a.x - a.r / 2 < b.x + b.r / 2) {
		if(a.y + a.r / 2 > b.y - b.r / 2 && a.y - a.r / 2 < b.y + b.r / 2) {
			return true;
		}
	}
	return false;
}