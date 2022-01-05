// Variables initialization
const container = document.querySelector('div.container');
const grid = document.querySelector('div.grid');

generateGrid();

const clearOption = document.querySelector('#clear');

// Function to color a div when mouse enters it
function colorTile(e) {
    let tile = e.target;

    tile.classList.add('colored');
}

// Function to add divs to container
function generateGrid(size = 16) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < size; j++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');

            tile.addEventListener('mouseenter', colorTile);

            row.appendChild(tile);
        }

        grid.appendChild(row);
    }
}

// Function to generate a new grid
function redrawGrid() {
    let size = parseInt(prompt('Please entre a new size for the grid.', '16'));

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

    generateGrid(size > 100 ? 100 : size);
}

// Function to clear grid's content
function clearGrid(e) {
    const tiles = document.querySelectorAll('div.tile');

    tiles.forEach(t => t.classList.remove('colored'));

    redrawGrid();
}

clearOption.addEventListener('click', clearGrid);