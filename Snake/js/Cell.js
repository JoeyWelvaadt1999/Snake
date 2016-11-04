this.x = 0;
this.y = 0;
this.r = 0;
this.speedX = 0;
this.speedY = 0;

this.prev = new Vector2(0,0);

function Cell(x, y, r) {
	//init
	this.x = x;
	this.y = y;
	this.r = r;
	this.speedX = 15;
	this.speedY = 15;
}

Cell.prototype.DrawRect = function(context, canvas, color) {
	context.beginPath();
	context.fillStyle = color;
	context.rect(this.x, this.y, this.r, this.r);
	context.fill();
	context.stroke();
}

Cell.prototype.Clear = function(context) {
	context.clearRect(0,0,canvas.width,canvas.height)
}

Cell.prototype.Move = function(v2, coll) {
	this.x += v2.x * this.speedX;
	this.y += v2.y * this.speedY;
}

Cell.prototype.MoveTo = function(moveTo) {
	this.x += moveTo.x - this.x;
	this.y += moveTo.y - this.y;
}