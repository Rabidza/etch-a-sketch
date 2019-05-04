const body = document.body;

// create reset button
const button = document.createElement('button');
button.textContent = 'Reset';
button.addEventListener('click', changeGridSize);

// Add navigation container
const nav = document.createElement('nav');
nav.appendChild(button);
body.appendChild(nav);

// create container
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

// create the grid
function createGrid(sides = 16){
  for (let i = 0; i < sides * sides; i++){
    let grid = document.createElement("div");
    grid.className = "grid";
    grid.display = grid;
    grid.style.backgroundColor = "whitesmoke";
    grid.style.filter = "brightness(150%)"
    grid.addEventListener('mouseover', setColor);
    container.appendChild(grid);
  }
}

// Set the colour of the box
function setColor(){
  if (this.style.backgroundColor == 'whitesmoke'){
    this.style.backgroundColor = randomColour();
  }
  else{
    let brightness = parseInt(this.style.filter.match(/\d+/));
    if (brightness != 0){
      this.style.filter = `brightness(${brightness-15}%)`;
    }
  }
}

// Generate a random color from a defined palette
function randomColour(){
  const palette = ["#EF1013","#82EF10","#10EFEC","#7D10EF"];
  let randomNum = Math.floor(Math.random(1,4) * 4);
  let boxColor = palette[randomNum];
  return boxColor;
}

// Create new grid based on input from the user
function changeGridSize(){
  let size = prompt("How many columns? (Columns are used to present a square)");
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  createGrid(size);
}

createGrid();