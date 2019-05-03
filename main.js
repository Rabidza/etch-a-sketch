// function createGrid(container) {
    // var grid = document.createElement("div");
    // grid.id = "grid";

    // for (i=0; i<16; i+=1) {
        // var row = document.createElement("div");
        // row.className = "row";
        // row.id = "row" + i;
      
        // for (k=0; k<16; k+=1) {
            // var box = document.createElement("div"); 
            // box.className = "box";
            // row.appendChild(box);
        // };
      
       // return grid.appendChild(row);      
    // };
  
    
// };

function createGrid(){
  let grid = document.createElement("div");
  grid.id = "grid"
  
  for (let i = 0; i < 16; i++){
    let row = document.createElement("div");
    row.classname = "row";
    row.id = "row" + i;
    document.getElementById("grid-container").append(row);
    
    for (let j = 0; j < 16; j++){
      let cell = document.createElement("div");
      cell.className = "cell";
      row.appendChild(cell);
    }
  }
  document.getElementById("grid-container").append(grid);
}

createGrid(document);