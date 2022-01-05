// Variables initialization
const container = document.querySelector('div.container');
const grid = document.querySelector('div.grid');

// Function to color a div when mouse enters it
function colorTile(e) {
    let tile = e.target;

    tile.classList.add('colored');
}

// Adding divs to container
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 16; j++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');

        tile.addEventListener('mouseenter', colorTile);

        row.appendChild(tile);
    }

    grid.appendChild(row);
}