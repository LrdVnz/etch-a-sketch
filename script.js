let gridContainer = document.querySelector(".grid-container");
let button = document.querySelector("#sizebtn");
let heading = document.querySelector("#heading");
let body = document.querySelector("body")
let btnPrompt ;

let howManyPixels;

gridContainer.style.cssText ="border: 10px solid #ac310cf0; height:500px; width:800px; margin-left:280px; margin-top:100px;";
button.style.cssText = "left:600px; position:absolute; top:70px;";
heading.style.cssText = "position:absolute; top:-25px; left:423px; font-size:45px;";

body.style.height = "100%";
body.style.width = "100%"; 
body.style.backgroundColor = "#f2f1f1"

function pixelsPerPage(){
screenWidth = 800;
screenHeight = 500;   
screenArea = screenWidth * screenHeight;
pixelArea = btnPrompt ** 2;
howManyPixels = screenArea / pixelArea;
}

function createDivs(){
  while(gridContainer.firstChild){
    gridContainer.removeChild(gridContainer.firstChild)
  }
    for(let i = 0; i < howManyPixels; i++){
      let squareDivs = document.createElement('div');
      squareDivs.classList.add('squareDivs')
      squareDivs.style.cssFloat = "right"
      squareDivs.style.margin = "0px"
      squareDivs.style.width = btnPrompt + "px";
      squareDivs.style.height = btnPrompt + "px";
      gridContainer.appendChild(squareDivs);
    }

let toBlack = 1;

    [...gridContainer.children].forEach(child => {
         child.addEventListener("mouseover", (e) => {
          toBlack -= 0.1 ; 
           let r = Math.floor((Math.random()*(255 + 1)));
           let g = Math.floor((Math.random()*(255 + 1)));
           let b = Math.floor((Math.random()*(255 + 1)));
           child.style.backgroundColor = "rgb(" +(r * toBlack) + "," + (g * toBlack) + "," + (b * toBlack) +")"
           heading.style.color = "rgb(" + (r * 0.4) + "," + (g * 0.4) + "," + (b * 0.4) + ")"
         })
    })
  document.body.appendChild(gridContainer)
}

let pixelSize;


function changeSize(){
  btnPrompt = prompt("Choose the size of the brush", "10");
  pixelSize = parseInt(btnPrompt);
  pixelsPerPage();
  createDivs();
};
