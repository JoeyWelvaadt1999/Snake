this.up = 38;
this.down = 40;
this.left = 37;
this.right = 39;

this.v2 = new Vector2(0,0);

function Input(up, down, left, right) {
	this.up = up;
	this.down = down;
	this.left = left;
	this.right = right;
	this.v2 = new Vector2(0,0);
}

Input.prototype.CheckInput = function() {
	var input = this;
	window.addEventListener('keydown', function(e) {input.OnKeyDown()}, false);
}

Input.prototype.OnKeyDown = function(e) {
	e = e || window.event;
	var v2 = new Vector2(0,0);
	switch(e.keyCode) {
		case this.up:
			this.v2 = v2.up;
			break;
		case this.down:
			this.v2 = v2.down;
			break;
		case this.left:
			this.v2 = v2.left;
			break;
		case this.right:
			this.v2 = v2.right;
			break;
	}	
	
	
	
}