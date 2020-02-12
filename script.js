let gridContainer = document.querySelector(".grid-container");

let btnPrompt 

let howManyPixels;

function pixelsPerPage(){
screenWidth = window.outerWidth;
screenHeight = window.outerHeight;  
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
