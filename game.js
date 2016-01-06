// place for all the logic controlling the game


window.onload = function() {

	// PLACEMENT
	var boxes = document.getElementsByClassName('grid-square');
	for(var i = 0; i < boxes.length; i++) {
		var box = boxes[i];
		box.onclick = function(){
			var coordX = this.getAttribute("data-x");
			var coordY = this.getAttribute("data-y");
			alert( "X is " + coordX + ", and Y is " + coordY);
		}
	}
	// Each player has array with 5 ships, top point of each. PUSH TO ARRAY
	// coordinates of second section array -1. PUSH TO ARRAY
	// coordinates of third section - 2 PUSH TO ARRAY

	// placement1 = [[ 0, 1, 2, 1, 0],[1, 2, 3, 2, 1],[2, 3, 4, 3, 2]];

	// placement2 = [[ 0, 1, 2, 1, 0],[1, 2, 3, 2, 1],[2, 3, 4, 3, 2]];




// HIT
// each strike has a coordinate
// iterate over arrays to find matching coordinates


// WINNING
// All coordinates are hit

}
