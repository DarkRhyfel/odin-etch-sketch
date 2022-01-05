// Variables initialization
const container = document.querySelector('div.container');

// Adding divs to container
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 16; j++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');

        row.appendChild(tile);
    }

    container.appendChild(row);
}