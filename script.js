const container = document.getElementById("container");
const leftContainer = document.getElementById("left");
const rightContainer = document.getElementById("right");

const resetBtn = document.createElement("button");
resetBtn.innerHTML = "Reset"
const rainbowBtn = document.getElementById("rainbow");
const bnwBtn = document.getElementById("black");
let counter = 0;


start();
rightContainer.appendChild(resetBtn);

function start() {
    makeGrid(16);
    container.style.cssText = 'border: 3px dashed rgb(230, 215, 241)';
    //rightContainer.appendChild(resetBtn);
}

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
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// function blackGradation() {
//     let color = getPropertyValue(gridCell)['backgroundColor'];
//     let perc = 100;
//     let color = 'hsl(0, 0%, '+ (perc) +'%';
//     while  (perc >= 0) {
//         perc -= 10;
//     }
//     return color;
// }

function makeGrid(gridSize) { 
    for (let i = 0; i < gridSize; i++) {
        let gridRow = document.createElement("div");
        gridRow.className = "row";

        for (let j = 0; j < gridSize; j++) {
            let gridCell = document.createElement("div");
            gridCell.className = "gridSquare";
            gridCell.addEventListener("mouseover", (event) => {
                //event.target.style.backgroundColor = blackGradation();
                event.target.style.backgroundColor = randomColor();
                //event.target.setAttribute("disabled", "");
            });
            gridRow.appendChild(gridCell);
        }
        container.appendChild(gridRow);
    }
}


  