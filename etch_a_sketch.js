
let rows = 16;
let columns = 16;
const container = document.getElementById('container');
let rows = 16;
let columns = 16;
let squares = document.getElementsByClassName('square');
function createGrid() {
    grid = rows * columns;
    container.style.gridTemplateRows = 'repeat(' + rows + ', 1fr)';
    container.style.gridTemplateColumns = 'repeat(' + columns + ', 1fr)';
    for (let i = 1; i<grid+1; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.className = 'square';
        container.appendChild(squareDiv);
        console.log(i);   
}
for ( let i=0; i<squares.length; i++) {
    squares[i].addEventListener('mouseenter', changeColor);
}
}

createGrid();

function randomColor() {
  return Math.floor(Math.random()*255);
}
function changeColor() {
  this.style.backgroundColor = 'rgb('+ randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
}
let resizeButton = document.getElementById('resize-button');
function promptSize() {
 for (let i = grid; i>0; i--) {
     container.removeChild(squares[0]);
 }
rows = prompt('Type in amount of rows!',);
columns = prompt('Type in aount of columns!',);
createGrid();
}
resizeButton.addEventListener('click', promptSize);