// place for all the logic controlling the game


window.onload = function() {

  // CREATE BOARDS
  var boards = document.getElementsByClassName("gameboard");

  for(i = 0; i < boards.length; i++){
    for(var y = 0; y < 5; y++) {
      for (var x = 0; x < 5; x++) {
        var gridBox = document.createElement("div");
        gridBox.className = "grid-square";
        gridBox.setAttribute("data-x", x);
        gridBox.setAttribute("data-y", y);
        boards[i].appendChild(gridBox);
      }
    }
  }

  // PLACEMENT

  // Each player has array with 5 ships, top point of each. PUSH TO ARRAY
  // coordinates of second section array -1. PUSH TO ARRAY
  // coordinates of third section - 2 PUSH TO ARRAY

  // placement1 = [[ 0, 1, 2, 1, 0],[1, 2, 3, 2, 1],[0, 3, 4, 3, 2]];

  // placement2 = [[ 0, 1, 2, 1, 0],[1, 2, 3, 2, 1],[2, 3, 4, 3, 2]];
  
var coordinates = [[0,0],[0,1],[0,2],[1,1],[1,2],[1,3],[2,1],[3,1],[3,2],[3,4],[3,5],[4,1]];

  var placement_sample = [00,01,02,11,12,13,32,33,34,21,31,41] 



// SHOTS FIRED
	var boxes = document.getElementsByClassName('grid-square');
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
