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
    grid.style.filter = "brightness(100%)"
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
      this.style.filter = `brightness(${brightness-10}%)`;
    }
  }
}

// Generate a random color
function randomColour(){
  let color = Math.floor(0x1000000 * Math.random()).toString(16);
  return '#' + ('000000' + color).slice(-6);
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