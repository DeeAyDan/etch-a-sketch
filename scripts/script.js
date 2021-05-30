const container = document.querySelector('#container');
let gridsPerRow = 16;
let numberOfGrids = 256;
let gridCell;

draw();

function draw(){
    numberOfGrids = gridsPerRow * gridsPerRow;
    document.getElementById("container").style.gridTemplateColumns = `repeat(${gridsPerRow}, 32px)`;
    for(i = 0; i < numberOfGrids; i++){
    gridCell = document.createElement('div');
    gridCell.style.height = '30px';
    gridCell.style.width = '30px';
    gridCell.style.border = 'solid thin black'
    gridCell.setAttribute('id', `${i}`)
    container.appendChild(gridCell);
}}

function deleteGrid(){
    for(i = 0; i < numberOfGrids; i++) {
        document.getElementById(i).remove();
    }
}

container.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = 'red';
    console.log(e.target);
})

const button = document.querySelector('#button');

button.addEventListener('click', function(e){
    gridsPerRow = Number(prompt('Resize the grid (max size is 100):', ''))
    if(gridsPerRow <= 100){
        deleteGrid();
        draw();
    }
    else{
        alert(`${gridsPerRow} is invalid number, or is bigger than 100`);
    }
})