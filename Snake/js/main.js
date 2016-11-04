var canvas = document.getElementById("Canvas");
var context = canvas.getContext("2d");

var gameOver = new GameOver(canvas);
var score = new Score(context);
score.AddScore(0);

var cell = new Cell(45,15,10);
var childCells = [];
var coll = new Collision(canvas);

var pickUpSpawner = new PickUpSpawner(5000, context, canvas);

var input = new Input(38, 40, 37, 39);
var v2 = new Vector2(0,0);

pickUpSpawner.Init();

input.CheckInput();

for (var i = 0; i < 2; i++) {
	var c = new Cell(cell.x - 15 * (i + 1), cell.y, cell.r);
	childCells.push(c);
}

setInterval(Update, 200);

var prevHead = new Vector2(0,0);

function Update() {
	if(!gameOver.IsDeath) {

		v2 = input.v2;
		cell.Clear(context);
		score.DrawScore();

		if(v2.x > 0 || v2.y > 0 || v2.x < 0 || v2.y < 0) {
			prevHead = new Vector2(cell.x ,cell.y);
		}
	
		cell.Move(v2, coll);
		cell.DrawRect(context, canvas, "red");
		for	(var i = 0; i < childCells.length; i++) {
			if(prevHead.x != 0 || prevHead.y != 0) {
				var prevCell;
				if(i > 0) {
					prevCell = new Vector2(childCells[i-1].prev.x, childCells[i-1].prev.y);
				}	
				childCells[i].prev = new Vector2(childCells[i].x, childCells[i].y);
	
				childCells[i].MoveTo(i == 0 ? prevHead : prevCell);	
				childCells[i].DrawRect(context,canvas, "#0f0");
				
				if(coll.ObjectCollision(cell, childCells[i])) {
					gameOver.Die();
					gameOver.CreateButton();
					gameOver.IsDeath = true;
					childCells.splice(i, childCells.length);
				}
			}
		}
		
		for(var i = 0; i < pickUpSpawner.PickUps.length; i++) {
			pickUpSpawner.PickUps[i].Draw();
			if(coll.ObjectCollision(cell,pickUpSpawner.PickUps[i])) {
				pickUpSpawner.PickUps.splice(i, 1);
				childCells.push(new Cell(cell.x, cell.y, cell.r));
				score.AddScore(10);
			}
		}	
		
		if(coll.WallCollision(cell)) {
			gameOver.Die();
			gameOver.CreateButton();
			gameOver.IsDeath = true;
		}
	}
}