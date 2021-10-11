const container = document.getElementById("container");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    makeGrid(16);
});

function makeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let gridRow = document.createElement("div");
        gridRow.className = "row";
        for (let j = 0; j < gridSize; j++) {
            let gridCell = document.createElement("div");
            gridCell.className = "gridSquare";
            gridCell.innerText = (i * gridSize) + j;
            gridRow.appendChild(gridCell);
        }
        container.appendChild(gridRow);
    }
}