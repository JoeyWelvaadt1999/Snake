this.msec = 0;
this.context = 0;
this.canvas = 0;
this.pus = [];

function PickUpSpawner(msec, context, canvas) {
	this.msec = msec;
	this.context = context;
	this.canvas = canvas;
	this.pus = [];
}

PickUpSpawner.prototype.Init = function() {
	setInterval(Spawn, this.msec);	
}

PickUpSpawner.prototype.PickUps = pus;

function Spawn() {
	var cw = this.canvas.width - 15;
	var ch = this.canvas.height - 15;
	var posX = cw.DivideBy(15)[Math.floor(Math.random() * cw.DivideBy(15).length)];
	var posY = ch.DivideBy(15)[Math.floor(Math.random() * cw.DivideBy(15).length)];
	
	var pos = new Vector2(posX, posY);
	
	var pu = new PickUp(pos, this.context);
	this.pus.push(pu);
}

