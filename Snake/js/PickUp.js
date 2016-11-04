this.x = 0;
this.y = 0;
this.r = 0;
this.context = 0;

function PickUp(pos, context) {
	this.x = pos.x;
	this.y = pos.y;
	this.r = 10;
	this.context = context;
}

PickUp.prototype.Draw = function() {
	this.context.beginPath();
	this.context.fillStyle = "#00f";
	this.context.rect(this.x, this.y, this.r, this.r);
	this.context.fill();
	this.context.stroke();
}