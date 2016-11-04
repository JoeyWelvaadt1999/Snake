this.score = 0;
this.context = 0;

function Score (context) {
	this.context = context
	this.score = 0;
}

Score.prototype.AddScore = function(score) {
	this.score += score;
}

Score.prototype.DrawScore = function() {
	this.context.beginPath();
	this.context.fillStyle = "white";
	this.context.font = "15px sans-serif";
	this.context.fillText("Score: " + this.score.toString(), 10, 10);
	this.context.fill();
	this.context.stroke();
}