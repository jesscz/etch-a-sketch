const container = document.getElementById("container");
const startBtn = document.getElementById("startBtn");


startBtn.addEventListener("click", () => {
    makeGrid(16);
    startBtn.setAttribute("disabled", "");
});

function makeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let gridRow = document.createElement("div");
        gridRow.className = "row";
        for (let j = 0; j < gridSize; j++) {
            let gridCell = document.createElement("div");
            gridCell.className = "gridSquare";
            //gridCell.innerText = (i * gridSize) + j;
            gridCell.addEventListener("mouseover", (event) => {
                event.target.classList.add("gridSquareHovered");
                event.target.classList.remove("gridSquare"); //is this line necessary?
            });
            gridRow.appendChild(gridCell);
        }
        container.appendChild(gridRow);
    }
}

  
