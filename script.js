const container = document.getElementById("container");
const leftContainer = document.getElementById("left");
const rightContainer = document.getElementById("right");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.createElement("button");
resetBtn.innerHTML = "Reset"

startBtn.addEventListener("click", () => {
    makeGrid(16);
    startBtn.setAttribute("disabled", "");
    rightContainer.appendChild(resetBtn);
});

resetBtn.addEventListener("click", () => {
    let userGridSize = prompt("What size should the grid be?");
    container.innerHTML = "";
    if ((userGridSize <= 100) && (userGridSize > 0)) {
        makeGrid(userGridSize);
    }
    else if (userGridSize == "") {
        makeGrid(16);
    }
    else {
        container.textContent = "ERROR: outside the parameters";
    }
});

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function makeGrid(gridSize) { 
    for (let i = 0; i < gridSize; i++) {
        let gridRow = document.createElement("div");
        gridRow.className = "row";
        for (let j = 0; j < gridSize; j++) {
            let gridCell = document.createElement("div");
            gridCell.className = "gridSquare";
            //gridCell.innerText = (i * gridSize) + j;
            gridCell.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = randomColor();
                event.target.setAttribute("disabled", "");
            });
            gridRow.appendChild(gridCell);
        }
        container.appendChild(gridRow);
    }
}

  