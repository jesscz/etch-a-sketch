const container = document.getElementById("container");
const leftContainer = document.getElementById("left");
const rightContainer = document.getElementById("right");

const resetBtn = document.createElement("button");
resetBtn.innerHTML = "Reset"
const rainbowBtn = document.getElementById("rainbow");
const bnwBtn = document.getElementById("black");
const eraserBtn = document.getElementById("eraser");
let type = "default";

rightContainer.appendChild(resetBtn);

start();
setBoxShadow();




function start() {
    makeGrid(16);
    container.style.cssText = 'border: 3px dashed rgb(230, 215, 241)';
}



rainbowBtn.addEventListener("click", () => {type = "rainbow"; setBoxShadow()});
bnwBtn.addEventListener("click", () => {type = "bnw"; setBoxShadow()});
eraserBtn.addEventListener("click", () => {type = "eraser"; setBoxShadow()});



function setBoxShadow() {
    if (type === "rainbow" || type === "default") {
        rainbowBtn.style.boxShadow = "0px 0px 12px 5px rgba(76,62,84,0.4)";
        eraserBtn.style.boxShadow = "none";
        bnwBtn.style.boxShadow = "none";
    }
    else if (type === "eraser") {
        eraserBtn.style.boxShadow = "0px 0px 12px 5px rgba(76,62,84,0.4)";
        rainbowBtn.style.boxShadow = "none";
        bnwBtn.style.boxShadow = "none";
    }
    else if (type === "bnw"){
        bnwBtn.style.boxShadow = "0px 0px 12px 5px rgba(76,62,84,0.4)";
        rainbowBtn.style.boxShadow = "none";
        eraserBtn.style.boxShadow = "none";
    }
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





function blackGradation(hovers) {
    let perc = abs((hovers*10)-100);
    let color = "hsl(0, 0%, "+ (perc) +"%)";
    return color;
}



function makeGrid(gridSize) { 
    for (let i = 0; i < gridSize; i++) {
        let gridRow = document.createElement("div");
        gridRow.className = "row";
        for (let j = 0; j < gridSize; j++) {
            let gridCell = document.createElement("div");
            gridCell.className = "gridSquare";
            let counter = 0;
            gridCell.addEventListener("mouseenter", (event) => {
                if (type === "rainbow" || type === "default") {
                    event.target.style.backgroundColor = randomColor();
                }
                else if (type === "eraser") {
                    event.target.style.backgroundColor = "#ffffff";
                }
                else if (type === "bnw"){ 
                    event.target.style.backgroundColor = blackGradation(counter);
                    counter += 1;
                }
            });
            gridRow.appendChild(gridCell);
        }
        container.appendChild(gridRow);
    }
}


  