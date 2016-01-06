// place for all the logic controlling the game


window.onload = function() {
	var boxes = document.getElementsByClassName('grid-square');

  // PLACEMENT

	// Each player has array with 5 ships, top point of each. PUSH TO ARRAY
	// coordinates of second section array -1. PUSH TO ARRAY
	// coordinates of third section - 2 PUSH TO ARRAY

	// placement1 = [[ 0, 1, 2, 1, 0],[1, 2, 3, 2, 1],[2, 3, 4, 3, 2]];

	// placement2 = [[ 0, 1, 2, 1, 0],[1, 2, 3, 2, 1],[2, 3, 4, 3, 2]];

  var placement_sample = [00,01,02,11,12,13,32,33,34] 



// SHOTS FIRED
  for (var i = 0; i < boxes.length; i++) {
    var shot = boxes[i];
    shot.onclick = function(){
      var coordX = this.getAttribute("data-x");
      var coordY = this.getAttribute("data-y");
      var coordShot = parseInt(coordX + coordY);

        if( placement_sample.indexOf(coordShot) == -1) {      
          this.classList.add('miss');
          console.log("miss!" + coordShot);
        } else {
          this.classList.add('hit');
          console.log("hit!" + coordShot);
        }
      console.log("X is " + coordX + ", and Y is " + coordY);
    }
  }
// each strike has a coordinate
// iterate over arrays to find matching coordinates


// WINNING
// All coordinates are hit

}
