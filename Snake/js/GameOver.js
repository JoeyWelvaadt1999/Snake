this.canvas = 0;
this.gameCanvas = 0;
this.context = 0;
this.isDeath = false;

function GameOver(gameCanvas) {
	this.canvas = document.getElementById("Die");
	this.gameCanvas = gameCanvas;

}

GameOver.prototype.Die = function() {

	window.addEventListener("click", CheckButton, false);
	this.canvas.style.visibility = "visible";
	this.canvas.style.zindex = "0";

// 	location.reload();
}

GameOver.prototype.CreateButton = function() {
	this.context = this.canvas.getContext("2d");
	this.context.beginPath();
	this.context.fillStyle = "white";
	this.context.rect(this.canvas.width / 2 - 50, this.canvas.height / 2 - 20, 100, 40);
	

	this.context.fill();
	this.context.stroke();
	
	this.context.beginPath();
	this.context.fillStyle = "black";
	this.context.font = "20px sans-serif";
	this.context.fillText("Retry", this.canvas.width / 2 - 25, this.canvas.height / 2 + 5);
	this.context.stroke();

}

function CheckButton() {
	var e = window.event;
	console.log(e.clientY + " " + ((this.canvas.height / 2) + 20));
	if(e.clientX < this.canvas.width / 2 + 50 && e.clientX > this.canvas.width / 2 - 50) {
		if(e.clientY < this.canvas.height / 2 + 20 && e.clientY > this.canvas.height / 2 - 20) {
			console.log("click");
			location.reload();
		}
	}

}