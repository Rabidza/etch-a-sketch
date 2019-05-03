let gridSize = 16;

function createGrid(){
  let grid = document.createElement("div");
  grid.id = "grid";
  
  for (let i = 0; i < gridSize; i++){
    let row = document.createElement("div");
    row.classname = "row";
    row.id = "row" + i;
    document.getElementById("grid-container").append(row);
    
    for (let j = 0; j < gridSize; j++){
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.id = "cell" + j;
      cell.addEventListener("mouseenter", function( event ){
        event.target.style.backgroundColor = "purple";
      })
      row.appendChild(cell);
    }
  }
  document.getElementById("grid-container").append(grid);
}

createGrid(document);